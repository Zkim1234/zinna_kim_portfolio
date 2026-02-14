"use client";

import React, { useEffect } from "react";
import NavBar from "../public/components/NavBar.jsx";
import VariableProximityText from "../public/components/VariableProximityText.jsx";
import "./globals.css";
import Footer from "../public/components/Footer.jsx";
import Gallery from "../public/sections/gallery";
import MySkills from "../public/sections/my-skills";
import Projects from "../public/sections/projects";
import FloatingContactButton from "../public/components/FloatingContactButton";

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const sections = [
        { id: "hero-section" },
        { id: "projects-section" },
        { id: "case-study-section" },
        { id: "gallery-section" },
        { id: "skills-section" },
      ];

      // Arrow key navigation
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const currentScrollY = window.scrollY;
        let targetSection = null;

        if (e.key === "ArrowDown") {
          // Find next section below current position
          for (const sec of sections) {
            const element = document.getElementById(sec.id);
            if (element && element.offsetTop > currentScrollY + 100) {
              targetSection = element;
              break;
            }
          }
        } else {
          // Find previous section above current position
          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i].id);
            if (element && element.offsetTop < currentScrollY - 100) {
              targetSection = element;
              break;
            }
          }
        }

        targetSection?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="flex-col min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main
        id="hero-section"
        className="relative flex w-full flex-1 flex-col items-center justify-center pt-32 sm:pt-40 lg:pt-60 px-6 sm:px-10 lg:px-20 text-center pb-12 sm:pb-16 bg-white overflow-hidden"
      >
        <div
          className="absolute top-20 right-10 pointer-events-none"
          style={{
            zIndex: 0,
          }}
        >
          <div
            style={{
              fontSize: "clamp(160px, 28vw, 400px)",
              fontWeight: "300",
              color: "#000000",
              filter: "blur(10px)",
              opacity: 0.1,
              fontFamily:
                "var(--font-heading), Gabarito, system-ui, -apple-system, sans-serif",
              whiteSpace: "nowrap",
              lineHeight: "1",
            }}
          >
            KIM
          </div>
        </div>
        <div
          className="absolute bottom-10 left-10 pointer-events-none"
          style={{
            zIndex: 0,
          }}
        >
          <div
            style={{
              fontSize: "clamp(160px, 28vw, 400px)",
              fontWeight: "300",
              color: "#000000",
              filter: "blur(10px)",
              opacity: 0.1,
              fontFamily:
                "var(--font-heading), Gabarito, system-ui, -apple-system, sans-serif",
              whiteSpace: "nowrap",
              lineHeight: "1",
            }}
          >
            ZINNA
          </div>
        </div>
        <div className="relative z-10">
          <NavBar />
          <div className="text-2xl text-[var(--dark-green)] mb-4">
            <VariableProximityText
              label="UX Designer / Front-End Developer"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 800"
              radius={120}
              falloff="exponential"
              className="inline-block"
            />
          </div>
          <div
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white my-6 sm:my-8"
            style={{
              fontFamily:
                "var(--font-heading), Gabarito, system-ui, sans-serif",
            }}
          >
            <VariableProximityText
              label="Hi, I'm Zinna Seoyoung Kim!"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 1000"
              radius={150}
              falloff="exponential"
              className="inline-block"
            />
          </div>
          <div className="text-[var(--dark-green)] font-bold mt-6 text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            <VariableProximityText
              label="I'm a passionate UX designer and front-end developer focused on creating clean,"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 1000"
              radius={120}
              falloff="linear"
              className="inline-block"
            />
            <VariableProximityText
              label="user-friendly, and engaging digital experiences."
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 1000"
              radius={120}
              falloff="linear"
              className="inline-block"
            />
            <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 mt-12 sm:mt-16 lg:mt-20">
              <button
                onClick={scrollToProjects}
                className="bg-[var(--dark-green)] text-white rounded-full hover:bg-[var(--navy-green)] w-full max-w-xs sm:max-w-sm lg:max-w-md h-12 sm:h-14 text-base sm:text-lg mb-6"
              >
                Explore My PROJECTS!
              </button>
              {/* <hr
          className="border-gray-300 dark:border-gray-700"
          style={{
            width: "50rem",
            height: "6px",
            backgroundColor: "var(--foreground)",
            border: "none",
            borderRadius: "3px",
          }}
        /> */}
              <div className="mt-2 flex items-center gap-3 text-gray-600 dark:text-gray-400 pb-10">
                <span className="text-sm">Use</span>
                <div className="flex gap-2">
                  <kbd className="px-3 py-1.5 text-xs font-semibold border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm">
                    ↑
                  </kbd>
                  <kbd className="px-3 py-1.5 text-xs font-semibold border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm">
                    ↓
                  </kbd>
                </div>
                <span className="text-sm">to navigate</span>
              </div>
              <button
                onClick={scrollToProjects}
                className="mt-12 text-[var(--olive-green)] hover:text-[var(--navy-green)] transition-colors duration-300"
                aria-label="Scroll to projects"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="gallery-section">
        <Gallery />
      </div>
      <div id="skills-section">
        <MySkills />
      </div>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
