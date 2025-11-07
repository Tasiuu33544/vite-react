import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, Zap, Mail } from "lucide-react";

const BRAND = {
  name: "ShopiIntel",
  tagline: "Discover Shopify Stores as They Launch — in Real Time.",
  colors: {
    primary: "from-indigo-500 via-blue-500 to-cyan-500",
  },
};

const Pill = ({ children }: any) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

const FeedCard = ({ domain, country, seconds, theme, apps }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/20"
  >
    <div className="flex items-center justify-between gap-3">
      <div>
        <a href={`https://${domain}`} className="text-base font-semibold text-white hover:underline">
          {domain}
        </a>
        <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
          <Globe className="h-3.5 w-3.5" />
          <span>{country}</span>
          <span className="opacity-40">•</span>
          <span>{seconds}s ago</span>
        </div>
      </div>
      <Pill>
        <Zap className="h-3.5 w-3.5" /> Live
      </Pill>
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/80">
      <div className="rounded-lg bg-white/[0.04] p-2">
        <div className="opacity-60">Theme</div>
        <div className="font-medium">{theme}</div>
      </div>
      <div className="rounded-lg bg-white/[0.04] p-2">
        <div className="opacity-60">Apps</div>
        <div className="font-medium">{apps}</div>
      </div>
      <div className="rounded-lg bg-white/[0.04] p-2">
        <div className="opacity-60">Score</div>
        <div className="font-medium">{Math.floor(60 + Math.random() * 40)}%</div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const feed = useMemo(
    () => [
      { domain: "solarpulse.store", country: "United States", seconds: 4, theme: "Dawn", apps: 7 },
      { domain: "naijafit.shop", country: "Nigeria", seconds: 7, theme: "Refresh", apps: 3 },
      { domain: "petpocket.co", country: "United Kingdom", seconds: 9, theme: "Impulse", apps: 11 },
      { domain: "glowella.beauty", country: "Canada", seconds: 12, theme: "Debutify", apps: 6 },
      { domain: "techhatch.io", country: "Germany", seconds: 14, theme: "Craft", apps: 5 },
      { domain: "halal-mart.africa", country: "Nigeria", seconds: 16, theme: "Dawn", apps: 4 },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 shadow" />
            <div>
              <div className="text-base font-semibold tracking-tight">{BRAND.name}</div>
              <div className="text-[10px] text-white/60">Real-time Shopify Intelligence</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNewsletter(true)}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Subscribe
            </button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold shadow hover:from-indigo-500 hover:to-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-semibold mb-3">{BRAND.tagline}</h1>
        <p className="text-white/70 mb-8">Track and discover live Shopify stores across the globe.</p>
      </section>

      {/* LIVE FEED */}
      <section className="mx-auto max-w-5xl px-4 grid gap-4 pb-16">
        {feed.map((f, i) => (
          <FeedCard key={i} {...f} />
        ))}
      </section>

      {/* NEWSLETTER MODAL */}
      {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-[90%] max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 text-center shadow-lg">
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="mt-2 text-sm text-white/70">Get the latest Shopify insights and trend reports.</p>
            <div className="mt-4 flex items-center gap-2">
              <Mail className="h-5 w-5 opacity-70" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
              />
            </div>
            <button className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-500">
              Subscribe
            </button>
            <button
              onClick={() => setShowNewsletter(false)}
              className="mt-2 text-xs text-white/50 hover:text-white/70"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
