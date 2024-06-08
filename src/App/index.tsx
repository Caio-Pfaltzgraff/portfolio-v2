import { Container } from "../components/Container"
import { NavBar } from "../components/NavBar"
import { AboutMeSection } from "./AboutMeSection"
import { PresentationSection } from "./PresentationSection"
import { SkillsSection } from "./SkillsSection"

export default function App() {
  return (
    <>
      <NavBar />
      <Container component="main">
        <PresentationSection />
        <AboutMeSection />
        <SkillsSection />
      </Container>
    </>
  )
}
