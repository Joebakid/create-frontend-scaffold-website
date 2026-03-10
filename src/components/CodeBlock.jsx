import CopyButton from "./CopyButton";

export default function CodeBlock({ code, language = "bash" }) {
  return (
    <div className="relative mt-4">
      <pre className="overflow-x-auto rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-4 pr-24 text-sm text-[var(--app-text)] shadow-[var(--app-shadow)]">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>

      <CopyButton text={code} />
    </div>
  );
}
