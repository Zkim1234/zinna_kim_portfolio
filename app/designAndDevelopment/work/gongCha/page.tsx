import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";
import WorkPageLayout from "../../../../public/components/WorkPageLayout";

export default function GongCha() {
  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="Gong Cha Advertisement"
        subheading="How Do To Make Pearl Milk Tea??"
        logoSrc="/assets/gongcha/logo.png"
        technologies={[
          "Video",
          "Motion Design",
          "Branding",
          "Adobe Premiere",
          "AE",
        ]}
      />
      <Footer />
    </div>
  );
}
