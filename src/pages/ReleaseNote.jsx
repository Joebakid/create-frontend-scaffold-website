import { useState } from "react";

const releaseNotes = [
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
  // 👉 future releases go here
];


export default function ReleaseNotes() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-3 py-10 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold mb-8 uppercase">
        Release Notes
      </h1>

      <ul className="space-y-4">
        {releaseNotes.map((release) => {
          const isOpen = openId === release.id;

          return (
            <li
              key={release.id}
              className="border rounded-lg"
            >
              {/* LIST HEADER */}
              <button
                onClick={() =>
                  setOpenId(isOpen ? null : release.id)
                }
                className="w-full flex justify-between items-center px-5 py-4 text-left"
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
                    title="🧱 Scaffold Updates"
                    items={release.content.scaffold}
                  />
                  <Section
                    title="⚙️ Developer Experience"
                    items={release.content.dx}
                  />
                  <Section
                    title="🐛 Fixes"
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
