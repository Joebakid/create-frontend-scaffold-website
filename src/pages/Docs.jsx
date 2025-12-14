import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";

export default function Docs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

<GoBack />
      <h1 className="text-3xl font-bold uppercase">Documentation</h1>

      <ul className="mt-8 divide-y border rounded-lg">
        <li>
          <Link
            to="/docs/installation"
            className="flex items-center justify-between px-5 py-4 text-lg font-medium hover:bg-gray-200 transition-all  rounded-lg "
          >
            <span>📦 Installation</span>
            <span className="text-gray-400">→</span>
          </Link>
        </li>

        <li>
          <Link
            to="/docs/usage"
            className="flex items-center justify-between px-5 py-4 text-lg font-medium hover:bg-gray-200 transition-all"
          >
            <span>🚀 Usage</span>
            <span className="text-gray-400">→</span>
          </Link>
        </li>

        <li>
          <Link
            to="/docs/tailwind"
            className="flex items-center justify-between px-5 py-4 text-lg font-medium hover:bg-gray-200  rounded-lg transition-all"
          >
            <span>🎨 Tailwind CSS (v3 & v4)</span>
            <span className="text-gray-400">→</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
