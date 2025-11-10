/**
 * Button component with loading states and variants
 */
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]';

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}

