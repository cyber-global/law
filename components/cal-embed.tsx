'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface CalEmbedProps {
  calLink?: string;
  variant?: 'inline' | 'modal' | 'button';
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    topic?: string;
    notes?: string;
  };
}

/**
 * Cal.com embed component with prefill support
 * 
 * Variants:
 * - inline: Embedded directly in the page
 * - modal: Opens in a dialog/modal
 * - button: Shows a button that opens Cal.com in a new window
 * 
 * Prefill:
 * - name: Guest name
 * - email: Guest email
 * - topic: Event topic (passed to notes)
 * - notes: Additional notes
 */
export function CalEmbed({ 
  calLink = process.env.NEXT_PUBLIC_CALCOM_LINK || 'cyberglobal-law/30min', 
  variant = 'inline',
  className,
  prefill,
}: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal('ui', {
          styles: { branding: { brandColor: '#4F46E5' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (error) {
        console.log('Cal.com API initialization:', error);
      }
    })();
  }, []);

  if (variant === 'button') {
    // Build URL with prefill params
    let url = `https://cal.com/${calLink}`;
    if (prefill) {
      const params = new URLSearchParams();
      if (prefill.name) params.set('name', prefill.name);
      if (prefill.email) params.set('email', prefill.email);
      
      const notes: string[] = [];
      if (prefill.topic) notes.push(`Topic: ${prefill.topic}`);
      if (prefill.notes) notes.push(prefill.notes);
      if (notes.length > 0) params.set('notes', notes.join('\n'));
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
    }

    return (
      <Button
        asChild
        size="lg"
        variant="default"
        className={className}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book a Consultation
        </a>
      </Button>
    );
  }

  if (variant === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" variant="default" className={className}>
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <Cal
            calLink={calLink}
            style={{ width: '100%', height: '100%', overflow: 'auto' }}
            config={{ layout: 'month_view' }}
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Build Cal.com link with query parameters for prefill
  let finalCalLink = calLink;
  
  if (prefill && Object.keys(prefill).some(key => prefill[key as keyof typeof prefill])) {
    const params = new URLSearchParams();
    
    if (prefill.name) params.set('name', prefill.name);
    if (prefill.email) params.set('email', prefill.email);
    
    // Combine topic and notes for the notes field
    const notesArray: string[] = [];
    if (prefill.topic) notesArray.push(`Topic: ${prefill.topic}`);
    if (prefill.notes) notesArray.push(prefill.notes);
    if (notesArray.length > 0) {
      params.set('notes', notesArray.join('\n'));
    }
    
    if (params.toString()) {
      finalCalLink = `${calLink}?${params.toString()}`;
    }
  }

  // Inline variant
  return (
    <div className={className}>
      <Cal
        calLink={finalCalLink}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}

