import { FiPhone } from "react-icons/fi";
import { LuGithub, LuLinkedin, LuMail, LuUser2 } from "react-icons/lu";
import { ContactForm } from "../../components/ContactForm";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";

export function ContactSection() {
  return (
    <Section id="contact" className="py-10 md:py-12 lg:py-14">
      <Title text="Contato" />
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-title text-orange-600">
            Se interessou?
          </h3>

          <p className="dark:text-light leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias. Se você tiver
            alguma dúvida, proposta ou simplesmente quiser conversar sobre
            tecnologia, sinta-se à vontade para entrar em contato comigo!
          </p>

          <div className="grid md:grid-cols-2 gap-y-5 gap-x-2">
            <div className="flex gap-2.5 items-center max-w-52">
              <LuUser2 className="text-orange-700 dark:text-orange-600 size-7" />
              <div>
                <p className="font-bold dark:text-light">Nome</p>
                <h3 className="dark:text-zinc-400 text-sm">Caio Pfaltzgraff</h3>
              </div>
            </div>
            <div className="flex gap-2.5 items-center max-w-52">
              <LuMail className="text-orange-700 dark:text-orange-600 size-7" />
              <div>
                <p className="font-bold dark:text-light">E-mail</p>
                <p className="dark:text-zinc-400 text-sm">caio.rllcr@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center max-w-52">
              <FiPhone className="text-orange-700 dark:text-orange-600 size-7" />
              <div>
                <p className="font-bold dark:text-light">Telefone</p>
                <p className="dark:text-zinc-400 text-sm">(21) 98089-1793</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center max-w-52">
              <LuLinkedin className="text-orange-700 dark:text-orange-600 size-7" />
              <div>
                <p className="font-bold dark:text-light">Linkedin</p>
                <p className="dark:text-zinc-400 text-sm">/in/caio-pfaltzgraff</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center max-w-52">
              <LuGithub className="text-orange-700 dark:text-orange-600 size-7" />
              <div>
                <p className="font-bold dark:text-light">Github</p>
                <p className="dark:text-zinc-400 text-sm">/Caio-Pfaltzgraff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-title text-orange-600">
            Mande uma mensagem
          </h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
