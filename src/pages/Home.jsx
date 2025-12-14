import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold">
        create-bawo-frontend
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        A zero-config CLI to scaffold modern React (Vite) and Next.js apps
        with Tailwind CSS, state management, animations, and best practices.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/docs/installation"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Get Started
        </Link>

        <a
          href="https://github.com/Joebakid/create-bawo-frontend"
          target="_blank"
          className="px-6 py-3 border rounded-lg"
        >
          GitHub
        </a>
      </div>

      <pre className="mt-12 p-4 bg-zinc-900 text-white rounded-lg">
        <code>npx create-bawo-frontend my-app</code>
      </pre>
    </section>
  );
}
