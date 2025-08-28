export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-primary-900">About Vertigo</h2>
          <p className="mt-4 text-primary-800">
            Vertigo is an online education firm helping learners from all walks of life
            speak English with confidence through practical, outcome-oriented training.
            Programs include Spoken English, IELTS, Interview Skills, and Business English.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-primary-800">
            <li className="rounded-lg border border-primary-100 bg-white px-4 py-3 shadow">Spoken English</li>
            <li className="rounded-lg border border-primary-100 bg-white px-4 py-3 shadow">IELTS Coaching</li>
            <li className="rounded-lg border border-primary-100 bg-white px-4 py-3 shadow">Interview Skills</li>
            <li className="rounded-lg border border-primary-100 bg-white px-4 py-3 shadow">Business English</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden border border-primary-100 shadow">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
            alt="About Vertigo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

