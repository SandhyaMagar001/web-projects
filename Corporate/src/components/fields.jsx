const fieldClass =
  'w-full border border-line bg-paper px-3.5 py-3 text-sm text-ink transition placeholder:text-muted/70 focus:border-moss'

function ErrorText({ id, error }) {
  if (!error) return null
  return (
    <p id={`${id}-error`} className="mt-2 text-sm text-danger">
      {error}
    </p>
  )
}

export function TextField({ label, error, ...props }) {
  const describedBy = error ? `${props.id}-error` : undefined
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        className={fieldClass}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      <ErrorText id={props.id} error={error} />
    </div>
  )
}

export function TextAreaField({ label, error, ...props }) {
  const describedBy = error ? `${props.id}-error` : undefined
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        className={`${fieldClass} min-h-36 resize-y`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      <ErrorText id={props.id} error={error} />
    </div>
  )
}

export function SelectField({ label, error, children, ...props }) {
  const describedBy = error ? `${props.id}-error` : undefined
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <select
          className={`${fieldClass} appearance-none pr-10`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <ErrorText id={props.id} error={error} />
    </div>
  )
}
