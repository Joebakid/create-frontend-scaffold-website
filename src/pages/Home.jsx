import { Link } from "react-router-dom";
import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import Review from '../components/Review'
import {
  BoltIcon,
  CubeIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SquaresPlusIcon,
  WrenchScrewdriverIcon,
  CloudArrowUpIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "Zero-Config Scaffolding",
    description:
      "Scaffold a production-ready frontend instantly with no manual setup or boilerplate configuration.",
    icon: BoltIcon,
  },
  {
    title: "Vite & Next.js Support",
    description:
      "Choose between Vite (React) or Next.js during setup, both optimized with best-practice defaults.",
    icon: CubeIcon,
  },
  {
    title: "Tailwind CSS Ready",
    description:
      "Preconfigured Tailwind CSS (v3 or v4) with PostCSS and autoprefixing.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "State Management Included",
    description:
      "Optional Zustand or Redux Toolkit setup for scalable global state.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Animation Support",
    description:
      "Framer Motion and GSAP support for smooth, modern UI animations.",
    icon: SparklesIcon,
  },
  {
    title: "Opinionated Structure",
    description:
      "Clean, scalable folder structure following modern frontend conventions.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Great Developer Experience",
    description:
      "ESLint, fast HMR, clean scripts, and sensible defaults.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Production Ready",
    description:
      "Optimized for deployment on Vercel, Netlify, and other modern platforms.",
    icon: CloudArrowUpIcon,
  },
];

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase">
          create-bawo-frontend
        </h1>

        <p className="mt-6 text-md sm:text-xl text-gray-600 max-w-2xl">
          A zero-config CLI to scaffold modern React (Vite) and Next.js apps
          with Tailwind CSS, state management, animations, and best practices.
        </p>

        {/* ACTIONS */}
        <div className="my-10 flex-col flex sm:flex-row items-center gap-4">
          <button
            onClick={() => setVideoOpen(true)}
            className="border px-5 py-1.5 rounded-lg flex items-center gap-2.5 hover:bg-gray-50 cursor-pointer"
          >
            What is create-bawo-frontend
            <PlayIcon className="h-5 w-5 text-gray-500" />
          </button>

<div className="flex space-x-5 justify-center items-center">
 <Link
            to="/docs/installation"
            className=" px-2 py-1.5 bg-black text-white rounded-lg"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
            className=" px-2 py-1  border rounded-lg"
          >
            GitHub
          </a>
</div>
         
        </div>

        <pre className="mt-12 bg-zinc-900 rounded-lg">
          <CodeBlock code="npx create-bawo-frontend my-app" />
        </pre>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 bg-zinc-50 p-6 transition hover:shadow-md"
            >
              <feature.icon className="mb-4 h-8 w-8 text-black" />
              <h3 className="mb-2 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
      <Review/>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

           

           
         <iframe
  className="w-full aspect-video"
  src="https://www.youtube.com/embed/dfgqjcIJ9sw?autoplay=1"
  title="What is create-bawo-frontend"
  allow="autoplay; fullscreen; encrypted-media"
  allowFullScreen
/>

            *
          </div>
        </div>
      )}
    </>
  );
}
