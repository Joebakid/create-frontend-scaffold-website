import { useState, useRef, useEffect } from "react";
import { BsChatDotsFill, BsSend, BsX } from "react-icons/bs";
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
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm the Bawo assistant. Search or click a question below."
    }
  ]);

  const bottomRef = useRef(null);

  function sendMessage(text) {
    if (!text.trim()) return;

    const match = FAQS.find(faq => {
      const textBlock = (faq.question + " " + faq.answer).toLowerCase();
      return textBlock.includes(text.toLowerCase());
    });

    setMessages(prev => [
      ...prev,
      { role: "user", text },
      {
        role: "bot",
        text: match
          ? match.answer
          : "Sorry, I couldn't find an answer for that."
      }
    ]);

    setSearch("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage(search);
    }
  }

  function ask(faq) {
    sendMessage(faq.question);
  }

  function useKeyword(word) {
    sendMessage(word);
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
        className="fixed bottom-6 right-6 z-50 bg-black text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl"
      >
        <BsChatDotsFill />
      </button>

      {/* Chat Window */}

      {open && (

        <div className="
          fixed
          bottom-0
          right-0
          sm:bottom-24
          sm:right-6
          w-full
          sm:w-80
          h-[85vh]
          sm:h-auto
          bg-white
          border
          sm:rounded-xl
          shadow-xl
          flex
          flex-col
          z-50
        ">

          {/* Header */}

          <div className="flex items-center justify-between p-3 border-b font-semibold">

            <span>Bawo Assistant</span>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <BsX />
            </button>

          </div>

          {/* Messages */}

          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">

            {messages.map((m, i) => (

              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >

                <div
                  className={`
                    px-3 py-2 rounded-xl max-w-[80%]
                    ${m.role === "user"
                      ? "bg-black text-white"
                      : "bg-gray-100"}
                  `}
                >
                  {m.text}
                </div>

              </div>

            ))}

            <div ref={bottomRef} />

          </div>

          {/* Search */}

          <div className="border-t p-2 flex gap-2">

            <input
              type="text"
              placeholder="Ask a question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 text-sm p-2 border rounded outline-none"
            />

            <button
              onClick={() => sendMessage(search)}
              className="bg-black text-white px-3 rounded"
            >
              <BsSend />
            </button>

          </div>

          {/* Keyword Chips */}

          <div className="flex flex-wrap gap-2 p-3 border-t">

            {KEYWORDS.map((word, i) => (

              <button
                key={i}
                onClick={() => useKeyword(word)}
                className="text-xs px-3 py-1 rounded-full border hover:bg-gray-100"
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