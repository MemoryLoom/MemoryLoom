import { cn } from '@/lib/utils'

/* The page surface as a hero ground: a dappled leaf shadow in the top-left
   corner and a sliver of baby's-breath in the bottom-right, both painted from
   the tokens so they follow the palette. Decorative only. */
export function HeroGround({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute -left-24 -top-28 h-[34rem] w-[34rem] rotate-[-12deg] opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklch, var(--primary) 16%, transparent), transparent 72%)',
        }}
      />
      <div
        className="absolute left-[6%] top-[4%] h-40 w-56 opacity-30"
        style={{
          background:
            'repeating-linear-gradient(102deg, color-mix(in oklch, var(--primary) 18%, transparent) 0 2px, transparent 2px 18px)',
          maskImage: 'radial-gradient(closest-side, black, transparent 82%)',
        }}
      />
      <div
        className="absolute -bottom-16 -right-10 h-[26rem] w-[26rem] opacity-60 blur-xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 26%, transparent), transparent 70%)',
        }}
      />
    </div>
  )
}
