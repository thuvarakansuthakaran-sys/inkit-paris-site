import { NextRequest, NextResponse } from "next/server";

// TODO (avant mise en production) : brancher un service d'envoi d'email
// (ex. Resend, SMTP) pour transmettre chaque demande à l'équipe Inkit Paris,
// avec le fichier joint en pièce jointe. Pour l'instant, la demande est
// seulement journalisée côté serveur.
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("file");
  const selectionRaw = formData.get("selection");
  const summary = {
    produit: formData.get("produit"),
    selection: typeof selectionRaw === "string" ? JSON.parse(selectionRaw) : null,
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    clientType: formData.get("clientType"),
    textileType: formData.get("textileType"),
    quantity: formData.get("quantity"),
    technique: formData.getAll("technique"),
    markingLocation: formData.get("markingLocation"),
    deliveryDate: formData.get("deliveryDate"),
    message: formData.get("message"),
    fileName: file instanceof File ? file.name : null,
  };

  console.log("[devis] Nouvelle demande reçue :", summary);

  return NextResponse.json({ ok: true });
}
