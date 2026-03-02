type WorkPageProps = {
  title: string;
  subheading: string;
  logoSrc: string;
  technologies: string[];
};

export default function WorkPageLayout({
  title,
  subheading,
  logoSrc,
  technologies,
}: WorkPageProps) {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 mt-24 sm:mt-16 py-16 sm:py-20 font-sans">
      <nav className="w-full mb-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <a
            href="/"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            Home
          </a>
          <span className="mx-2">›</span>
          <a
            href="/designAndDevelopment"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            Design & Development
          </a>
          <span className="mx-2">›</span>
          <span style={{ color: "var(--olive-green)" }} className="font-medium">
            {title}
          </span>
        </p>
      </nav>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 w-full max-w-6xl mx-auto">
        <div>
          {/* Hero Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--olive-green)" }}
          >
            {title}
          </h1>

          {/* Project Title/Subheading */}
          <h3 className=" sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {subheading}
          </h3>

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Logo/Image */}
        <div className="flex items-center justify-center">
          <div className="w-full h-48 sm:h-56 lg:h-64 flex items-start justify-center">
            <img
              src={logoSrc}
              alt="Project Logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
