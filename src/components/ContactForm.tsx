import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string({ required_error: "O nome é obrigatório." }).min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  email: z.string({ required_error: "O e-mail é obrigatório." }).email({ message: 'Digite um e-mail válido.' }),
  subject: z.string({ required_error: "O assunto é obrigatório." }).min(5, {message: "O assunto deve ter no mínimo 5 caracteres"}),
  message: z.string({ required_error: "A mensagem é obrigatória." }).min(10, {message: "A mensagem deve ter no mínimo 10 caracteres"}),
})

type ContactSchema = z.infer<typeof schema>

export function ContactForm() {
  const { control, formState: { errors }, handleSubmit, reset } = useForm<ContactSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
  })

  function handleSendEmail(data: ContactSchema) {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.message
    }
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const options = import.meta.env.VITE_OPTIONS

    emailjs.send(serviceId, templateId, templateParams, options)
      .then((response) => {
        if(response.status !== 200) {
          throw new Error("Error sending email!")
        }
        reset({name: '', email: '', message: '', subject: ''})
        toast.success("E-mail enviado com sucesso 😉", {duration: 5000})
      })
      .catch((error) => {
        console.log(error);
        toast.error('Falha ao enviar e-mail 😫', {duration: 5000});
      })
  }

  return (
    <form className="w-full grid gap-6" onSubmit={handleSubmit(handleSendEmail)}>
      <Controller 
        name="name"
        control={ control }
        render={({ field }) => (
          <Input 
            {...field}
            label="Nome"
            isRequired
            isInvalid={errors.name && true}
            errorMessage={errors.name?.message}
            variant="faded"
          />
        )}
      />
      <Controller 
        name="email"
        control={ control }
        render={({ field }) => (
          <Input 
            {...field}
            label="E-mail"
            isRequired
            isInvalid={errors.email && true}
            errorMessage={errors.email?.message}
            variant="faded"
          />
        )}
      />
      <Controller 
        name="subject"
        control={ control }
        render={({ field }) => (
          <Input 
            {...field}
            label="Assunto"
            isRequired
            isInvalid={errors.subject && true}
            errorMessage={errors.subject?.message}
            variant="faded"
          />
        )}
      />
      <Controller 
        name="message"
        control={ control }
        render={({ field }) => (
          <Textarea 
            {...field}
            label="Mensagem"
            isRequired
            isInvalid={errors.message && true}
            errorMessage={errors.message?.message}
            variant="faded"
          />
        )}
      />
      <Button
        type="submit"
        radius="md"
        size="lg"
        className="bg-orange-700 dark:bg-orange-600 text-white font-semibold tracking-wider text-base"
        endContent={
          <LuSend className="size-5"/>
        }
      >
        Enviar
      </Button>
    </form>
  )
}