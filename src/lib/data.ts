import { Layers, Search, Smartphone, Zap, type LucideIcon } from 'lucide-react';

export const services: {
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Web Design',
    desc: 'Immersive experiences that merge art with engineering.',
    icon: Layers,
  },
  {
    title: 'Development',
    desc: 'Robust, scalable architectures built for the next decade.',
    icon: Zap,
  },
  {
    title: 'SEO & Growth',
    desc: 'Data-driven strategies to dominate the algorithmic landscape.',
    icon: Search,
  },
  {
    title: 'Mobile Apps',
    desc: 'Native performance with fluid, intuitive interfaces.',
    icon: Smartphone,
  },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  url: string;
  description?: string;
  tags?: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'Palace Pizza Bartow',
    category: 'Food & Beverage',
    year: '2024',
    url: 'https://palacepizzabartow.com',
    description:
      'Modern restaurant website with online ordering and location-based delivery tracking.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    accent: '#ea580c',
  },
  {
    title: 'Sanford Cleaning',
    category: 'Service',
    year: '2024',
    url: 'https://sanfordcleaning.com',
    description:
      'Professional cleaning service website with booking and service area management.',
    tags: ['React', 'Vite', 'Calendar API'],
    accent: '#0284c7',
  },
  {
    title: 'Haines City Cleaning',
    category: 'Service',
    year: '2024',
    url: 'https://hainescitycleaning.com',
    accent: '#0891b2',
  },
  {
    title: 'Path To Soul',
    category: 'Wellness',
    year: '2024',
    url: 'https://pathtosoul.com',
    description:
      'Spiritual wellness platform with meditation guides, courses, and community features.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    accent: '#6366f1',
  },
  {
    title: 'Sumer Plus',
    category: 'E-Commerce',
    year: '2025',
    url: 'https://sumerplus.com',
    accent: '#db2777',
  },
  {
    title: 'Precise Accounting',
    category: 'Finance',
    year: '2024',
    url: 'https://proaccountingusa.com',
    accent: '#059669',
  },
  {
    title: 'DOT Semi',
    category: 'Logistics',
    year: '2024',
    url: 'https://dotsemi.com',
    description:
      'DOT compliance and fleet management platform for commercial trucking companies.',
    tags: ['React', 'Vite', 'MongoDB'],
    accent: '#2563eb',
  },
  {
    title: 'Locksmith Davenport',
    category: 'Service',
    year: '2024',
    url: 'https://locksmithdavenport.com',
    description:
      'Local locksmith service website with emergency booking and service area coverage.',
    tags: ['React', 'Vite', 'Maps API'],
    accent: '#d97706',
  },
  {
    title: 'PTI Plus',
    category: 'Logistics',
    year: '2025',
    url: 'https://ptiplus.com',
    accent: '#4f46e5',
  },
  {
    title: 'Trucking Jobs',
    category: 'Recruitment',
    year: '2024',
    url: 'https://trucking-jobs.com',
    description:
      'Job board connecting truck drivers with employers, featuring advanced filtering.',
    tags: ['React', 'Vite', 'Node.js'],
    accent: '#16a34a',
  },
  {
    title: 'My Own Booking',
    category: 'SaaS',
    year: '2025',
    url: 'https://book.qaxp.com',
    accent: '#7c3aed',
  },
  {
    title: 'Free Malyarevsky',
    category: 'Non-Profit',
    year: '2024',
    url: 'https://freemalyarevsky.com/en',
    accent: '#dc2626',
  },
  {
    title: 'Lynx&Parts',
    category: 'E-Commerce',
    year: '2024',
    url: 'https://lynxandparts.com',
    description:
      'E-commerce platform for automotive parts with advanced search and inventory management.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    accent: '#9333ea',
  },
];

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
] as const;
