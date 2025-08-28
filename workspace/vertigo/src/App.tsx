import { useState } from 'react'
import './App.css'
import WhatsAppButton from './components/WhatsAppButton'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton
        phone="919150219787"
        text={
          'Hi Haseena, I Would like to attend the level test. My name is\n\n'
        }
      />
    </div>
  )
}

export default App
