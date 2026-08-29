import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ENV_TO = process.env.CONTACT_TO ?? "info@steropes.fr";

const FROM = "IAcodify <iacodify@envoi.steropes.fr>";

const SIMPLE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TECH_OURS = "Nos technologies (Next.js, React, TypeScript, Tailwind, Python)";
const TECH_OTHER = "Autre technologie";
const PROJECT_NEW = "Nouvelle application";
const PROJECT_REPRISE = "Récupérer une application existante";

function isSimpleEmail(value: string): boolean {
  return SIMPLE_EMAIL.test(value);
}

function asStr(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function resendStatus(error: unknown): number {
  if (error && typeof error === "object") {
    const e = error as { statusCode?: number; status?: number; message?: string; name?: string };
    const code = Number(e.statusCode ?? e.status);
    const msg = String(e.message ?? e.name ?? "");
    if (code === 403 || /\b403\b/.test(msg) || /only send testing emails/i.test(msg)) {
      return 403;
    }
  }
  return 422;
}

function resendMessage(error: unknown): string {
  if (error && typeof error === "object" && "message" in error && (error as { message?: string }).message) {
    return String((error as { message: string }).message);
  }
  return "Erreur envoi email";
}

function row(key: string, val: string | undefined) {
  if (!val) return "";
  return '<div class="row"><span class="key">' + key + '</span><span class="val">' + val + "</span></div>";
}

function emailAdmin(d: Record<string, unknown>): string {
  const services = Array.isArray(d.services) && (d.services as string[]).length > 0
    ? row("Services", (d.services as string[]).join(", ")) : "";
  const technology = asStr(d.technology);
  const technologyOther = asStr(d.technologyOther);
  const techLine = technology === TECH_OTHER && technologyOther
    ? technology + " : " + technologyOther
    : technology;
  const projectType = asStr(d.projectType);
  const repriseBlock = projectType === PROJECT_REPRISE
    ? row("Pourquoi reprendre", asStr(d.repriseWhy)) +
      row("En production", asStr(d.repriseProd)) +
      row("Bugs", asStr(d.repriseBugs))
    : "";
  return (
    "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><style>" +
    "body{font-family:Arial,sans-serif;background:#0A0A0F;margin:0;padding:20px;color:#e5e7eb}" +
    ".card{background:#111827;border-radius:12px;padding:32px;max-width:600px;margin:0 auto}" +
    ".hdr{background:#008b9e;color:#fff;border-radius:8px;padding:16px 20px;margin-bottom:20px}" +
    ".hdr h1{margin:0;font-size:1.2rem}" +
    ".sec{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #374151}" +
    ".stitle{font-size:11px;font-weight:700;text-transform:uppercase;color:#00E8FF;margin-bottom:8px}" +
    ".row{display:flex;gap:8px;margin-bottom:4px;font-size:.88rem}" +
    ".key{color:#9ca3af;min-width:130px;flex-shrink:0}" +
    ".val{color:#f3f4f6;font-weight:500}" +
    "</style></head><body><div class='card'>" +
    "<div class='hdr'><h1>Nouveau contact IAcodify</h1></div>" +
    "<div class='sec'><div class='stitle'>Message</div>" +
    row("Nom", d.name as string) +
    row("Email", d.email as string) +
    row("Telephone", d.phone as string) +
    row("Entreprise", d.company as string) +
    row("Sujet", d.subject as string) +
    services +
    row("Technologies", techLine) +
    row("Projet", projectType) +
    repriseBlock +
    row("Message", d.message as string) +
    "</div></div></body></html>"
  );
}

function emailClient(d: Record<string, unknown>): string {
  const firstName = (d.name as string)?.split(" ")[0] ?? "merci";
  return (
    "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><style>" +
    "body{font-family:Arial,sans-serif;background:#0A0A0F;margin:0;padding:20px;color:#e5e7eb}" +
    ".card{background:#111827;border-radius:12px;padding:32px;max-width:560px;margin:0 auto}" +
    "h2{font-size:1.5rem;margin:0 0 8px;color:#fff}" +
    "p{line-height:1.7;color:#9ca3af;font-size:.92rem}" +
    "</style></head><body><div class='card'>" +
    "<p style='font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#00E8FF;margin-bottom:6px'>IAcodify</p>" +
    "<h2>Message recu, <span style='color:#00E8FF'>" + firstName + " !</span></h2>" +
    "<p>Votre message est bien arrive. On revient vers vous rapidement.</p>" +
    "<p style='font-size:.75rem;color:#6b7280;margin-top:20px;border-top:1px solid #374151;padding-top:12px'>IAcodify code ce site.</p>" +
    "</div></body></html>"
  );
}

function validateQualif(data: Record<string, unknown>): string | null {
  const technology = asStr(data.technology);
  const technologyOther = asStr(data.technologyOther);
  const projectType = asStr(data.projectType);

  if (!technology || (technology !== TECH_OURS && technology !== TECH_OTHER)) {
    return "Technologies manquantes";
  }
  if (technology === TECH_OTHER && !technologyOther) {
    return "Précisez la technologie";
  }
  if (!projectType || (projectType !== PROJECT_NEW && projectType !== PROJECT_REPRISE)) {
    return "Type de projet manquant";
  }
  if (projectType === PROJECT_REPRISE) {
    const repriseWhy = asStr(data.repriseWhy);
    const repriseProd = asStr(data.repriseProd);
    const repriseBugs = asStr(data.repriseBugs);
    const prodOk = repriseProd === "Oui" || repriseProd === "Non";
    const bugsOk = repriseBugs === "Oui" || repriseBugs === "Non";
    if (!repriseWhy || !prodOk || !bugsOk) {
      return "Champs reprise incomplets";
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] cle Resend manquante dans .env.local");
      return NextResponse.json({ error: "Config manquante" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await req.json() as Record<string, unknown>;

    if (!data.email || !data.name) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const visitorEmail = String(data.email).trim().toLowerCase();
    if (!isSimpleEmail(visitorEmail)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const qualifErr = validateQualif(data);
    if (qualifErr) {
      return NextResponse.json({ error: qualifErr }, { status: 400 });
    }

    const from = FROM;
    const to = ENV_TO;

    const adminResult = await resend.emails.send({
      from,
      to,
      replyTo: visitorEmail,
      subject: "Nouveau contact IAcodify - " + ((data.subject as string) || (data.name as string)),
      html: emailAdmin({ ...data, email: visitorEmail }),
    });

    if (adminResult.error) {
      const status = resendStatus(adminResult.error);
      const message = resendMessage(adminResult.error);
      console.error("[contact] admin send fail:", status, message);
      return NextResponse.json({ error: message }, { status });
    }

    const clientResult = await resend.emails.send({
      from,
      to: visitorEmail,
      subject: "Votre message est bien recu - IAcodify",
      html: emailClient(data),
    });
    if (clientResult.error) {
      const status = resendStatus(clientResult.error);
      const message = resendMessage(clientResult.error);
      console.error("[contact] client send fail:", status, message);
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] ERREUR :", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
