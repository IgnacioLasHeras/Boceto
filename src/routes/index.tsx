import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Hammer, Building2, Home, Wrench, Sparkles, Bug, Zap,
  CheckCircle2, MessageCircle, Phone, MapPin, Clock, Instagram, Facebook,
  ArrowRight, Star, Award, Clock4, ShieldCheck, ThumbsUp, Users, FileText, Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-house.jpg";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WAButton } from "@/components/WAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOCETO — Mosquiteros, Herrería y Reformas sin Romper · Buenos Aires" },
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

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

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
              <Link to="/galeria" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-card">
                Ver Trabajos Realizados <ArrowRight className="h-4 w-4" />
              </Link>
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
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">¿Por qué BOCETO?</div>
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

      <SiteFooter />

      <WhatsAppFloat />
    </div>
  );
}
