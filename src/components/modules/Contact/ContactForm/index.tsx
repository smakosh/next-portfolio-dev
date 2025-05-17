'use client';

import { useForm as useFormspree } from '@formspree/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Recaptcha from 'react-google-recaptcha';
import * as z from 'zod';
import { cn } from 'lib/utils';

const formSchema = z.object({
  name: z.string().min(1, 'Full name field is required'),
  email: z.string().email('Invalid email').min(1, 'Email field is required'),
  message: z.string().min(1, 'Message field is required'),
  recaptcha:
    process.env.NODE_ENV !== 'development' ? z.string().min(1, 'Robots are not welcome yet!') : z.string().optional(),
});

type ContactFormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [state, formspreeSubmit] = useFormspree(process.env.NEXT_PUBLIC_FORM as string);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    // @ts-ignore:
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await formspreeSubmit(data);

      if (!state.errors) {
        setTimeout(() => reset(), 4000);
      }
    } catch (err) {
      alert('Something went wrong, please try again!');
    }

    if (state.errors) {
      state.errors.getFormErrors().forEach((error) => {
        alert(error.message);
      });

      state.errors.getAllFieldErrors().forEach(([field, fieldErrors]) => {
        fieldErrors.forEach((fieldError) => {
          alert(`${field}: ${fieldError.message}`);
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-4">
        <input
          type="text"
          aria-label="name"
          placeholder="Full name*"
          className={cn('input', {
            'input-error': errors.name,
          })}
          {...register('name')}
        />
        {errors.name && <span className="text-red-600 block mt-1">{errors.name.message}</span>}
      </div>

      <div className="relative mb-4">
        <input
          type="email"
          aria-label="email"
          placeholder="Email*"
          className={cn('input', {
            'input-error': errors.email,
          })}
          {...register('email')}
        />
        {errors.email && <span className="text-red-600 block mt-1">{errors.email.message}</span>}
      </div>

      <div className="relative mb-4">
        <textarea
          rows={8}
          aria-label="message"
          placeholder="Message*"
          className={cn('input', {
            'input-error': errors.message,
          })}
          {...register('message')}
        />
        {errors.message && <span className="text-red-600 block mt-1">{errors.message.message}</span>}
      </div>

      {process.env.NODE_ENV !== 'development' && (
        <div className="relative mb-4">
          <Recaptcha
            sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY!}
            onChange={(value) => setValue('recaptcha', value || '')}
          />
          {errors.recaptcha && <span className="text-red-600 block mt-1">{errors.recaptcha.message}</span>}
        </div>
      )}

      {state.succeeded && (
        <div className="relative mb-4">
          <div className="text-center">
            <h4 className="font-normal">Your message has been successfully sent, I will get back to you ASAP!</h4>
          </div>
        </div>
      )}

      <div className="text-left">
        <button type="submit" className="button button-secondary" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
