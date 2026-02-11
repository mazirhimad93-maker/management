"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Script from "next/script";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const containerId = "inline-widget-meet-with-julian-mazirhx";

  // Trigger the widget initialization when the modal opens
  React.useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      // Initialize the Koalendar global function if not present
      (window as any).Koalendar = (window as any).Koalendar || function(...args: any[]) {
        ((window as any).Koalendar.props = (window as any).Koalendar.props || []).push(args);
      };

      // Small delay to ensure the DOM element is rendered and the script is ready
      const timer = setTimeout(() => {
        try {
          if (typeof (window as any).Koalendar === 'function') {
            (window as any).Koalendar('inline', {
              "url": "https://koalendar.com/e/meet-with-julian-mazirhx",
              "selector": `#${containerId}`
            });
          }
        } catch (e) {
          console.warn('Koalendar widget failed to initialize inline.', e);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <Script 
        src="https://koalendar.com/assets/widget.js" 
        strategy="afterInteractive"
      />
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-4xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden h-[85vh] md:h-[800px]">
          <div className="p-6 h-full flex flex-col">
            <DialogHeader className="mb-4 shrink-0">
              <DialogTitle className="text-xl font-headline flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Book Your Business Valuation
              </DialogTitle>
              <p className="text-sm text-zinc-500">
                Select a time to discuss scaling your brand into a high-cash-flow business.
              </p>
            </DialogHeader>
            
            <div className="flex-1 min-h-0 bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
              <div 
                id={containerId} 
                className="w-full h-full"
                style={{ minHeight: '500px' }}
              />
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              <span>Secure Booking</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>Profit Focused</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>No Pitch Guarantee</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
