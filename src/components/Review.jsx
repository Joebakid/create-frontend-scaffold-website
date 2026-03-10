import { useEffect, useRef, useState } from "react";

const tweets = [
  "https://twitter.com/BhattBuilds/status/2001299305597157538",
];

export default function Review() {
  const sectionRef = useRef(null);
  const [shouldLoadTweet, setShouldLoadTweet] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldLoadTweet) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldLoadTweet(true);
        observer.disconnect();
      },
      { rootMargin: "160px 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadTweet]);

  useEffect(() => {
    if (!shouldLoadTweet) {
      return undefined;
    }

    const loadTwitter = () => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load();
      }
    };

    if (!document.getElementById("twitter-wjs")) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadTwitter;
      document.body.appendChild(script);
    } else {
      loadTwitter();
    }
  }, [shouldLoadTweet]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--app-bg-accent) 55%, transparent) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Loved by the community
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--app-muted)] sm:text-lg">
            Trusted by developers building modern frontends with <span className="font-medium">{`create-bawo-frontend`}</span>.
          </p>
        </div>

        {/* Tweets */}
       {/* Tweet */}
<div className="flex justify-center">
	  <div
	    className="w-full max-w-[360px] rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-3 text-[var(--app-text)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--app-surface)_88%,var(--app-hover))] sm:max-w-[420px] sm:p-4"
	  >
	    <blockquote
	      className="twitter-tweet"
	      data-width="350"
	      data-dnt="true"
	    >
	      {shouldLoadTweet ? <a href={tweets[0]}></a> : <p>Loading review…</p>}
	    </blockquote>
	  </div>
</div>

      </div>
    </section>
  );
}
