import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { loadAIConfig, type AIConfig } from "@/lib/aiConfig";

type Msg = { role: "user" | "assistant" | "system"; content: string };

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [cfg, setCfg] = useState<AIConfig | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = loadAIConfig();
    setCfg(c);
    setMessages([{ role: "assistant", content: c.welcomeMessage }]);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    if (!cfg || !input.trim() || loading) return;
    setError(null);
    if (!cfg.apiKey) {
      setError("El asistente aún no está configurado. El administrador debe cargar la API key en /admin.");
      return;
    }
    const userMsg: Msg = { role: "user", content: input.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cfg.apiKey}`,
        },
        body: JSON.stringify({
          model: cfg.model || "gpt-4o-mini",
          messages: [
            { role: "system", content: cfg.systemPrompt },
            ...next.filter((m) => m.role !== "system"),
          ],
          temperature: 0.6,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(`OpenAI ${res.status}: ${t.slice(0, 200)}`);
      }
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content ?? "(sin respuesta)";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setError(e?.message || "Error al contactar al asistente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir asistente IA"
        className="fixed bottom-5 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-orange text-primary-foreground shadow-glow transition-transform hover:scale-105 md:h-16 md:w-16"
      >
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-gradient-orange px-4 py-3 text-primary-foreground">
            <Bot className="h-5 w-5" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Asistente {cfg?.businessName ?? "BOCETO"}</div>
              <div className="text-[11px] opacity-80">Cotizaciones y consultas · 24/7</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background/40 px-4 py-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-muted text-muted-foreground max-w-[60%] rounded-lg px-3 py-2 text-xs italic">
                Escribiendo…
              </div>
            )}
            {error && (
              <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta…"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
