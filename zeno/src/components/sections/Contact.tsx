import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_75%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20"
        >
          <div className="relative group">
            <div className="absolute -inset-x-4 -inset-y-4 glass-effect rounded-2xl -z-10 gradient-border group-hover:animate-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
            </div>
            <form className="relative p-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      id="first-name"
                      autoComplete="given-name"
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${errors.firstName ? 'ring-red-500' : 'ring-white/10'} focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      id="last-name"
                      autoComplete="family-name"
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${errors.lastName ? 'ring-red-500' : 'ring-white/10'} focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register('company')}
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      id="email"
                      autoComplete="email"
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-white/10'} focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                      id="message"
                      rows={4}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500' : 'ring-white/10'} focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 resize-none`}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative block w-full rounded-md bg-gradient-to-r from-accent-light to-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:shadow-[0_8px_32px_rgba(var(--accent-light-rgb),0.4),0_0_16px_rgba(var(--accent-light-rgb),0.6)] transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  <span className={`${isSubmitting ? 'opacity-0' : ''}`}>
                    {submitStatus === 'success' ? 'Message Sent!' : submitStatus === 'error' ? 'Error Sending Message' : 'Send Message'}
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </div>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;