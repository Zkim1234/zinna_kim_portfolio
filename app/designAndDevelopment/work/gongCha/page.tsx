"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkPageLayout from "../../../../public/components/WorkPageLayout";
import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";
import UnderlinedHeading from "../../../../public/components/UnderlinedHeading";
import StyledVideo from "../../../../public/components/StyledVideo";

gsap.registerPlugin(ScrollTrigger);

export default function GongCha() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((row) => {
      if (!row) return;

      gsap.fromTo(
        row,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    imageRefs.current.forEach((image) => {
      if (!image) return;

      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      imageTimeline
        .fromTo(
          image,
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "none" },
        )
        .to(image, { y: -80, opacity: 0.6, duration: 1.5, ease: "none" });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="Gong Cha Advertisement"
        subheading="How Do To Make Pearl Milk Tea??"
        logoSrc="/assets/gongcha/logo.png"
        technologies={[
          "Video",
          "Motion Design",
          "Branding",
          "Adobe Illustrator",
          "Adobe Premiere",
          "After Effects",
        ]}
      />

      <main className="w-full px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto space-y-24">
          {/* Row 1 - Overview */}
          <div
            ref={(el) => {
              rowRefs.current[0] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center min-h-[60vh] py-2"
          >
            <div>
              <h2
                style={{ color: "var(--olive-green)" }}
                className="font-semibold text-xl mb-4"
              >
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This promo video highlights Gong Cha’s best-selling drinks,
                gives a behind-the-scenes look at how pearl milk tea is freshly
                made, and shows the final serving process. The goal was to not
                only promote popular menu items but also help customers better
                understand the quality and care that goes into each drink.
                Throughout the video, I made sure to maintain Gong Cha’s
                personality and branding by keeping the visuals clean, vibrant,
                and aligned with the brand’s youthful and friendly image.
              </p>
            </div>
            <div>
              <div className="w-full max-w-md mx-auto">
                <StyledVideo
                  src="/assets/videos/motion_graphics_gongcha.mp4"
                  poster="/assets/video_thumbnails/gongcha_ad_thumbnail.png"
                  ariaLabel="Gong Cha promo video"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Cover Page */}
          <div
            ref={(el) => {
              rowRefs.current[1] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-start min-h-[90vh] py-8"
          >
            <div className="space-y-6">
              <img
                src="../../../assets/gongcha/real_footage(1).png"
                alt="Real Footage"
                ref={(el) => {
                  imageRefs.current[0] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/real_footage(2).png"
                alt="Real Footage"
                ref={(el) => {
                  imageRefs.current[1] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/real_footage(3).png"
                alt="Real Footage"
                ref={(el) => {
                  imageRefs.current[2] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:sticky lg:top-28 self-start lg:max-w-sm">
              <UnderlinedHeading text="Real Footage" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                The video also quickly walks viewers through what customers see
                as soon as they enter the store, including the Gong Cha logo
                signage, employees preparing drinks behind the counter, and the
                overall dining area. This short introduction helps create a
                welcoming first impression and gives viewers a realistic sense
                of the in-store experience.
              </p>
            </div>
          </div>

          {/* Row 3 - Happy People */}
          <div
            ref={(el) => {
              rowRefs.current[2] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-start min-h-[90vh] py-8"
          >
            <div className="lg:sticky lg:top-28 self-start lg:order-2 lg:max-w-sm">
              <UnderlinedHeading text="Best Sellers" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                I highlighted must-have options to help customers quickly
                understand what to choose from among the many drink choices. I
                noticed that many people I met were not familiar with bubble tea
                and often felt overwhelmed by the menu. To make it easier, I
                featured Gong Cha’s top five best sellers as simple and reliable
                recommendations.
              </p>
            </div>
            <div className="lg:order-1">
              <img
                src="../../../assets/gongcha/best_sellers.png"
                alt="Best Sellers"
                ref={(el) => {
                  imageRefs.current[3] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 4 - Map */}
          <div
            ref={(el) => {
              rowRefs.current[3] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-start min-h-[90vh] py-8"
          >
            <div className="space-y-6">
              <img
                src="../../../assets/gongcha/how_to_make(1).png"
                alt="How To Make"
                ref={(el) => {
                  imageRefs.current[4] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/how_to_make(2).png"
                alt="How To Make"
                ref={(el) => {
                  imageRefs.current[5] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/how_to_make(3).png"
                alt="How To Make"
                ref={(el) => {
                  imageRefs.current[6] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/how_to_make(4).png"
                alt="How To Make"
                ref={(el) => {
                  imageRefs.current[7] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:sticky lg:top-28 self-start lg:max-w-sm">
              <UnderlinedHeading text="How To Make" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                After that, the video zooms in on the pearl milk tea to show the
                step-by-step process of how the drink is made. This gives
                viewers and Gong Cha customers a clearer understanding of the
                ingredients and preparation process. By showing how the
                signature pearl milk tea is made, it helps build more trust and
                appreciation for the quality behind the drink.
              </p>
            </div>
          </div>
          {/* Row 5 - Local Specialty */}
          <div
            ref={(el) => {
              rowRefs.current[4] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-start min-h-[90vh] py-8 mb-24"
          >
            <div className="lg:sticky lg:top-28 self-start lg:order-2 lg:max-w-sm">
              <UnderlinedHeading text="Branding + CTA" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                At the end of the video, I included Gong Cha’s brand message,
                “Brewing Happiness,” to reinforce the brand’s core value and
                emotional appeal. By highlighting this message, I wanted to
                remind viewers that Gong Cha is not just selling drinks, but
                creating enjoyable and memorable moments.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                I also added a clear call to action at the end to encourage
                customers to visit the store and try the featured best sellers
                themselves. This helps the video feel complete, leaving viewers
                with a strong brand impression and a direct invitation to
                experience it in person.
              </p>
            </div>
            <div className="space-y-6 lg:order-1">
              <img
                src="../../../assets/gongcha/branding(1).png"
                alt="Branding + CTA"
                ref={(el) => {
                  imageRefs.current[8] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/gongcha/branding(2).png"
                alt="Branding + CTA"
                ref={(el) => {
                  imageRefs.current[9] = el;
                }}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
