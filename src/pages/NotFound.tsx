import { Link } from 'react-router'
import { Brand } from '@/components/Brand'
import { HeroGround } from '@/components/HeroGround'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-dvh place-items-center overflow-hidden px-gutter text-center">
      <HeroGround />
      <div className="max-w-md">
        <Link to="/" className="inline-flex min-h-11 items-center" aria-label="MemoryLoom — home">
          <Brand markClass="h-8" />
        </Link>
        <p className="mt-10 font-label text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
          Page not found
        </p>
        <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] text-foreground">
          This page has not been woven yet.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
          The address may be mistyped, or the piece has moved. Everything we have made is on the one
          page.
        </p>
        <Button
          asChild
          className="mt-8 h-12 rounded-full px-6 font-label text-[0.85rem] tracking-[0.04em] shadow-none hover:bg-accent hover:text-primary"
        >
          <Link to="/">Back to the studio</Link>
        </Button>
      </div>
    </main>
  )
}
