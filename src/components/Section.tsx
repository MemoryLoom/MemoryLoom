/* Shared bits of the one page: the section shell, the eyebrow label and the
   rounded action. Cream and sand alternate; the booking band takes espresso. */
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-content px-gutter', className)}>{children}</div>
}

export function Section({
  id,
  className,
  labelledBy,
  children,
}: {
  id?: string
  className?: string
  labelledBy?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('scroll-mt-24 py-section', className)}
    >
      {children}
    </section>
  )
}

/** An uppercase micro-label. Used once per ground, never above every heading. */
export function Label({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        'font-label text-[0.68rem] font-medium uppercase tracking-[0.28em] text-primary',
        className,
      )}
    >
      {children}
    </p>
  )
}

/** A quiet inline link with a bronze underline that grows on hover. */
export function QuietLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center gap-1 border-b border-accent pb-1 font-label text-sm text-primary transition-colors hover:text-foreground hover:decoration-primary"
    >
      {children}
    </a>
  )
}
