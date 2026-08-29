import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="Campus sessions pagination" className="mt-16 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => {
        const active = page === currentPage
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={active ? 'page' : undefined}
            className={`flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-semibold transition-all ${
              active
                ? 'bg-white text-primary shadow-lg'
                : 'border border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
            }`}
          >
            {page}
          </button>
        )
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
