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
import Contribute from "./pages/Contribute";
import Support from "./pages/Support";
import Node from './pages/node'


export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-100 font-sans">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/usage" element={<Usage />} />
          <Route path="/docs/tailwind" element={<Tailwind />} />
          <Route path="/releasenotes" element={<ReleaseNotes />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/support" element={<Support />} />
          <Route path="/docs/node" element={<Node />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
