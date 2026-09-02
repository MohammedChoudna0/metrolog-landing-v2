import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider'
import { SIGNUP_URL } from '../lib/appUrl'
import Corners from './Corners'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contacto@metrolog.es'

export default function LeadForm() {
  const { t } = useLang()

  function validate(formData: Record<string, string>, consent: boolean) {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = t.validation.nameRequired
    if (!formData.email.trim()) {
      errors.email = t.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.validation.emailInvalid
    }
    if (!consent) errors.consent = t.validation.consentRequired
    return errors
  }

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    _honey: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleConsentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConsent(e.target.checked)
    if (errors.consent) {
      setErrors(prev => {
        const next = { ...prev }
        delete next.consent
        return next
      })
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate(formData, consent)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // Honeypot filled: silently drop (bot), fake success so it doesn't retry.
    if (formData._honey) {
      setSubmitted(true)
      return
    }

    setLoading(true)
    setSendError(false)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          _captcha: 'false',
          _subject: 'Nuevo lead Metrolog Landing',
          _honey: formData._honey,
        }),
      })
      let ok = res.ok
      try {
        const data = await res.json()
        if (data && data.success === 'false') ok = false
      } catch {
        // Non-JSON response: fall back to HTTP status.
      }
      if (ok) {
        setSubmitted(true)
      } else {
        setSendError(true)
      }
    } catch {
      setSendError(true)
    } finally {
      setLoading(false)
    }
  }

  function inputClass(field: string) {
    return `input${errors[field] ? ' input-error' : ''}`
  }

  return (
    <section id="contacto" className="bg-accent-900 text-neutral-100 px-6 sm:px-8 lg:px-10 py-20 sm:py-28">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-neutral-100 text-[28px] sm:text-[40px] mb-3">{t.cta.title}</h2>
        <p className="text-lg leading-relaxed text-accent-200">{t.cta.subtitle}</p>
        <p className="mt-4 text-sm text-accent-200">
          {t.form.orRegister}
          <a href={SIGNUP_URL} className="underline text-neutral-100 hover:text-mblue transition-colors">
            {t.form.orRegisterLink}
          </a>
        </p>
      </div>

      <div className="blueprint bg-bg text-text max-w-xl mx-auto mt-16 p-8">
        <Corners />

        {submitted ? (
          <div className="text-center py-6">
            <h3 className="mb-2">{t.form.submittedTitle}</h3>
            <p className="text-text/70">{t.form.submittedText.replace('{name}', formData.name)}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="field">
                <label htmlFor="name">{t.form.nameLabel} <span className="text-mblue">*</span></label>
                <input className={inputClass('name')} id="name" name="name" required value={formData.name} onChange={handleChange} placeholder={t.form.namePlaceholder} />
                {errors.name && <p className="mt-1.5 text-xs" style={{ color: '#b3453a' }}>{errors.name}</p>}
              </div>
              <div className="field">
                <label htmlFor="email">{t.form.emailLabel} <span className="text-mblue">*</span></label>
                <input className={inputClass('email')} id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} />
                {errors.email && <p className="mt-1.5 text-xs" style={{ color: '#b3453a' }}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="field">
                <label htmlFor="phone">{t.form.phoneLabel}</label>
                <input className="input" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t.form.phonePlaceholder} />
              </div>
              <div className="field">
                <label htmlFor="company">{t.form.companyLabel}</label>
                <input className="input" id="company" name="company" value={formData.company} onChange={handleChange} placeholder={t.form.companyPlaceholder} />
              </div>
            </div>

            <div className="field mb-6">
              <label htmlFor="message">{t.form.messageLabel}</label>
              <textarea className="input" id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={t.form.messagePlaceholder} />
            </div>

            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
              <label htmlFor="_honey">No rellenar</label>
              <input tabIndex={-1} autoComplete="off" id="_honey" name="_honey" value={formData._honey} onChange={handleChange} />
            </div>

            <div className="field mb-6">
              <label htmlFor="consent" className="flex items-start gap-2.5 cursor-pointer text-sm font-normal">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={consent}
                  onChange={handleConsentChange}
                  className="mt-0.5 shrink-0 accent-[#53a3b4]"
                />
                <span>
                  {t.form.consentBefore}
                  <Link to="/politica-de-privacidad" className="underline hover:text-mblue transition-colors">{t.legal.politicaPrivacidad}</Link>
                  {t.form.consentAfter}
                </span>
              </label>
              {errors.consent && <p className="mt-1.5 text-xs" style={{ color: '#b3453a' }}>{errors.consent}</p>}
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary btn-block blueprint">
              <Corners />
              {loading ? '…' : t.form.submit}
            </button>
            {sendError && (
              <p className="mt-3 text-sm text-center" style={{ color: '#b3453a' }} role="alert">
                {t.form.errorText}
              </p>
            )}
            <p className="mt-3 text-xs text-center text-text/60">{t.form.disclaimer}</p>
          </form>
        )}
      </div>
    </section>
  )
}
