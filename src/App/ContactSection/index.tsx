import { FiPhone } from "react-icons/fi";
import { LuMail, LuUser2 } from "react-icons/lu";
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
            Se você estiver em busca de alguém dedicado, com fome por
            aprendizado e que deseja crescer junto à sua empresa, ficaria
            honrado em ter essa oportunidade. Estou disponível também para novos
            projetos e colaborações. Sinta-se à vontade para entrar em contato e
            juntos transformarmos ideias em realidade. Entre em contato e
            marcamos uma conversa para discutir como podemos trabalhar juntos.
          </p>

          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <LuUser2 className="text-orange-700 dark:text-orange-600 size-7"/>
              <div>
                <p className="font-bold dark:text-light">Nome</p>
                <p className="dark:text-zinc-400">Caio Pfaltzgraff</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <LuMail className="text-orange-700 dark:text-orange-600 size-7"/>
              <div>
                <p className="font-bold dark:text-light">E-mail</p>
                <p className="dark:text-zinc-400">caio.rllcr@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <FiPhone className="text-orange-700 dark:text-orange-600 size-7"/>
              <div>
                <p className="font-bold dark:text-light">Telefone</p>
                <p className="dark:text-zinc-400">(21) 98089-1793</p>
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
