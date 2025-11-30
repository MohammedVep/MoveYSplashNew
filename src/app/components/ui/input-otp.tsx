"use client";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import * as React from "react";
import { MinusIcon } from "lucide-react";

import { cn } from "./utils";

type InputOTPProps = React.HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
};

function InputOTP({ className, containerClassName, children, ...props }: InputOTPProps) {
  return (
    <div
      data-slot="input-otp"
      className={cn("flex items-center gap-2", containerClassName)}
      {...props}
    >
      <div className={cn("flex items-center gap-1", className)}>{children}</div>
    </div>
  );
}

function InputOTPGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

function InputOTPSlot({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-otp-slot"
      className={cn(
        "border-input bg-input-background flex h-9 w-9 items-center justify-center rounded-md border text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function InputOTPSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
