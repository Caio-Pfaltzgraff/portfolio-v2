import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { AboutMeSection } from "./AboutMeSection"
import { PresentationSection } from "./PresentationSection"
import { ProjectsSection } from "./ProjectsSection"
import { SkillsSection } from "./SkillsSection"

export default function App() {
  return (
    <>
      <NavBar />
      <Container component="main">
        <article>
          <PresentationSection />
          <div className="space-y-10">
            <AboutMeSection />
            <SkillsSection />
            <ProjectsSection />
          </div>
        </article>
      </Container>
      <Footer />
    </>
  )
}
