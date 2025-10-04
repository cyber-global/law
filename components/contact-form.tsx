'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { contactFormSchema, type ContactFormData } from '@/lib/validators';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  defaultTopic?: string;
  className?: string;
}

export function ContactForm({ defaultTopic = 'other', className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          topic: defaultTopic, // Use the default topic passed from parent
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit form');
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <Alert className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            Thank you for your message! We'll respond within 1 business day.
          </AlertDescription>
        </Alert>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      {/* Name (Required) */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-400">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          placeholder="Your full name"
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-cyan-400',
            errors.name && 'border-red-400 focus:border-red-400'
          )}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email (Required) */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@company.com"
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-cyan-400',
            errors.email && 'border-red-400 focus:border-red-400'
          )}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Company (Required) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company <span className="text-red-400">*</span>
        </label>
        <Input
          id="company"
          type="text"
          {...register('company')}
          placeholder="Company or organization name"
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-cyan-400',
            errors.company && 'border-red-400 focus:border-red-400'
          )}
          disabled={isSubmitting}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
        )}
      </div>

      {/* Message (Required) */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Please describe your inquiry or situation. Do not include confidential information until we confirm representation."
          rows={6}
          className={cn(
            'bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-cyan-400',
            errors.message && 'border-red-400 focus:border-red-400'
          )}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button with Hover Effects */}
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-cyan-400 hover:bg-cyan-300 hover:scale-[1.02] text-slate-900 font-semibold shadow-lg border border-cyan-300 transition-all duration-200" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>

      {/* Single Confidentiality Notice */}
      <Alert className="bg-white/5 border-white/10">
        <AlertDescription className="text-sm text-slate-300">
          <strong>Confidentiality Notice:</strong> Submitting this form does not create an
          attorney-client relationship. Do not include confidential information until we confirm
          representation via an engagement letter.
        </AlertDescription>
      </Alert>

      {/* Data Protection Notice */}
      <p className="text-xs text-slate-400 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/legal/privacy" className="underline hover:text-slate-300 transition-colors">
          Privacy Policy
        </a>
        . We process your data in accordance with GDPR.
      </p>
    </form>
  );
}