import { Link } from "react-router-dom";
import { useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../theme/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav className="border-b border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] backdrop-blur-[18px]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-sm sm:text-md uppercase">
          create-bawo-frontend
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm sm:text-md uppercase font-bold">
          <Link to="/docs">Docs</Link>
          <Link onClick={() => setOpen(false)} to="/contribute">
            Contribute
          </Link>
          <Link onClick={() => setOpen(false)} to="/support">
            Support
          </Link>
          <Link to="/releasenotes">Release Note</Link>
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-3 py-2 text-xs font-semibold uppercase text-[var(--app-text)] shadow-[var(--app-shadow)] hover:bg-[var(--app-surface-muted)]"
            aria-label={`Current theme ${isDark ? "dark" : "light"}. Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <BsSunFill /> : <BsMoonStarsFill />}
            <span>{isDark ? "Dark" : "Light"}</span>
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-2 text-[var(--app-text)] shadow-[var(--app-shadow)] hover:bg-[var(--app-surface-muted)]"
            aria-label={`Current theme ${isDark ? "dark" : "light"}. Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1"
            aria-label="Toggle navigation menu"
          >
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 border-t border-[var(--app-border)] bg-[var(--app-surface-strong)] px-6 py-3 pb-4 text-sm font-bold uppercase text-[var(--app-text)]">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-3 py-2 text-xs font-semibold uppercase text-[var(--app-text)] shadow-[var(--app-shadow)] hover:bg-[var(--app-surface-muted)]"
          >
            {isDark ? <BsSunFill /> : <BsMoonStarsFill />}
            <span>{isDark ? "Dark mode" : "Light mode"}</span>
          </button>

          <Link onClick={() => setOpen(false)} to="/docs">
            Docs
          </Link>
          <Link onClick={() => setOpen(false)} to="/contribute">
            Contribute
          </Link>
          <Link onClick={() => setOpen(false)} to="/support">
            Support
          </Link>
          <Link onClick={() => setOpen(false)} to="/releasenotes">
            Release Note
          </Link>
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
