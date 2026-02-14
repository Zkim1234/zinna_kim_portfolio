"use client";

import { useRef, useState } from "react";

export default function GalleryCarousel({ images = [] }) {
  const carouselRef = useRef(null);
  const scrollbarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollbarDragging, setIsScrollbarDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollbarPos, setScrollbarPos] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

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
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    updateScrollbar();
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
    updateScrollbar();
  };

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 400;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setTimeout(updateScrollbar, 100);
  };

  const updateScrollbar = () => {
    const element = carouselRef.current;
    if (element) {
      const scrollWidth = element.scrollWidth - element.clientWidth;
      const ratio = element.clientWidth / element.scrollWidth;
      const thumbWidth = Math.max(element.clientWidth * ratio, 50);
      const maxScroll = element.clientWidth - thumbWidth;
      const pos = (element.scrollLeft / scrollWidth) * maxScroll;

      setScrollbarWidth(thumbWidth);
      setScrollbarPos(pos);
    }
  };

  const handleScroll = () => {
    updateScrollbar();
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Left Arrow - Inside Carousel */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 rounded-full p-2 shadow-lg hover:bg-white hover:dark:bg-gray-800 transition-all"
        aria-label="Scroll left"
      >
        <svg
          className="w-5 h-5 text-[var(--dark-green)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={carouselRef}
        className="flex items-start gap-6 overflow-x-auto scroll-smooth rounded-lg"
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          scrollbarWidth: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onScroll={handleScroll}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg w-72 sm:w-80 md:w-96 lg:w-[32rem] xl:w-[36rem]"
          >
            <img
              src={`/assets/${image}`}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow - Inside Carousel */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 rounded-full p-2 shadow-lg hover:bg-white hover:dark:bg-gray-800 transition-all"
        aria-label="Scroll right"
      >
        <svg
          className="w-5 h-5 text-[var(--dark-green)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Horizontal Scrollbar */}
      <div
        className="mt-4 w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden cursor-pointer"
        ref={scrollbarRef}
        onClick={(e) => {
          const rect = scrollbarRef.current.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const maxScroll =
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          const ratio = clickX / rect.width;
          carouselRef.current.scrollLeft = ratio * maxScroll;
          updateScrollbar();
        }}
      >
        <div
          className="h-full bg-[var(--olive-green)] rounded-full cursor-grab active:cursor-grabbing transition-all"
          style={{
            width: `${scrollbarWidth}px`,
            transform: `translateX(${scrollbarPos}px)`,
          }}
          onMouseDown={(e) => {
            setIsScrollbarDragging(true);
            setStartX(e.clientX);
            setScrollLeft(carouselRef.current.scrollLeft);
            e.stopPropagation();
          }}
        />
      </div>

      {isScrollbarDragging && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            cursor: "grabbing",
          }}
          onMouseUp={() => setIsScrollbarDragging(false)}
          onMouseMove={(e) => {
            if (!isScrollbarDragging) return;
            const delta = e.clientX - startX;
            const maxScroll =
              carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            const scrollbarTrackWidth = scrollbarRef.current.clientWidth;
            const maxThumbScroll = scrollbarTrackWidth - scrollbarWidth;
            const ratio = delta / maxThumbScroll;
            carouselRef.current.scrollLeft = scrollLeft + ratio * maxScroll;
            updateScrollbar();
          }}
        />
      )}
    </div>
  );
}
