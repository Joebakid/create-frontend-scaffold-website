import CodeBlock from "../components/CodeBlock";
import GoBack from "../components/GoBack";

export default function Tailwind() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <GoBack />
      <h1 className="text-3xl font-bold uppercase">Tailwind CSS</h1>

      <p className="mt-4 text-gray-600">
        create-bawo-frontend uses Tailwind CSS v3 by default for stability.
        Tailwind v4 is available as an optional choice.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Using Tailwind v4</h2>

      <pre className="mt-4  bg-zinc-900 rounded-lg">
        {/* <code>npx create-bawo-frontend my-app --tailwind v4</code> */}
          <CodeBlock code="npx create-bawo-frontend my-app --tailwind v4" />
      </pre>


       

      <p className="mt-4 text-gray-600">
        Tailwind v4 uses CSS-first theming instead of tailwind.config.js. check out the docs <a className="text-red underline font-bold" href='https://tailwindcss.com/blog/tailwindcss-v4'>https://tailwindcss.com/blog/tailwindcss-v4</a>
      </p>
    </div>
  );
}
