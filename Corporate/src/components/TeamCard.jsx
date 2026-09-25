export function TeamCard({ person }) {
  return (
    <article className="border border-line bg-paper p-6">
      <div className="flex items-start gap-4">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center bg-forest font-display text-lg text-gold-soft"
          aria-hidden="true"
        >
          {person.initials}
        </div>
        <div>
          <h3 className="font-display text-xl font-medium text-ink">{person.name}</h3>
          <p className="text-sm text-gold">{person.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
    </article>
  )
}
