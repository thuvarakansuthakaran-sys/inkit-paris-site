import { NextRequest, NextResponse } from "next/server";

// TODO (avant mise en production) : brancher un service d'envoi d'email
// (ex. Resend, SMTP) pour transmettre chaque message à l'équipe Inkit Paris.
export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("[contact] Nouveau message reçu :", data);
  return NextResponse.json({ ok: true });
}
