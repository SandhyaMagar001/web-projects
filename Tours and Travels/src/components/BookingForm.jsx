import { useMemo, useState } from "react";
import { packages } from "../data/packages";
import { whatsappLink } from "../data/site";
import { formatPrice, todayISO } from "../lib/format";

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!/^[0-9+\s()-]{8,}$/.test(values.phone)) {
    errors.phone = "Enter a phone number with at least 8 characters.";
  }
  if (!values.slug) errors.slug = "Choose a journey.";
  if (!values.date) errors.date = "Choose a preferred start date.";
  else if (values.date < todayISO()) errors.date = "Start date cannot be in the past.";
  const travelers = Number(values.travelers);
  if (!Number.isInteger(travelers) || travelers < 1 || travelers > 12) {
    errors.travelers = "Enter between 1 and 12 travelers.";
  }
  return errors;
}

export default function BookingForm({ initialSlug = "" }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    slug: packages.some((item) => item.slug === initialSlug) ? initialSlug : "",
    date: "",
    travelers: "2",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const selected = useMemo(
    () => packages.find((item) => item.slug === values.slug),
    [values.slug],
  );

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function composeMessage() {
    return [
      "Hello Himalaya Crest, I would like to book a journey.",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Journey: ${selected ? selected.title : values.slug}`,
      `Preferred start: ${values.date}`,
      `Travelers: ${values.travelers}`,
      values.notes ? `Notes: ${values.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent({ message: composeMessage(), title: selected.title });
    }
  }

  function openWhatsApp() {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      window.open(whatsappLink(composeMessage()), "_blank", "noopener,noreferrer");
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Request ready</p>
        <h2 className="mt-2 font-display text-4xl">{sent.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your booking request is saved in this browser session only. Open WhatsApp to deliver it.
        </p>
        <a
          href={whatsappLink(sent.message)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" value={values.name} error={errors.name} onChange={update} />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} />
        <Field label="Phone" name="phone" value={values.phone} error={errors.phone} onChange={update} />
        <label className="block text-sm font-medium">
          Travelers
          <input
            name="travelers"
            type="number"
            min="1"
            max="12"
            value={values.travelers}
            onChange={update}
            className="field mt-2"
          />
          {errors.travelers ? <span className="mt-1 block text-xs text-red-700">{errors.travelers}</span> : null}
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Journey
          <select name="slug" value={values.slug} onChange={update} className="field mt-2">
            <option value="">Select a package</option>
            {packages.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title} · {item.duration} · from {formatPrice(item.price)}
              </option>
            ))}
          </select>
          {errors.slug ? <span className="mt-1 block text-xs text-red-700">{errors.slug}</span> : null}
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Preferred start date
          <input
            name="date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={update}
            className="field mt-2"
          />
          {errors.date ? <span className="mt-1 block text-xs text-red-700">{errors.date}</span> : null}
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Notes
          <textarea
            name="notes"
            rows="4"
            value={values.notes}
            onChange={update}
            className="field mt-2"
            placeholder="Hotel standard, pace, or celebrations we should know about."
          />
        </label>
      </div>
      {selected ? (
        <p className="mt-4 text-sm text-muted">
          Sample rate for {selected.title}: {formatPrice(selected.price)} per person, twin share.
        </p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="min-h-11 rounded-full bg-gold px-6 text-sm font-semibold text-ink hover:bg-gold-light">
          Review request
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          className="min-h-11 rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white hover:bg-[#0e7468]"
        >
          Book on WhatsApp
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input name={name} type={type} value={value} onChange={onChange} className="field mt-2" />
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
