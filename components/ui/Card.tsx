/**
 * Card component with header, title, and content sections
 */
import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: ReactNode;
}

export function Card({ hover = false, children, className = '', ...props }: CardProps) {
  const baseClass = hover ? 'card-hover' : 'card';
  return (
    <div className={`${baseClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-bold text-slate-900 ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

