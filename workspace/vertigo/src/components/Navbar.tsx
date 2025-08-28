import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-xl font-extrabold text-primary-700">Vertigo</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#courses" className="hover:text-primary-700">Courses</a>
          <a href="#testimonials" className="hover:text-primary-700">Testimonials</a>
          <a href="#contact" className="hover:text-primary-700">Contact</a>
        </nav>
        <a
          href="#contact"
          className="ml-4 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-primary-700"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}

