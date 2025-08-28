
const testimonials = [
  { name: 'Aisha', text: 'Vertigo boosted my confidence in English within weeks!' },
  { name: 'Rahul', text: 'Great mentors and practical training. Highly recommend.' },
  { name: 'Meera', text: 'Cleared IELTS with a higher band than expected.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-primary-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-primary-900">Testimonials</h2>
        <p className="mt-2 text-primary-800">What learners say about us</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 border border-primary-100 shadow">
              <blockquote className="text-primary-800">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-primary-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

