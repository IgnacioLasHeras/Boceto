import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Save, Lock, Eye, EyeOff } from "lucide-react";
import {
  DEFAULT_CONFIG,
  getAdminPassword,
  loadAIConfig,
  saveAIConfig,
  setAdminPassword,
  type AIConfig,
} from "@/lib/aiConfig";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · BOCETO" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [cfg, setCfg] = useState<AIConfig>(DEFAULT_CONFIG);
  const [showKey, setShowKey] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (authed) setCfg(loadAIConfig());
  }, [authed]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pass === getAdminPassword()) {
      setAuthed(true);
      setErr("");
    } else {
      setErr("Contraseña incorrecta.");
    }
  }

  function save() {
    saveAIConfig(cfg);
    if (newPass.trim().length >= 4) {
      setAdminPassword(newPass.trim());
      setNewPass("");
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <form
          onSubmit={login}
          className="w-full max-w-sm space-y-4 rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center gap-2 text-primary">
            <Lock className="h-5 w-5" />
            <h1 className="text-lg font-semibold">Admin BOCETO</h1>
          </div>
          <p className="text-xs text-muted-foreground">
            Acceso restringido. Contraseña por defecto: <code>boceto2026</code> (cambiala adentro).
          </p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
          {err && <p className="text-xs text-destructive">{err}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-orange px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Entrar
          </button>
          <Link to="/" className="block text-center text-xs text-muted-foreground hover:text-foreground">
            ← Volver al sitio
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Volver al sitio
          </Link>
          <span className="text-xs text-muted-foreground">Configuración local (este navegador)</span>
        </div>

        <h1 className="font-display mb-2 text-3xl font-bold">Panel del Asistente IA</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Configurá la personalidad, el modelo y la API key de OpenAI. Todo se guarda en este navegador.
        </p>

        <div className="space-y-6 rounded-xl border border-border bg-card p-6">
          <Field label="Nombre del negocio (visible en el chat)">
            <input
              className="input"
              value={cfg.businessName}
              onChange={(e) => setCfg({ ...cfg, businessName: e.target.value })}
            />
          </Field>

          <Field
            label="API Key de OpenAI"
            hint="Obtenela en platform.openai.com/api-keys. Queda en tu navegador. Atención: si alguien inspecciona la red puede verla — para máxima seguridad usá un backend."
          >
            <div className="relative">
              <input
                type={showKey ? "text" : "password"}
                className="input pr-10"
                value={cfg.apiKey}
                onChange={(e) => setCfg({ ...cfg, apiKey: e.target.value })}
                placeholder="sk-..."
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </Field>

          <Field label="Modelo">
            <select
              className="input"
              value={cfg.model}
              onChange={(e) => setCfg({ ...cfg, model: e.target.value })}
            >
              <option value="gpt-4o-mini">gpt-4o-mini (rápido y barato)</option>
              <option value="gpt-4o">gpt-4o (más capaz)</option>
              <option value="gpt-4.1-mini">gpt-4.1-mini</option>
            </select>
          </Field>

          <Field label="Mensaje de bienvenida">
            <textarea
              className="input min-h-[70px]"
              value={cfg.welcomeMessage}
              onChange={(e) => setCfg({ ...cfg, welcomeMessage: e.target.value })}
            />
          </Field>

          <Field label="Prompt del sistema (personalidad e instrucciones)">
            <textarea
              className="input min-h-[260px] font-mono text-xs"
              value={cfg.systemPrompt}
              onChange={(e) => setCfg({ ...cfg, systemPrompt: e.target.value })}
            />
          </Field>

          <Field label="Cambiar contraseña de admin (opcional, mín 4 caracteres)">
            <input
              type="password"
              className="input"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              placeholder="Dejar vacío para no cambiar"
            />
          </Field>

          <div className="flex items-center gap-3">
            <button
              onClick={save}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <Save className="h-4 w-4" /> Guardar configuración
            </button>
            {saved && <span className="text-xs text-primary">✓ Guardado</span>}
            <button
              onClick={() => setCfg(DEFAULT_CONFIG)}
              className="ml-auto text-xs text-muted-foreground hover:text-foreground"
            >
              Restablecer valores por defecto
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid hsl(var(--border, 0 0% 20%));
          background: var(--background);
          color: var(--foreground);
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        }
        .input:focus { outline: none; box-shadow: 0 0 0 1px var(--primary); }
      `}</style>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      {children}
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
}
