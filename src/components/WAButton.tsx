import { MessageCircle } from "lucide-react";
import { WA_LINK } from "./WhatsAppFloat";

const styles = {
  primary: "bg-gradient-orange text-primary-foreground shadow-glow",
  wa: "bg-whatsapp text-whatsapp-foreground shadow-card",
  outline: "border border-border bg-card/40 text-foreground backdrop-blur hover:bg-card",
} as const;

export function WAButton({
  label,
  variant = "primary",
  className = "",
}: {
  label: string;
  variant?: "primary" | "wa" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]";
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
