import { useState } from 'react'
import { Button } from '../components/Button'
import { ClosingCta } from '../components/ClosingCta'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { TextCard } from '../components/TextCard'
import { SelectField, TextAreaField, TextField } from '../components/fields'
import { Eyebrow } from '../components/SectionHeading'
import { benefits, company, jobs, mailHref } from '../data/site'

const empty = { name: '', email: '', role: jobs[0].title, note: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (values.note.trim().length < 20) errors.note = 'Tell us briefly where you have worked (20 characters).'
  return errors
}

export function Careers() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function apply(title) {
    setValues((current) => ({ ...current, role: title }))
    setSent(null)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    requestAnimationFrame(() => {
      document.getElementById('apply')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      document.getElementById('apply-name')?.focus({ preventScroll: true })
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const first = Object.keys(nextErrors)[0]
    if (first) {
      document.getElementById(`apply-${first}`)?.focus()
      return
    }
    const body = [`Name: ${values.name.trim()}`, `Email: ${values.email.trim()}`, `Role: ${values.role}`, '', values.note.trim()].join('\n')
    setSent({
      name: values.name.trim(),
      href: mailHref({ subject: `Application for ${values.role}`, body }),
    })
  }

  return (
    <>
      <PageMeta
        title="Careers · Shikhar Group"
        description="Sample roles at Shikhar Group across infrastructure, energy, digital, and agribusiness in Nepal."
      />
      <PageHero
        eyebrow="Careers"
        title="Come for a package, stay for the next one."
        lede="Site roles live on the work. Kathmandu roles still visit the ward, the yard, or the hub. We hire for that, not for a headquarters accent."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <TextCard key={benefit.title} title={benefit.title}>
                {benefit.text}
              </TextCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="openings" className="border-t border-line bg-paper py-16 sm:py-20">
        <Container>
          <Eyebrow>Openings</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">Sample roles</h2>
          <p className="mt-4 max-w-2xl text-muted">
            These listings are illustrations for the demonstration site. They show how a static careers page can read,
            filter nothing from a server, and prepare an application in the browser.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {jobs.map((job) => (
              <li key={job.id} className="grid gap-4 py-6 md:grid-cols-[1.4fr_0.8fr_auto] md:items-center">
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.summary}</p>
                </div>
                <p className="text-sm text-ink">
                  {job.team}
                  <span className="block text-muted">
                    {job.location} · {job.type}
                  </span>
                </p>
                <Button type="button" variant="ghost" onClick={() => apply(job.title)}>
                  Apply
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="apply" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Apply</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">Prepare an application</h2>
          <p className="mt-4 text-muted">
            Nothing is stored. On submit we build an email draft to {company.email} that you can open yourself.
          </p>
          {sent ? (
            <div role="status" className="mt-8 border border-line bg-paper p-8">
              <h3 className="font-display text-2xl font-medium text-ink">Draft ready, {sent.name}.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The application stayed in this browser. Open your email app to send it, or start again.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={sent.href} arrow>
                  Open email draft
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSent(null)
                    setValues(empty)
                    setErrors({})
                  }}
                >
                  Start again
                </Button>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5">
              <TextField id="apply-name" name="name" label="Full name" autoComplete="name" value={values.name} onChange={update} error={errors.name} />
              <TextField
                id="apply-email"
                name="email"
                type="email"
                label="Email"
                autoComplete="email"
                value={values.email}
                onChange={update}
                error={errors.email}
              />
              <SelectField id="apply-role" name="role" label="Role" value={values.role} onChange={update}>
                {jobs.map((job) => (
                  <option key={job.id}>{job.title}</option>
                ))}
              </SelectField>
              <TextAreaField
                id="apply-note"
                name="note"
                label="Where have you done this work?"
                value={values.note}
                onChange={update}
                error={errors.note}
              />
              <Button type="submit" arrow>
                Prepare application
              </Button>
            </form>
          )}
        </Container>
      </section>

      <ClosingCta title="Not the role. Still the work." text="If you run sites, plants, desks, or routes and do not see a title, write anyway." />
    </>
  )
}
