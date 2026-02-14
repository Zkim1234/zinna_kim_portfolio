export default function MySkills() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-green)] dark:text-white">
          My Skills
        </h2>
        <div className="mt-12 w-full max-w-5xl flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[var(--olive-green)] font-normal text-xl mb-4">
              Development
            </h3>
            <div className="bg-white max-w-[30em] rounded-2xl p-6">
              <img
                src="/assets/development_skills.png"
                alt="developmentskills"
                className="w-full max-w-[30em] mx-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[var(--olive-green)] font-normal text-xl mb-4">
              Design
            </h3>
            <div className="bg-white max-w-[30em] rounded-2xl p-6">
              <img
                src="/assets/design_skills.png"
                alt="designskills"
                className="w-full max-w-[25em] mx-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <p>Soft Skills:</p>
        </div>
      </main>
    </div>
  );
}
