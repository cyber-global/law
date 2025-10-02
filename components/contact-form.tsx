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
  defaultTopic?: ContactFormData['topic'];
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
    defaultValues: {
      topic: defaultTopic,
    },
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
        body: JSON.stringify(data),
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
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <Alert className="bg-success/10 text-success border-success/20">
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
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          placeholder="Your full name"
          className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email (Required) */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@company.com"
          className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Company & Role (Side by side on desktop) */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <Input
            id="company"
            type="text"
            {...register('company')}
            placeholder="Company name"
            disabled={isSubmitting}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-2">
            Role
          </label>
          <Input
            id="role"
            type="text"
            {...register('role')}
            placeholder="e.g., CISO, General Counsel"
            disabled={isSubmitting}
          />
          {errors.role && (
            <p className="mt-1 text-sm text-destructive">{errors.role.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Jurisdiction */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+40 123 456 789"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="jurisdiction" className="block text-sm font-medium mb-2">
            Jurisdiction
          </label>
          <Input
            id="jurisdiction"
            type="text"
            {...register('jurisdiction')}
            placeholder="e.g., Romania, EU"
            disabled={isSubmitting}
          />
          {errors.jurisdiction && (
            <p className="mt-1 text-sm text-destructive">{errors.jurisdiction.message}</p>
          )}
        </div>
      </div>

      {/* Topic (Required) */}
      <div>
        <label htmlFor="topic" className="block text-sm font-medium mb-2">
          Topic <span className="text-destructive">*</span>
        </label>
        <select
          id="topic"
          {...register('topic')}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            errors.topic && 'border-destructive focus-visible:ring-destructive'
          )}
          disabled={isSubmitting}
        >
          <option value="incident">🚨 Incident Response (24/7)</option>
          <option value="compliance">✓ Regulatory Compliance</option>
          <option value="contracts">📄 Contracts & Vendor Risk</option>
          <option value="forensics">🔍 Digital Forensics</option>
          <option value="disputes">⚖️ Disputes & Enforcement</option>
          <option value="readiness">🛡️ Readiness Assessment</option>
          <option value="partnership">🤝 Partnership Inquiry</option>
          <option value="other">💬 Other</option>
        </select>
        {errors.topic && (
          <p className="mt-1 text-sm text-destructive">{errors.topic.message}</p>
        )}
      </div>

      {/* Message (Required) */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Please describe your inquiry or situation. Do not include confidential information until we confirm representation."
          rows={6}
          className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Confidentiality Notice */}
      <Alert>
        <AlertDescription className="text-sm">
          <strong>Confidentiality Notice:</strong> Submitting this form does not create an
          attorney-client relationship. Do not include confidential information until we confirm
          representation. For urgent incidents, call our{' '}
          <a href="tel:+40745304772" className="font-semibold underline">
            24/7 hotline
          </a>
          .
        </AlertDescription>
      </Alert>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>

      {/* Data Protection Notice */}
      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{' '}
        <a href="/legal/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        . We process your data in accordance with GDPR.
      </p>
    </form>
  );
}

