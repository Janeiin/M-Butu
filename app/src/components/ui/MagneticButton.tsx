'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  href: string;
  variant?: 'solid' | 'ghost' | 'dark' | 'outline';
  className?: string;
  strength?: number;
};

/** A link that magnetically follows the cursor within its bounds. */
export default function MagneticButton({
  children,
  href,
  variant = 'solid',
  className,
  strength = 0.3,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn('btn', `btn-${variant}`, className)}
    >
      {children}
    </Link>
  );
}
