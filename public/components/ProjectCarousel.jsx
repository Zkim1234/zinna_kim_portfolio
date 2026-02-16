"use client";

import { useRef, useState } from "react";

export default function ProjectCarousel({ projects }) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slugify = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="my-20 w-full">
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth px-6 sm:px-10 lg:px-20 pb-4"
          style={{
            scrollBehavior: "smooth",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Hide scrollbar */}
          <style>{`
            div::-webkit-scrollbar {
              height: 8px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background: var(--olive-green);
              border-radius: 4px;
            }
          `}</style>

          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow w-[85vw] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image on Left */}
                <div className="w-full md:w-5/12">
                  <img
                    src={`/assets/${project.thumbnail}`}
                    alt={`${project.name} Screenshot`}
                    className="w-full h-56 sm:h-64 md:h-full object-cover"
                    draggable={false}
                  />
                </div>
                {/* Content on Right */}
                <div className="flex flex-col justify-start p-6 sm:p-8 md:w-7/12">
                  <a
                    href={`/projectDetail?id=${encodeURIComponent(
                      String(index),
                    )}`}
                  >
                    <h3 className="mb-4 text-3xl text-left font-semibold text-[var(--olive-green)]">
                      {project.name}
                    </h3>
                  </a>
                  <p className="mb-4 text-sm text-gray-500 text-left">
                    {project.date} • {project.role.join(", ")}
                  </p>
                  <p className="mb-6 text-gray-700 text-left dark:text-gray-300 line-clamp-4">
                    {project.description}
                  </p>
                  <a
                    href={`/projectDetail?id=${encodeURIComponent(
                      String(index),
                    )}`}
                    className="text-[var(--olive-green)] text-left hover:underline font-semibold pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drag hint */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Drag to explore projects →
      </p>
    </section>
  );
}
