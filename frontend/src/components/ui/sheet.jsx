"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"  // 🔹 Make sure you have a utils.ts/js with a `cn` function

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close

const SheetContent = React.forwardRef(
  ({ className, side = "right", children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col bg-black p-6 shadow-lg transition ease-in-out",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 max-w-sm",
          side === "top" && "inset-x-0 top-0 h-1/2 max-h-screen",
          side === "bottom" && "inset-x-0 bottom-0 h-1/2 max-h-screen",
          className
        )}
        {...props}
      >
        <button
          onClick={() => props.onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
        >
          <X className="h-5 w-5 text-white" />
        </button>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent, SheetClose }
