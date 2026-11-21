import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* A phone drawn in code, holding a sample invitation page. The site inside it
   is an illustration: the names and the date are samples, and the caption under
   the phone says so. */
export function PhoneMock({
  names = 'Aarohi & Ved',
  date = '14 · 02 · 2026',
  venue = 'The Loft, Goa',
  className,
  children,
}: {
  names?: string
  date?: string
  venue?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn('relative', className)}>
      <div className="rounded-[2.25rem] border border-border bg-primary p-2 shadow-raised">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-background">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-30%] top-[-8%] h-56 opacity-70"
            style={{
              background:
                'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 45%, transparent), transparent 72%)',
            }}
          />
          <div className="relative px-5 pb-6 pt-4">
            <div className="mt-6 text-center">
              <span className="grid mx-auto size-9 place-items-center rounded-full border border-accent/50 font-display text-sm text-primary">
                M
              </span>
              <p className="mt-4 font-label text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground">
                Are getting married
              </p>
              <p className="mt-2 font-display text-[1.6rem] leading-[1.05] text-foreground">{names}</p>
              <p className="mt-2 font-label text-[0.6rem] tracking-[0.2em] text-muted-foreground">{date}</p>
              <span className="mx-auto mt-4 block h-px w-10 bg-accent/60" />
              <p className="mt-4 font-label text-[0.6rem] tracking-[0.14em] text-primary">{venue}</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Story', 'Schedule', 'RSVP'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card/70 py-1.5 text-center font-label text-[0.55rem] uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
            {children}
            <div className="mt-4 flex items-center justify-between rounded-[0.9rem] bg-primary px-3 py-2.5">
              <span className="font-label text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/85">
                Our story
              </span>
              <span className="font-label text-[0.58rem] tracking-[0.1em] text-accent">Open</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
