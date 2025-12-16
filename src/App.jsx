import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import Tailwind from "./pages/Tailwind";
import NotFound from "./pages/NotFound";
import ReleaseNotes from "./pages/ReleaseNote";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/usage" element={<Usage />} />
          <Route path="/docs/tailwind" element={<Tailwind />} />
          <Route path="/releasenotes" element={<ReleaseNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
