import { Tooltip } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Container } from "./Container";
import { LinkIcon } from "./LinkIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnightBlue dark:bg-dark-light w-full pt-4">
      <Container component="div">
        <div className="space-y-4">
          <p className="text-light text-lg text-center font-medium">Links</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <LinkIcon 
              href="https://www.linkedin.com/in/caio-pfaltzgraff/"
              className="flex items-center gap-6 border p-2.5 rounded-xl text-light hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600"
            >
              <LuLinkedin className="size-7"/>
              <span>Linkedin</span>
            </LinkIcon>
            <LinkIcon 
              href="https://github.com/Caio-Pfaltzgraff"
              className="flex items-center gap-6 border p-2.5 rounded-xl text-light hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600"
            >
              <LuGithub className="size-7"/>
              <span>Github</span>
            </LinkIcon>
            <LinkIcon 
              href="mailto:caio.rllcr@gmail.com"
              className="flex items-center gap-6 border p-2.5 rounded-xl text-light hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600"
            >
              <LuMail className="size-7"/>
              <span>Email</span>
            </LinkIcon>
            <LinkIcon 
              href="https://wa.me/5521980891793"
              className="flex items-center gap-6 border p-2.5 rounded-xl text-light hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600"
            >
              <FaWhatsapp className="size-7"/>
              <span>Whatsapp</span>
            </LinkIcon>
          </div>
        </div>

        <div className="h-0.5 rounded-full bg-orange-600 mt-6"/>

        <div className="mt-6 space-y-4">
          <p className="text-light text-center text-sm">
            © Copyright {year} | Todos os direitos reservados.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-x-1.5 gap-y-4">
            <p className="text-light text-center text-sm">
              Desenvolvido por Caio Pfaltzgraff utilizando
            </p>

            <div className="flex justify-center  gap-1.5">
              <Tooltip
                content="React"
                showArrow
                classNames={{
                  base: [
                    "before:bg-dark-light dark:before:bg-zinc-700"
                  ],
                  content: [
                    "px-4 py-2 shadow-xl",
                    "text-white bg-dark-light dark:bg-zinc-700"
                  ]
                }}
              >
                <img 
                  src="/skillsIcons/react-icon.png" 
                  alt="React"
                  className="size-7 -mt-1" 
                />
              </Tooltip>
              <span className="text-sm text-light">com</span>
              <Tooltip
                content="Typescript"
                showArrow
                classNames={{
                  base: [
                    "before:bg-dark-light dark:before:bg-zinc-700"
                  ],
                  content: [
                    "px-4 py-2 shadow-xl",
                    "text-white bg-dark-light dark:bg-zinc-700"
                  ]
                }}
              >
                <img 
                  src="/skillsIcons/typescript-icon.png" 
                  alt="Typescript"
                  className="size-7 -mt-1 rounded-lg" 
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}