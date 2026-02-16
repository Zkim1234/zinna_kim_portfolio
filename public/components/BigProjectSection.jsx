export default function BigProjectSection({ project, projectIndex }) {
  const slugify = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const projectId = encodeURIComponent(String(projectIndex ?? 0));

  return (
    <section className="my-20 w-full px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex gap-0 justify-start">
          {/* Project Card */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden w-full max-w-5xl">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image on Left */}
              <div className="w-full md:w-2/3">
                <img
                  src={`/assets/${project.thumbnail}`}
                  alt={`${project.name} Screenshot`}
                  className="w-full h-56 sm:h-72 md:h-full object-cover"
                />
              </div>
              {/* Content on Right */}
              <div className="flex flex-col justify-start p-6 sm:p-8 md:w-1/3">
                <a
                  href={`/projectDetail?id=${projectId}`}
                  className="hover:underline transition-all"
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
                  href={`/projectDetail?id=${projectId}`}
                  className="text-[var(--olive-green)] text-left hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
