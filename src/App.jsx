import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import RouteTransition from "./animations/RouteTransition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BawoAssistant from "./components/BawoAssistant";

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import Tailwind from "./pages/Tailwind";
import NotFound from "./pages/NotFound";
import ReleaseNotes from "./pages/ReleaseNote";
import Contribute from "./pages/Contribute";
import Support from "./pages/Support";
import Node from "./pages/node";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-dvh flex flex-col bg-[var(--app-bg)] font-sans text-[var(--app-text)]">
      <Navbar />

      <main className="flex-1">
        <RouteTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/installation" element={<Installation />} />
            <Route path="/docs/usage" element={<Usage />} />
            <Route path="/docs/tailwind" element={<Tailwind />} />
            <Route path="/docs/node" element={<Node />} />

            <Route path="/releasenotes" element={<ReleaseNotes />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/support" element={<Support />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteTransition>
      </main>

      <Footer />

      {/* Bawo FAQ Assistant */}
      <BawoAssistant />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
