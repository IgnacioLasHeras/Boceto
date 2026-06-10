// Cliente: configuración del asistente IA guardada en localStorage del navegador.
// No requiere backend — apto para hosting estático (Hostinger).

export type AIConfig = {
  apiKey: string;
  model: string;
  systemPrompt: string;
  welcomeMessage: string;
  businessName: string;
};

const STORAGE_KEY = "boceto.ai.config.v1";
const ADMIN_PASS_KEY = "boceto.admin.pass.v1";
export const DEFAULT_ADMIN_PASSWORD = "boceto2026";

export const DEFAULT_CONFIG: AIConfig = {
  apiKey: "",
  model: "gpt-4o-mini",
  businessName: "BOCETO",
  welcomeMessage:
    "¡Hola! 👋 Soy el asistente de BOCETO. Puedo ayudarte con consultas sobre mosquiteros, herrería, rejas, cerramientos y reformas, y darte una estimación inicial. ¿En qué te ayudo?",
  systemPrompt: `Sos el asistente virtual de BOCETO, empresa de Buenos Aires especializada en:
- Mosquiteros a medida (corredizos, enrollables, fijos)
- Rejas y protecciones
- Herrería residencial y comercial (portones, escaleras, barandas)
- Cerramientos de balcones y galerías
- Reformas sin romper

Tu rol:
1. Responder consultas con tono cálido, profesional y argentino (usá "vos").
2. Dar estimaciones APROXIMADAS de precios cuando el cliente describe medidas/material, aclarando siempre que el presupuesto final lo confirma un técnico tras visita o fotos.
3. Pedir datos clave: tipo de trabajo, medidas, material preferido, zona de Buenos Aires, urgencia.
4. Invitar a cerrar la consulta por WhatsApp para un presupuesto formal.

Nunca inventes precios fijos: dá rangos y recordá que son orientativos. Sé breve y claro (máx 4-5 líneas por respuesta).`,
};

export function loadAIConfig(): AIConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function saveAIConfig(cfg: AIConfig) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
}

export function getAdminPassword(): string {
  if (typeof window === "undefined") return DEFAULT_ADMIN_PASSWORD;
  return localStorage.getItem(ADMIN_PASS_KEY) || DEFAULT_ADMIN_PASSWORD;
}

export function setAdminPassword(pass: string) {
  localStorage.setItem(ADMIN_PASS_KEY, pass);
}
