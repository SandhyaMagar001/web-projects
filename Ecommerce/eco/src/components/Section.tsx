import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow, title, link, to,
}: {
  eyebrow?: string;
  title: string;
  link?: string;
  to?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-dark">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand md:text-4xl">{title}</h2>
      </div>
      {link && to && (
        <Link to={to} className="text-sm font-medium text-muted underline-offset-4 transition hover:text-brand hover:underline">
          {link}
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  eyebrow, title, text, extra,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  extra?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-dark">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand md:text-6xl">{title}</h1>
        {text && <p className="mt-4 text-muted">{text}</p>}
      </div>
      {extra}
    </div>
  );
}

export function EmptyState({
  icon, title, text, to, action,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  to?: string;
  action?: string;
}) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 text-accent">{icon}</div>
      <h2 className="text-2xl font-semibold text-brand">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-muted">{text}</p>
      {to && action && (
        <Link to={to} className="mt-6 inline-flex bg-brand px-5 py-3 text-xs font-semibold text-white transition hover:bg-brand-dark">
          {action}
        </Link>
      )}
    </div>
  );
}
