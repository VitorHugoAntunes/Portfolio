import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast, Toaster } from 'sonner'
import { Check, Ban, Info } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  firstName: z.string().min(1, 'Nome obrigatório'),
  lastName: z.string().min(1, 'Sobrenome obrigatório'),
  service: z.string({ required_error: 'Serviço obrigatório' }).min(1, 'Serviço obrigatório'),
  email: z.string().email('Email inválido'),
  description: z.string().min(1, 'Descrição obrigatória'),
})

type ContactSchema = z.infer<typeof contactSchema>

function CTASection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  const serviceValue = watch('service')

  async function onSubmit(data: ContactSchema) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Formulário enviado com sucesso!', {
          icon: <Check className="h-4 w-4" />,
        })
      } else {
        toast.error(result.message || 'Erro ao enviar o formulário.', {
          icon: <Ban className="h-4 w-4" />,
        })
      }

      setValue('firstName', '')
      setValue('lastName', '')
      setValue('service', '')
      setValue('email', '')
      setValue('description', '')
    } catch (error) {
      console.error('Erro:', error)
      toast.error('Erro de conexão ao enviar o formulário.', {
        icon: <Info className="h-4 w-4" />,
      })
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16" role="region" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <header>
            <motion.h2
              id="contact-title"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Have an idea?
              <br />
              Let’s build it together!
            </motion.h2>
          </header>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
            role="form"
            aria-labelledby="contact-title"
          >
            <fieldset>
              <legend className="sr-only">Personal Information</legend>
              <div>
                <label htmlFor="firstName" className="block text-lg font-semibold mb-2">Name (required)</label>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    {...register('firstName')}
                    className="border-gray-300 focus:border-gray-900"
                    aria-describedby="firstName-error"
                    title='First Name'
                  />
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    {...register('lastName')}
                    className="border-gray-300 focus:border-gray-900"
                    aria-describedby="lastName-error"
                    title='Last Name'
                  />
                </div>
                <p id="firstName-error" className="text-sm text-red-500 mt-1">{errors.firstName?.message}</p>
                <p id="lastName-error" className="text-sm text-red-500 mt-1">{errors.lastName?.message}</p>
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Service Information</legend>
              <div>
                <label htmlFor="service" className="block text-lg font-semibold mb-2">Service</label>
                <Select
                  value={serviceValue}
                  onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
                  aria-describedby="service-error"
                  defaultValue=""
                >
                  <SelectTrigger id="service" className="border-gray-300 focus:border-gray-900" title="Select a service">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Application" title="Web Application Service">Web Application</SelectItem>
                    <SelectItem value="Mobile Application" title="Mobile Application Service">Mobile Application</SelectItem>
                    <SelectItem value="Cloud Application" title="Cloud Application Service">Cloud Application</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p id="service-error" className="text-sm text-red-500">{errors.service.message}</p>
                )}
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Contact Information</legend>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email (required)</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="border-gray-300 focus:border-gray-900"
                  aria-describedby="email-error"
                  title='Email'
                />
                <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Project Description</legend>
              <div>
                <label htmlFor="description" className="block text-lg font-semibold mb-2">Project description</label>
                <Textarea
                  id="description"
                  placeholder="Project description"
                  rows={4}
                  {...register('description')}
                  className="border-gray-300 focus:border-gray-900 max-h-80"
                  aria-describedby="description-error"
                  title='Project description'
                />
                <p id="description-error" className="text-sm text-red-500 mt-1">{errors.description?.message}</p>
              </div>
            </fieldset>

            <Button type="submit" size="lg" className="cursor-pointer" disabled={isSubmitting} aria-label="Submit form" title='Submit form'>
              Submit
            </Button>
          </motion.form>
        </div>
      </div>

      <Toaster position="top-right" richColors closeButton />
    </section>
  )
}

export default CTASection