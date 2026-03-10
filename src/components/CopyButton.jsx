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
      className="absolute right-3 top-3 cursor-pointer rounded-md border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-3 py-1 text-xs text-[var(--app-text)] shadow-[var(--app-shadow)] backdrop-blur hover:bg-[var(--app-surface-muted)] transition"
      aria-label="Copy code"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
