"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type CommandComponent = React.ForwardRefExoticComponent<
  DivProps & React.RefAttributes<HTMLDivElement>
> & {
  Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;
  List: React.ForwardRefExoticComponent<
    DivProps & React.RefAttributes<HTMLDivElement>
  >;
  Empty: React.ForwardRefExoticComponent<
    DivProps & React.RefAttributes<HTMLDivElement>
  >;
  Group: React.ForwardRefExoticComponent<
    DivProps & React.RefAttributes<HTMLDivElement>
  >;
  Separator: React.ForwardRefExoticComponent<
    DivProps & React.RefAttributes<HTMLDivElement>
  >;
  Item: React.ForwardRefExoticComponent<
    DivProps & React.RefAttributes<HTMLDivElement>
  >;
};

const BaseCommand = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
) as CommandComponent;
BaseCommand.displayName = "Command";

BaseCommand.Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={className} {...props} />
  ),
);
BaseCommand.Input.displayName = "CommandInput";

const createBlock = (displayName: string) => {
  const Component = React.forwardRef<HTMLDivElement, DivProps>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={className} {...props} />
    ),
  );
  Component.displayName = displayName;
  return Component;
};

BaseCommand.List = createBlock("CommandList");
BaseCommand.Empty = createBlock("CommandEmpty");
BaseCommand.Group = createBlock("CommandGroup");
BaseCommand.Separator = createBlock("CommandSeparator");
BaseCommand.Item = createBlock("CommandItem");

export { BaseCommand as Command };
