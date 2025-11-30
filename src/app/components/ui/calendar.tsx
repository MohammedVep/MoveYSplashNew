"use client";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import * as React from "react";

import { cn } from "./utils";

export type CalendarProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Calendar({ className, ...props }: CalendarProps) {
  return (
    <input
      type="date"
      className={cn(
        "w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/80 placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30",
        className,
      )}
      {...props}
    />
  );
}
