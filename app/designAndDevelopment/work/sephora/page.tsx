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

export default function Sephora() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        title="Sephora Advertisement"
        subheading="Vape? No, Sephora Ad."
        logoSrc="/assets/sephora/logo.png"
        technologies={[
          "Video",
          "Motion Design",
          "Branding",
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
                I realized that Sephora doesn’t usually create graphic-based
                promotional videos, so I chose this brand to explore that
                direction and see how it could work visually. I wanted to
                experiment with a more design-driven approach while still
                keeping the brand identity strong and recognizable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                In this advertisement, I focused on showcasing Sephora’s
                identity, highlighting the wide range of brands available
                in-store, and also giving insight into the online shopping
                experience. This helps present Sephora not just as a beauty
                retailer, but as a complete beauty destination both in-store and
                online.
              </p>
            </div>
            <div>
              <div className="w-full max-w-xl mx-auto">
                <StyledVideo
                  src="/assets/videos/motion_graphics_final_project.mp4"
                  poster="/assets/video_thumbnails/sephora_ad_thumbnail.png"
                  ariaLabel="Sephora motion graphics video"
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
                src="../../../assets/sephora/technique(1).png"
                alt="After Effects Techniques"
                ref={(el) => {
                  imageRefs.current[0] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/sephora/technique(2).png"
                alt="After Effects Techniques"
                ref={(el) => {
                  imageRefs.current[1] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:sticky lg:top-28 self-start lg:max-w-sm">
              <UnderlinedHeading text="After Effect Techniques" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Through this project, I wanted to show my range of skills in
                After Effects by creating a fully graphic-based advertisement. I
                used techniques like masking, dynamic movements, zooming in and
                out, animated number changes, and other motion effects to make
                the visuals more engaging. This allowed me to demonstrate both
                my technical abilities and my creativity in bringing a brand to
                life through motion graphics.
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
            <div className="lg:sticky lg:top-28 self-start lg:max-w-sm lg:order-2">
              <UnderlinedHeading text="Brand Consistency" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                By including phrases like “We Belong to Something Beautiful” and
                “A Global Beauty Leader and Innovator,” I wanted to reflect
                Sephora’s core brand identity. These messages highlight the idea
                that beauty is inclusive and not limited by gender, race,
                disability, or any other differences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                It reinforces that everyone is beautiful in their own way, and
                positions Sephora as a leader and innovator in the beauty
                industry that supports diversity and inclusivity.
              </p>
            </div>
            <div className="space-y-6 lg:order-1">
              <img
                src="../../../assets/sephora/brand_consistency(1).png"
                alt="Brand Consistency"
                ref={(el) => {
                  imageRefs.current[2] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/sephora/brand_consistency(2).png"
                alt="Brand Consistency"
                ref={(el) => {
                  imageRefs.current[3] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 4 - Map */}
          <div
            ref={(el) => {
              rowRefs.current[3] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 items-start min-h-[90vh] py-8 mb-24"
          >
            <div className="space-y-6">
              <img
                src="../../../assets/sephora/online_order(1).png"
                alt="Quick Online Order User Journey"
                ref={(el) => {
                  imageRefs.current[4] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/sephora/online_order(2).png"
                alt="Quick Online Order User Journey"
                ref={(el) => {
                  imageRefs.current[5] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/sephora/online_order(3).png"
                alt="Quick Online Order User Journey"
                ref={(el) => {
                  imageRefs.current[6] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
              <img
                src="../../../assets/sephora/online_order(4).png"
                alt="Quick Online Order User Journey"
                ref={(el) => {
                  imageRefs.current[7] = el;
                }}
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:sticky lg:top-28 self-start lg:max-w-sm">
              <UnderlinedHeading text="Quick Online Order User Journey" />
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                The graphic user journey shows how simple and convenient the
                shopping process is — users can easily browse by scrolling,
                click on the products they want, and complete their purchase in
                just a few steps. I wanted to clearly communicate how smooth and
                user-friendly the online experience is.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                At the end, I showed the option to either pick up in store or
                have the products delivered to your home. This not only
                highlights flexibility and convenience, but also encourages
                viewers to visit Sephora, whether online or in person.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
