"use client";

import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = typeof window !== "undefined" ? window.scrollY : 0;
      const atTop = current <= 0;
      const scrollingUp = current < lastScrollY.current;
      setIsVisible(atTop || scrollingUp);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 m-0 w-full bg-white px-4 sm:px-8 py-4 shadow-md transition-transform duration-300 dark:bg-gray-900 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto relative flex items-center justify-between sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4 sm:text-left">
        <div className="hidden sm:flex items-center justify-center gap-10 sm:justify-start">
          <a href="/#projects-section">
            <h4
              className="hover:opacity-70"
              style={{ color: "var(--olive-green)" }}
            >
              Projects
            </h4>
          </a>
          <a href="/#gallery-section">
            <h4
              className="hover:opacity-70"
              style={{ color: "var(--olive-green)" }}
            >
              Gallery
            </h4>
          </a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex items-center justify-center">
          <a
            href="/"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/assets/logo_black.svg"
              alt="Zinna Kim Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-10 sm:justify-end">
          <a href="../assets/Zinna_Kim_Resume.pdf" download>
            <h4
              className="hover:opacity-70"
              style={{ color: "var(--olive-green)" }}
            >
              Resume (PDF)
            </h4>
          </a>
          <a
            href="https://www.linkedin.com/in/seoyoung-kim-910508327/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4
              className="hover:opacity-70"
              style={{ color: "var(--olive-green)" }}
            >
              Linkedin
            </h4>
          </a>
          <a href="/aboutMe" rel="noopener noreferrer">
            <h4
              className="hover:opacity-70"
              style={{ color: "var(--olive-green)" }}
            >
              About Me
            </h4>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--olive-green)] hover:opacity-80"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3 px-2 pb-4">
          <a href="/#projects-section" onClick={() => setIsMenuOpen(false)}>
            <span className="block py-1 text-[var(--olive-green)]">
              Projects
            </span>
          </a>
          <a href="/#gallery-section" onClick={() => setIsMenuOpen(false)}>
            <span className="block py-1 text-[var(--olive-green)]">
              Gallery
            </span>
          </a>
          <a
            href="../assets/Zinna_Kim_Resume.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="block py-1 text-[var(--olive-green)]">
              Resume (PDF)
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/seoyoung-kim-910508327/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="block py-1 text-[var(--olive-green)]">
              Linkedin
            </span>
          </a>
          <a href="/aboutMe" onClick={() => setIsMenuOpen(false)}>
            <span className="block py-1 text-[var(--olive-green)]">
              About Me
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}
