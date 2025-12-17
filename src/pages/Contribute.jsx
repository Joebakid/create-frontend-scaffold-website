import CodeBlock from "../components/CodeBlock";

export default function Contribute() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-2xl sm:text-5xl font-bold uppercase">
        Contributing to create-bawo-frontend
      </h1>

      <p className="mt-6 text-gray-600 max-w-3xl text-lg">
        Thank you for your interest in contributing! create-bawo-frontend is an
        open-source project built to help developers scaffold modern frontend
        applications quickly and correctly.
      </p>

      {/* HOW TO CONTRIBUTE */}
      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-xl font-semibold">How You Can Contribute</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>🐛 Report bugs or unexpected behavior</li>
            <li>✨ Suggest or implement new features</li>
            <li>🧱 Improve project structure or code quality</li>
            <li>📖 Improve documentation or examples</li>
            <li>🧪 Add tests or improve reliability</li>
          </ul>
        </section>

        {/* GETTING STARTED */}
        <section>
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <p className="mt-3 text-gray-600">
            Follow these steps to set up the project locally:
          </p>

          <CodeBlock
            code={`git clone https://github.com/Joebakid/create-bawo-frontend.git
cd create-bawo-frontend
npm install
npm link`}
          />
        </section>

        {/* DEVELOPMENT */}
        <section>
          <h2 className="text-xl font-semibold">Development Guidelines</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>Use clear, descriptive commit messages</li>
            <li>Follow existing project structure and conventions</li>
            <li>Keep PRs focused and small when possible</li>
            <li>Test your changes before submitting</li>
          </ul>
        </section>

        {/* PULL REQUESTS */}
        <section>
          <h2 className="text-xl font-semibold">Submitting a Pull Request</h2>
          <ol className="mt-4 list-decimal list-inside text-gray-600 space-y-2">
            <li>Fork the repository</li>
            <li>Create a new branch for your feature or fix</li>
            <li>Commit your changes</li>
            <li>Push your branch to GitHub</li>
            <li>Open a pull request with a clear description</li>
          </ol>
        </section>

        {/* COMMUNITY */}
        <section>
          <h2 className="text-xl font-semibold">Community & Support</h2>
          <p className="mt-3 text-gray-600">
            If you’re unsure about something, feel free to open an issue on
            GitHub or start a discussion. Contributions of all experience levels
            are welcome.
          </p>

          <div className="mt-4">
            <a
              href="https://github.com/Joebakid/create-bawo-frontend"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2 border rounded-lg hover:bg-gray-50"
            >
              View GitHub Repository →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
