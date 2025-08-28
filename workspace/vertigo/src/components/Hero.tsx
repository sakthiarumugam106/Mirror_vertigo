import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-primary-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Learn Faster with Vertigo
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Real-world courses, expert mentors, and flexible schedules. Start your journey today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#courses" className="rounded-md bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700">Explore Courses</a>
            <a href="#contact" className="rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50">Get Consultation</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-video w-full max-w-md rounded-xl bg-primary-100" />
        </div>
      </div>
    </section>
  )
}

