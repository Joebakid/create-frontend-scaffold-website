import { useState, useRef, useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { FAQS } from "../data/faqs";

const KEYWORDS = [
  "react",
  "vite",
  "backend",
  "seo",
  "svelte",
  "tailwind",
  "firebase",
  "supabase",
  "appwrite",
  "pocketbase"
];

export default function BawoAssistant() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm the Bawo assistant. Search or click a question below."
    }
  ]);

  const [search, setSearch] = useState("");

  const bottomRef = useRef(null);

  function ask(faq) {
    setMessages(prev => [
      ...prev,
      { role: "user", text: faq.question },
      { role: "bot", text: faq.answer }
    ]);
  }

  function runSearch(value) {
    if (!value.trim()) return;

    const match = FAQS.find(faq => {
      const text = (faq.question + " " + faq.answer).toLowerCase();
      return text.includes(value.toLowerCase());
    });

    if (match) {
      setMessages(prev => [
        ...prev,
        { role: "user", text: value },
        { role: "bot", text: match.answer }
      ]);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runSearch(search);
    }
  }

  function useKeyword(word) {
    setSearch(word);
    runSearch(word);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const filteredFaqs = FAQS.filter(faq => {
    const text = (faq.question + " " + faq.answer).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl"
      >
        <BsChatDotsFill />
      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-24 right-6 w-80 bg-white border rounded-xl shadow-xl flex flex-col">

          {/* Header */}

          <div className="p-3 border-b font-semibold">
            Bawo Assistant
          </div>

          {/* Messages */}

          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">

            {messages.map((m, i) => (

              <div
                key={i}
                className={m.role === "user" ? "text-right" : "text-left"}
              >

                <span
                  className={
                    m.role === "user"
                      ? "inline-block bg-black text-white px-3 py-1 rounded-lg"
                      : "inline-block bg-gray-100 px-3 py-1 rounded-lg"
                  }
                >
                  {m.text}
                </span>

              </div>

            ))}

            <div ref={bottomRef} />

          </div>

          {/* Search Input */}

          <div className="border-t p-2">
            <input
              type="text"
              placeholder="Search and press Enter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full text-sm p-2 border rounded outline-none"
            />
          </div>

          {/* Keyword Chips */}

          <div className="flex flex-wrap gap-2 p-3 border-t">

            {KEYWORDS.map((word, i) => (

              <button
                key={i}
                onClick={() => useKeyword(word)}
                className="text-xs px-2 py-1 rounded-full border hover:bg-gray-100"
              >
                {word}
              </button>

            ))}

          </div>

          {/* Suggested Questions */}

          <div className="p-3 space-y-2 overflow-y-auto max-h-40">

            {filteredFaqs.length === 0 && (
              <p className="text-sm text-gray-500">
                No questions found
              </p>
            )}

            {filteredFaqs.map((faq, i) => (

              <button
                key={i}
                onClick={() => ask(faq)}
                className="block w-full text-left text-sm p-2 rounded hover:bg-gray-100"
              >
                {faq.question}
              </button>

            ))}

          </div>

        </div>

      )}
    </>
  );
}