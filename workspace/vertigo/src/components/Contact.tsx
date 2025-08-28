import { useMemo, useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const phone = '919150219787'
  const baseText = 'Hi Haseena, I Would like to attend the level test. My name is\n\n'
  const whatsappUrl = useMemo(() => {
    const text = `${baseText}${name ? name : ''}`
    const params = new URLSearchParams({ phone, text })
    return `https://api.whatsapp.com/send?${params.toString()}`
  }, [name])

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-primary-900">Contact</h2>
        <p className="mt-2 text-primary-800">Send us a message and we’ll reach out.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-primary-100 p-6 bg-white shadow">
            <label className="block text-sm font-medium text-primary-900">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-md border border-primary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your name"
            />
            <div className="mt-4 flex gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-white font-semibold hover:bg-primary-700">
                WhatsApp
              </a>
              <button className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 font-semibold hover:bg-slate-50">
                Submit
              </button>
            </div>
          </form>
          <div className="rounded-2xl border border-primary-100 p-6 bg-white shadow">
            <h3 className="text-lg font-semibold text-primary-900">Reach us</h3>
            <p className="mt-2 text-primary-800 text-sm">Phone: +91 91502 19787</p>
            <p className="mt-1 text-primary-800 text-sm">Email: info@vertigo.example</p>
            <p className="mt-1 text-primary-800 text-sm">Location: Kochi, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

