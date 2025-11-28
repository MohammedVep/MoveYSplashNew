"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";

import { cn } from "./utils";

type Direction = "horizontal" | "vertical";

type ResizableContextValue = {
  direction: Direction;
};

const ResizableContext = React.createContext<ResizableContextValue>({
  direction: "horizontal",
});

export interface ResizablePanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
}

export function ResizablePanelGroup({
  className,
  children,
  direction = "horizontal",
  ...props
}: ResizablePanelGroupProps) {
  return (
    <ResizableContext.Provider value={{ direction }}>
      <div
        data-slot="resizable-panel-group"
        className={cn(
          "flex h-full w-full",
          direction === "vertical" ? "flex-col" : "flex-row",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </ResizableContext.Provider>
  );
}

export interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
}

export function ResizablePanel({ className, children, ...props }: ResizablePanelProps) {
  return (
    <div
      data-slot="resizable-panel"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean;
}

export function ResizableHandle({ className, withHandle, ...props }: ResizableHandleProps) {
  const { direction } = React.useContext(ResizableContext);
  const isVertical = direction === "vertical";

  return (
    <div
      data-slot="resizable-handle"
      role="separator"
      aria-orientation={isVertical ? "horizontal" : "vertical"}
      className={cn(
        "bg-border/80 flex items-center justify-center",
        isVertical ? "h-2 w-full" : "w-2 h-full",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <span className="inline-flex items-center justify-center rounded-sm border border-border/60 bg-background px-1 py-0.5 text-muted-foreground">
          <GripVerticalIcon className="size-3" />
        </span>
      )}
    </div>
  );
}
