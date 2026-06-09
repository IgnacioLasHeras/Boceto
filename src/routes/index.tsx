import { createFileRoute } from "@tanstack/react-router";
import {
  Shield, Hammer, Building2, Home, Wrench, Sparkles, Bug, Zap,
  CheckCircle2, MessageCircle, Phone, MapPin, Clock, Instagram, Facebook,
  ArrowRight, Star, Award, Clock4, ShieldCheck, ThumbsUp, Users, FileText, Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-house.jpg";
import imgMosquitero from "@/assets/work-mosquitero.jpg";
import imgRejas from "@/assets/work-rejas.jpg";
import imgCerramiento from "@/assets/work-cerramiento.jpg";
import imgHerreria from "@/assets/work-herreria.jpg";
import imgReforma from "@/assets/work-reforma.jpg";
import { WhatsAppFloat, WA_LINK } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAFMETAL — Mosquiteros, Herrería y Reformas sin Romper · Buenos Aires" },
      { name: "description", content: "Mosquiteros a medida, herrería residencial y comercial, rejas, cerramientos y reformas sin romper en Buenos Aires. Presupuesto gratis por WhatsApp." },
    ],
  }),
  component: Landing,
});

const services = [
  { icon: Bug, title: "Mosquiteros a medida", desc: "Sistemas corredizos, enrollables y fijos. Aluminio y tela reforzada." },
  { icon: Shield, title: "Rejas y protecciones", desc: "Seguridad robusta con diseño moderno para ventanas y aberturas." },
  { icon: Home, title: "Herrería residencial", desc: "Portones, escaleras, barandas y trabajos a medida para tu hogar." },
  { icon: Building2, title: "Herrería comercial", desc: "Cortinas metálicas, frentes, vitrinas y estructuras para locales." },
  { icon: Hammer, title: "Cerramientos", desc: "Balcones, galerías y patios con aluminio, vidrio y estructura metálica." },
  { icon: Wrench, title: "Reparaciones y mantenimiento", desc: "Servicio técnico ágil para mosquiteros, rejas y aberturas." },
  { icon: Sparkles, title: "Reformas sin romper", desc: "Soluciones limpias y rápidas que no destruyen tu casa." },
  { icon: Zap, title: "Instalaciones rápidas", desc: "Equipos profesionales con cumplimiento estricto de plazos." },
];

const reasons = [
  { icon: Users, title: "Atención personalizada" },
  { icon: FileText, title: "Presupuestos sin cargo" },
  { icon: ShieldCheck, title: "Trabajos garantizados" },
  { icon: Sparkles, title: "Soluciones sin obras invasivas" },
  { icon: Award, title: "Materiales de primera calidad" },
  { icon: ThumbsUp, title: "Amplia experiencia en el rubro" },
  { icon: Clock4, title: "Cumplimiento de plazos" },
  { icon: MessageCircle, title: "Asesoramiento profesional" },
];

const gallery = [
  { src: imgMosquitero, label: "Mosquiteros instalados" },
  { src: imgRejas, label: "Rejas modernas" },
  { src: imgCerramiento, label: "Cerramientos" },
  { src: imgHerreria, label: "Trabajos de herrería" },
  { src: imgReforma, label: "Reformas terminadas" },
];

const steps = [
  { n: "01", icon: MessageCircle, title: "Contacto por WhatsApp", desc: "Escribinos y contanos qué necesitás." },
  { n: "02", icon: MapPin, title: "Visita y relevamiento", desc: "Coordinamos visita y tomamos medidas exactas." },
  { n: "03", icon: FileText, title: "Presupuesto personalizado", desc: "Cotización clara, sin cargo y sin compromiso." },
  { n: "04", icon: Truck, title: "Instalación y entrega", desc: "Trabajo prolijo, limpio y en tiempo acordado." },
];

const testimonials = [
  { name: "Lucía M.", area: "Palermo", text: "Instalaron mosquiteros en todo el departamento en una mañana. Súper prolijos y atentos." },
  { name: "Diego R.", area: "Villa Devoto", text: "Hicieron las rejas de mi casa. Calidad impecable y entrega en fecha. 100% recomendable." },
  { name: "Carolina P.", area: "Belgrano", text: "Reformaron mi baño sin romper paredes. Resultado increíble y sin escombros." },
];

function WAButton({ label, variant = "primary", className = "" }: { label: string; variant?: "primary" | "wa" | "outline"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]";
  const styles = {
    primary: "bg-gradient-orange text-primary-foreground shadow-glow",
    wa: "bg-whatsapp text-whatsapp-foreground shadow-card",
    outline: "border border-border bg-card/40 text-foreground backdrop-blur hover:bg-card",
  } as const;
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-orange">
              <Hammer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">DAF<span className="text-gradient-orange">METAL</span></span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#nosotros" className="hover:text-foreground">Nosotros</a>
            <a href="#galeria" className="hover:text-foreground">Galería</a>
            <a href="#proceso" className="hover:text-foreground">Proceso</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
          <WAButton label="Presupuesto" variant="wa" className="hidden md:inline-flex !px-4 !py-2 !text-xs" />
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vivienda moderna con herrería y cerramientos en Buenos Aires" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="container-x relative z-10 py-24">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-whatsapp animate-pulse" />
              Atendiendo en CABA y GBA · Respondemos en minutos
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Mosquiteros, Herrería y <span className="text-gradient-orange">Reformas sin Romper</span> en Buenos Aires
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              Soluciones rápidas, limpias y profesionales para hogares, departamentos y comercios. Presupuesto sin cargo y trabajos garantizados.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WAButton label="Solicitar Presupuesto por WhatsApp" variant="primary" />
              <a href="#galeria" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-card">
                Ver Trabajos Realizados <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { k: "+10", v: "Años de experiencia" },
                { k: "+1.500", v: "Obras realizadas" },
                { k: "100%", v: "Clientes satisfechos" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-bold text-gradient-orange sm:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Servicios</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Todo lo que tu hogar o comercio necesita</h2>
            <p className="mt-4 text-muted-foreground">Trabajamos con materiales de primera calidad y técnicas que no rompen tu propiedad.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Consultar <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <WAButton label="Consultar por mi servicio" variant="wa" />
          </div>
        </div>
      </section>

      {/* NOSOTROS / POR QUÉ */}
      <section id="nosotros" className="relative border-y border-border bg-graphite/40 py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">¿Por qué DAFMETAL?</div>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Profesionalismo, prolijidad y palabra cumplida.</h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Más de una década llevando soluciones de herrería y reformas a familias y comercios de Buenos Aires. Nuestro diferencial: trabajos limpios, sin obras invasivas y entregas en el plazo pactado.
              </p>
              <div className="mt-8">
                <WAButton label="Hablar con un asesor" variant="primary" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium pt-2">{r.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Trabajos realizados</h2>
            <p className="mt-4 text-muted-foreground">Una muestra de nuestras instalaciones recientes en Buenos Aires.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
            <div className="group relative col-span-2 row-span-2 md:col-span-3 md:row-span-2 aspect-square overflow-hidden rounded-xl">
              <img src={gallery[0].src} alt={gallery[0].label} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-medium uppercase tracking-wider text-primary">Destacado</div>
                <div className="font-display text-xl font-semibold">{gallery[0].label}</div>
              </div>
            </div>
            {gallery.slice(1).map((g) => (
              <div key={g.label} className="group relative col-span-1 md:col-span-3 lg:col-span-2 md:row-span-1 aspect-square overflow-hidden rounded-xl">
                <img src={g.src} alt={g.label} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 font-display text-sm font-semibold">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative border-y border-border bg-graphite/40 py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Cómo trabajamos</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Simple, claro y sin sorpresas</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-4 left-6 rounded-md bg-gradient-orange px-3 py-1 font-display text-sm font-bold text-primary-foreground">
                  {s.n}
                </div>
                <s.icon className="mt-3 h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonios</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-orange font-display text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top right, oklch(0.68 0.21 45 / 0.25), transparent 60%)" }} />
        </div>
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-orange shadow-glow">
              <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-6xl">
              ¿Necesitás una solución <span className="text-gradient-orange">rápida y profesional</span>?
            </h2>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Contactanos hoy mismo y recibí asesoramiento y presupuesto sin compromiso.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <WAButton label="Hablar por WhatsApp" variant="wa" className="!px-8 !py-4 !text-base" />
              <a href="tel:+5491100000000" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-8 py-4 text-base font-semibold backdrop-blur hover:bg-card">
                <Phone className="h-4 w-4" /> Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="border-t border-border bg-graphite/60">
        <div className="container-x py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-orange">
                  <Hammer className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-display text-lg font-bold">DAF<span className="text-gradient-orange">METAL</span></span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Mosquiteros, herrería y reformas sin romper en Buenos Aires. Más de 10 años brindando soluciones de calidad.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground"><Facebook className="h-4 w-4" /></a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-whatsapp hover:text-whatsapp-foreground"><MessageCircle className="h-4 w-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contacto</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +54 9 11 0000-0000</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp directo</li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> CABA y Gran Buenos Aires</li>
                <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /> Lun a Sáb · 8:00 a 19:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Servicios</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Mosquiteros a medida</li>
                <li>Rejas y protecciones</li>
                <li>Cerramientos</li>
                <li>Herrería general</li>
                <li>Reformas sin romper</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Zona de servicio</h4>
              <div className="mt-4 overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Mapa Buenos Aires"
                  src="https://www.google.com/maps?q=Buenos+Aires,+Argentina&output=embed"
                  width="100%" height="180" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block grayscale"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} DAFMETAL. Todos los derechos reservados.</div>
            <div>Buenos Aires, Argentina</div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
