'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CalEmbed } from './cal-embed';

interface CalModalProps {
  triggerText?: string;
  triggerVariant?: 'default' | 'outline' | 'ghost';
  triggerSize?: 'default' | 'sm' | 'lg';
  triggerClassName?: string;
  prefill?: {
    name?: string;
    email?: string;
    topic?: string;
    notes?: string;
  };
  title?: string;
}

/**
 * Cal.com modal component for triggering booking from anywhere
 * Can prefill name, email, and pass topic into event notes
 */
export function CalModal({
  triggerText = 'Book a Consultation',
  triggerVariant = 'default',
  triggerSize = 'lg',
  triggerClassName,
  prefill,
  title = 'Schedule a Consultation',
}: CalModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={triggerSize} variant={triggerVariant} className={triggerClassName}>
          <Calendar className="mr-2 h-5 w-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="h-[600px] p-6">
          <CalEmbed 
            variant="inline"
            prefill={prefill}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

