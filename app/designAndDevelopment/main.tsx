"use client";

import { useMemo, useState } from "react";
import NavBar from "../../public/components/NavBar.jsx";
import Footer from "../../public/components/Footer.jsx";

const FILTERS = ["all", "projects", "design work", "case study"] as const;
type Filter = (typeof FILTERS)[number];

type Item = {
  id: string;
  title: string;
  summary: string;
  category: Exclude<Filter, "all">;
  href?: string;
};

const ITEMS: Item[] = [
  {
    id: "proj-01",
    title: "UI/UX Wasn't Enough, So I Learned Full-Stack",
    summary:
      "A journey from design to full-stack development and why both skills matter.",
    category: "projects",
    href: "/designAndDevelopment/work/solace",
  },
  {
    id: "proj-02",
    title: "Figma Ideas, WordPress Execution",
    summary:
      "From design mockups to live website implementation using WordPress.",
    category: "projects",
    href: "/designAndDevelopment/work/whatSUP",
  },
  {
    id: "proj-03",
    title: "Travel Journey Into A Single Magazine",
    summary:
      "Inspired by G-Adventures, this travel magazine design features a modern, visually engaging layout with vibrant imagery and clean typography that highlights global destinations, cultural experiences, and adventure activities.",
    category: "design work",
    href: "/designAndDevelopment/work/travelMagazine",
  },
  {
    id: "proj-04",
    title: "How Do To Make Pearl Milk Tea??",
    summary:
      "This promotional video for Gong Cha showcases its best-selling drinks and the fresh pearl milk tea–making process while maintaining the brand’s clean, vibrant, and youthful image to highlight the quality and care behind each beverage.",
    category: "design work",
    href: "/designAndDevelopment/work/gongCha",
  },
  {
    id: "proj-05",
    title: "Vape? No, Sephora Ad",
    summary:
      "This graphic-based promotional video concept for Sephora explores a design-driven approach that highlights the brand’s strong identity, showcases its diverse range of beauty products, and emphasizes its seamless in-store and online shopping experience.",
    category: "design work",
    href: "/designAndDevelopment/work/sephora",
  },
  {
    id: "proj-06",
    title: "Iron Workers Recovery App Case Study",
    summary:
      "A case study exploring the design and development of a recovery support application.",
    category: "case study",
    href: "/designAndDevelopment/work/solaceCaseStudy",
  },
];

export default function DesignAndDevelopment() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return ITEMS;
    }
    return ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-16">
        <header className="mb-8">
          <h1 className="text-[1.875rem] font-semibold text-gray-900">
            Design & Development
          </h1>
        </header>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 text-xs sm:text-sm capitalize border border-gray-300 bg-white transition-all ${
                    isActive
                      ? "shadow-md text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  } rounded-full`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="flex items-center">
            <div className="flex items-center overflow-hidden rounded-full border border-gray-300 bg-white">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`flex h-10 w-12 items-center justify-center transition-colors ${
                  viewMode === "list"
                    ? "bg-[#d8ecdf] text-[var(--olive-green)]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="flex flex-col gap-1">
                  <span className="h-0.5 w-5 bg-current" />
                  <span className="h-0.5 w-5 bg-current" />
                  <span className="h-0.5 w-5 bg-current" />
                </span>
              </button>
              <div className="h-10 w-px bg-gray-300" />
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`flex h-10 w-12 items-center justify-center transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#d8ecdf] text-[var(--olive-green)]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="grid grid-cols-2 gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm border border-current" />
                  <span className="h-2.5 w-2.5 rounded-sm border border-current" />
                  <span className="h-2.5 w-2.5 rounded-sm border border-current" />
                  <span className="h-2.5 w-2.5 rounded-sm border border-current" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <section className="mt-10">
          {viewMode === "list" ? (
            <div className="space-y-5">
              {filteredItems.map((item) => {
                const content = (
                  <article className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                    <div className="h-24 w-full rounded-1xl bg-gray-300 sm:h-20 sm:w-28" />
                    <div className="flex-1">
                      <span
                        className="inline-block text-xs capitalize mb-2"
                        style={{ color: "var(--olive-green)" }}
                      >
                        {item.category}
                      </span>
                      <h4 className="text-base font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                );
                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.id}>{content}</div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => {
                const content = (
                  <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="aspect-[4/3] w-full rounded-1xl bg-gray-300" />
                    <span
                      className="inline-block text-xs capitalize mt-3 mb-1"
                      style={{ color: "var(--olive-green)" }}
                    >
                      {item.category}
                    </span>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2">{item.summary}</p>
                  </article>
                );
                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.id}>{content}</div>
                );
              })}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}
