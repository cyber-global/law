import { z } from 'zod';

/**
 * Simplified contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z
    .string()
    .min(2, 'Company must be at least 2 characters')
    .max(100, 'Company must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  turnstileToken: z.string().optional(), // Cloudflare Turnstile token
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to receive emails' }),
  }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Partner inquiry schema
 */
export const partnerInquirySchema = z.object({
  organizationName: z
    .string()
    .min(2, 'Organization name must be at least 2 characters')
    .max(200, 'Organization name must be less than 200 characters'),
  contactName: z
    .string()
    .min(2, 'Contact name must be at least 2 characters')
    .max(100, 'Contact name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .max(50, 'Phone number must be less than 50 characters')
    .optional(),
  partnerType: z.enum(['mssp', 'forensics', 'insurance', 'other']),
  regions: z
    .string()
    .min(2, 'Please specify regions of operation')
    .max(500, 'Regions must be less than 500 characters'),
  capabilities: z
    .string()
    .min(10, 'Please describe your capabilities')
    .max(2000, 'Capabilities must be less than 2000 characters'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  message: z
    .string()
    .max(3000, 'Message must be less than 3000 characters')
    .optional(),
});

export type PartnerInquiryData = z.infer<typeof partnerInquirySchema>;

