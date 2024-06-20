import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import { AchievementCard } from "./AchievementCard";

export function AchievementsSection() {
  return (
    <Section id="achievements"  className="py-10 md:py-12 lg:py-14">
      <Title text="Conquistas"/>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <AchievementCard 
          type="Graduação"
          title="Análise e Desenvolvimento de Sistemas"
          plataform="Universidade Estácio de Sá"
          duration="2021 - 2024"
          className="md:col-span-2 border border-orange-700 dark:border-orange-700"
        />

        <AchievementCard 
          type="Cursos" 
          title="Java, React, JS, TS e demais cursos" 
          duration="980h - 2024" 
          plataform="Alura"
          link="https://cursos.alura.com.br/user/caiopfaltzgraff/fullCertificate/8f6cd0eb3ccf6e88405b9075cf8749d7"
        />
        <AchievementCard 
          type="BootCamp Santander" 
          title="Java e Spring Boot" 
          duration="88h - 2023" 
          plataform="DIO"
          link="https://www.dio.me/certificate/3BFD81D4"
        />
        <AchievementCard 
          type="Eventos" 
          title="React, JS, TS, Node e Java" 
          duration="40h - 2023" 
          plataform="Rocketseat"
        />
      </div>
    </Section>
  )
}