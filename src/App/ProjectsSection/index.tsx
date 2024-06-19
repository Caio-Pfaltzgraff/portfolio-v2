import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import projects from "../../data/projects.json";
import { CardProject } from "./CardProject";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Title text="Projetos" />
      <div className="mt-10 grid gap-10 justify-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <CardProject {...p} key={p.github}/>
        ))}
      </div>
    </Section>
  )
}