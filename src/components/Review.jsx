import { useEffect } from "react";

const tweets = [
  "https://twitter.com/BhattBuilds/status/2001299305597157538",
];

export default function Review() {
  useEffect(() => {
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
  }, []);

  return (
    <section
      className="
        relative
        py-20 sm:py-24 lg:py-28
        bg-gradient-to-b
        from-white
        via-zinc-100
        via-30%
        to-zinc-950
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Loved by the community
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg">
            Trusted by developers building modern frontends with <span className="text-zinc-900 font-medium">create-bawo-frontend</span>.
          </p>
        </div>

        {/* Tweets */}
       {/* Tweet */}
<div className="flex justify-center">
  <div
    className="
      w-full
      max-w-[360px]
      sm:max-w-[420px]
      
      rounded-2xl
      shadow-2xl
      ring-1 ring-black/5
      p-3
      sm:p-4
    "
  >
    <blockquote
      className="twitter-tweet"
      data-width="350"
      data-dnt="true"
    >
      <a href={tweets[0]}></a>
    </blockquote>
  </div>
</div>

      </div>
    </section>
  );
}
