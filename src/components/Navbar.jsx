import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between item-center">
        <Link to="/" className="font-bold text-sm sm:text-md uppercase">
          create-bawo-frontend
        </Link>

        <div className="flex gap-6 text-sm sm:text-md uppercase font-bold">
          <Link to="/docs">Docs</Link>
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
