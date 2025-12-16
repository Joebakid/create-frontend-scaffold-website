import CodeBlock from "../components/CodeBlock";
import GoBack from "../components/GoBack";

export default function Usage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <GoBack />
      <h1 className="text-3xl font-bold uppercase">Usage</h1>

      <p className="mt-4 text-gray-600">
        <strong>create-bawo-frontend</strong> is a flexible CLI for scaffolding
        modern React (Vite) or Next.js applications with Tailwind CSS, state
        management, animations, and tooling — all configurable via flags or
        interactive prompts.
      </p>

      {/* Installation */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Installation</h2>

        <p className="mt-3 text-gray-600">
          No installation is required. Run the CLI directly using <code>npx</code>:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app" />
      </section>

      {/* Basic usage */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Basic usage</h2>

        <p className="mt-3 text-gray-600">
          Run the command without flags to enter interactive mode:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app" />

        <p className="mt-3 text-gray-600">
          You will be prompted to choose:
        </p>

        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Framework (React + Vite or Next.js)</li>
          <li>JavaScript or TypeScript</li>
          <li>State management solution</li>
          <li>Data fetching libraries</li>
          <li>UI presets (shadcn/ui)</li>
          <li>Animation libraries (Framer Motion, GSAP)</li>
        </ul>
      </section>

      {/* Quick mode */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick mode (non-interactive)</h2>

        <p className="mt-3 text-gray-600">
          Skip all prompts and scaffold using defaults:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app -y" />

        <p className="mt-3 text-gray-600">
          This is ideal for automation, CI pipelines, or fast prototyping.
        </p>
      </section>

      {/* Framework */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Framework selection</h2>

        <p className="mt-3 text-gray-600">
          Choose the framework explicitly using the
          <code className="px-1 mx-1 bg-gray-200 rounded">--framework</code> flag.
        </p>

        <CodeBlock
          code={`# React + Vite
npx create-bawo-frontend my-app --framework react

# Next.js (App Router)
npx create-bawo-frontend my-app --framework next`}
        />
      </section>

      {/* TypeScript */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">TypeScript</h2>

        <p className="mt-3 text-gray-600">
          Enable TypeScript by passing the
          <code className="px-1 mx-1 bg-gray-200 rounded">--ts</code> flag.
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app --ts" />

        <p className="mt-3 text-gray-600">
          This generates TypeScript configuration files and uses
          <code>.ts</code>/<code>.tsx</code> throughout the project.
        </p>
      </section>

      {/* Tailwind */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tailwind CSS</h2>

        <p className="mt-3 text-gray-600">
          Tailwind CSS v3 is enabled by default. You can explicitly opt into
          Tailwind v4 using:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app --tailwind v4" />

        <p className="mt-3 text-gray-600">
          Tailwind v4 uses the new Vite plugin and does not include
          <code>autoprefixer</code>.
        </p>
      </section>

      {/* State management */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">State management</h2>

        <p className="mt-3 text-gray-600">
          Choose one primary state management solution:
        </p>

        <CodeBlock
          code={`# Zustand (lightweight)
npx create-bawo-frontend my-app --zustand

# Redux Toolkit
npx create-bawo-frontend my-app --redux`}
        />

        <p className="mt-3 text-gray-600">
          You can also add data-layer libraries:
        </p>

        <CodeBlock
          code={`# RTK Query
npx create-bawo-frontend my-app --rtk-query

# React Query (TanStack)
npx create-bawo-frontend my-app --react-query

# SWR
npx create-bawo-frontend my-app --swr

# Context API
npx create-bawo-frontend my-app --context`}
        />
      </section>

      {/* UI */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">UI presets</h2>

        <p className="mt-3 text-gray-600">
          Add <strong>shadcn/ui</strong> with a preconfigured setup:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app --ui shadcn" />

        <p className="mt-3 text-gray-600">
          Note: shadcn/ui is currently supported with Tailwind v3 only.
        </p>
      </section>

      {/* Animations */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Animations</h2>

        <p className="mt-3 text-gray-600">
          Add animation libraries with optional demo components:
        </p>

        <CodeBlock
          code={`# Framer Motion
npx create-bawo-frontend my-app --framer

# GSAP
npx create-bawo-frontend my-app --gsap

# Both
npx create-bawo-frontend my-app --framer --gsap`}
        />
      </section>

      {/* Dev server */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Development server</h2>

        <p className="mt-3 text-gray-600">
          By default, the CLI can start the dev server automatically.
          Disable this behavior using:
        </p>

        <CodeBlock code="npx create-bawo-frontend my-app --no-start" />
      </section>



       <section className="mt-10">
  <h2 className="text-xl font-semibold">My Go-to setup</h2>

  <p className="mt-3 text-gray-600">
    This is my preferred setup for most projects. It combines TypeScript,
    Tailwind v4, GSAP, Framer Motion, and Redux Toolkit on Next.js for a
    scalable and production-ready workflow.
  </p>

  <CodeBlock
    code="npx create-bawo-frontend my-app --framework next --ts --tailwind v4 --redux --gsap --framer -y"
  />
</section>

    </div>
  );
}
