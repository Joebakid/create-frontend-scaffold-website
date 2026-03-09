import { useState } from "react";

const releaseNotes = [
{
  id: "v3.5.0-dev-experience",
  title: "create-bawo-frontend v3.5.0",
  date: "March 2026",
  content: {
    scaffold: [
      "Improved SEO setup system for generated projects",
      "Stabilized shadcn UI installation and configuration",
      "Added experimental Svelte scaffolding support",
      "Added automatic generation of project configuration files (.gitignore, .env, README, .editorconfig, prettier)",
      "Added backend integrations: Supabase, Firebase, PocketBase, and Appwrite"
    ],
    dx: [
      "Better out-of-the-box SEO support across frameworks",
      "More stable shadcn setup with fewer installation errors",
      "Svelte projects can now be scaffolded through the CLI (Beta)",
      "Projects start with sensible defaults for repository configuration and formatting",
      "Developers can now easily connect their frontend projects to Supabase, Firebase, PocketBase, or Appwrite during scaffolding"
    ],
    fixes: [
      "Improved reliability of shadcn UI setup",
      "Resolved edge cases in SEO file generation",
      "Minor improvements to framework scaffolding consistency"
    ],
    notes: [
      "Svelte support is currently in beta",
      "Some features may evolve as Svelte support stabilizes",
      "Recommended for experimentation while the ecosystem support improves",
      "Backend integrations generate starter configuration files to simplify setup"
    ]
  }
},

  {
  id: "v3.4.0-beta-fonts",
  title: "create-bawo-frontend v3.4.0 ",
  date: "January 2026",
  content: {
    scaffold: [
      "Introduced font support system (Beta)",
      "Added font registry and installer for project-wide typography",
      "Enabled automatic font injection into Tailwind configuration",
      "Added CLI option for selecting fonts during scaffolding",
    ],
    dx: [
      "Consistent typography across React, Next.js, and Vue projects",
      "Reduced manual font setup and configuration",
      "Fonts applied automatically without additional user steps",
      "Improved developer experience for branding and UI consistency",
    ],
    fixes: [
      "Prevented duplicate font imports during scaffolding",
      "Improved font injection reliability across frameworks",
      "Minor fixes to Tailwind font configuration handling",
    ],
    notes: [
      "Font support is currently in beta",
      "APIs and CLI flags may change in future releases",
      "Recommended for experimentation, not yet finalized for production use",
    ],
  },
}
,
  {
  id: "v3.0.0",
  title: "create-bawo-frontend v3.0.0",
  date: "December 2025",
  content: {
    scaffold: [
      "Introduced Vue 3 + Vite scaffolding support",
      "Added Tailwind CSS v3 integration for Vue projects",
      "Added GSAP pre-configuration for Vue animations",
      "Introduced Vue state management setup (Pinia)",
      "Optimized Vue project structure for scalability",
    ],
    dx: [
      "Zero-config Vue setup with sensible defaults",
      "Cleaner Vue starter components and layout",
      "Unified developer experience across React, Next.js, and Vue",
      "Reduced manual configuration after project creation",
    ],
    fixes: [
      "Resolved Tailwind CSS setup issues in Vue templates",
      "Fixed GSAP import and usage conflicts in Vue projects",
      "Aligned Vue configuration with existing CLI standards",
    ],
  },
}
,
  {
    id: "v2.2.1",
    title: "create-bawo-frontend v2.2.1",
    date: "December 2025",
    content: {
      scaffold: [
        "Added GSAP pre-configuration for animations",
        "Added Framer Motion setup for component animations",
        "Updated Tailwind CSS configuration to latest stable version",
        "Improved default project structure for scalability",
      ],
      dx: [
        "Cleaner starter components and layout",
        "Improved Tailwind setup for faster styling",
        "Reduced manual setup after project creation",
      ],
      fixes: [
        "Fixed Tailwind initialization issues in generated projects",
        "Resolved animation library import conflicts",
        "Minor dependency and configuration fixes",
      ],
    },
  },


];


export default function ReleaseNotes() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-3 py-10 sm:px-6 sm:py-16 transition-all ">
      <h1 className="text-xl sm:text-3xl font-bold mb-8 uppercase">
        Release Notes
      </h1>

      <ul className="space-y-4 ">
        {releaseNotes.map((release) => {
          const isOpen = openId === release.id;

          return (
            <li
              key={release.id}
              className="border rounded-lg "
            >
              {/* LIST HEADER */}
              <button
                onClick={() =>
                  setOpenId(isOpen ? null : release.id)
                }
                className="w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
              >
                <div>
                  <h2 className="font-semibold text-md">
                    {release.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Released — {release.date}
                  </p>
                </div>

                <span className="text-xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* LIST CONTENT */}
              {isOpen && (
                <div className="px-5 pb-6 space-y-6 text-sm">
                  <Section
                    title="Scaffold Updates"
                    items={release.content.scaffold}
                  />
                  <Section
                    title="Developer Experience"
                    items={release.content.dx}
                  />
                  <Section
                    title="Fixes"
                    items={release.content.fixes}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
