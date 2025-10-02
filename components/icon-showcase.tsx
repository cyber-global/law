/**
 * Icon showcase component demonstrating lucide-react icons
 * Per BRIEF: Shield, Scale, Globe, Clock, FileSignature
 * 1.5px stroke, professional presentation
 */

import { Shield, Scale, Globe, Clock, FileSignature, Phone, Search, Users, FileCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconShowcaseProps {
  icons?: ('shield' | 'scale' | 'globe' | 'clock' | 'file-signature' | 'phone' | 'search' | 'users' | 'file-check' | 'award')[];
  className?: string;
  iconSize?: number;
}

const iconMap = {
  'shield': Shield,
  'scale': Scale,
  'globe': Globe,
  'clock': Clock,
  'file-signature': FileSignature,
  'phone': Phone,
  'search': Search,
  'users': Users,
  'file-check': FileCheck,
  'award': Award,
};

/**
 * Display a set of lucide-react icons with proper styling
 * Stroke: 1.5px (lucide-react default)
 */
export function IconShowcase({ 
  icons = ['shield', 'scale', 'globe', 'clock', 'file-signature'],
  className,
  iconSize = 24,
}: IconShowcaseProps) {
  return (
    <div className={cn('flex gap-4 items-center', className)}>
      {icons.map((iconName) => {
        const Icon = iconMap[iconName];
        return (
          <div
            key={iconName}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Individual icon component with consistent styling
 */
interface IconBadgeProps {
  icon: keyof typeof iconMap;
  label?: string;
  className?: string;
}

export function IconBadge({ icon, label, className }: IconBadgeProps) {
  const Icon = iconMap[icon];
  
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      {label && (
        <span className="text-sm font-medium">{label}</span>
      )}
    </div>
  );
}

/**
 * Large icon display for features/services
 */
interface FeatureIconProps {
  icon: keyof typeof iconMap;
  variant?: 'primary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FeatureIcon({ 
  icon, 
  variant = 'primary',
  size = 'md',
  className 
}: FeatureIconProps) {
  const Icon = iconMap[icon];
  
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  
  const iconSizes = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };
  
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    muted: 'bg-muted text-muted-foreground',
  };
  
  return (
    <div className={cn(
      'flex items-center justify-center rounded-lg transition-colors',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <Icon className={iconSizes[size]} strokeWidth={1.5} />
    </div>
  );
}

