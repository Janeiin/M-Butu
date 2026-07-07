'use client'

const paths: Record<string, React.ReactNode> = {
  diamond: <path d="M12 3 21 9 12 21 3 9z M3 9h18 M9 3l3 6 3-6" />,
  link: <path d="M9 15l6-6 M10 6l1-1a4 4 0 0 1 6 6l-1 1 M14 18l-1 1a4 4 0 0 1-6-6l1-1" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
    </>
  ),
  square: <path d="M4 4h16v16H4z M4 9h16 M9 4v16" />,
  column: <path d="M6 21h12 M6 3h12 M8 6v12 M12 6v12 M16 6v12 M5 6h14 M5 18h14" />,
  arch: <path d="M4 21V10a8 8 0 0 1 16 0v11 M4 21h16 M8 21v-9a4 4 0 0 1 8 0v9" />,
  crown: <path d="M4 18h16 M4 18 3 7l5 4 4-7 4 7 5-4-1 11" />,
}

export default function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.diamond}
    </svg>
  )
}
