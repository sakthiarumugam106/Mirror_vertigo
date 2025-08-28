
type WhatsAppButtonProps = {
  phone: string
  text?: string
}

const buildWhatsAppUrl = (phone: string, text?: string): string => {
  const params = new URLSearchParams()
  if (phone) params.set('phone', phone)
  if (text) params.set('text', text)
  return `https://api.whatsapp.com/send?${params.toString()}`
}

export function WhatsAppButton({ phone, text }: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(phone, text)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg transition-colors px-4 py-3 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 106.1 32 9.4 128.7 9.4 246.5c0 37.9 9.9 75 28.6 107.7L0 480l129.5-37.9c31.5 17.2 67.1 26.3 104.4 26.3h.1c117.8 0 214.5-96.7 214.5-214.5 0-59.3-23.1-115.1-65.1-157.1zM223.9 438.6c-33.1 0-65.5-8.9-93.8-25.7l-6.7-4-76.9 22.5 22.8-74.7-4.4-7.3c-18.2-30.2-27.8-64.9-27.8-100 0-106.7 86.8-193.5 193.6-193.5 51.7 0 100.3 20.1 136.7 56.6 36.4 36.4 56.5 85 56.5 136.7 0 106.8-86.8 193.4-193.5 193.4zm101.2-145.6c-5.5-2.8-32.6-16.1-37.6-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.6 21.6-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.3-8.6-44.3-27.3-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.6 5.5-6.8 8.2-10.2 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.4-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.5 19.1-19.5 46.6 0 27.5 20 54 22.8 57.7 2.8 3.7 39.4 60.2 95.2 84.4 13.3 5.7 23.7 9.1 31.8 11.6 13.3 4.2 25.5 3.6 35.1 2.1 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.8 4.6-23.7 3.2-26.1-1.2-2.3-5.1-3.7-10.6-6.5z"/>
      </svg>
      <span className="font-semibold">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

