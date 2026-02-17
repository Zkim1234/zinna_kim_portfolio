import Footer from "../../public/components/Footer";
import NavBar from "../../public/components/NavBar";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Case Study | Zinna Kim Portfolio",
  description: "In-depth case studies showcasing my design process and problem-solving skills.",
};

export default function CaseStudy() {
  return (
    <div>
        <NavBar />
      {/* Header Image */}
        <div className="w-full hidden sm:block">
          <img
            src={`/assets/${project.thumbnail}`}
            alt={`${project.name} thumbnail`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Header Info Block */}
        <div className="w-full bg-[var(--dark-green)] text-white h-auto pt-20 pb-6 sm:py-5">
          <div className="max-w-6xl mx-auto h-full py-6 sm:py-10 flex flex-col justify-start gap-6 px-6 sm:px-10 lg:px-0">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="w-full lg:w-2/3">
                <h2 className="mb-2 text-2xl leading-tight font-medium">
                  {project.title}
                </h2>
                <div className="mb-4 text-2xl leading-snug">{project.name}</div>
                <p className="leading-relaxed text-base mb-6">
                  {project.description}
                </p>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end justify-between">
                {/* Live Link Button - Top Right */}
                {project.link && (
                  <a
                    href="https://solace-promo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 sm:px-8 py-3 bg-white text-[var(--dark-green)] rounded-lg hover:bg-[var(--navy-green)] hover:text-white hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer flex-shrink-0 mt-2 mb-4"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}

                <div className="flex flex-col items-start lg:items-end gap-6 sm:gap-9">
                  <div className="text-left lg:text-right">
                    <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
                      Duration
                    </div>
                    <div className="text-base">asdf</div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
                      My Position
                    </div>
                    <div className="text-base">asdfasd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <Footer />
    </div>
  );
}
