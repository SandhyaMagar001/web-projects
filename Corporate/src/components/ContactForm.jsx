import { useState } from 'react'
import { company, mailHref, services } from '../data/site'
import { Button } from './Button'
import { SelectField, TextAreaField, TextField } from './fields'
import { Eyebrow } from './SectionHeading'

const initial = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  interest: 'Infrastructure',
  message: '',
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.phone.trim() && !/^[0-9+()\-\s]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a phone number we can dial.'
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Write at least a sentence or two (20 characters).'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const body = [
      `Name: ${values.name.trim()}`,
      `Organisation: ${values.organisation.trim() || '—'}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim() || '—'}`,
      `Interest: ${values.interest}`,
      '',
      values.message.trim(),
    ].join('\n')

    setSent({
      name: values.name.trim(),
      href: mailHref({ subject: `Enquiry from ${values.name.trim()}`, body }),
    })
  }

  if (sent) {
    return (
      <div role="status" className="border border-line bg-paper p-8">
        <Eyebrow>Ready to send</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink">Thanks, {sent.name}.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          This is a static site, so the note was not uploaded or stored. It stays in this browser. Open it in your email
          app if you want to send it to {company.email}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={sent.href} arrow>
            Open email draft
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setSent(null)
              setValues(initial)
              setErrors({})
            }}
          >
            Write another
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <TextField id="contact-name" name="name" label="Full name" autoComplete="name" value={values.name} onChange={update} error={errors.name} />
      <TextField
        id="contact-organisation"
        name="organisation"
        label="Organisation"
        autoComplete="organization"
        value={values.organisation}
        onChange={update}
      />
      <TextField
        id="contact-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        value={values.email}
        onChange={update}
        error={errors.email}
      />
      <TextField
        id="contact-phone"
        name="phone"
        type="tel"
        label="Phone"
        autoComplete="tel"
        value={values.phone}
        onChange={update}
        error={errors.phone}
      />
      <div className="sm:col-span-2">
        <SelectField id="contact-interest" name="interest" label="Interest" value={values.interest} onChange={update}>
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
          <option>General</option>
        </SelectField>
      </div>
      <div className="sm:col-span-2">
        <TextAreaField
          id="contact-message"
          name="message"
          label="What is the work?"
          value={values.message}
          onChange={update}
          error={errors.message}
          placeholder="Place, season, and what you need delivered."
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" arrow>
          Prepare message
        </Button>
      </div>
    </form>
  )
}
