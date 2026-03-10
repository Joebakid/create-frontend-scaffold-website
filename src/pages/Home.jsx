import { Link } from "react-router-dom";
import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import Review from '../components/Review'
import { SiSvelte } from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSupabase, SiFirebase, SiAppwrite, SiPocketbase } from "react-icons/si";
import { SiFramer, SiGreensock, SiRedux, SiReactquery, SiSwr, SiPinia } from "react-icons/si";
import {
  BoltIcon,
  CubeIcon,
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
  title: "React, Next.js, Vue & Svelte Support",
  description:
    "Choose between React (Vite), Next.js, Vue, or Svelte during setup, all configured with modern best-practice defaults.",
  icons: [FaReact, SiNextdotjs, FaVuejs, SiSvelte],
},
{
  title: "Tailwind CSS Ready",
  description:
    "Preconfigured Tailwind CSS (v3 or v4) with PostCSS and autoprefixing.",
  icon: SiTailwindcss,
},
  {
    title: "State Management Included",
    description:
      "Choose Zustand, Redux Toolkit and RTK Query, Pinia, React Query, SWR, or Context API depending on the framework and data flow you need.",
    icons: [CubeIcon, SiRedux, SiPinia, SiReactquery, SiSwr, FaReact],
  },
{
  title: "Animation Support",
  description:
    "Framer Motion and GSAP support for smooth, modern UI animations.",
  icons: [SiFramer, SiGreensock],
},
{
  title: "Backend Integrations",
  description:
    "Instantly integrate backend services such as Supabase, Firebase, Appwrite, and PocketBase to power authentication, databases, and APIs.",
  icons: [SiSupabase, SiFirebase, SiAppwrite, SiPocketbase],
},
// {
//   title: "Svelte Support",
//   description:
//     "Create Svelte projects directly from the CLI with Tailwind, state management, and modern frontend tooling.",
//   icon:SiSvelte,
// },
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

        <p className="mt-6 max-w-2xl text-md text-[var(--app-muted)] sm:text-xl">
          A zero-config CLI to scaffold modern React (Vite), Next.js, and Vue apps with Tailwind CSS, state management, animations, and best practices.
        </p>

        {/* ACTIONS */}
        <div className="my-10 flex-col flex sm:flex-row items-center gap-4">
          <button
            onClick={() => setVideoOpen(true)}
            className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-5 py-1.5 text-[var(--app-text)] hover:bg-[var(--app-hover)]"
          >
            What is create-bawo-frontend
            <PlayIcon className="h-5 w-5 text-[var(--app-muted)]" />
          </button>

<div className="flex space-x-5 justify-center items-center">
	 <Link
            to="/docs/installation"
            className="rounded-lg bg-[var(--app-accent)] px-2 py-1.5 text-[var(--app-accent-contrast)] shadow-[var(--app-shadow)]"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-strong)] px-2 py-1 text-[var(--app-text)] hover:bg-[var(--app-hover)]"
          >
            GitHub
          </a>
</div>
         
        </div>

        <div className="mt-12">
          <CodeBlock code="npx create-bawo-frontend my-app" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              data-animate-card
              className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 text-[var(--app-text)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--app-surface)_88%,var(--app-hover))]"
            >
             {feature.icons ? (
              <div className="mb-4 flex flex-wrap items-center gap-3">
    {feature.icons.map((Icon, idx) => (
      <Icon key={idx} className="h-7 w-7 shrink-0" />
    ))}
  </div>
) : (
  <feature.icon className="mb-4 h-8 w-8" />
)}
              <h3 className="mb-2 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--app-muted)]">
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
