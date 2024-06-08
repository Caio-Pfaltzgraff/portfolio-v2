import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import photo from "/caio-photo.png";

export function AboutMeSection() {
  return (
    <Section id="aboutme" className="py-10 md:py-12 lg:py-14">
      <Title text="Sobre mim"/>
      <div className="grid gap-10 md:grid-cols-2 py-10">
        <div className="flex justify-center lg:justify-start items-center md:pl-3">
          <div className="p-1 max-w-[410px]">
            <div className="border shadow-lg dark:shadow-none p-2 md:p-3 rounded-sm bg-white dark:bg-light">
              <img 
                src={photo} 
                alt="Foto de Caio Pfaltzgraff" 
                className="aspect-square rounded-sm mb-[8vw] md:mb-9"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
          <p className="leading-relaxed tracking-wider">
            Sou recém-formado em Análise e Desenvolvimento de Sistemas com
            experiência em desenvolvimento de APIs Rest (
            <span className="font-bold dark:text-orange-600">
              Java
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              Spring Boot
            </span>
            ) e interfaces interativas (
            <span className="font-bold dark:text-orange-600">
              React
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              JavaScript
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              TypeScript
            </span>
            ).
          </p>

          <p className="leading-relaxed tracking-wider">
            Além das habilidades técnicas, trabalho minhas habilidades
            comportamentais, como comunicação, organização e
            proatividade, características que me fazem ser um dev versátil.
          </p>

          <p className="leading-relaxed tracking-wider">
            Estou atualmente em busca da minha primeira oportunidade como
            desenvolvedor web full-stack Jr, ansioso para aplicar e ampliar
            minhas habilidades em um ambiente desafiador.
          </p>
        </div>
      </div>
    </Section>
  )
}