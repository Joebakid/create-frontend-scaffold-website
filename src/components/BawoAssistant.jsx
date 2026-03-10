import { useEffect, useMemo, useRef, useState } from "react";
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
  "pocketbase",
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "are",
  "can",
  "create",
  "create-bawo",
  "create-bawo-frontend",
  "createbawo",
  "do",
  "does",
  "for",
  "frontend",
  "help",
  "how",
  "i",
  "is",
  "it",
  "me",
  "my",
  "of",
  "please",
  "project",
  "setup",
  "support",
  "tell",
  "that",
  "the",
  "this",
  "to",
  "use",
  "what",
  "with",
]);

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/create-bawo-frontend|create bawo frontend|create-bawo|create bawo/g, "createbawo")
    .replace(/next\.js/g, "nextjs")
    .replace(/tailwind css/g, "tailwind")
    .replace(/react query/g, "reactquery")
    .replace(/rtk query/g, "rtkquery")
    .replace(/context api/g, "context")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getKeywords(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

const FAQ_INDEX = FAQS.map((faq) => ({
  faq,
  questionText: normalizeText(faq.question),
  haystackText: normalizeText(`${faq.question} ${faq.answer}`),
}));

function scoreFaq(query, indexedFaq, lastTopic) {
  const normalizedQuery = normalizeText(query);
  const haystack = indexedFaq.haystackText;
  const normalizedQuestion = indexedFaq.questionText;
  const queryKeywords = getKeywords(query);
  const topicKeywords = lastTopic ? getKeywords(lastTopic) : [];

  let score = 0;

  if (normalizedQuestion.includes(normalizedQuery) && normalizedQuery.length > 2) {
    score += 10;
  }

  for (const word of queryKeywords) {
    if (normalizedQuestion.includes(word)) {
      score += 4;
    } else if (haystack.includes(word)) {
      score += 2;
    }
  }

  for (const word of topicKeywords) {
    if (haystack.includes(word)) {
      score += 1;
    }
  }

  return score;
}

function findBestFaq(query, lastTopic) {
  const rankedFaqs = FAQ_INDEX
    .map((item) => ({
      faq: item.faq,
      score: scoreFaq(query, item, lastTopic),
    }))
    .sort((left, right) => right.score - left.score);

  return rankedFaqs[0]?.score >= 4 ? rankedFaqs[0].faq : null;
}

function getSuggestedQuestions(query, lastTopic, limit = 3) {
  return FAQ_INDEX
    .map((item) => ({
      faq: item.faq,
      score: scoreFaq(query, item, lastTopic),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((item) => item.faq.question);
}

function formatReply(faq, userText) {
  const normalizedText = normalizeText(userText);

  const intro =
    normalizedText.includes("how")
      ? "Here’s the quickest answer:"
      : normalizedText.includes("can") ||
          normalizedText.includes("does") ||
          normalizedText.includes("is")
        ? "Yes."
        : "Here’s what I found:";

  const nextStep = faq.question.toLowerCase().includes("install")
    ? "If you want, I can also help with the next command after installation."
    : faq.question.toLowerCase().includes("backend")
      ? "If you want, ask me which backend flag to use."
      : faq.question.toLowerCase().includes("tailwind")
        ? "If you want, I can also help you choose between Tailwind v3 and v4."
        : faq.question.toLowerCase().includes("state management")
          ? "If you want, I can help you choose the best option for React, Vue, or Next.js."
          : "If you want, ask a follow-up and I’ll narrow it down.";

  return `${intro} ${faq.answer} ${nextStep}`;
}

export default function BawoAssistant() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi. I’m the Bawo assistant. Ask me about installation, frameworks, Tailwind, backend integrations, or state management.",
    },
  ]);

  const bottomRef = useRef(null);
  const replyTimeoutRef = useRef(null);
  const lastTopicRef = useRef("");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  function sendMessage(text) {
    const userText = text.trim();
    if (!userText || isTyping) return;

    const matchedFaq = findBestFaq(userText, lastTopicRef.current);
    const suggestions = getSuggestedQuestions(userText, lastTopicRef.current);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setSearch("");
    setIsTyping(true);

    if (replyTimeoutRef.current) {
      window.clearTimeout(replyTimeoutRef.current);
    }

    replyTimeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: matchedFaq
            ? formatReply(matchedFaq, userText)
            : `I couldn’t find a direct answer for that yet. Try one of these: ${
                suggestions.length > 0
                  ? suggestions.join(" | ")
                  : "installation | Tailwind | Vue | Firebase | Node requirements"
              }.`,
        },
      ]);
      setIsTyping(false);
      lastTopicRef.current = matchedFaq?.question || userText;
    }, 2000);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage(search);
    }
  }

  function ask(faq) {
    sendMessage(faq.question);
  }

  function useKeyword(word) {
    sendMessage(word);
  }

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) {
      return FAQ_INDEX.map((item) => item.faq);
    }

    return FAQ_INDEX
      .filter((item) => scoreFaq(search, item, lastTopicRef.current) > 0)
      .map((item) => item.faq);
  }, [search]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--app-accent)] text-xl text-[var(--app-accent-contrast)] shadow-[var(--app-shadow)]"
      >
        <BsChatDotsFill />
      </button>

      {open && (
        <div className="fixed bottom-0 right-0 z-50 flex h-[82vh] w-full flex-col border border-[var(--app-border)] bg-[var(--app-surface-strong)] text-[var(--app-text)] shadow-[var(--app-shadow)] sm:bottom-24 sm:right-4 sm:h-[min(78vh,42rem)] sm:w-[min(24rem,calc(100vw-1.5rem))] sm:rounded-xl lg:right-6 lg:w-[23rem]">
          <div className="flex items-center justify-between border-b border-[var(--app-border)] p-3 font-semibold">
            <span>Bawo Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--app-muted)] hover:text-[var(--app-text)]"
            >
              <BsX />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3 text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-xl px-3 py-2 leading-relaxed ${
                    message.role === "user"
                      ? "bg-[var(--app-accent)] text-[var(--app-accent-contrast)]"
                      : "bg-[var(--app-surface-muted)] text-[var(--app-text)]"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-xl bg-[var(--app-surface-muted)] px-3 py-2 text-[var(--app-muted)]">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 border-t border-[var(--app-border)] p-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 rounded border border-[var(--app-border)] bg-transparent p-2 text-sm text-[var(--app-text)] outline-none placeholder:text-[var(--app-muted)]"
            />

            <button
              onClick={() => sendMessage(search)}
              className="rounded bg-[var(--app-accent)] px-3 text-[var(--app-accent-contrast)] shadow-[var(--app-shadow)] disabled:opacity-60"
              disabled={isTyping}
            >
              <BsSend />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-[var(--app-border)] p-3">
            {KEYWORDS.map((word, index) => (
              <button
                key={index}
                onClick={() => useKeyword(word)}
                className="rounded-full border border-[var(--app-border)] px-3 py-1 text-[11px] text-[var(--app-text)] hover:bg-[var(--app-hover)]"
              >
                {word}
              </button>
            ))}
          </div>

          <div className="max-h-52 space-y-2 overflow-y-auto border-t border-[var(--app-border)] p-3">
            {filteredFaqs.length === 0 && (
              <p className="text-sm text-[var(--app-muted)]">No questions found</p>
            )}

            {filteredFaqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => ask(faq)}
                className="block w-full rounded p-2 text-left text-sm hover:bg-[var(--app-hover)]"
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
