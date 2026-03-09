import { useState } from "react";

export default function CopyDocsButton({ targetRef }) {
  const [copied, setCopied] = useState(false);

  const copyPage = async () => {
    if (!targetRef?.current) return;

    const text = targetRef.current.innerText;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
   <div className="flex justify-end mb-6">
  <button
    onClick={copyPage}
    className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-gray-100 transition"
  >
    {copied ? "Copied!" : "Copy Page"}
  </button>
</div>
  );
}