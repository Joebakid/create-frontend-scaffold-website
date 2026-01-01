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

      <p className="mt-4 text-gray-600 leading-relaxed">
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
      <div className="mt-8 rounded-xl border bg-white px-5 py-6 space-y-4">
        <p className="text-sm text-gray-500">
          Send support to this address (Ethereum / Base / any EVM network):
        </p>

        <div className="flex items-center justify-between gap-3 rounded-lg border px-4 py-3 bg-gray-50">
          <span className="font-mono text-sm break-all text-gray-800">
            {RECEIVER_ADDRESS}
          </span>

          <button
            onClick={copyAddress}
            className="shrink-0 text-sm px-3 py-1.5 rounded-md border bg-white hover:bg-gray-100"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

     
      </div>

      {/* FOOTNOTE */}
      <p className="mt-6 text-sm text-gray-500">
        Contributions are optional and do not grant ownership or privileges.
        Supported networks: Ethereum, Base, and other EVM-compatible chains.
      </p>
    </section>
  );
}
