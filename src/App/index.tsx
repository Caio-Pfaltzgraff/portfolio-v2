import { Container } from "../components/Container"
import { NavBar } from "../components/NavBar"
import { AboutMeSection } from "./AboutMeSection"
import { PresentationSection } from "./PresentationSection"

export default function App() {
  return (
    <>
      <NavBar />
      <Container component="main">
        <PresentationSection />
        <AboutMeSection />
      </Container>
    </>
  )
}
