"use client";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "./utils";
import { Button } from "./button";

type CarouselContextValue = {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  orientation: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

const useCarouselContext = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Carousel({
  className,
  children,
  orientation = "horizontal",
  ...props
}: CarouselProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const updateScrollIndicators = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }
    if (orientation === "horizontal") {
      setCanScrollPrev(container.scrollLeft > 0);
      setCanScrollNext(
        container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
      );
    } else {
      setCanScrollPrev(container.scrollTop > 0);
      setCanScrollNext(
        container.scrollTop + container.clientHeight < container.scrollHeight - 1,
      );
    }
  }, [orientation]);

  const scrollBy = React.useCallback(
    (delta: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      if (orientation === "horizontal") {
        container.scrollBy({ left: delta, behavior: "smooth" });
      } else {
        container.scrollBy({ top: delta, behavior: "smooth" });
      }
    },
    [orientation],
  );

  const scrollPrev = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = orientation === "horizontal" ? container.clientWidth : container.clientHeight;
    scrollBy(-amount);
  }, [orientation, scrollBy]);

  const scrollNext = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = orientation === "horizontal" ? container.clientWidth : container.clientHeight;
    scrollBy(amount);
  }, [orientation, scrollBy]);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateScrollIndicators();
    const handleScroll = () => updateScrollIndicators();
    container.addEventListener("scroll", handleScroll);
    const observer = new ResizeObserver(() => updateScrollIndicators());
    observer.observe(container);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [updateScrollIndicators]);

  const contextValue = React.useMemo<CarouselContextValue>(
    () => ({
      scrollContainerRef,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { scrollContainerRef, orientation } = useCarouselContext();
  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "overflow-x-auto overflow-y-hidden", // enable horizontal scrolling by default
        orientation === "vertical" && "overflow-y-auto overflow-x-hidden",
        "scroll-smooth",
      )}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "gap-4" : "flex-col gap-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarouselContext();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "" : "w-full",
        className,
      )}
      {...props}
    />
  );
}

export function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarouselContext();
  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

export function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarouselContext();
  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export type CarouselApi = {
  scrollPrev: () => void;
  scrollNext: () => void;
};
