import { useEffect, useState } from "react";

const fonts = [
  // Sans-serif
  { key: "inter", family: "Inter" },
  { key: "poppins", family: "Poppins" },
  { key: "roboto", family: "Roboto" },
  { key: "openSans", family: "Open Sans" },
  { key: "lato", family: "Lato" },
  { key: "montserrat", family: "Montserrat" },
  { key: "nunito", family: "Nunito" },
  { key: "raleway", family: "Raleway" },
  { key: "ubuntu", family: "Ubuntu" },
  { key: "rubik", family: "Rubik" },
  { key: "dmSans", family: "DM Sans" },
  { key: "workSans", family: "Work Sans" },
  { key: "sourceSans3", family: "Source Sans 3" },
  { key: "manrope", family: "Manrope" },
  { key: "archivo", family: "Archivo" },
  { key: "quicksand", family: "Quicksand" },
  { key: "mulish", family: "Mulish" },
  { key: "heebo", family: "Heebo" },
  { key: "oxygen", family: "Oxygen" },
  { key: "karla", family: "Karla" },
  { key: "spaceGrotesk", family: "Space Grotesk" },
  { key: "outfit", family: "Outfit" },
  { key: "sora", family: "Sora" },
  { key: "plusJakartaSans", family: "Plus Jakarta Sans" },
  { key: "urbanist", family: "Urbanist" },
  { key: "lexend", family: "Lexend" },
  { key: "figtree", family: "Figtree" },
  { key: "overpass", family: "Overpass" },
  { key: "cabin", family: "Cabin" },
  { key: "assistant", family: "Assistant" },
  // Serif
  { key: "playfairDisplay", family: "Playfair Display" },
  { key: "merriweather", family: "Merriweather" },
  { key: "libreBaskerville", family: "Libre Baskerville" },
  { key: "crimsonText", family: "Crimson Text" },
  { key: "lora", family: "Lora" },
  { key: "cormorant", family: "Cormorant" },
  { key: "alegreya", family: "Alegreya" },
  { key: "vollkorn", family: "Vollkorn" },
  { key: "ptSerif", family: "PT Serif" },
  { key: "spectralElite", family: "Special Elite" },
  // Monospace
  { key: "jetBrainsMono", family: "JetBrains Mono" },
  { key: "firaCode", family: "Fira Code" },
  { key: "sourceCodePro", family: "Source Code Pro" },
  { key: "inconsolata", family: "Inconsolata" },
  { key: "ibmPlexMono", family: "IBM Plex Mono" },
  { key: "spaceMono", family: "Space Mono" },
  { key: "ubuntuMono", family: "Ubuntu Mono" },
  { key: "courierPrime", family: "Courier Prime" },
  { key: "anonymousPro", family: "Anonymous Pro" },
  { key: "victorMono", family: "Victor Mono" },
  // Modern & Small
  { key: "geist", family: "Geist" },
  { key: "interTight", family: "Inter Tight" },
  { key: "barlow", family: "Barlow" },
  { key: "notoSans", family: "Noto Sans" },
  // Elegant & Bold
  { key: "bodoniModa", family: "Bodoni Moda" },
  { key: "fraunces", family: "Fraunces" },
  { key: "dmSerifDisplay", family: "DM Serif Display" },
  { key: "clashDisplay", family: "Clash Display" },
  // Robotic / Techie
  { key: "orbitron", family: "Orbitron" },
  { key: "exo2", family: "Exo 2" },
  { key: "rajdhani", family: "Rajdhani" },
  { key: "saira", family: "Saira" },
  // Apple-style
  { key: "nunitoSans", family: "Nunito Sans" },
];

const categories = [
  { label: "All", filter: () => true },
  { label: "Sans-serif", filter: (f) => ["inter","poppins","roboto","openSans","lato","montserrat","nunito","raleway","ubuntu","rubik","dmSans","workSans","sourceSans3","manrope","archivo","quicksand","mulish","heebo","oxygen","karla","spaceGrotesk","outfit","sora","plusJakartaSans","urbanist","lexend","figtree","overpass","cabin","assistant"].includes(f.key) },
  { label: "Serif", filter: (f) => ["playfairDisplay","merriweather","libreBaskerville","crimsonText","lora","cormorant","alegreya","vollkorn","ptSerif","spectralElite"].includes(f.key) },
  { label: "Monospace", filter: (f) => ["jetBrainsMono","firaCode","sourceCodePro","inconsolata","ibmPlexMono","spaceMono","ubuntuMono","courierPrime","anonymousPro","victorMono"].includes(f.key) },
  { label: "Modern", filter: (f) => ["geist","interTight","barlow","notoSans"].includes(f.key) },
  { label: "Elegant", filter: (f) => ["bodoniModa","fraunces","dmSerifDisplay","clashDisplay"].includes(f.key) },
  { label: "Techie", filter: (f) => ["orbitron","exo2","rajdhani","saira"].includes(f.key) },
  { label: "Apple-style", filter: (f) => ["nunitoSans"].includes(f.key) },
];

export default function FontModal({ onClose }) {
  const [copied, setCopied] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleCopy = (key) => {
    navigator.clipboard.writeText(`--font ${key}`);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const activeCategoryFilter = categories.find(c => c.label === activeCategory)?.filter ?? (() => true);

  const filtered = fonts.filter(activeCategoryFilter).filter(f =>
    f.family.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Available Fonts</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors"
          >
            ×
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pt-4">
          <input
            type="text"
            placeholder="Search fonts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 px-6 pt-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.label
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Font list */}
        <div className="overflow-y-auto flex-1 px-6 py-4 space-y-2">
          {filtered.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">No fonts found</p>
          )}
          {filtered.map((font) => (
            <div
              key={font.key}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all group"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{font.family}</p>
                <p className="text-xs text-gray-400 font-mono">--font {font.key}</p>
              </div>
              <button
                onClick={() => handleCopy(font.key)}
                className="text-xs px-3 py-1.5 rounded-lg bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-700 active:scale-95"
              >
                {copied === font.key ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">{filtered.length} fonts • Click copy to get the CLI flag</p>
        </div>
      </div>
    </div>
  );
}