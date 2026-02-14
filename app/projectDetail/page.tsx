import NavBar from "../../public/components/NavBar.jsx";
import Footer from "../../public/components/Footer.jsx";
import ImageCarousel from "../../public/components/ImageCarousel.jsx";
import StyledVideo from "../../public/components/StyledVideo.jsx";
import projectsData from "../../projects.json";

export const dynamic = "force-dynamic";

type ProjectDetailPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const getParamValue = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] : value || "";

export default function ProjectDetail({
  searchParams,
}: ProjectDetailPageProps) {
  const projectId = getParamValue(searchParams?.id);
  const queryKey = searchParams ? Object.keys(searchParams)[0] : "";
  const rawSlug =
    getParamValue(searchParams?.project) ||
    (queryKey && queryKey !== "id" ? queryKey : "");
  const slug = rawSlug ? decodeURIComponent(rawSlug) : "";

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const projectIndex = projectId ? parseInt(projectId) : -1;
  const projectBySlugIndex = slug
    ? projectsData.projects.findIndex(
        (item: { name: string }) => slugify(item.name) === slug,
      )
    : -1;

  const resolvedIndex =
    projectBySlugIndex >= 0
      ? projectBySlugIndex
      : projectIndex >= 0
        ? projectIndex
        : 0;

  const project =
    projectsData.projects[resolvedIndex] || projectsData.projects[0];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <NavBar />
      <main className="w-full flex-1 pb-20">
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
                    href={project.link}
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
                    <div className="text-base">{project.date}</div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
                      My Position
                    </div>
                    <div className="text-base">{project.role.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 lg:px-24">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto mb-8 mt-12">
            <a
              href="/"
              className="inline-flex items-center text-[var(--dark-green)] hover:text-[var(--navy-green)] transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Back to Home
            </a>
          </div>

          {/* Section 3: Text Left, Images Right */}
          <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[var(--dark-green)] mb-6">
                Project Overview
              </h2>
              <p className="text-[var(--dark-green)] leading-relaxed text-lg">
                {project.projectOverview}
              </p>
            </div>
            <div>
              {project.overviewVideo && (
                <div className="flex justify-center">
                  <StyledVideo
                    src={`/assets/videos/${project.overviewVideo}`}
                    className="w-full max-w-xl"
                    poster={`/assets/${project.overviewVideoThumbnail}`}
                    ariaLabel={`${project.name} overview video`}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Images Left, Text Right (Mirrored) */}
          <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <ImageCarousel images={project.myWorkImages} />
            </div>
            <div>
              <h2 className="text-4xl text-[var(--dark-green)] mb-6">
                {project.myWorkTitle}
              </h2>
              <ul className="list-disc pl-6 text-[var(--dark-green)] leading-relaxed text-lg space-y-2">
                {Array.isArray(project.myWork)
                  ? project.myWork.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : typeof project.myWork === "string"
                    ? (project.myWork as string)
                        .split("\n")
                        .filter(Boolean)
                        .map((item: string, index: number) => (
                          <li key={index}>{item.replace(/^•\s?/, "")}</li>
                        ))
                    : null}
              </ul>
            </div>
          </div>

          {/* Section 5: Full Width Heading, Description with Images Below */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="mb-8">
              <h2 className="text-4xl text-[var(--dark-green)] mb-4">
                {project.conclusionTitle}
              </h2>
              <p className="text-[var(--dark-green)] leading-relaxed text-lg">
                {project.conclusion}
              </p>
            </div>
            <div>
              <ImageCarousel images={project.conclusionImages} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
