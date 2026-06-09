import { Hammer } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WAButton } from "./WAButton";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-orange">
            <Hammer className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            BO<span className="text-gradient-orange">CETO</span>
          </span>
        </Link>
        <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicios" className="hover:text-foreground">
            Servicios
          </a>
          <a href="#nosotros" className="hover:text-foreground">
            Nosotros
          </a>
          <Link to="/galeria" className="hover:text-foreground">
            Galería
          </Link>
          <a href="#proceso" className="hover:text-foreground">
            Proceso
          </a>
          <a href="#contacto" className="hover:text-foreground">
            Contacto
          </a>
        </nav>
        <WAButton
          label="Presupuesto"
          variant="wa"
          className="hidden md:inline-flex !px-4 !py-2 !text-xs"
        />
      </div>
    </header>
  );
}
