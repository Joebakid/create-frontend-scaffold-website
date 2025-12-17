export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.josephbawo.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:underline"
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
            className="hover:text-gray-700"
          >
            GitHub
          </a>
          <a
            href="/docs"
            className="hover:text-gray-700"
          >
            Docs
          </a>
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
