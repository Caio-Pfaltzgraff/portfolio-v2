import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuFileDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { LinkIcon } from "../../components/LinkIcon";
import { Section } from "../../components/Section";

export function PresentationSection() {
  function myAgeCalculator(): number{
    const today = new Date();
    const birthday = new Date("2002-04-04");
    let age = today.getFullYear() - birthday.getFullYear();
    const currentMonth = today.getMonth();
    const birthdayMonth = birthday.getMonth();

    if (
      currentMonth < birthdayMonth ||
      (currentMonth === birthdayMonth && today.getDay() >= birthday.getDay())
    ) {
      age--;
    }

    return age;
  }

  return (
    <Section id="start">
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <p className="font-extrabold text-[12vw] sm:text-[2.5rem] md:text-[5.5rem] xl:text-8xl leading-tight text-center text-slate-800 dark:text-light">
          {'Seu próximo desenvolvedor '}
          <span className="bg-gradient-to-r from-blue-700 dark:from-blue-600 via-pink-700 dark:via-pink-600 to-orange-700 dark:to-orange-600 inline-block text-transparent bg-clip-text">
            Fullstack
          </span>
        </p>
        <p className="text-base text-center max-w-2xl leading-relaxed">
          Olá, me chamo Caio Pfaltzgraff, {myAgeCalculator()} anos, desenvolvedor fullstack,{' '}
          <span className="font-bold dark:text-orange-600">Java</span> ,{" "}
          <span className="font-bold dark:text-orange-600">React</span>,{" "}
          <span className="font-bold dark:text-orange-600">JS</span> e{" "}
          <span className="font-bold dark:text-orange-600">TS</span>.
        </p>

        <div className="flex justify-center gap-4 dark:text-light">
          <LinkIcon href="https://www.linkedin.com/in/caio-pfaltzgraff/">
            <LuLinkedin className="size-8 hover:text-orange-700 dark:hover:text-orange-600" />
          </LinkIcon>
          <LinkIcon href="https://github.com/Caio-Pfaltzgraff">
            <LuGithub className="size-8 hover:text-orange-700 dark:hover:text-orange-600" />
          </LinkIcon>
          <LinkIcon href="mailto:caio.rllcr@gmail.com">
            <LuMail className="size-8 hover:text-orange-700 dark:hover:text-orange-600" />
          </LinkIcon>
          <LinkIcon href="https://wa.me/5521980891793">
            <FaWhatsapp className="size-8 hover:text-orange-700 dark:hover:text-orange-600" />
          </LinkIcon>
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/1bWyYBRH8pBoa2A726nDRuz2MuPOWmrvP/view?usp=sharing"
            target="_blank"
          >
            <Button
              size="lg"
              radius="md"
              className="bg-orange-700 dark:bg-orange-600 font-semibold text-light tracking-wide text-lg"
              endContent={
                <LuFileDown className="size-5 animate-bounce"/>
              }            
            >
              Ver currículo
            </Button>
          </a>
        </div>
      </div>
    </Section>
  )
}