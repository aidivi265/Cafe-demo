"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, phoneHref } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const mobileMenuId = "mobile-navigation";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("richie-rich-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    const frame = window.requestAnimationFrame(() => setTheme(nextTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("richie-rich-theme", nextTheme);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-coal/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group leading-none" onClick={() => setMenuOpen(false)}>
          <span className="block font-display text-lg font-bold tracking-tight text-ink">RICHIE RICH</span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-amber">
            Gaming · Pool · Cafe
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={toggleTheme}
            className="focus-ring rounded-full border border-line px-3 py-2 text-xs font-bold uppercase tracking-widest text-ink"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={mobileMenuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring rounded-full border border-line px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink md:hidden"
          >
            Menu
          </button>
        </div>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a href={phoneHref} className="rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-[#78a0ff]">
            Call Now
          </a>
        </nav>
      </div>
      {menuOpen && (
        <nav id={mobileMenuId} className="border-t border-line px-5 pb-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1 pt-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 font-medium text-muted hover:bg-surface hover:text-ink">
                {item.label}
              </Link>
            ))}
            <a href={phoneHref} onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-blue px-5 py-3 text-center text-sm font-bold text-white">
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
