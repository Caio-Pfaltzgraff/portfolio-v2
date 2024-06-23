import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import skills from "../../data/skills.json";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  return (
    <Section id="skills" className="py-10 md:py-12 lg:py-14">
      <Title text="Habilidades" />
      <div className="flex justify-center px-1 sm:px-0 mt-10">
        <div className="flex justify-center flex-wrap gap-x-[4vw] gap-y-6">
          {skills.map(skill => (
            <SkillCard {...skill} key={skill.name}/>
          ))}
        </div>
      </div>
    </Section>
  )
}