import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import projectsData from "../../projects.json";

export default function Projects() {
  const rawProjects = projectsData.projects || [];
  const overviewProjects = projectsData.projectsOverview || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const projects = useMemo(() => {
    const base = [...rawProjects];
    while (base.length < 3) {
      base.push({
        title: "Coming Soon",
        name: "Coming Soon",
        date: "Coming Soon",
        role: [],
        link: "#",
        description: "New project details will be added here soon.",
        thumbnail: "logo-grey.svg",
        projectOverview: "Stay tuned for upcoming work.",
        overviewVideo: "",
        overviewVideoThumbnail: "logo-grey.svg",
        myWorkTitle: "Coming Soon",
        myWork: [],
        myWorkImages: [],
        conclusionTitle: "Coming Soon",
        conclusion: "More details coming soon.",
        conclusionImages: [],
      });
    }
    return base.slice(0, 3);
  }, [rawProjects]);

  const cardProjects = useMemo(() => {
    const base = [...overviewProjects];
    while (base.length < 3) {
      base.push({
        name: "Coming Soon",
        title: "Coming Soon",
        role: [],
        description: "New project details will be added here soon.",
        thumbnail: "logo-grey.svg",
        images: [],
      });
    }
    return base.slice(0, 3);
  }, [overviewProjects]);

  const selectedProject = projects[selectedIndex] || projects[0];

  const carouselImages = useMemo(() => {
    const selectedCard = cardProjects[selectedIndex];
    const images = (selectedCard?.images || [])
      .filter((img: string) => img !== "")
      .map((img: string) => `/assets/${img}`);

    while (images.length < 4) {
      images.push(images[0] || "/assets/logo-grey.svg");
    }

    return images.slice(0, 4);
  }, [selectedIndex, cardProjects]);

  const handleSelect = (index: number) => {
    if (isMobile) {
      const slug = slugify(projects[index]?.name || "");
      router.push(`/projectDetail?${encodeURIComponent(slug)}`);
      return;
    }
    setSelectedIndex(index);
    setImageIndex(0);
  };

  const handlePrev = () => {
    setImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setImageIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-16 sm:pt-20">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-green)] dark:text-white mb-8 sm:mb-12">
          My Projects
        </h2>

        <div className="flex w-full max-w-6xl flex-col md:flex-row gap-6 mb-10">
          {cardProjects.map((project, index) => (
            <button
              key={`${project.name}-${index}`}
              onClick={() => handleSelect(index)}
              className={`flex-1 border border-[var(--green-gray)] bg-white text-left transition-all duration-200 cursor-pointer hover:shadow-md flex flex-col ${
                !isMobile && selectedIndex === index
                  ? "outline outline-4 outline-[var(--olive-green)] shadow-2xl shadow-[rgba(51,71,78,0.35)] scale-[1.01]"
                  : ""
              }`}
            >
              <div className="relative h-40 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={
                    project.thumbnail
                      ? `/assets/${project.thumbnail}`
                      : "/assets/logo-grey.svg"
                  }
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-[var(--dark-green)] mb-2">
                  {project.title || project.name}
                </h4>
                <p className="text-sm text-[var(--olive-green)]">
                  {project.role && project.role.length > 0
                    ? project.role.join(" ")
                    : ""}
                </p>
                <p className="text-sm text-[var(--navy-green)] mt-2">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {!isMobile && (
          <div className="w-full max-w-6xl bg-white border border-[var(--green-gray)] flex flex-col lg:flex-row overflow-hidden">
            <div className="relative w-full lg:w-7/12 h-64 sm:h-80 lg:h-auto bg-zinc-100">
              <Image
                src={carouselImages[imageIndex]}
                alt={`${selectedProject.name} preview`}
                fill
                className="object-cover"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 rounded-full p-2 shadow-lg hover:bg-white hover:dark:bg-gray-800 transition-all"
                aria-label="Previous image"
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
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 rounded-full p-2 shadow-lg hover:bg-white hover:dark:bg-gray-800 transition-all"
                aria-label="Next image"
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
            </div>

            <div className="w-full lg:w-5/12 p-6 sm:p-8 flex flex-col text-left">
              <h3 className="text-[var(--dark-green)] font-bold mb-3">
                {cardProjects[selectedIndex]?.title ||
                  cardProjects[selectedIndex]?.name}
              </h3>
              <p className="heighlight-body text-[var(--olive-green)] mb-4">
                {cardProjects[selectedIndex]?.role &&
                cardProjects[selectedIndex]?.role.length > 0
                  ? cardProjects[selectedIndex]?.role.map(
                      (r: string, i: number) => (
                        <React.Fragment key={i}>
                          {r}
                          {i < cardProjects[selectedIndex]!.role.length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ),
                    )
                  : ""}
              </p>
              <p className="text-sm text-[var(--navy-green)] mb-6">
                {cardProjects[selectedIndex]?.description ||
                  "More details will be added."}
              </p>

              <Link
                href={`/projectDetail?${encodeURIComponent(
                  slugify(cardProjects[selectedIndex]?.name || ""),
                )}`}
                className="inline-flex items-center gap-2 bg-[var(--navy-green)] text-white px-5 py-3 text-sm hover:opacity-90 w-fit"
              >
                About Project
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
