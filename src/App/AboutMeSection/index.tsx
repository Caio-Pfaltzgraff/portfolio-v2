import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";

export function AboutMeSection() {
  const photo = "/caio-photo.png";
  const [isStorytelling, setIsStorytelling] = useState(false);

  return (
    <Section id="aboutme" className="py-10 md:py-12 lg:py-14">
      <Title text="Sobre mim" />
      <div className="flex justify-center md:justify-start gap-4 mt-10">
        <Button 
          onClick={() => setIsStorytelling(false)}
          isActive={!isStorytelling} 
        >
          Resumo
        </Button>
        <Button 
          onClick={() => setIsStorytelling(true)}
          isActive={isStorytelling} 
        >
          <Tooltip
            content="Habilidade de contar histórias utilizando enredo elaborado, narrativa envolvente, e recursos audiovisuais"
            showArrow
            classNames={{
              base: [
                "before:bg-dark-light dark:before:bg-zinc-700"
              ],
              content: [
                "px-4 py-2 shadow-xl",
                "text-white bg-dark-light dark:bg-zinc-700",
                "max-w-60"
              ]
            }}
          >
            Storytelling
          </Tooltip>
        </Button>
      </div>

      {!isStorytelling ? (
        <div className="grid gap-10 md:grid-cols-2 py-10">
          <div className="flex justify-center lg:justify-start items-center md:pl-3">
            <div className="p-1 max-w-[410px]">
              <div className="border shadow-lg dark:shadow-none p-2 md:p-3 rounded-md bg-white dark:bg-light">
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
              Sou Desenvolvedor Full-Stack, especializado na criação de interfaces modernas, dinâmicas e responsivas utilizando{" "}
              <span className="font-bold dark:text-orange-600">React</span>,{" "}
              <span className="font-bold dark:text-orange-600">Typescript</span>,{" "}
              <span className="font-bold dark:text-orange-600">Next.js</span>{" "}
              no frontend. No backend, desenvolvo APIs robustas e escaláveis com{" "}
              <span className="font-bold dark:text-orange-600">C#</span> e {" "}
              <span className="font-bold dark:text-orange-600">.NET</span>,
              garantindo alta performance e confiabilidade.
            </p>

            <p className="leading-relaxed tracking-wider">
              Meu foco é entregar soluções eficientes, alinhadas às necessidades do cliente e à evolução tecnológica. Tenho habilidade para trabalhar em equipe, colaborar em projetos desafiadores e aprender rapidamente novas ferramentas e frameworks.
            </p>

            <p className="leading-relaxed tracking-wider">
              Estou sempre em busca de aprimorar minhas habilidades e contribuir com projetos que façam a diferença.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 my-10">
          <p className="text-base leading-relaxed dark:text-light">
            Desde muito jovem, minha vida girava em torno do vôlei. Como atleta, joguei em diversos times e tive a oportunidade de conhecer muitas pessoas diferentes. A cada treino e competição, aprendi a importância do trabalho em equipe e da dedicação para alcançar meus objetivos. Quando chegou o momento de escolher meu futuro, tive interesse em conhecer mais sobre tecnologia, levando-me ao curso de Análise e Desenvolvimento de Sistemas.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Durante a graduação, mergulhei nos estudos de banco de dados e da linguagem C, mas logo percebi que o ritmo acadêmico não estava sendo suficiente. Busquei cursos adicionais na Softblue, onde desenvolvi bases sólidas em programação, aprendendo linguagens como C e C++. Apesar dos desafios, mantive a persistência e descobri que meu interesse estava mais alinhado com o desenvolvimento corporativo. Foi então que, na Alura, aprofundei-me em Java, JavaScript, TypeScript e seus principais frameworks, construindo um caminho mais claro para minha carreira.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Em março de 2024, iniciei meus estudos em frontend com React, percebendo a necessidade de entender tanto o frontend quanto o backend. Essa decisão foi um divisor de águas, pois em agosto do mesmo ano conquistei minha primeira vaga como desenvolvedor frontend. Durante esse período, dediquei-me ao React e suas ferramentas, mas também mantive meu olhar no backend.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Em uma conversa com um dos líderes da empresa, compartilhei minha trajetória e o conhecimento prévio que tinha sobre APIs REST, construído com base em estudos de Java. Pouco tempo depois, com a saída de dois desenvolvedores backend, recebi um desafio: trabalhar no backend com C# e .NET, tecnologias completamente novas para mim. Aceitei sem hesitar(cheio de medo), enxergando a oportunidade de aprender e expandir minhas habilidades.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Hoje, atuo como desenvolvedor fullstack, integrando conhecimentos de React, TypeScript, C# e .NET para entregar soluções completas e escaláveis. Minha jornada tem sido marcada pela curiosidade, pela vontade de superar desafios e pelo compromisso com o aprendizado constante. Estou ansioso para continuar crescendo e contribuindo no mundo da tecnologia.
          </p>
        </div>
      )}
    </Section>
  );
}
