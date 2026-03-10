import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import GoBack from "../components/GoBack";

const docsLinks = [
  { label: "Installation", to: "/docs/installation" },
  { label: "Usage", to: "/docs/usage" },
  { label: "Tailwind CSS (v3 & v4)", to: "/docs/tailwind" },
  { label: "Node Version", to: "/docs/node" },
];

export default function Docs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <GoBack />
      <h1 className="text-2xl sm:text-3xl font-bold uppercase">Documentation</h1>

      <ul className="mt-8 divide-y rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-strong)]">
        {docsLinks.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="flex items-center justify-between gap-4 rounded-lg px-5 py-4 text-lg font-medium transition-all hover:bg-[var(--app-hover)]"
            >
              <span>{item.label}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--app-text)]">
                Open
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
