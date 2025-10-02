// src/components/ui/scroll-area.jsx
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

export const ScrollArea = React.forwardRef(({ children, className, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={`overflow-hidden ${className}`} {...props}>
    <ScrollAreaPrimitive.Viewport className="w-full h-full rounded">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar orientation="vertical" className="flex select-none touch-none p-0.5">
      <ScrollAreaPrimitive.Thumb className="flex-1 rounded-full bg-gray-300" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
