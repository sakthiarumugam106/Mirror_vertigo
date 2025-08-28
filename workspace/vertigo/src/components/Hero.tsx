
export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-primary-100 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Speak English with Confidence
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Expert-led programs in Spoken English, IELTS, and Interview Skills.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#courses" className="rounded-lg bg-primary-700 px-6 py-3 text-white font-bold shadow hover:bg-primary-800">Explore Courses</a>
            <a href="#contact" className="rounded-lg border-2 border-primary-700 px-6 py-3 text-primary-700 font-bold hover:bg-primary-50">Get Consultation</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-video w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-primary-200" />
        </div>
      </div>
    </section>
  )
}

