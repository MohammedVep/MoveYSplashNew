"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
