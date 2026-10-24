import { cvDriveId } from "@/lib/site";

// Serves the CV from Google Drive so a new version goes live without a redeploy.
// Falls back to the bundled PDF if no Drive ID is set or Drive doesn't return a PDF.
export const dynamic = "force-dynamic";

const fallback = "/pdfs/GeorgianaIonCV.pdf";

export async function GET(request: Request) {
  try {
    if (!cvDriveId) throw new Error("No Drive file ID set");

    const file = await fetch(`https://drive.google.com/uc?export=download&id=${cvDriveId}`, { cache: "no-store" });
    if (!file.ok) throw new Error(`Drive fetch failed: ${file.status}`);

    // Drive sends PDFs as application/octet-stream, so check the file signature instead of the content type.
    const pdf = await file.arrayBuffer();
    if (new TextDecoder().decode(pdf.slice(0, 4)) !== "%PDF") throw new Error("Drive returned non-PDF");

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Georgiana-Ion-CV.pdf"',
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("CV unavailable on Drive, serving bundled PDF", error);
    return Response.redirect(new URL(fallback, request.url), 307);
  }
}
