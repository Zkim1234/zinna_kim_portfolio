import React from "react";
import GalleryCarousel from "../components/GalleryCarousel.jsx";
import StyledVideo from "../components/StyledVideo.jsx";

export default function Gallery() {
  const images = [
    "gallery/magazine/travel_magazine_design.png",
    "gallery/magazine/travel_magazine_design2.png",
    "gallery/magazine/travel_magazine_design3.png",
    "gallery/magazine/travel_magazine_design4.png",
    "gallery/magazine/travel_magazine_design5.png",
    "gallery/magazine/travel_magazine_design6.png",
    "gallery/magazine/travel_magazine_design7.png",
    "gallery/magazine/travel_magazine_design8.png",
    "gallery/magazine/travel_magazine_design9.png",
    "gallery/magazine/travel_magazine_design10.png",
    "gallery/magazine/travel_magazine_design11.png",
    "gallery/magazine/travel_magazine_design12.png",
  ];
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full flex-1 px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-green)] dark:text-white mb-8 sm:mb-12 text-center">
          My Design Gallery
        </h2>

        {/* First Section: Carousel with Text */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Left: Carousel */}
          <div className="w-full lg:w-1/2 overflow-hidden">
            <GalleryCarousel images={images} />
          </div>
          {/* Right: Text Box */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--navy-green)] dark:text-white mb-4">
                G Adventures Travel Magazine Design
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Referenced the information from
                <span>
                  <a
                    href="https://www.gadventures.com/trips/uncover-korea-k-pop-and-hanok-villages/AKSJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {" "}
                    G Adventures
                  </a>
                </span>
                , this travel magazine design project showcases a modern and
                visually appealing layout that highlights various travel
                destinations, cultural experiences, and adventure activities.
                The design incorporates vibrant imagery, and clean typography to
                create an engaging reading experience for travel enthusiasts.
              </p>
            </div>
          </div>
        </div>

        {/*Graphic Design Section */}
        <div className="py-8 sm:py-12">
          <h3 className="text-center font-bold text-[var(--olive-green)] text-2xl sm:text-3xl mb-8">
            Graphic Designs
          </h3>
          {/* Second Section: Text on Left, Video on Right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full max-w-6xl mx-auto items-center mb-12 sm:mb-16">
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--navy-green)] dark:text-white mb-4">
                  Sephora
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--olive-green)] dark:text-[var(--olive-green)] mb-2">
                      Creative Design
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      While maintaining brand consistency, I carefully adhered to Sephora’s visual identity and brand guidelines to ensure a cohesive look and feel that resonates with its target audience. Since Sephora primarily produces live action advertisements with minimal graphic driven campaigns, I saw an opportunity to explore a fully illustrated and animated approach. This project reimagines how Sephora could expand its visual storytelling through motion graphics while staying true to the brand’s essence.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--olive-green)] dark:text-[var(--olive-green)] mb-2">
                      Storytelling
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      This advertisement is designed to introduce Sephora to audiences who may not yet be familiar with the brand. I focused on highlighting Sephora’s strengths, including its product variety, inclusivity, and beauty expertise, while maintaining strong brand alignment. Additionally, the ad emphasizes Sephora’s online services, which are less prominently featured in official campaigns, showcasing the convenience of accessing Sephora from home and encouraging broader audience engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Video */}
            <div className="w-full lg:w-1/2">
              <StyledVideo
                src="/assets/videos/motion_graphics_final_project.mp4"
                poster="/assets/video_thumbnails/sephora_ad_thumbnail.png"
                ariaLabel="Sephora motion graphics video"
              />
            </div>
          </div>

          {/* Third Section: Text on right, Video on left */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full max-w-6xl mx-auto items-center">
            {/* Left: Video */}
            <div className="w-full lg:w-1/2">
              <StyledVideo
                src="/assets/videos/motion_graphics_gongcha.mp4"
                poster="/assets/video_thumbnails/gongcha_ad_thumbnail.png"
                ariaLabel="Gong Cha motion graphics video"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--navy-green)] dark:text-white mb-4">
                  Gong Cha
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--olive-green)] dark:text-[var(--olive-green)] mb-2">
                      Concept and Visual Ideation
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Having previously worked as a bobarista at Gong Cha, I noticed that many customers were curious about how pearl milk tea is made. A common question I received was whether we used real brewed tea, which revealed an opportunity to educate customers while strengthening brand transparency. Inspired by this experience, I developed an advertisement concept that highlights the craftsmanship behind pearl milk tea while featuring some of the brand’s most popular menu items. The goal was to both inform and engage viewers, turning everyday curiosity into a compelling visual story.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--olive-green)] dark:text-[var(--olive-green)] mb-2">
                      Filming
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      This advertisement was filmed on location at the store where I worked, with approval from the store owner. I utilized downtime efficiently to capture authentic footage of the drink-making process. The final piece blends graphic elements with real-life footage, creating a dynamic transition between informative visuals and behind-the-scenes moments. This approach enhances viewer engagement, builds trust through transparency, and provides a clearer understanding of how each drink is carefully prepared.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
