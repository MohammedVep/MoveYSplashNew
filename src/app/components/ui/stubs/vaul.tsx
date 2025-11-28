"use client";

import * as React from "react";

interface DrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

const Root: React.FC<React.PropsWithChildren<{ open?: boolean; onOpenChange?: (open: boolean) => void }>> = ({
  open,
  onOpenChange,
  children,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(open ?? false);

  const setOpen = React.useCallback(
    (value: boolean) => {
      setInternalOpen(value);
      onOpenChange?.(value);
    },
    [onOpenChange],
  );

  const value = React.useMemo(() => ({ open: internalOpen, setOpen }), [internalOpen, setOpen]);

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};

const Trigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const context = React.useContext(DrawerContext);
    return (
      <button
        ref={ref}
        onClick={(event) => {
          context?.setOpen(true);
          onClick?.(event);
        }}
        {...props}
      />
    );
  },
);
Trigger.displayName = "DrawerTrigger";

const Close = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const context = React.useContext(DrawerContext);
    return (
      <button
        ref={ref}
        onClick={(event) => {
          context?.setOpen(false);
          onClick?.(event);
        }}
        {...props}
      />
    );
  },
);
Close.displayName = "DrawerClose";

const Portal: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

const Overlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} {...props} />
));
Overlay.displayName = "DrawerOverlay";

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} {...props} />
));
Content.displayName = "DrawerContent";

const Title = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => (
  <h2 ref={ref} {...props} />
));
Title.displayName = "DrawerTitle";

const Description = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => (
  <p ref={ref} {...props} />
));
Description.displayName = "DrawerDescription";

export const Drawer = {
  Root,
  Trigger,
  Close,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
};
