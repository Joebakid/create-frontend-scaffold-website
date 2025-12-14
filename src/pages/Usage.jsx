export default function Usage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Usage</h1>

      <p className="mt-4 text-gray-600">
        This section covers common usage patterns and examples for
        <strong> create-bawo-frontend</strong>.
      </p>

      {/* Basic usage */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Basic usage</h2>

        <p className="mt-3 text-gray-600">
          Scaffold a new project using the interactive CLI:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>npx create-bawo-frontend my-app</code>
        </pre>

        <p className="mt-3 text-gray-600">
          You will be prompted to choose:
        </p>

        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Framework (React + Vite or Next.js)</li>
          <li>TypeScript or JavaScript</li>
          <li>State management solution</li>
          <li>Data fetching libraries</li>
          <li>UI and animation presets</li>
        </ul>
      </section>

      {/* Quick mode */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick mode</h2>

        <p className="mt-3 text-gray-600">
          Skip all prompts and scaffold using default options:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>npx create-bawo-frontend my-app -y</code>
        </pre>

        <p className="mt-3 text-gray-600">
          This is useful for rapid prototyping or CI environments.
        </p>
      </section>

      {/* Framework selection */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Choosing a framework</h2>

        <p className="mt-3 text-gray-600">
          You can explicitly choose a framework using the
          <code className="px-1 mx-1 bg-gray-200 rounded">--framework</code> flag:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>{`# React + Vite
npx create-bawo-frontend my-app --framework react

# Next.js (App Router)
npx create-bawo-frontend my-app --framework next`}</code>
        </pre>
      </section>

      {/* TypeScript */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Using TypeScript</h2>

        <p className="mt-3 text-gray-600">
          Add TypeScript support with the
          <code className="px-1 mx-1 bg-gray-200 rounded">--ts</code> flag:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>npx create-bawo-frontend my-app --ts</code>
        </pre>
      </section>

      {/* State management */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">State management</h2>

        <p className="mt-3 text-gray-600">
          During setup, you can select one primary state management library:
        </p>

        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>None</li>
          <li>Zustand (lightweight)</li>
          <li>Redux Toolkit</li>
        </ul>

        <p className="mt-3 text-gray-600">
          Additional data libraries such as RTK Query, React Query, SWR, and
          Context API can also be added.
        </p>
      </section>

      {/* UI */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">UI presets</h2>

        <p className="mt-3 text-gray-600">
          Add shadcn/ui during setup for a preconfigured component system:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>npx create-bawo-frontend my-app --ui shadcn</code>
        </pre>
      </section>

      {/* Animations */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Animations</h2>

        <p className="mt-3 text-gray-600">
          Optional animation libraries can be added with demo components:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>{`# Framer Motion
npx create-bawo-frontend my-app --framer

# GSAP
npx create-bawo-frontend my-app --gsap`}</code>
        </pre>
      </section>

      {/* Dev server */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Starting the dev server</h2>

        <p className="mt-3 text-gray-600">
          By default, the CLI can automatically start the development server.
          To prevent this behavior, use:
        </p>

        <pre className="mt-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
          <code>npx create-bawo-frontend my-app --no-start</code>
        </pre>
      </section>
    </div>
  );
}
