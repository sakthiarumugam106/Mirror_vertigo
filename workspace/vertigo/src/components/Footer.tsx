import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Vertigo. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#courses" className="hover:text-primary-700">Courses</a>
          <a href="#testimonials" className="hover:text-primary-700">Testimonials</a>
          <a href="#contact" className="hover:text-primary-700">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

