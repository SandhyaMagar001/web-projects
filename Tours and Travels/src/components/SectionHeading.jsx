export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
