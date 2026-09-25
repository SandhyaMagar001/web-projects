import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-light focus-visible:ring-offset-cream",
  dark: "bg-ink text-cream hover:bg-navy focus-visible:ring-offset-cream",
  outline:
    "border border-ink/15 bg-white text-ink hover:border-gold hover:text-navy focus-visible:ring-offset-cream",
  ghost:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:ring-offset-ink",
};

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
