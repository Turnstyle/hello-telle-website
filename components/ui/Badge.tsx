/**
 * Badge component with variant styles
 */
import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'secondary';
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    success: 'bg-cornflower-100 text-cornflower-800',
    warning: 'bg-butter-200 text-butter-900',
    error: 'bg-red-100 text-red-800',
    info: 'bg-cornflower-50 text-cornflower-700',
    secondary: 'bg-slate-200 text-slate-800',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

