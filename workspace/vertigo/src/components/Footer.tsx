
export default function Footer() {
  return (
    <footer className="mt-16 bg-primary-900 text-primary-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-extrabold">Vertigo</h4>
            <p className="mt-3 text-sm/6 text-primary-100/80">
              AngloFone Edtech Private Limited
              <br />3rd floor, Rathinam Circle View, Race Course Road, Coimbatore-641 018 Tamil Nadu.
              <br />Space and more business park @ Madhapur #3 1-89/A/8/C/2,
              <br />Adjacent to Vaishnavi Pride Apartments, Vittal Rao Nagar,
              <br />Madhapur, Hyderabad Telangana - 500081
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-primary-200">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#top">Home</a></li>
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#courses">Courses</a></li>
              <li><a className="hover:text-white" href="#testimonials">Testimonials</a></li>
              <li><a className="hover:text-white" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-primary-200">Courses</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Foundation Course</li>
              <li>Beginner Course</li>
              <li>Mediate Course</li>
              <li>Premium Speak-Out Course</li>
              <li>IELTS Course</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-primary-200">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Phone: +91 91502 19787</li>
              <li>Email: manager@anglofone.co.in</li>
              <li>
                <a className="inline-flex items-center gap-2 text-white font-bold hover:underline" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919150219787&text=Hi%20Haseena%2C%20I%20Would%20like%20to%20attend%20the%20level%20test.%20My%20name%20is%0A%0A">
                  WhatsApp Now
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-primary-100/80">
              <a className="hover:text-white" href="#">Facebook</a>
              <span className="opacity-40">•</span>
              <a className="hover:text-white" href="#">Instagram</a>
              <span className="opacity-40">•</span>
              <a className="hover:text-white" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Vertigo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <span className="opacity-40">|</span>
            <a className="hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

