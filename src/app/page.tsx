import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Experience from "./components/home/experience";
import HeroSection from "./components/home/hero-section";
import Parcours from "./components/home/parcours";
import ProjectOverview from "./components/home/project-overview";
import Veille from "./components/home/veille";
import Documents from "./components/home/documents";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <Parcours />
      <Divider />
      <Experience />
      <Divider />
      <Documents />
      <Divider />
      <ProjectOverview />
      <Divider />
      <Veille />
      <Divider />
    </main>
  );
};

export default Page;