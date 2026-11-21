/* The owner's logo, used exactly as supplied. Two crops of the same file so it
   reads at header size: the monogram on its own where the mark is small, and
   the wordmark on its own beside it. The name is never re-set as type. */

const MONOGRAM = { src: `${import.meta.env.BASE_URL}images/memoryloom-monogram.webp`, w: 602, h: 281 }
const WORDMARK = { src: `${import.meta.env.BASE_URL}images/memoryloom-wordmark.webp`, w: 992, h: 251 }
/* The name sets itself: the crop carries its own capitals and descender space,
   so it is sized in rem against the monogram rather than following the pill's
   font size, which Tailwind leaves at the browser default. */
const WORDMARK_H = '1.15rem'

/** The monogram alone: a link target is the caller's job. */
export function Monogram({ className }: { className?: string }) {
  return (
    <img
      src={MONOGRAM.src}
      alt="MemoryLoom"
      width={MONOGRAM.w}
      height={MONOGRAM.h}
      className={className}
      decoding="async"
    />
  )
}

/** Monogram plus wordmark, or the monogram on its own where the pill has no
    room for the name (360). The pair reads as one mark, so it carries one label;
    the crops are transparent, so they sit on whatever ground holds them. */
export function Brand({
  className,
  markClass = 'h-8',
  withWordmark = true,
}: {
  className?: string
  markClass?: string
  withWordmark?: boolean
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <img
        src={MONOGRAM.src}
        alt={withWordmark ? '' : 'MemoryLoom'}
        width={MONOGRAM.w}
        height={MONOGRAM.h}
        className={`w-auto shrink-0 ${markClass}`}
        decoding="async"
      />
      {withWordmark ? (
        <img
          src={WORDMARK.src}
          alt="memoryloom"
          width={WORDMARK.w}
          height={WORDMARK.h}
          className="w-auto shrink-0"
          style={{ height: WORDMARK_H }}
          decoding="async"
        />
      ) : null}
    </span>
  )
}
