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
          isActive={isStorytelling === false} 
        >
          Resumo
        </Button>
        <Button 
          onClick={() => setIsStorytelling(true)}
          isActive={isStorytelling === true} 
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

      {isStorytelling === false ? (
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
              Sou recém-graduado em Análise e Desenvolvimento de Sistemas, com
              experiência em desenvolvimento de APIs Rest (
              <span className="font-bold dark:text-orange-600">Java</span>,{" "}
              <span className="font-bold dark:text-orange-600">
                Spring Boot
              </span>
              , <span className="font-bold dark:text-orange-600">Node.JS</span>,{" "}
              <span className="font-bold dark:text-orange-600">Express</span>) e
              interfaces interativas (
              <span className="font-bold dark:text-orange-600">React</span>,{" "}
              <span className="font-bold dark:text-orange-600">Javascript</span>
              ,{" "}
              <span className="font-bold dark:text-orange-600">Typescript</span>
              ).
            </p>

            <p className="leading-relaxed tracking-wider">
              Além das habilidades técnicas, sou comunicativo, organizado e
              proativo, o que me torna um desenvolvedor versátil e sempre em
              busca de aprendizado.
            </p>

            <p className="leading-relaxed tracking-wider">
              Estou buscando minha primeira oportunidade como Desenvolvedor Web,
              ansioso para aplicar e expandir minhas habilidades em um ambiente
              desafiador.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 my-10">
          <p className="text-base leading-relaxed dark:text-light">
            Desde muito jovem, minha vida girava em torno do vôlei. Como atleta,
            joguei em diversos times e tive a oportunidade de conhecer muitas
            pessoas diferentes. A cada treino e competição, aprendi a
            importância do trabalho em equipe e da dedicação para alcançar meus
            objetivos. Essas lições valiosas sempre estiveram comigo, mas em
            algum momento, precisei decidir sobre o meu futuro acadêmico e
            profissional.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Sempre fui apaixonado por jogos e tecnologia, então decidi me
            matricular no curso de Análise e Desenvolvimento de Sistemas. No
            início, mergulhei nos estudos de banco de dados e na linguagem C. No
            entanto, logo percebi que o ritmo da faculdade não estava sendo
            suficiente para suprir minha curiosidade e sede de conhecimento.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Busquei então cursos adicionais na plataforma Softblue. Foi lá que
            comecei a entender melhor as linguagens de programação e até aprendi
            C++. Essa fase foi desafiadora e, por momentos, desanimadora devido
            à complexidade dos conteúdos. No entanto, adotei uma abordagem de um
            passo de cada vez e consegui manter meus estudos. Após algumas
            pesquisas, descobri que C++ era mais utilizado no desenvolvimento de
            jogos e não tanto no desenvolvimento corporativo. Mesmo assim, essa
            base sólida me preparou para aprender outras linguagens de maneira
            mais eficiente.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Determinado a encontrar linguagens mais alinhadas com o
            desenvolvimento corporativo, me matriculei na Alura. Nesse ambiente,
            aprendi Java, JavaScript, TypeScript, e alguns frameworks
            importantes. Cada curso foi um degrau que subi, expandindo meu
            conhecimento e minhas habilidades.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Em 2024, concluí minha graduação com louvor, alcançando um CR 9.
            Minha dedicação aos estudos acadêmicos e aos cursos externos
            resultou em uma formação sólida. Atualmente, estou focado em
            aprimorar minhas soft skills e entender mais sobre o mercado de
            trabalho. Sigo aprofundando meus estudos em arquitetura de
            microsserviços e aprimorando meus conhecimentos em React, Node.js e
            Java.
          </p>
          <p className="text-base leading-relaxed dark:text-light">
            Agora, meu objetivo é claro: entrar no mercado de trabalho como
            desenvolvedor web. Sinto-me preparado para enfrentar desafios e
            estou ansioso para continuar aprendendo e crescendo no campo da
            tecnologia.
          </p>
        </div>
      )}
    </Section>
  );
}
