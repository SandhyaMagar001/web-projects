import Photo from "./Photo";

export default function PageHero({ image, eyebrow, title, text }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-ink">
      <Photo
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        {text ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">{text}</p> : null}
      </div>
    </section>
  );
}
