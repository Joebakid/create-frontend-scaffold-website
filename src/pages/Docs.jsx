import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Documentation</h1>

      <ul className="mt-6 space-y-3 text-lg">
        <li>
          <Link to="/docs/installation">📦 Installation</Link>
        </li>
        <li>
          <Link to="/docs/usage">🚀 Usage</Link>
        </li>
        <li>
          <Link to="/docs/tailwind">🎨 Tailwind CSS (v3 & v4)</Link>
        </li>
      </ul>
    </div>
  );
}
