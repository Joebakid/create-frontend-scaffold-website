export default function Footer() {
  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-[var(--app-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.josephbawo.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-[var(--app-text)] hover:underline"
          >
            Joseph Bawo
          </a>{" "}
          — create-bawo-frontend
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--app-text)]"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/create-bawo-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--app-text)]"
          >
            npmjs
          </a>
          <a href="/docs" className="hover:text-[var(--app-text)]">
            Docs
          </a>
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--app-text)]"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
