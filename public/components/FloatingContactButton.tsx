"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Turn off animation after 4 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide button when footer is visible in viewport
      if (footerRect.top < windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Contact Info Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 bg-white rounded-2xl shadow-2xl p-6 z-50 transition-all duration-300 ease-in-out w-[90vw] max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold text-[var(--navy-green)]">
              Have Questions? Contact Me!
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              aria-label="Close contact info"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="text-2xl">📧</div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Email</p>
                <a
                  href="mailto:zskim661@gmail.com"
                  className="text-sm text-[var(--navy-green)] hover:underline"
                >
                  zskim661@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <div className="text-2xl">💼</div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/seoyoung-kim-910508327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--navy-green)] hover:underline"
                >
                  linkedin.com/in/seoyoung-kim-910508327
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-3">
              <div className="text-2xl">💻</div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">GitHub</p>
                <a
                  href="https://github.com/Zkim1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--navy-green)] hover:underline"
                >
                  github.com/Zkim1234
                </a>
              </div>
            </div>

            {/* Phone (optional) */}
            <div className="flex items-start gap-3">
              <div className="text-2xl">📱</div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Phone</p>
                <a
                  href="tel:+16478388340"
                  className="text-sm text-[var(--navy-green)] hover:underline"
                >
                  +1 (647) 838 8340
                </a>
              </div>
            </div>
          </div>

          {/* Small triangle pointer */}
          <div
            className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white transform rotate-45"
            style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
          ></div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 sm:bottom-8 right-4 sm:right-8 bg-[var(--navy-green)] hover:brightness-75 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center cursor-pointer w-14 h-14 sm:w-16 sm:h-16 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 pointer-events-none"
        }`}
        aria-label="Contact me"
      >
        <div className="relative w-10 h-10">
          <Image
            src="/assets/logo-white.svg"
            alt="Contact"
            fill
            className="object-contain"
          />
        </div>

        {/* Pulse animation ring */}
        {showAnimation && (
          <span className="absolute inset-0 rounded-full bg-[var(--olive-green)] opacity-30 animate-ping"></span>
        )}
      </button>
    </>
  );
}
