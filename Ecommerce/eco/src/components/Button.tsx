import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

const styles: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-line bg-white text-ink hover:border-brand hover:text-brand',
  ghost: 'text-ink hover:text-brand',
  light: 'bg-white text-brand hover:bg-slate-100',
};

export function Button({
  children, className = '', variant = 'primary', type = 'button', onClick, disabled,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 disabled:opacity-50 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  to, children, className = '', variant = 'primary',
}: {
  to: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
