import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import Tailwind from "./pages/Tailwind";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/usage" element={<Usage />} />
          <Route path="/docs/tailwind" element={<Tailwind />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
