import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Parcours from "./components/home/parcours"
import Experience from "./components/home/experience"
import Veille from "./components/home/veille"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <Parcours/>
      <Divider/>
      <Experience/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
      <Veille/>
      <Divider/>
    </main>
  )
}

export default page