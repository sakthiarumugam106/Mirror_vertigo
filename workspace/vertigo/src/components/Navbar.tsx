
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-primary-700 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-2xl font-extrabold tracking-tight">Vertigo</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#courses" className="hover:text-primary-200">Courses</a>
          <a href="#testimonials" className="hover:text-primary-200">Testimonials</a>
          <a href="#contact" className="hover:text-primary-200">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=919150219787&text=Hi%20Haseena%2C%20I%20Would%20like%20to%20attend%20the%20level%20test.%20My%20name%20is%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-white text-sm font-bold shadow hover:bg-green-600"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-primary-700 text-sm font-bold shadow hover:bg-primary-50"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

