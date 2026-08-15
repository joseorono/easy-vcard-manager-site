"use client";

import { useEffect, useRef, type RefObject } from "react";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { GithubButton } from "@/components/github-button";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL, HERO_HIGHLIGHTS } from "@/constants/site";
import { cn } from "@/lib/utils";

function useInteractiveGrid(
  sectionRef: RefObject<HTMLElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (
      !section ||
      !canvas ||
      !context ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const squareSize = 80;
    type GridCell = { x: number; y: number; alpha: number; lastTouched: number };
    const cells = new Map<string, GridCell>();
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrame = performance.now();
    let previousColumn = -1;
    let previousRow = -1;
    let isRunning = false;
    let primaryColor = "#3b82f6";

    const initGrid = () => {
      const bounds = section.getBoundingClientRect();
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      // Re-read on every init so a theme toggle picks up the new accent.
      primaryColor =
        getComputedStyle(section).getPropertyValue("--primary").trim() ||
        primaryColor;

      width = bounds.width;
      height = bounds.height;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      cells.clear();
      previousColumn = -1;
      previousRow = -1;

      for (let column = 0; column < Math.ceil(width / squareSize); column += 1) {
        for (let row = 0; row < Math.ceil(height / squareSize); row += 1) {
          cells.set(`${column}:${row}`, {
            x: column * squareSize,
            y: row * squareSize,
            alpha: 0,
            lastTouched: 0,
          });
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      const mouseX = event.clientX - bounds.left;
      const mouseY = event.clientY - bounds.top;

      if (mouseX < 0 || mouseY < 0 || mouseX >= width || mouseY >= height) {
        previousColumn = -1;
        previousRow = -1;
        return;
      }

      const column = Math.floor(mouseX / squareSize);
      const row = Math.floor(mouseY / squareSize);
      const now = performance.now();

      if (previousColumn < 0 || previousRow < 0) {
        previousColumn = column;
        previousRow = row;
      }
      const steps = Math.max(
        Math.abs(column - previousColumn),
        Math.abs(row - previousRow),
        1
      );

      for (let step = 0; step <= steps; step += 1) {
        const currentColumn = Math.round(
          previousColumn + ((column - previousColumn) * step) / steps
        );
        const currentRow = Math.round(
          previousRow + ((row - previousRow) * step) / steps
        );
        const cell = cells.get(`${currentColumn}:${currentRow}`);

        if (cell) {
          cell.alpha = 1;
          cell.lastTouched = now;
        }
      }

      previousColumn = column;
      previousRow = row;
    };

    const drawGrid = (now: number) => {
      const elapsed = Math.min(now - lastFrame, 50);
      lastFrame = now;
      context.clearRect(0, 0, width, height);
      context.lineWidth = 0.7;

      for (const cell of cells.values()) {
        if (cell.alpha > 0 && now - cell.lastTouched > 500) {
          cell.alpha = Math.max(0, cell.alpha - elapsed * 0.0015);
        }

        if (cell.alpha === 0) {
          continue;
        }

        context.globalAlpha = cell.alpha * 0.28;
        context.strokeStyle = primaryColor;
        context.strokeRect(
          cell.x + 0.5,
          cell.y + 0.5,
          squareSize - 1,
          squareSize - 1
        );
      }

      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(drawGrid);
    };

    const start = () => {
      if (isRunning) {
        return;
      }
      isRunning = true;
      lastFrame = performance.now();
      window.addEventListener("mousemove", handleMouseMove);
      animationFrame = requestAnimationFrame(drawGrid);
    };

    const stop = () => {
      if (!isRunning) {
        return;
      }
      isRunning = false;
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
      context.clearRect(0, 0, width, height);

      for (const cell of cells.values()) {
        cell.alpha = 0;
      }
      previousColumn = -1;
      previousRow = -1;
    };

    const resizeObserver = new ResizeObserver(initGrid);
    // The hero is the only place this grid is visible, so the frame loop and the
    // pointer listener are parked whenever it scrolls out of view.
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop())
    );

    initGrid();
    resizeObserver.observe(section);
    visibilityObserver.observe(section);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [canvasRef, sectionRef]);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useInteractiveGrid(sectionRef, canvasRef);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_0%,color-mix(in_oklch,var(--primary)_13%,transparent),transparent_38%)]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 size-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-128 hero-glow"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-14 pb-0 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <ShieldCheck className="size-3.5 text-primary" />
              Free, open source, and 100% local
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A real editor for the{" "}
              <span className="text-primary">.vcf files</span> your phone exports
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Import, edit, search and export vCard files right in your browser.
              No account, no upload, no server involved.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "cta-primary h-11 w-full px-6 text-base sm:w-auto"
                )}
              >
                Open the editor
                <ArrowRight className="size-4" />
              </a>
              <GithubButton />
            </div>
          </div>
        </div>

        <div className="mt-14 lg:ml-auto lg:w-[92%]">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/screenshots/editor-desktop.png"
              alt="The Easy vCard Manager editor: a structured contact form beside a live business-card preview"
              width={1024}
              height={544}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 border-t border-border">
        <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {HERO_HIGHLIGHTS.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 py-4 text-sm text-muted-foreground lg:border-l lg:border-border lg:py-5 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <Check className="size-4 shrink-0 text-primary" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
