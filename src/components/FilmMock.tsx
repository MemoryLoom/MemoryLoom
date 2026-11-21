import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/** A film frame in code: a still, a play glyph, and a running time. */
export function FilmMock({
  still,
  alt,
  title,
  runtime,
  className,
}: {
  still: string
  alt: string
  title: string
  runtime: string
  className?: string
}) {
  return (
    <figure className={cn('relative', className)}>
      <div className="relative overflow-hidden rounded-lg border border-border bg-primary shadow-raised">
        <div className="relative aspect-4/3">
          <img
            src={still}
            alt={alt}
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/15 to-transparent" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-primary backdrop-blur-md"
          >
            <Play className="ml-0.5 size-4 fill-current" strokeWidth={1.5} />
          </span>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <p className="font-display text-xl text-primary-foreground">{title}</p>
            <p className="shrink-0 rounded-full bg-primary/70 px-2.5 py-1 font-label text-[0.6rem] tracking-[0.14em] text-primary-foreground/85">
              {runtime}
            </p>
          </div>
          <div aria-hidden="true" className="absolute inset-x-6 bottom-16 h-px bg-primary-foreground/25">
            <span className="block h-px w-1/3 bg-accent" />
          </div>
        </div>
      </div>
    </figure>
  )
}
