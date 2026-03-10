import { useState } from "react";

const RECEIVER_ADDRESS = "0x068f3f5c278933678b641b65c5c8223caf0167a6";

export default function Support() {
  const [copied, setCopied] = useState(false);

  function copyAddress() {
    navigator.clipboard.writeText(RECEIVER_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold uppercase">
        Support the Project
      </h1>

      <p className="mt-4 leading-relaxed text-[var(--app-muted)]">
        Everyone is an artist until it’s time to pay the bills.
        <br /><br />
        <strong>create-bawo-frontend</strong> is built and maintained independently,
        driven purely by passion for open-source and developer experience.
        I genuinely want to invest more time, features, and long-term support
        into this project.
        <br /><br />
        However, like many independent builders, I’m constrained by basic realities:
        rent, food, internet, and daily living costs. These needs limit how much time
        I can sustainably dedicate without financial support.
        <br /><br />
        If this project has helped you, inspired you, or saved you time, any form
        of support—contributions, sponsorships, or paid collaborations—directly
        helps keep it alive and improving.
        <br /><br />
        Open source survives on people, not just code.
      </p>

      {/* SUPPORT BOX */}
      <div className="mt-8 space-y-4 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-5 py-6">
        <p className="text-sm text-[var(--app-muted)]">
          Send support to this address (Ethereum / Base / any EVM network):
        </p>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3">
          <span className="break-all font-mono text-sm text-[var(--app-text)]">
            {RECEIVER_ADDRESS}
          </span>

          <button
            onClick={copyAddress}
            className="shrink-0 rounded-md border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-3 py-1.5 text-sm text-[var(--app-text)] hover:bg-[var(--app-hover)]"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

     
      </div>

      {/* FOOTNOTE */}
      <p className="mt-6 text-sm text-[var(--app-muted)]">
        Contributions are optional and do not grant ownership or privileges.
        Supported networks: Ethereum, Base, and other EVM-compatible chains.
      </p>
    </section>
  );
}
