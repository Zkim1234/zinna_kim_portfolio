import WorkPageLayout from "../../../../public/components/WorkPageLayout";
import NavBar from "../../../../public/components/NavBar.jsx";
import Footer from "../../../../public/components/Footer.jsx";

export default function Solace() {
  return (
    <div>
        <NavBar />
        <WorkPageLayout
          title="Solace"
          subheading="UI/UX Wasn't Enough, So I Learned Full-Stack"
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
