import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-primary-800 text-primary-100">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold">© {new Date().getFullYear()} Vertigo</p>
        <nav className="flex items-center gap-6 font-semibold">
          <a href="#courses" className="hover:text-white">Courses</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

