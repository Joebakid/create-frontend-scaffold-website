import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 rounded-md border px-3 py-1 text-xs
                 bg-white/80 backdrop-blur hover:bg-white
                 transition"
      aria-label="Copy code"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
