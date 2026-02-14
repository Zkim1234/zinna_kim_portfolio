import NavBar from "../../public/components/NavBar.jsx";
import Footer from "../../public/components/Footer.jsx";

export default function AboutMe() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <NavBar />
      <main className="w-full flex-1 px-8 pt-32 pb-20 sm:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h1 className="mb-6 text-[var(--navy-green)] text-4xl font-bold">
                About Me
              </h1>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Hello! I'm Zinna Kim, a passionate web designer and front-end
                developer with a keen eye for aesthetics and a love for creating
                engaging user experiences. With a background in design and
                coding, I bridge the gap between creativity and functionality.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                My journey into web design started with a fascination for how
                design influences user behavior. Over the years, I've honed my
                skills in HTML, CSS, JavaScript, and various design tools to
                bring ideas to life on the web. I believe that good design is
                not just about looks but also about usability and accessibility.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                When I'm not coding or designing, I enjoy exploring the latest
                trends in technology, photography, and traveling to new places.
                I'm always eager to learn and take on new challenges that push
                my creative boundaries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Feel free to reach out if you'd like to collaborate or just want
                to say hello!
              </p>
            </div>
            <div className="w-64 sm:w-80 lg:w-96 flex-shrink-0">
              <img
                src="/assets/zinna_headshot.png"
                alt="Zinna Kim headshot"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
          <div>
            {/* Additional sections can be added here if needed */}
            <h2 className="mb-6 text-[var(--navy-green)] text-2xl font-bold mt-12">
              Contact Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
              Email: zskim661@gmail.com
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
              Phone: (647) 838-8340
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Linkedin: <a href="https://www.linkedin.com/in/seoyoung-kim-910508327/" target="_blank" rel="noopener noreferrer" className="underline">https://www.linkedin.com/in/seoyoung-kim-910508327/</a>
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
