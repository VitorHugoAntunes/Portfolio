import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { Check, Ban, Info } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from './translation-provider';
import { getNestedTranslation } from '@/utils/getTranslation';

const contactSchema = z.object({
  firstName: z.string().min(1, 'ctaSection.form.fields.firstName.error'),
  lastName: z.string().min(1, 'ctaSection.form.fields.lastName.error'),
  service: z.string({ required_error: 'ctaSection.form.fields.service.error' }).min(1, 'ctaSection.form.fields.service.error'),
  email: z.string().email('ctaSection.form.fields.email.error'),
  description: z.string().min(1, 'ctaSection.form.fields.description.error'),
});

type ContactSchema = z.infer<typeof contactSchema>;

function CTASection() {
  const { translations } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
    watch,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const serviceValue = watch('service');

  async function onSubmit(data: ContactSchema) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.message) {
        toast.success(getNestedTranslation(translations, 'ctaSection.form.messages.success', 'Form submitted successfully!'), {
          icon: <Check className="h-4 w-4" />,
        });
        reset({ service: '' });
      } else {
        toast.error(getNestedTranslation(translations, 'ctaSection.form.messages.error', 'Error submitting the form.'), {
          icon: <Ban className="h-4 w-4" />,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(getNestedTranslation(translations, 'ctaSection.form.messages.connectionError', 'Connection error when submitting the form.'), {
        icon: <Info className="h-4 w-4" />,
      });
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16" role="region" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <header>
            <motion.h2
              id="contact-title"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              {getNestedTranslation(translations, 'ctaSection.title.line1', 'Have an idea?')}
              <br />
              {getNestedTranslation(translations, 'ctaSection.title.line2', 'Let’s build it together!')}
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
                <label htmlFor="firstName" className="block text-lg font-semibold mb-2">
                  {getNestedTranslation(translations, 'ctaSection.form.fields.firstName.label', 'First Name (required)')}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="firstName"
                      placeholder={getNestedTranslation(translations, 'ctaSection.form.fields.firstName.placeholder', 'First Name')}
                      {...register('firstName')}
                      className={`border-gray-300 focus:border-gray-900 ${isSubmitted && errors.firstName ? 'border-red-500' : ''}`}
                      aria-describedby="firstName-error"
                      title={getNestedTranslation(translations, 'ctaSection.form.fields.firstName.placeholder', 'First Name')}
                    />
                    {(isSubmitted && errors.firstName) && (
                      <p id="firstName-error" className="text-sm text-red-500 mt-1" aria-live="polite">
                        {getNestedTranslation(translations, errors.firstName.message || 'ctaSection.form.fields.firstName.error', 'First name is required.')}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="lastName"
                      placeholder={getNestedTranslation(translations, 'ctaSection.form.fields.lastName.placeholder', 'Last Name')}
                      {...register('lastName')}
                      className={`border-gray-300 focus:border-gray-900 ${isSubmitted && errors.lastName ? 'border-red-500' : ''}`}
                      aria-describedby="lastName-error"
                      title={getNestedTranslation(translations, 'ctaSection.form.fields.lastName.placeholder', 'Last Name')}
                    />
                    {(isSubmitted && errors.lastName) && (
                      <p id="lastName-error" className="text-sm text-red-500 mt-1" aria-live="polite">
                        {getNestedTranslation(translations, errors.lastName.message || 'ctaSection.form.fields.lastName.error', 'Last name is required.')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Service Information</legend>
              <div>
                <label htmlFor="service" className="block text-lg font-semibold mb-2">
                  {getNestedTranslation(translations, 'ctaSection.form.fields.service.label', 'Service')}
                </label>
                <Select
                  value={serviceValue}
                  onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
                  aria-describedby="service-error"
                >
                  <SelectTrigger
                    id="service"
                    className={`border-gray-300 focus:border-gray-900 ${isSubmitted && errors.service ? 'border-red-500' : ''}`}
                    title={getNestedTranslation(translations, 'ctaSection.form.fields.service.placeholder', 'Select a service')}
                  >
                    <SelectValue
                      placeholder={getNestedTranslation(translations, 'ctaSection.form.fields.service.placeholder', 'Select a service')}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Application">Web Application</SelectItem>
                    <SelectItem value="Mobile Application">Mobile Application</SelectItem>
                    <SelectItem value="Cloud Application">Cloud Application</SelectItem>
                  </SelectContent>
                </Select>
                {(isSubmitted && errors.service) && (
                  <p id="service-error" className="text-sm text-red-500 mt-1" aria-live="polite">
                    {getNestedTranslation(translations, errors.service.message || 'ctaSection.form.fields.service.error', 'Service is required.')}
                  </p>
                )}
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Contact Information</legend>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  {getNestedTranslation(translations, 'ctaSection.form.fields.email.label', 'Email (required)')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={getNestedTranslation(translations, 'ctaSection.form.fields.email.placeholder', 'Email')}
                  {...register('email')}
                  className={`border-gray-300 focus:border-gray-900 ${isSubmitted && errors.email ? 'border-red-500' : ''}`}
                  aria-describedby="email-error"
                  title={getNestedTranslation(translations, 'ctaSection.form.fields.email.placeholder', 'Email')}
                />
                {(isSubmitted && errors.email) && (
                  <p id="email-error" className="text-sm text-red-500 mt-1" aria-live="polite">
                    {getNestedTranslation(translations, errors.email.message || 'ctaSection.form.fields.email.error', 'Invalid email.')}
                  </p>
                )}
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Project Description</legend>
              <div>
                <label htmlFor="description" className="block text-lg font-semibold mb-2">
                  {getNestedTranslation(translations, 'ctaSection.form.fields.description.label', 'Description')}
                </label>
                <Textarea
                  id="description"
                  placeholder={getNestedTranslation(translations, 'ctaSection.form.fields.description.placeholder', 'Describe your project or idea')}
                  rows={4}
                  {...register('description')}
                  className={`border-gray-300 focus:border-gray-900 max-h-80 ${isSubmitted && errors.description ? 'border-red-500' : ''}`}
                  aria-describedby="description-error"
                  title={getNestedTranslation(translations, 'ctaSection.form.fields.description.placeholder', 'Description')}
                />
                {(isSubmitted && errors.description) && (
                  <p id="description-error" className="text-sm text-red-500 mt-1" aria-live="polite">
                    {getNestedTranslation(translations, errors.description.message || 'ctaSection.form.fields.description.error', 'Description is required.')}
                  </p>
                )}
              </div>
            </fieldset>

            <Button
              type="submit"
              size="lg"
              className="cursor-pointer"
              disabled={isSubmitting}
              aria-label={getNestedTranslation(translations, 'ctaSection.form.button.submit', 'Submit Form')}
              title={getNestedTranslation(translations, 'ctaSection.form.button.submit', 'Submit Form')}
            >
              {getNestedTranslation(translations, 'ctaSection.form.button.submit', 'Send message')}
            </Button>
          </motion.form>
        </div>
      </div>

      <Toaster position="top-right" richColors closeButton />
    </section>
  );
}

export default CTASection;