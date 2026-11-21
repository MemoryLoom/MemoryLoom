/* The video frame in the hero: a still from a memory film with a play control
   that opens a dialog. There is no backend, so the dialog is a preview of what
   a finished film looks like rather than a streaming player. */
import { useState } from 'react'
import { Play } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'

export function FilmFrame({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <figure className={className}>
        {/* float, not layout: the card drifts a few pixels so the stack breathes */}
        <div className="animate-[loom-float_9s_ease-in-out_infinite]">
          <div className="relative overflow-hidden rounded-lg shadow-raised">
            <img
              src={`${import.meta.env.BASE_URL}images/memory-film-still.webp`}
              alt="A still from a memory film: a couple walking a palm-lined path at golden hour"
              width={720}
              height={960}
              className="aspect-4/5 w-full object-cover"
            />
            <DialogTrigger asChild>
              <button
                type="button"
                className="group absolute inset-0 grid place-items-center bg-primary/10 outline-none transition-colors hover:bg-primary/20 focus-visible:ring-4 focus-visible:ring-ring/60"
              >
                <span className="grid size-12 place-items-center rounded-full bg-background/90 text-primary shadow-raised backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:size-14">
                  <Play className="ml-1 size-4 fill-current" strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">Play the memory film preview</span>
                </span>
              </button>
            </DialogTrigger>
          </div>
        </div>
        {/* One line, tracked tight enough to hold inside the sand panel. */}
        <figcaption className="mt-3 whitespace-nowrap font-label text-[0.6rem] uppercase leading-none tracking-[0.1em] text-primary">
          Memory film · Aarohi &amp; Ved
        </figcaption>
      </figure>

      <DialogContent className="max-w-3xl overflow-hidden border-border bg-primary p-0 text-primary-foreground">
        <div className="relative aspect-[4/3] sm:aspect-video">
          <img
            src={`${import.meta.env.BASE_URL}images/memory-film-still.webp`}
            alt=""
            width={720}
            height={960}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="font-label text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground/85">
              Film preview
            </p>
            <DialogTitle className="mt-3 font-display text-3xl leading-tight text-primary-foreground sm:text-4xl">
              Aarohi &amp; Ved — three years, cut to 90 seconds
            </DialogTitle>
            <DialogDescription className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              A finished film plays full screen on the invitation site. To see a full piece before you
              commission one, write to hello@memoryloom.studio and we will send the link.
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
