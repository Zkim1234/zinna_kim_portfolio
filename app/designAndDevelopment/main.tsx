import NavBar from "../../public/components/NavBar.jsx";
import Footer from "../../public/components/Footer.jsx";

export default function DesignAndDevelopment() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Design & Development</h1>
      </div>
      <Footer />
    </div>
  );
}