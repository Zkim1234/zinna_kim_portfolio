"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkPageLayout from "../../../../public/components/WorkPageLayout";
import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";
import UnderlinedHeading from "../../../../public/components/UnderlinedHeading";

gsap.registerPlugin(ScrollTrigger);

export default function TravelMagazine() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((row, index) => {
      if (!row) return;

      gsap.fromTo(
        row,
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="Travel Magazine"
        subheading="Travel Journey Into A Single Magazine"
        logoSrc="/assets/travel_magazine/g_advanture_logo.png"
        technologies={[
          "Adobe",
          "Adobe InDesign",
          "Adobe Illustrator",
          "Layout Design",
          "Typography",
        ]}
      />

      <main className="w-full px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto space-y-24">
          {/* Row 1 - Overview */}
          <div
            ref={(el) => {
              rowRefs.current[0] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2
                style={{ color: "var(--olive-green)" }}
                className="font-semibold text-xl mb-4"
              >
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Referenced from G-adventure, this travel magazine design project
                showcases a modern and visually appealing layout that highlights
                various travel destinations, cultural experiences, and adventure
                activities. The design incorporates vibrant imagery, and clean
                typography to create an engaging reading experience for travel
                enthusiasts.
              </p>
            </div>
            <div>
              <iframe
                src="https://indd.adobe.com/view/23d2d988-985b-4735-8358-97cb5fc77688"
                allowFullScreen
                className="w-full h-96 sm:h-[500px] lg:h-[600px] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              ></iframe>
            </div>
          </div>

          {/* Row 2 - Cover Page */}
          <div
            ref={(el) => {
              rowRefs.current[1] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src=""
                alt="Cover Page"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <UnderlinedHeading text="Cover Page" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                For the cover pages, I tried to mix modern and traditional
                styles because the tour package includes both traditional
                building tours and K-pop tours. I wanted the design to reflect
                that contrast, showing both the cultural side and the modern pop
                culture experience in one visual.
              </p>
            </div>
          </div>

          {/* Row 3 - Happy People */}
          <div
            ref={(el) => {
              rowRefs.current[2] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <UnderlinedHeading text="Happy People" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                I used images of excited people to create a joyful overall mood.
                I wanted viewers to immediately feel the fun, energy, and
                excitement of the tour. By showing genuine expressions and
                lively moments, it helps people imagine themselves being part of
                the experience.
              </p>
            </div>
            <div>
              <img
                src=""
                alt="Happy People"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 4 - Map */}
          <div
            ref={(el) => {
              rowRefs.current[3] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img src="" alt="Map" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <UnderlinedHeading text="Map" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                To help visualize the locations we'll be visiting, especially
                for people who have never traveled to South Korea before, I
                added illustrations to show each destination. This makes it
                easier for viewers to understand where the tour takes place and
                gives them a clearer picture of what to expect.
              </p>
            </div>
          </div>

          {/* Row 5 - Local Specialty */}
          <div
            ref={(el) => {
              rowRefs.current[4] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <UnderlinedHeading text="Local Specialty" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                I also highlighted some of the best local foods from each
                region, such as samgyeopsal from Seoul, bibimbap from Jeonju,
                tteokbokki from Busan, and hallabong (orange) from Jeju. This
                helps showcase the unique food culture of each city and makes
                the tour feel more authentic and complete.
              </p>
            </div>
            <div>
              <img
                src=""
                alt="Local Specialty"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
