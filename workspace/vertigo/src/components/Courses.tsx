
const courses = [
  { title: 'Spoken English', desc: 'Improve fluency, grammar, and confidence.' },
  { title: 'IELTS Coaching', desc: 'Band-targeted prep with mock tests.' },
  { title: 'Interview Skills', desc: 'Resume, mock interviews, soft skills.' },
  { title: 'Business English', desc: 'Emails, presentations, meetings.' }
]

export default function Courses() {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-slate-900">Courses</h2>
        <p className="mt-2 text-slate-600">Choose from our popular offerings</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <div key={c.title} className="rounded-2xl border border-primary-100 p-6 bg-white shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-primary-700 font-bold">Enroll →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

