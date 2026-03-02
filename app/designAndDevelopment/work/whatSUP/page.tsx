import WorkPageLayout from "../../../../public/components/WorkPageLayout";
import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";

export default function WhatSUP() {
  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="WhatSUP"
        subheading="Figma Ideas, WordPress Execution"
        logoSrc="/assets/WhatSUP/whatSUP_thumbnail.png"
        technologies={["Web Design", "Figma", "WordPress", "Frontend", "UI/UX"]}
      />
      <Footer />
    </div>
  );
}
