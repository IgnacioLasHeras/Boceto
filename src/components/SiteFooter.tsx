import {
  Hammer,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { WA_LINK } from "./WhatsAppFloat";

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border bg-graphite/60">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-orange">
                <Hammer className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">
                BO<span className="text-gradient-orange">CETO</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Mosquiteros, herrería y reformas sin romper en Buenos Aires. Más de
              10 años brindando soluciones de calidad.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-whatsapp hover:text-whatsapp-foreground"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +54 9 11 0000-0000
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp directo
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" /> CABA y Gran
                Buenos Aires
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5" /> Lun a Sáb ·
                8:00 a 19:00
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mosquiteros a medida</li>
              <li>Rejas y protecciones</li>
              <li>Cerramientos</li>
              <li>Herrería general</li>
              <li>Reformas sin romper</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Zona de servicio
            </h4>
            <div className="mt-4 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Mapa Buenos Aires"
                src="https://www.google.com/maps?q=Buenos+Aires,+Argentina&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} BOCETO. Todos los derechos
            reservados.
          </div>
          <div>Buenos Aires, Argentina</div>
        </div>
      </div>
    </footer>
  );
}
