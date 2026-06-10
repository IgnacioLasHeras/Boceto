import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import imgMosquitero from "@/assets/work-mosquitero.jpg";
import imgRejas from "@/assets/work-rejas.jpg";
import imgCerramiento from "@/assets/work-cerramiento.jpg";
import imgHerreria from "@/assets/work-herreria.jpg";
import imgReforma from "@/assets/work-reforma.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { AIChat } from "@/components/AIChat";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería de Trabajos — BOCETO" },
      {
        name: "description",
        content:
          "Portfolio de trabajos de mosquiteros, herrería, rejas, cerramientos y reformas realizados por BOCETO en Buenos Aires.",
      },
      { property: "og:title", content: "Galería de Trabajos — BOCETO" },
      {
        property: "og:description",
        content:
          "Conocé nuestros trabajos de herrería y reformas en Buenos Aires.",
      },
    ],
  }),
  component: GalleryPage,
});

const gallery = [
  { src: imgMosquitero, label: "Mosquiteros instalados", category: "Mosquiteros" },
  { src: imgRejas, label: "Rejas modernas", category: "Rejas" },
  { src: imgCerramiento, label: "Cerramientos", category: "Cerramientos" },
  { src: imgHerreria, label: "Trabajos de herrería", category: "Herrería" },
  { src: imgReforma, label: "Reformas terminadas", category: "Reformas" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-24 pb-16">
        <div className="container-x">
          <div className="mb-8 flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Inicio
            </a>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Trabajos realizados
            </h1>
            <p className="mt-4 text-muted-foreground">
              Una muestra de nuestras instalaciones recientes en Buenos Aires.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
            <div className="group relative col-span-2 row-span-2 md:col-span-3 md:row-span-2 aspect-square overflow-hidden rounded-xl">
              <img
                src={gallery[0].src}
                alt={gallery[0].label}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-medium uppercase tracking-wider text-primary">
                  Destacado
                </div>
                <div className="font-display text-xl font-semibold">
                  {gallery[0].label}
                </div>
              </div>
            </div>
            {gallery.slice(1).map((g) => (
              <div
                key={g.label}
                className="group relative col-span-1 md:col-span-3 lg:col-span-2 md:row-span-1 aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 font-display text-sm font-semibold">
                  {g.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <AIChat />
    </div>
  );
}
