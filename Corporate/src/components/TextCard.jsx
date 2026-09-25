export function TextCard({ title, children }) {
  return (
    <article className="border border-line bg-paper p-6">
      <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </article>
  )
}
