export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
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
      </div>
    </footer>
  );
}
