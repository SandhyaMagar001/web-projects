import { whatsappLink } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex min-h-12 items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0e7468] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      aria-label="Chat with Himalaya Crest on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.45-.05.7.53.24.6.84 2.06.91 2.21.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.13-.28.27-.12.52.16.25.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.07.11.07.66-.17 1.34z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
