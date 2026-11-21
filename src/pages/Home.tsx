import { ArrowRight, ArrowUpRight, Mail, LayoutGrid, MessageSquare, Share2 } from 'lucide-react'
import { SiteNav } from '@/components/SiteNav'
import { HeroGround } from '@/components/HeroGround'
import { FilmFrame } from '@/components/FilmFrame'
import { PhoneMock } from '@/components/PhoneMock'
import { FilmMock } from '@/components/FilmMock'
import { Monogram } from '@/components/Brand'
import { Container, Label, QuietLink, Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { PhotoCredits } from '@/components/PhotoCredits'

const EMAIL = 'hello@memoryloom.studio'

const SHOWCASE = [
  {
    name: 'Aarohi & Ved',
    kind: 'Wedding invitation site + memory film',
    line: 'A three-day Goa wedding, with a guest list of 180 who RSVPed through the site.',
    still: `${import.meta.env.BASE_URL}images/showcase-goa.webp`,
    alt: 'A couple walking a palm-lined path at golden hour, seen from behind',
    tall: true,
  },
  {
    name: "Rhea's thirtieth",
    kind: 'Birthday memory film',
    line: 'Nine photographed years, gathered from friends and cut into four minutes.',
    still: `${import.meta.env.BASE_URL}images/showcase-birthday.webp`,
    alt: 'A long table of friends under warm string lights, seen from above',
    tall: false,
  },
  {
    name: 'Ammu & Appa',
    kind: 'Anniversary tribute film',
    line: 'Forty years told through recordings of their children, made for a Sunday lunch.',
    still: `${import.meta.env.BASE_URL}images/showcase-anniversary.webp`,
    alt: 'Two older hands resting together over a family photograph album',
    tall: false,
  },
]

export default function Home() {
  return (
    <div id="top" className="overflow-x-clip">
      <SiteNav />

      {/* 1 · Hero — cream ground, the brief's headline, and the two pieces a
          commission ends in: the site on a phone, the film beside it. */}
      <main className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 lg:pb-24">
        <HeroGround />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Label>Digital invitations &amp; AI storytelling</Label>
              <h1 className="mt-5 text-balance font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.02em] text-foreground">
                Weaving your cherished memories into timeless digital moments.
              </h1>
              <p className="mt-6 max-w-[32rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">
                Bespoke invitation websites and personal AI films for weddings, birthdays and
                anniversaries — one keepsake per commission, made with you in about two weeks.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-5">
                <Button
                  asChild
                  className="group h-12 rounded-full px-6 font-label text-[0.85rem] tracking-[0.04em] shadow-none hover:bg-accent hover:text-primary"
                >
                  <a href="#showcase">
                    Explore Creations
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </a>
                </Button>
                <QuietLink href="#services">See what a commission includes</QuietLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[27rem] pb-4">
              {/* The sand panel is the ground the two pieces sit on; the film's
                  caption rides inside it so nothing crosses the border. */}
              <div className="relative rounded-[2rem] border border-border/60 bg-card/70 px-5 pb-5 pt-7 sm:px-7 sm:pb-6">
                <div className="relative mx-auto w-[58%] max-w-[13.5rem] sm:w-[56%]">
                  <PhoneMock className="relative z-10 -rotate-2" />
                  <FilmFrame className="absolute -bottom-10 right-[-18%] z-20 w-[86%] max-w-[12rem]" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-10 max-w-md border-l border-accent/60 pl-4 font-label text-sm leading-relaxed text-muted-foreground">
            The screens above are illustrations of a finished commission. Samples, not a client
            testimonial.
          </p>
        </Container>
      </main>

      {/* 2 · Services — sand ground, two cards, each showing its artefact. */}
      <Section id="services" labelledBy="services-heading" className="bg-card">
        <Container>
          <div className="max-w-2xl">
            <Label className="text-primary">What we make</Label>
            <h2
              id="services-heading"
              className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.05] text-foreground"
            >
              Two pieces, made together or on their own.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Most couples start with the invitation site and add the film; most families want only
              the film.
            </p>
          </div>

          <div className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-2 lg:gap-16">
            <article className="flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight text-foreground">
                  Invitation websites
                </h3>
                <span className="font-label text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  01
                </span>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                Your own address, your story, and RSVP replies that land in one list you keep.
              </p>
              <ul className="mt-6 space-y-2.5 text-[0.95rem] text-foreground/85">
                {[
                  'Schedule, travel and stay, on one page',
                  'RSVP, dietary notes and a guest list you can export',
                  'Your own domain, kept live for a year',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-center pt-8">
                <PhoneMock className="w-full max-w-[13rem] rotate-1" names="Isla & Noor" date="20 · 09 · 2026" venue="The Old Barn" />
              </div>
            </article>

            <article className="flex flex-col lg:border-l lg:border-border lg:pl-16">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight text-foreground">
                  AI memory films
                </h3>
                <span className="font-label text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  02
                </span>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                The photographs you already have, restored, moved and cut to something you can
                watch on a bad day.
              </p>
              <ul className="mt-6 space-y-2.5 text-[0.95rem] text-foreground/85">
                {[
                  'Old prints restored and gently coloured',
                  'Voice notes from family, woven into the cut',
                  'One 4K film, and a shorter version for phones',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <FilmMock
                  still={`${import.meta.env.BASE_URL}images/showcase-goa.webp`}
                  alt="A still from a memory film: a couple on a palm-lined path at golden hour"
                  title="Aarohi & Ved"
                  runtime="01:28"
                />
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* 3 · Showcase — cream ground, a board of three pieces. */}
      <Section id="showcase" labelledBy="showcase-heading">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3 lg:items-end lg:gap-8">
            <div className="lg:col-span-2">
              <h2
                id="showcase-heading"
                className="font-display text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.05] text-foreground"
              >
                Three stories, kept.
              </h2>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground lg:pb-2">
              Every piece is made for one family and never sold twice. Each name sits on the piece
              it belongs to.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {SHOWCASE.map((piece, i) => (
              <article
                key={piece.name}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : undefined}
              >
                <div className="overflow-hidden rounded-lg bg-primary shadow-raised">
                  <img
                    src={piece.still}
                    alt={piece.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                      className="aspect-3/4 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:aspect-3/2 lg:aspect-3/4"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground">{piece.name}</h3>
                  <span className="font-label text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-1 font-label text-[0.7rem] uppercase tracking-[0.16em] text-foreground">
                  {piece.kind}
                </p>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">{piece.line}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Invitation demos — matching Demo-section.JPG with phone frames, posters, pricing, Demo and WhatsApp Buy Now buttons. */}
      <Section id="demos" labelledBy="demos-heading" className="bg-[#FAF6F0]">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-2 block font-display text-[1.35rem] italic text-[#8B1A1A]">
              Our Collection
            </span>
            <h2
              id="demos-heading"
              className="font-display text-[1.75rem] font-bold leading-[1.2] text-[#2d1810] md:text-[2.5rem]"
            >
              Invitation Demos
            </h2>
            <p className="mx-auto mt-3 max-w-[480px] text-[0.95rem] leading-relaxed text-[#7a6558]">
              Handcrafted with cultural authenticity and smooth animations.
            </p>
          </div>

          <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: 'Temple Theme',
                tier: 'Premium',
                price: '3,999',
                poster: `${import.meta.env.BASE_URL}images/demos/temple-theme.webp`,
                demoUrl: 'https://myshaadhilink.in/invitation/vijay-rashmika-wedding-invitation?to=Guest&demo=true',
              },
              {
                title: 'Signature of Love',
                tier: 'Premium',
                price: '2,999',
                poster: `${import.meta.env.BASE_URL}images/demos/signature-of-love.webp`,
                demoUrl: 'https://myshaadhilink.in/invitation/signature-of-love?to=Guest&demo=true',
              },
              {
                title: 'Royal Premium',
                tier: 'Premium',
                price: '3,999',
                poster: `${import.meta.env.BASE_URL}images/demos/royal-premium.webp`,
                demoUrl: 'https://myshaadhilink.in/invitation/priya-arjun-wedding?to=Guest&demo=true',
              },
              {
                title: 'South Indian',
                tier: 'Premium',
                price: '3,999',
                poster: `${import.meta.env.BASE_URL}images/demos/south-indian.webp`,
                demoUrl: 'https://myshaadhilink.in/invitation/traditional-invitation?to=Guest&demo=true',
              },
              {
                title: 'Christian Elegance',
                tier: 'Premium',
                price: '3,999',
                poster: `${import.meta.env.BASE_URL}images/demos/christian-elegance.webp`,
                demoUrl: 'https://myshaadhilink.in/invitation/christian-elegance?to=Guest&demo=true',
              },
              {
                title: 'Classic',
                tier: 'Standard',
                price: '1,999',
                poster: `${import.meta.env.BASE_URL}images/demos/classic.webp`,
                demoUrl: 'https://invite.myshaadhilink.in/invitation/arjun-priya-wedding',
              },
            ].map((demo) => (
              <article
                key={demo.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_2px_12px_rgba(45,24,16,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(45,24,16,0.12)] sm:rounded-[16px]"
              >
                <a
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`View ${demo.title} live demo`}
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden rounded-t-[12px] border-[3px] border-b-0 border-[#1a1a1a] bg-[#f8f4ef] sm:rounded-t-[16px] sm:border-[5px]">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-1/2 z-10 h-[10px] w-[36px] -translate-x-1/2 rounded-b-[6px] bg-[#1a1a1a] sm:h-[14px] sm:w-[48px] sm:rounded-b-[8px] md:h-[16px] md:w-[60px]"
                    />
                    <img
                      src={demo.poster}
                      alt={`${demo.title} wedding invitation preview`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col gap-0.5 p-2.5 sm:gap-1 sm:p-4 md:p-5">
                  <h3 className="font-display text-[0.95rem] font-bold leading-[1.25] text-[#2d1810] sm:text-[1.125rem] sm:leading-[1.3] md:text-[1.25rem]">
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {demo.title}
                    </a>
                  </h3>
                  <p className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7a6558] sm:text-[0.75rem]">
                    {demo.tier}
                  </p>
                  <p className="mt-1 font-display text-[1.15rem] font-bold leading-none text-[#8B1A1A] sm:mt-2 sm:text-[1.5rem]">
                    <span className="text-[0.75em] font-medium">₹</span>
                    {demo.price}
                  </p>

                  <div className="mt-auto flex gap-1.5 pt-2.5 sm:gap-2.5 sm:pt-4">
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-[6px] border border-[#e6ddd2] bg-[#faf6f0] px-1.5 py-2 text-[0.68rem] font-semibold text-[#2d1810] transition-colors hover:border-[#c9a86a] hover:bg-[#f2ebe1] active:scale-[0.97] sm:gap-1.5 sm:rounded-[8px] sm:px-4 sm:py-2.5 sm:text-[0.85rem]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="size-3 shrink-0 sm:size-4"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Demo
                    </a>
                    <a
                      href={`https://wa.me/919553143929?text=${encodeURIComponent(`Hi, I'm interested in the ${demo.title} template (₹${demo.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-[6px] border border-[#0B7A3B] bg-[#0B7A3B] px-1.5 py-2 text-[0.68rem] font-semibold text-white transition-colors hover:border-[#096331] hover:bg-[#096331] active:scale-[0.97] sm:gap-1.5 sm:rounded-[8px] sm:px-4 sm:py-2.5 sm:text-[0.85rem]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-3 shrink-0 sm:size-4"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Buy Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* The three steps — a simple, connected path from first idea to celebration. */}
      <Section id="steps" labelledBy="steps-heading" className="bg-card">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="steps-heading" className="font-display text-[clamp(2.1rem,4.3vw,3.3rem)] leading-[1.02] text-foreground">Three steps to your<br className="hidden sm:block" /> <span className="text-accent-foreground">perfect invitation</span></h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">We handle the design and tech. You focus on your celebration.</p>
          </div>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <span aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-border md:block" />
            {[
              { number: '01', title: 'Pick Your Design', body: 'Browse our invitation directions, then choose the look and traditions that feel like you.', Icon: LayoutGrid },
              { number: '02', title: 'Share Your Story', body: 'Send the names, dates, venue details and photographs that make the celebration yours.', Icon: MessageSquare },
              { number: '03', title: 'Share & Celebrate', body: 'We prepare your invitation site, ready to share with family and friends.', Icon: Share2 },
            ].map(({ number, title, body, Icon }) => (
              <li key={number} className="relative flex flex-col items-center text-center">
                <span className="grid size-12 place-items-center rounded-full border border-border bg-background font-display text-lg text-foreground shadow-sm">{number}</span>
                <span className="mt-4 grid size-10 place-items-center rounded-lg bg-background text-primary"><Icon className="size-[18px]" strokeWidth={1.5} /></span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-foreground">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 4 · Book — the one dark band: the action, the email, and the footer. */}
      <Section id="book" labelledBy="book-heading" className="bg-primary text-primary-foreground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mt-4 font-label text-[0.72rem] uppercase tracking-[0.28em] text-primary-foreground/90">
                Now taking bookings
              </p>
              <h2
                id="book-heading"
                className="mt-5 font-display text-[clamp(2.3rem,5.4vw,4.25rem)] leading-[1.02] text-primary-foreground"
              >
                Tell us whose story it is.
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-primary-foreground/85">
                Write to us with the names, the date and what you want kept. We reply within two days
                with a first idea and a fixed fee.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  asChild
                  className="group h-12 rounded-full bg-accent px-6 font-label text-[0.85rem] tracking-[0.04em] text-primary shadow-none hover:bg-primary-foreground hover:text-primary"
                >
                  <a href={`mailto:${EMAIL}?subject=Starting%20a%20MemoryLoom%20commission`}>
                    <Mail strokeWidth={1.5} />
                    Start Your Story
                    <ArrowUpRight
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </Button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-11 items-center font-label text-sm text-primary-foreground/85 underline decoration-accent/60 underline-offset-4 transition-colors hover:text-primary-foreground hover:decoration-accent"
                >
                  {EMAIL}
                </a>
              </div>
                <p className="mt-6 font-label text-[0.72rem] leading-relaxed text-primary-foreground/85">
                  This opens your own mail app. There is no form here, so nothing is sent from this
                  page.
                </p>
            </div>

            <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
              <h3 className="font-display text-2xl text-primary-foreground">How a commission runs</h3>
              <ol className="mt-6 space-y-5">
                {[
                  ['A conversation, 30 minutes', 'What the day is, who is coming, which memories matter.'],
                  ['We gather the archive', 'Photographs, voice notes, invitations, a song.'],
                  ['A first cut or first draft', 'Site or film, sent for notes before it goes out.'],
                  ['Live two weeks before', 'Finished, tested on phones, handed over for good.'],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                      <span className="font-display text-lg leading-none text-primary-foreground/90">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    <div>
                      <p className="font-label text-[0.9rem] font-medium text-primary-foreground">{title}</p>
                      <p className="mt-1 text-[0.9rem] leading-relaxed text-primary-foreground/85">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <footer className="mt-14 border-t border-primary-foreground/15 pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Monogram className="h-12 w-auto rounded-md bg-primary-foreground px-2 py-1" />
                <p className="font-label text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground/90">
                  Weaving memories into moments
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-label text-sm text-primary-foreground/85">
                <a href="#services" className="transition-colors hover:text-primary-foreground">
                  Services
                </a>
                <a href="#showcase" className="transition-colors hover:text-primary-foreground">
                  Showcase
                </a>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary-foreground">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 font-label text-sm text-primary-foreground/85 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} MemoryLoom. Made in India, made for one family at a time.</p>
              <PhotoCredits />
            </div>
          </footer>
        </Container>
      </Section>
    </div>
  )
}
