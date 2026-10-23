"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/lib/site";
import { Daisy, Fern, Sparkle, Squiggle } from "./Decor";

// The contact form, dressed as a letter in an envelope.
// Any element with [data-open-letter] (the "Let's talk" links, the contact button) opens it.
//
//   form ──Seal and send──▶ sealing ──▶ sent
//    ▲                         │
//    └──────── error ──────────┘
//
// On "sent" the sealed envelope doesn't fly off: the thank-you envelope takes its exact place and
// size, then glides into its own spot, so it reads as one envelope moving.
//
// Each stage is a data-stage value on the <dialog>; globals.css choreographs the motion for it.

type Stage = "form" | "sealing" | "sent";
type Draft = { name: string; email: string; subject: string; message: string };
type Delivery = { ok: true } | { ok: false; error: string };

const emptyDraft: Draft = { name: "", email: "", subject: "", message: "" };

// Must cover the seal choreography in globals.css: letter tucks in, flap folds, wax seal stamps.
const SEAL_TIME = 1800;
const GLIDE_TIME = 1000;
const CLOSE_TIME = 260;
const MIN_FIT = 0.6;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Delivered by EmailJS. The template's variables are {{name}}, {{email}}, {{subject}} and {{message}}.
// NEXT_PUBLIC_ values are inlined at build time, so they must be read by their full names.
const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const DELIVERY_FAILED = `Your letter couldn't be sent. Please try again, or write to ${site.email}.`;

async function deliver(draft: Draft): Promise<Delivery> {
  const { serviceId, templateId, publicKey } = emailjsConfig;
  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS is not configured: set the NEXT_PUBLIC_EMAILJS_* environment variables.");
    return { ok: false, error: DELIVERY_FAILED };
  }
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: draft.name.trim(),
        email: draft.email.trim(),
        subject: draft.subject.trim() || "A letter from your portfolio",
        message: draft.message.trim(),
      },
      { publicKey },
    );
    return { ok: true };
  } catch (error) {
    console.error("EmailJS delivery failed", error);
    return { ok: false, error: DELIVERY_FAILED };
  }
}

const HEART = "M10 17 C 3 12, 0.5 7, 3.5 4 C 6 1.6, 9 3, 10 5.4 C 11 3, 14 1.6, 16.5 4 C 19.5 7, 17 12, 10 17 Z";

export function LetterDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const envRef = useRef<HTMLDivElement>(null);
  const envBackRef = useRef<HTMLDivElement>(null);
  const sentEnvRef = useRef<HTMLDivElement>(null);
  // Where the sealed envelope sat on screen when it was swapped for the thank-you one.
  const sealedRect = useRef<DOMRect | null>(null);
  const [stage, setStage] = useState<Stage>("form");
  const [closing, setClosing] = useState(false);
  // Bumped on every open so the envelope remounts and replays its entrance.
  const [openCount, setOpenCount] = useState(0);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [error, setError] = useState("");

  const stageRef = useRef(stage);
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);
  const busy = stage === "sealing";

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setClosing(false);
    setError("");
    setOpenCount((n) => n + 1);
    dialog.showModal();
    // showModal focuses the close button inside the still-tucked letter and scrolls to it; start at the top.
    dialog.scrollTop = 0;
  }, []);

  const close = useCallback(() => {
    const current = stageRef.current;
    if (current === "sealing") return;
    setClosing(true);
    setTimeout(() => {
      dialogRef.current?.close();
      setClosing(false);
      // A sent letter is done; an unsent one stays as a draft for next time.
      if (current === "sent") {
        setDraft(emptyDraft);
        setStage("form");
      }
    }, CLOSE_TIME);
  }, []);

  // Capture phase, so next/link sees the default prevented and doesn't navigate.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest?.("[data-open-letter]");
      if (!trigger || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      open();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [open]);

  // Shrink the envelope so the whole letter fits the window without scrolling. Below MIN_FIT the
  // text gets too small to read, so very short windows scroll instead.
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const env = envRef.current;
    if (!dialog || !env || stage === "sent") return;
    const fit = () => {
      if (!dialog.open) return;
      const style = getComputedStyle(env);
      const room = dialog.clientHeight - parseFloat(style.marginTop) - parseFloat(style.getPropertyValue("--env-mb"));
      const scale = Math.max(MIN_FIT, Math.min(1, room / env.offsetHeight));
      env.style.setProperty("--fit", String(scale));
      env.style.setProperty("--fit-gap", `${env.offsetHeight * (1 - scale)}px`);
    };
    fit();
    // The letter grows when the signature wraps or an error appears.
    const observer = new ResizeObserver(fit);
    observer.observe(env);
    window.addEventListener("resize", fit);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [openCount, stage]);

  // Glide the thank-you envelope from where the sealed one was into its own place.
  useLayoutEffect(() => {
    if (stage !== "sent") return;
    const from = sealedRect.current;
    const el = sentEnvRef.current;
    sealedRect.current = null;
    if (from && el && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Compare centres and unrotated widths, so the envelope's resting tilt doesn't skew the maths.
      const to = el.getBoundingClientRect();
      const dx = from.left + from.width / 2 - (to.left + to.width / 2);
      const dy = from.top + from.height / 2 - (to.top + to.height / 2);
      const scale = from.width / el.offsetWidth;
      el.animate(
        [
          { translate: `${dx}px ${dy}px`, scale: `${scale}`, rotate: "0deg" },
          { translate: `${dx * 0.45}px ${dy * 0.45 - 36}px`, scale: `${(scale + 1) / 2}`, rotate: "3deg", offset: 0.5 },
          { translate: "0px 0px", scale: "1", rotate: "-3deg" },
        ],
        { duration: GLIDE_TIME, easing: "cubic-bezier(0.45, 0, 0.2, 1)" },
      );
    }
    backRef.current?.focus({ preventScroll: true });
  }, [stage]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setError("");
    setStage("sealing");
    const started = performance.now();
    const result = await deliver(draft);
    const remaining = (reduced ? 300 : SEAL_TIME) - (performance.now() - started);
    if (remaining > 0) await sleep(remaining);
    if (!result.ok) {
      setError(result.error);
      setStage("form");
      return;
    }
    sealedRect.current = envBackRef.current?.getBoundingClientRect() ?? null;
    setStage("sent");
  };

  const update = (key: keyof Draft) => (event: { target: { value: string } }) =>
    setDraft((d) => ({ ...d, [key]: event.target.value }));

  const firstName = draft.name.trim().split(/\s+/)[0] || "a friend";

  return (
    <dialog
      ref={dialogRef}
      className="letter"
      data-stage={stage}
      data-closing={closing || undefined}
      aria-labelledby={stage === "sent" ? "sent-title" : "letter-title"}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
    >
      <div
        className="letter-scene"
        onClick={(event) => {
          if (event.target === event.currentTarget && stage === "form") close();
        }}
      >
        <svg className="only-desktop letter-flourish" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
          <path d="M 720 1030 C 800 990, 960 950, 1040 870 C 1090 820, 1120 700, 1180 650 C 1212 624, 1250 606, 1248 578 C 1246 542, 1196 536, 1180 578 C 1164 536, 1114 542, 1112 578 C 1110 608, 1145 640, 1180 650 C 1215 660, 1300 640, 1350 580 C 1395 526, 1420 420, 1450 330" stroke="#FFF8F3" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className="only-mobile letter-flourish" viewBox="0 0 390 680" preserveAspectRatio="xMidYMin slice" fill="none" aria-hidden="true">
          <path d="M -10 98 C 40 72, 90 112, 140 94 C 160 87, 178 84, 195 82 C 212 72, 226 58, 224 46 C 222 30, 200 28, 195 44 C 190 28, 168 30, 166 46 C 164 58, 178 72, 195 82 C 212 92, 250 86, 280 92 C 320 100, 360 80, 400 90" stroke="#FFF8F3" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="letter-scrim" aria-hidden="true" />
        <div className="only-mobile" aria-hidden="true">
          <Sparkle color="#FFF8F3" width="14" height="14" style={{ position: "absolute", left: 34, top: 54 }} />
          <Sparkle color="#FFF8F3" width="10" height="10" style={{ position: "absolute", right: 40, top: 40 }} />
          <Sparkle color="#FFF8F3" width="8" height="8" style={{ position: "absolute", right: 72, top: 104 }} />
        </div>

        {stage !== "sent" ? (
          <div className="env" key={openCount} ref={envRef}>
            <span className="env-plant env-plant-left only-desktop" aria-hidden="true">
              <Fern width="90" height="200" stroke="#FFF8F3" strokeWidth="1.3" />
            </span>
            <span className="env-plant env-plant-right only-desktop" aria-hidden="true">
              <Daisy width="72" height="162" stroke="#FFF8F3" strokeWidth="1.5" />
            </span>
            <Sparkle color="#FFF8F3" width="18" height="18" className="only-desktop" style={{ position: "absolute", left: -40, top: 120 }} aria-hidden="true" />
            <Sparkle color="#FFF8F3" width="12" height="12" className="only-desktop" style={{ position: "absolute", right: -30, top: 200 }} aria-hidden="true" />

            {/* Inside of the flap, open behind the letter. */}
            <svg className="env-flap-back only-desktop" viewBox="0 0 620 220" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 220 L310 18 Q 310 10 318 14 L620 220 Z" fill="#F29B85" />
              <path d="M0 220 L310 14 L620 220" fill="none" stroke="#E98A73" strokeWidth="1" />
            </svg>
            <svg className="env-flap-back only-mobile" viewBox="0 0 358 130" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 130 L179 12 Q 179 6 184 9 L358 130 Z" fill="#F29B85" />
              <path d="M0 130 L179 9 L358 130" fill="none" stroke="#E98A73" strokeWidth="1" />
            </svg>
            <div className="env-back" ref={envBackRef} aria-hidden="true" />

            <div className="env-slot">
              <form id="letter-form" className="env-letter" onSubmit={submit}>
                <button type="button" className="env-close" aria-label="Close" onClick={close} disabled={busy}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4513A" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
                <Squiggle className="env-squiggle" stroke="#FF9A86" strokeWidth="1.6" />
                <h2 id="letter-title" className="env-title">
                  Dear Georgiana,
                </h2>
                <div className="env-fields">
                  <label className="env-field">
                    Your name
                    <input type="text" name="name" autoComplete="name" placeholder="Ana Popescu" required maxLength={100} value={draft.name} onChange={update("name")} readOnly={busy} />
                  </label>
                  <label className="env-field">
                    Your email
                    <input type="email" name="email" autoComplete="email" placeholder="ana@studio.com" required maxLength={200} value={draft.email} onChange={update("email")} readOnly={busy} />
                  </label>
                  <label className="env-field env-wide">
                    What&apos;s it about?
                    <input type="text" name="subject" placeholder="A frontend role on our team" maxLength={150} value={draft.subject} onChange={update("subject")} readOnly={busy} />
                  </label>
                  <label className="env-field env-wide">
                    Your message
                    <textarea name="message" rows={4} placeholder="Tell me a little about it…" required maxLength={5000} value={draft.message} onChange={update("message")} readOnly={busy} />
                  </label>
                </div>
                {error && (
                  <p className="env-error" role="alert">
                    {error}
                  </p>
                )}
                <p className="env-regards" aria-hidden="true">
                  kind regards
                  {/* Signed live with whatever is typed in "Your name". The line keeps its height while empty. */}
                  <span className="env-signature">{draft.name.trim()}</span>
                </p>
              </form>
            </div>

            {/* Front pocket of the envelope. */}
            <svg className="env-pocket only-desktop" viewBox="0 0 620 310" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0 L250 150 Q 310 186 370 150 L620 0 L620 300 Q 620 310 610 310 L10 310 Q 0 310 0 300 Z" fill="#FFB399" />
              <path d="M0 310 L292 180 M620 310 L328 180" stroke="#F29B85" strokeWidth="1.2" fill="none" />
            </svg>
            <svg className="env-pocket only-mobile" viewBox="0 0 358 270" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0 L140 110 Q 179 134 218 110 L358 0 L358 262 Q 358 270 350 270 L8 270 Q 0 270 0 262 Z" fill="#FFB399" />
              <path d="M0 270 L58 228 M358 270 L300 228" stroke="#F29B85" strokeWidth="1.2" fill="none" />
            </svg>

            {/* Outside of the flap: folds down over the pocket when sealing. Its short straight sides
                and deep tip keep it below the pocket's V everywhere, so nothing shows through. */}
            <svg className="env-flap-front only-desktop" viewBox="0 0 620 270" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 6 Q 0 0 8 0 L 612 0 Q 620 0 620 6 L 620 78 L 332 252 Q 310 268 288 252 L 0 78 Z" fill="#FFC4AE" />
              <path d="M0 6 Q 0 0 8 0 L 612 0 Q 620 0 620 6" fill="none" stroke="#FFD6C6" strokeWidth="2" />
            </svg>
            <svg className="env-flap-front only-mobile" viewBox="0 0 358 146" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 5 Q 0 0 6 0 L 352 0 Q 358 0 358 5 L 358 16 L 194 134 Q 179 144 164 134 L 0 16 Z" fill="#FFC4AE" />
              <path d="M0 5 Q 0 0 6 0 L 352 0 Q 358 0 358 5" fill="none" stroke="#FFD6C6" strokeWidth="2" />
            </svg>

            <div className="env-actions">
              <span className="env-seal" aria-hidden="true">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d={HEART} fill="#FFB399" />
                </svg>
              </span>
              <span className="env-from" aria-hidden="true">
                from {firstName}
              </span>
              <button type="submit" form="letter-form" className="env-send" disabled={busy}>
                {busy ? "Sealing…" : "Seal and send"}
              </button>
              <p className="env-alt">
                or write to <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="sent">
            <button type="button" className="sent-close" aria-label="Close" onClick={close}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF8F3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="sent-envelope" ref={sentEnvRef}>
              <svg className="sent-trail only-desktop" viewBox="0 0 300 90" fill="none" aria-hidden="true">
                <path d="M0 80 C 40 84, 70 70, 86 52 C 100 36, 88 22, 76 30 C 64 38, 80 60, 110 62 C 150 64, 190 40, 260 30" stroke="#FFF8F3" strokeWidth="1.5" strokeDasharray="4 8" strokeLinecap="round" />
              </svg>
              <svg className="sent-trail only-mobile" viewBox="0 0 300 90" fill="none" aria-hidden="true">
                <path d="M0 80 C 40 84, 70 70, 86 52 C 100 36, 88 22, 76 30 C 64 38, 80 60, 110 62 C 150 64, 190 40, 230 20" stroke="#FFF8F3" strokeWidth="1.4" strokeDasharray="4 7" strokeLinecap="round" />
              </svg>
              <SealedEnvelope from={firstName} />
              <Sparkle color="#FFF8F3" width="20" height="20" className="sent-spark sent-spark-1" aria-hidden="true" />
              <Sparkle color="#FFF8F3" width="12" height="12" className="sent-spark sent-spark-2" aria-hidden="true" />
            </div>
            <h2 id="sent-title" className="sent-title">
              thank you
            </h2>
            <p className="sent-text">Your letter is sealed and on its way. I&apos;ll write back within a couple of days.</p>
            <button ref={backRef} type="button" className="sent-back" onClick={close}>
              Back to the site
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}

const WAX =
  "M315.0 206.0 L316.0 209.2 L315.2 212.2 L313.6 215.0 L312.4 217.8 L311.4 220.6 L309.6 223.1 L306.8 224.8 L304.0 226.1 L302.2 228.2 L301.5 231.6 L300.5 235.3 L298.4 237.9 L295.2 238.6 L291.8 238.4 L288.7 238.5 L285.8 239.1 L282.9 239.4 L280.0 238.6 L277.2 237.6 L274.4 237.6 L271.2 239.0 L267.5 240.2 L264.3 239.7 L262.1 237.0 L260.6 233.7 L259.0 231.0 L256.8 229.2 L254.6 227.3 L253.1 224.9 L251.9 222.2 L250.1 219.9 L247.2 217.9 L244.5 215.5 L243.5 212.4 L244.8 209.1 L247.0 206.0 L248.3 203.2 L248.3 200.4 L248.0 197.4 L248.5 194.5 L249.8 191.9 L250.7 189.1 L251.1 185.8 L251.9 182.4 L254.1 180.1 L257.7 179.5 L261.5 179.6 L264.4 179.0 L266.5 177.0 L268.5 174.5 L271.1 172.8 L274.0 172.2 L277.0 171.6 L280.0 170.6 L283.2 169.8 L286.2 170.7 L288.8 173.3 L290.8 176.3 L293.0 178.0 L296.1 178.1 L299.6 178.0 L302.7 179.0 L304.9 181.1 L306.7 183.6 L308.8 185.9 L310.8 188.2 L311.7 191.2 L311.1 194.7 L310.2 197.9 L310.5 200.6 L312.5 203.2 Z";

function SealedEnvelope({ from }: { from: string }) {
  return (
    <svg className="sent-svg" viewBox="0 0 560 340" role="img" aria-label="A sealed envelope">
      <rect x="0" y="0" width="560" height="340" rx="8" fill="#FFB399" />
      <path d="M0 0 L262 196 M560 0 L298 196" stroke="#F7A68E" strokeWidth="1" fill="none" />
      <path d="M4 336 L280 176 L556 336" stroke="#F29B85" strokeWidth="1.2" fill="none" />
      <path d="M0 8 Q 0 0 8 0 L 552 0 Q 560 0 560 8 L 302 196 Q 280 212 258 196 Z" fill="#FFC4AE" style={{ filter: "drop-shadow(0 3px 3px rgba(122, 52, 36, 0.16))" }} />
      <path d="M0 8 Q 0 0 8 0 L 552 0 Q 560 0 560 8" fill="none" stroke="#FFD6C6" strokeWidth="2" />
      <g className="sent-doodle" fill="none" stroke="#B4513A" strokeWidth="1.3" strokeLinecap="round">
        <path d="M280 206 C 310 180, 340 150, 372 108" />
        <path d="M318 166 C 330 150, 346 146, 356 150 C 344 162, 330 168, 318 166" />
        <path d="M336 142 C 336 124, 346 112, 356 108 C 356 122, 348 136, 336 142" />
        <path d="M300 186 C 300 170, 308 158, 318 154 C 320 168, 312 180, 300 186" />
        <ellipse cx="372" cy="104" rx="4" ry="7" transform="rotate(35 372 104)" />
        <ellipse cx="364" cy="112" rx="3.2" ry="6" transform="rotate(-20 364 112)" />
        <ellipse cx="380" cy="114" rx="3.2" ry="6" transform="rotate(80 380 114)" />
        <path d="M280 206 C 250 190, 222 176, 190 172" />
        <path d="M236 182 C 226 168, 212 164, 202 166 C 210 178, 224 184, 236 182" />
      </g>
      <path d={WAX} fill="#B4513A" style={{ filter: "drop-shadow(0 2px 2px rgba(59, 43, 39, 0.3))" }} />
      <circle cx="280" cy="206" r="24" fill="none" stroke="#FFF8F3" strokeOpacity="0.22" strokeWidth="2" />
      <path transform="translate(266 192) scale(1.4)" d={HEART} fill="#FFB399" />
      <text x="500" y="306" textAnchor="end" fontFamily="var(--font-script), cursive" fontSize="34" fill="#B4513A">
        from {from}
      </text>
    </svg>
  );
}
