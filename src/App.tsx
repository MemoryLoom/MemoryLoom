import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import { Meta } from '@/components/Meta'

// Routes are code-split so the first paint carries only the landing page.
const NotFound = lazy(() => import('@/pages/NotFound'))
/* No shell is decided here, and no landmark either: whether this site has a
   header, a nav or a footer is the first turn's decision, and the page owns its
   own `main` — one wrapped around every route would be a second one. */
export default function App() {
  return (
    <Suspense fallback={<div className="px-gutter py-24 text-sm text-muted-foreground">Loading…</div>}>
      <Routes>
        <Route
          index
          element={
            <>
              <Meta
                title="MemoryLoom — digital wedding invitations & AI memory films"
                description="Bespoke invitation websites and personal AI memory films for weddings, birthdays and anniversaries. One keepsake per commission, made with you in about two weeks."
              />
              <Home />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Meta
                title="Page not found — MemoryLoom"
                description="This address does not exist. Everything MemoryLoom has made lives on the one studio page."
              />
              <NotFound />
            </>
          }
        />
      </Routes>
    </Suspense>
  )
}
