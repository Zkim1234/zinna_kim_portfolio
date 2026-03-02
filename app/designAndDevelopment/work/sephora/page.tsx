import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";
import WorkPageLayout from "../../../../public/components/WorkPageLayout";

export default function Sephora() {
  return (
    <div>
      <NavBar />
      <WorkPageLayout
        title="Sephora Advertisement"
        subheading="Vape? No, Sephora Ad."
        logoSrc="/assets/sephora/thumbnail.png"
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
