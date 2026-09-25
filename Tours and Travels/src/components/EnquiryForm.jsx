import { useMemo, useState } from "react";
import { whatsappLink } from "../data/site";

const initial = {
  name: "",
  email: "",
  phone: "",
  interest: "A Nepal journey",
  message: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!/^[0-9+\s()-]{8,}$/.test(values.phone)) {
    errors.phone = "Enter a phone number with at least 8 characters.";
  }
  if (values.message.trim().length < 12) {
    errors.message = "Add a few details so we know what to plan.";
  }
  return errors;
}

export default function EnquiryForm({ interestOptions = [] }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const options = useMemo(
    () => ["A Nepal journey", ...interestOptions],
    [interestOptions],
  );

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  }

  if (sent) {
    const note = `Hello Himalaya Crest, my name is ${values.name}. I am interested in ${values.interest}. ${values.message}`;
    return (
      <div className="rounded-3xl bg-forest px-6 py-8 text-cream">
        <p className="font-display text-3xl">Enquiry noted on this device.</p>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Nothing was sent to a server. Continue on WhatsApp if you want the desk to see it.
        </p>
        <a
          href={whatsappLink(note)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-ink"
        >
          Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} />
        <Field label="Phone" name="phone" value={values.phone} error={errors.phone} onChange={update} />
        <label className="block text-sm font-medium text-ink">
          Interest
          <select name="interest" value={values.interest} onChange={update} className="field mt-2">
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          rows="5"
          value={values.message}
          onChange={update}
          className="field mt-2"
          placeholder="Dates, group size, and the kind of journey you want."
        />
        {errors.message ? <span className="mt-1 block text-xs text-red-700">{errors.message}</span> : null}
      </label>
      <button
        type="submit"
        className="min-h-11 justify-self-start rounded-full bg-ink px-6 text-sm font-semibold text-cream transition hover:bg-navy"
      >
        Send enquiry
      </button>
      <p className="text-xs leading-relaxed text-muted">
        This form does not contact a server. Use it to check the details, then send them on WhatsApp.
      </p>
    </form>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input name={name} type={type} value={value} onChange={onChange} className="field mt-2" />
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
