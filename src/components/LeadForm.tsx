import { type FormEvent, useState, useRef } from 'react'
import { useLang } from '../i18n/LanguageProvider'

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}
function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  )
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function IconSend({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )
}
function IconAlert({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const FORM_ENDPOINT = 'https://formsubmit.co/contacto@metrolog.es'

export default function LeadForm() {
  const { t } = useLang()

  function validate(formData: Record<string, string>) {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = t.validation.nameRequired
    if (!formData.email.trim()) {
      errors.email = t.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.validation.emailInvalid
    }
    return errors
  }
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('name', formData.name)
      fd.append('email', formData.email)
      fd.append('phone', formData.phone)
      fd.append('company', formData.company)
      fd.append('message', formData.message)
      fd.append('_captcha', 'false')
      fd.append('_subject', 'Nuevo lead Metrolog Landing')

      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd })
      if (res.ok || res.status === 200) {
        setSubmitted(true)
      }
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  function inputClass(field: string) {
    const hasError = errors[field]
    return `w-full pl-12 pr-4 py-3.5 rounded-2xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-red-300 text-red-600 focus:ring-red-200 focus:border-red-400'
        : 'border-mborder text-gray-900 focus:ring-mblue/20 focus:border-mblue placeholder:text-gray-400'
    }`
  }

  if (submitted) {
    return (
      <section id="form" className="py-32 sm:py-36 bg-[#F9F9FB]">
        <div className="max-w-xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="reveal rounded-3xl border border-mborder bg-white overflow-hidden">
            <div className="px-10 py-20">
              <div className="w-16 h-16 rounded-full bg-mblue/10 flex items-center justify-center mx-auto mb-6">
                <IconCheck className="w-8 h-8 text-mblue" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{t.form.submittedTitle}</h2>
              <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
                {t.form.submittedText.replace('{name}', formData.name)}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-32 sm:py-36 bg-[#F9F9FB]">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="reveal text-center max-w-xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            {t.form.title}
          </h2>
          <p className="mt-5 text-base text-gray-400 leading-relaxed">
            {t.form.subtitle}
          </p>
        </div>

        <div className="reveal reveal-delay-1 rounded-3xl border border-mborder bg-white p-8 sm:p-12">
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.nameLabel} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder={t.form.namePlaceholder} className={inputClass('name')} />
                </div>
                {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><IconAlert className="w-3 h-3" />{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.emailLabel} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} className={inputClass('email')} />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><IconAlert className="w-3 h-3" />{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t.form.phoneLabel}</label>
                <div className="relative">
                  <IconPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.form.phonePlaceholder} className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-mborder bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mblue/20 focus:border-mblue transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t.form.companyLabel}</label>
                <div className="relative">
                  <IconBuilding className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder={t.form.companyPlaceholder} className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-mborder bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mblue/20 focus:border-mblue transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.form.messageLabel}</label>
              <div className="relative">
                <IconMessage className="absolute left-4 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={t.form.messagePlaceholder} className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-mborder bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mblue/20 focus:border-mblue transition-all resize-none" />
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" disabled={loading} className="w-full px-5 py-3.5 rounded-2xl bg-mblue text-white text-sm font-medium hover:bg-[#3d6ae6] transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (<IconSend className="w-4 h-4" />)}
                {t.form.submit}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center leading-relaxed pt-1">{t.form.disclaimer}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
