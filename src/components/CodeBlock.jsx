import CopyButton from "./CopyButton";

export default function CodeBlock({ code, language = "bash" }) {
  return (
    <div className="relative mt-4">
      <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-zinc-100 text-sm">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>

      <CopyButton text={code} />
    </div>
  );
}
