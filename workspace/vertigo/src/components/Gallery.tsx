export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-primary-900">Gallery</h2>
        <p className="mt-2 text-primary-800">Highlights from our sessions</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-primary-100 shadow">
              <img src={src} alt="Vertigo gallery" className="h-44 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

