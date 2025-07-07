"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-card shadow-sm rounded-lg overflow-hidden border mb-4", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full flex-1 items-center justify-between p-4 font-medium text-foreground transition-colors hover:bg-accent/50",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
          <Plus className="h-5 w-5 shrink-0 text-primary/80" />
          <span className="text-left text-base">{children}</span>
      </div>
      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Plus className="h-4 w-4 transform transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0" />
        <Minus className="absolute h-4 w-4 transform transition-transform duration-300 group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100 scale-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0 pb-4 px-4 pl-14", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
