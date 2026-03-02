import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";
import WorkPageLayout from "../../../../public/components/WorkPageLayout";

export default function SolaceCaseStudy() {
  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="Solace Case Study"
        subheading="Iron Workers Recovery App"
        logoSrc="/assets/Solace/solace_thumbnail.png"
        technologies={[
          "UX/UI",
          "Case Study",
          "Figma",
          "Prototyping",
          "User Research",
        ]}
      />
      <Footer />
    </div>
  );
}
