"use client";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import * as React from "react";

import { cn } from "./utils";

export type ChartConfig = Record<string, { label?: React.ReactNode; icon?: React.ComponentType }>; 

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
}

export function ChartContainer({ className, children, ...props }: ChartContainerProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/15 bg-white/5 p-4 text-white/80 shadow-inner",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChartStyle() {
  return null;
}

export type ChartTooltipProps = React.HTMLAttributes<HTMLDivElement>;

export function ChartTooltipContent({ className, children, ...props }: ChartTooltipProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-white/20 bg-black/60 px-3 py-2 text-xs text-white/90 shadow-lg backdrop-blur",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type ChartLegendContentProps = React.HTMLAttributes<HTMLDivElement>;

export function ChartLegendContent({ className, children, ...props }: ChartLegendContentProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-3 text-xs text-white/70", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export type ChartLegendProps = React.HTMLAttributes<HTMLDivElement>;

export function ChartLegend({ className, children, ...props }: ChartLegendProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export type ChartTooltip = React.FC<React.PropsWithChildren<unknown>>;

export const ChartTooltip: ChartTooltip = ({ children }) => <>{children}</>;
