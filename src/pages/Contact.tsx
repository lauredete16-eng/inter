import { useState } from 'react'
import { CheckCircle2, Info } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

type Form = {
  name: string
  email: string
  subject: string
  message: string
}

const empty: Form = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

function validate(f: Form) {
  const e: Partial<Form> = {}

  if (f.name.trim().length < 2) {
    e.name = 'Veuillez saisir votre nom complet.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    e.email = 'Veuillez saisir une adresse e-mail valide.'
  }

  if (f.subject.trim().length < 3) {
    e.subject = 'Veuillez préciser le sujet de votre demande.'
  }

  if (f.message.trim().length < 10) {
    e.message = 'Votre message doit contenir au moins 10 caractères.'
  }

  return e
}

export default function Contact() {
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [done, setDone] = useState(false)

  const submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const e = validate(form)
    setErrors(e)
    setDone(false)

    if (Object.keys(e).length === 0) {
      setDone(true)
      setForm(empty)
      setErrors({})
    }
  }

  const field = (
    k: keyof Form,
    label: string,
    area = false
  ) => (
    <div>
      <label
        htmlFor={k}
        className="mb-1 block text-sm font-medium"
      >
        {label}
      </label>

      {area ? (
        <textarea
          id={k}
          name={k}
          rows={5}
          className="input"
          value={form[k]}
          onChange={(e) =>
            setForm({ ...form, [k]: e.target.value })
          }
          aria-invalid={Boolean(errors[k])}
          aria-describedby={errors[k] ? `${k}-error` : undefined}
        />
      ) : (
        <input
          id={k}
          name={k}
          type={k === 'email' ? 'email' : 'text'}
          className="input"
          value={form[k]}
          onChange={(e) =>
            setForm({ ...form, [k]: e.target.value })
          }
          aria-invalid={Boolean(errors[k])}
          aria-describedby={errors[k] ? `${k}-error` : undefined}
        />
      )}

      {errors[k] && (
        <p
          id={`${k}-error`}
          className="mt-1 text-sm text-notice-600"
          role="alert"
        >
          {errors[k]}
        </p>
      )}
    </div>
  )

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <SectionTitle
        title="Contact"
        text="Une question ou une demande d'information ? Contactez notre équipe à l'aide du formulaire ci-dessous."
      />

      <p className="mb-6 flex gap-2 rounded border border-inst-600/30 bg-inst-100 p-4 text-sm">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-inst-600" />
        Veuillez remplir tous les champs obligatoires afin de nous
        permettre de traiter votre demande dans les meilleures conditions.
      </p>

      {done && (
        <p
          className="mb-6 flex gap-2 rounded border border-green-300 bg-green-50 p-4 text-sm text-green-900"
          role="status"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Les informations saisies sont valides. Pour recevoir et
          traiter les demandes, le formulaire doit être relié à un
          service d'envoi.
        </p>
      )}

      <form
        onSubmit={submit}
        noValidate
        className="card space-y-4 p-6"
      >
        {field('name', 'Nom complet')}
        {field('email', 'Adresse e-mail')}
        {field('subject', 'Objet de la demande')}
        {field('message', 'Votre message', true)}

        <button
          type="submit"
          className="btn-primary"
        >
          Envoyer ma demande
        </button>
      </form>
    </div>
  )
}