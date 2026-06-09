import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/5491100000000?text=Hola%20DAFMETAL%2C%20quisiera%20solicitar%20un%20presupuesto.";

export const WA_LINK = WA_URL;

export function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground animate-wa-pulse md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.2} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
