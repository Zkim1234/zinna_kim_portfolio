import projectsData from "../../projects.json";

export default function Footer() {
  const projects = projectsData.projects;

  return (
    <footer className="w-full bg-[var(--navy-green)] text-white dark:bg-[var(--navy-green)] dark:text-white flex flex-col relative">
      {/* Top Left - Navigation List */}
      <div className="px-6 sm:px-10 lg:px-12 py-12 flex flex-col md:flex-row gap-12 justify-between items-start flex-1">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="mb-6">
            <h3 className="font-bold highlight-body text-lg mb-3">About me</h3>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="hover:opacity-70">
                  Design Gallery
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:opacity-70">
                  My Skills
                </a>
              </li>
              <ul className="ml-4 space-y-1 mt-2">
                <li>
                  <a href="#" className="hover:opacity-70">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Web Design
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <h3 className="font-bold highlight-body text-lg mb-3">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={project.name || index}>
                  <a
                    href={`/projects/${project.name}`}
                    className="hover:opacity-70"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>
              <h4 className="hover:opacity-70">
                <a href="mailto:zskim661@gmail.com">zskim661@gmail.com</a>
              </h4>
            </li>
            <li>
              <h4 className="hover:opacity-70">
                <a href="#resume">Download Resume (PDF)</a>
              </h4>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href="https://github.com/Zkim1234"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                title="GitHub"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/seoyoung-kim-910508327/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                title="LinkedIn"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.667-2.236-1.495 0-2.379.998-2.768 1.965-.142.364-.178.872-.178 1.381v4.459h-3.554s.047-7.244 0-7.998h3.554v1.131c-.009.015-.022.03-.033.046h.033v-.046c.357-.551 1.043-1.335 2.535-1.335 1.852 0 3.239 1.21 3.239 3.807v4.395zM5.337 9.432c-1.142 0-1.993-.755-1.993-1.696 0-.943.851-1.696 2.037-1.696s1.994.753 2.037 1.696c0 .941-.895 1.696-2.081 1.696zm1.782 11.02H3.555V9.454h3.564v11.998zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </li>
            <li className="pt-4">
              <img
                src="/assets/logo-white.svg"
                alt="Logo"
                className="w-28 sm:w-32 h-auto"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Center - Copyright */}
      <div className="mt-8 mb-6 flex items-center justify-center">
        <p className="body text-sm text-center">
          © 2026 Zinna Seoyoung Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
