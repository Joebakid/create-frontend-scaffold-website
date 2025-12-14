import CodeBlock from "../components/CodeBlock";

export default function Installation() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold uppercase">Installation</h1>

      <p className="mt-4 text-gray-600">
        <strong>create-bawo-frontend</strong> is a zero-config CLI that helps you
        scaffold modern React and Next.js applications in seconds.
      </p>

      {/* Requirements */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <ul className="mt-3 list-disc list-inside text-gray-600">
          <li>
            Node.js <strong>18+</strong>
          </li>
          <li>npm, pnpm, or yarn</li>
        </ul>
      </section>

      {/* NPX */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Using npx (recommended)</h2>

        <p className="mt-3 text-gray-600">
          You don’t need to install anything globally. Just run:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app" />

        <CodeBlock
          code={`cd my-app
npm run dev`}
        />
      </section>

      {/* Quick mode */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick mode (skip prompts)</h2>

        <p className="mt-3 text-gray-600">
          Use the <code className="px-1 bg-gray-200 rounded">-y</code> flag to
          scaffold a project with sensible defaults and automatically start the
          dev server:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app -y" />
      </section>

      {/* Global install */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">
          Global installation (optional)
        </h2>

        <p className="mt-3 text-gray-600">
          You can also install the CLI globally if you prefer:
        </p>

        <CodeBlock code="npm install -g create-bawo-frontend" />

        <p className="mt-3 text-gray-600">Then run:</p>

        <CodeBlock code="create-bawo-frontend my-app" />
      </section>

      {/* After install */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">After installation</h2>

        <p className="mt-3 text-gray-600">
          Navigate into your project and start coding:
        </p>

        <CodeBlock
          code={`cd my-app
npm run dev`}
        />
      </section>
    </div>
  );
}
 