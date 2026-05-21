// Re-export content types
export type { PricingPlan } from "@/content/pricing";
export type { FaqItem } from "@/content/faq";
export type { Testimonial } from "@/content/testimonials";
export type { Step } from "@/content/how-it-works";
export type { Stat } from "@/content/stats";

// Common UI types
export interface NavItem {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface VideoSubmissionData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  propertyAddress: string;
  videoUrl?: string;
  notes?: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
