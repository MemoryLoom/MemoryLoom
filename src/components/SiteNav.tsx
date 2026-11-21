import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#demos', label: 'Invitations' },
  { href: '#steps', label: 'How it works' },
  { href: '#book', label: 'Book Now' },
]

/* A floating pill over the page: the owner's mark left, the three anchors
   centred, one action right. At 360 the anchors fold into a sheet and the
   action stays visible. */
export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-content items-center justify-between gap-2 rounded-full border border-border bg-background/75 py-2 pl-4 pr-2 shadow-raised backdrop-blur-md sm:pl-6 sm:pr-3"
      >
        <a href="#top" className="flex min-h-11 min-w-11 items-center" aria-label="MemoryLoom — back to top">
          <Brand markClass="h-6 sm:h-8" withWordmark={false} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label text-[0.8rem] tracking-[0.06em] text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            asChild
            size="sm"
            className="h-9 shrink-0 rounded-full px-3 font-label text-[0.72rem] tracking-[0.02em] shadow-none hover:bg-accent hover:text-primary sm:h-10 sm:px-5 sm:text-[0.78rem] sm:tracking-[0.04em]"
          >
            <a href="#book">Start Your Story</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
              >
                <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[86%] max-w-xs border-border bg-background px-6 py-6"
            >
              <SheetClose asChild>
                <button
                  type="button"
                  className="absolute right-3 top-3 grid size-11 place-items-center rounded-full text-primary transition-colors hover:bg-secondary"
                >
                  <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </SheetClose>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex items-center justify-between pr-12">
                <Brand markClass="h-7" />
              </div>
              <ul className="mt-10 flex flex-col">
                {LINKS.map((link) => (
                  <li key={link.href} className="border-b border-border">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center font-display text-2xl text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-label text-sm text-primary-foreground"
              >
                Start Your Story
              </a>
              <p className="mt-8 font-label text-xs text-muted-foreground">
                A commissioned piece, made over two weeks.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
