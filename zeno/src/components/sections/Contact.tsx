import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setSubmitStatus('idle');
      }, 2500);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_75%)]" />
      
      {/* Animated floating background elements */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-light/10 blur-2xl"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              opacity: 0.5 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      {/* Thank You Overlay */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex flex-col items-center gap-4 bg-white/10 rounded-2xl p-10 shadow-2xl border border-accent-light/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/90 mb-2"
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </motion.div>
            <div className="text-2xl font-bold text-white text-center">Thank you!</div>
            <div className="text-lg text-gray-200 text-center">Your message has been sent.</div>
          </motion.div>
        </motion.div>
      )}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '100%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-8 h-1 w-32 bg-gradient-to-r from-accent-light to-accent rounded-full"
        />
        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Copy Email Button */}
          <motion.button
            type="button"
            aria-label="Copy email address"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-accent-light hover:bg-accent-light hover:text-white transition-colors duration-300 border border-accent-light/30"
            onClick={() => {
              navigator.clipboard.writeText('hello@example.com');
            }}
          >
            <FaEnvelope />
            <span className="font-semibold">hello@example.com</span>
            <span className="text-xs text-green-400 ml-1">Copy</span>
          </motion.button>
          {/* Other Socials */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-accent-light hover:text-accent text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: -10 }}
            className="text-accent-light hover:text-accent text-2xl transition-colors duration-300"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
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
              {/* Visual feedback for form submission */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-green-600/90 px-4 py-2 text-white font-semibold shadow-lg"
                  role="alert"
                  aria-live="polite"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-red-600/90 px-4 py-2 text-white font-semibold shadow-lg"
                  role="alert"
                  aria-live="polite"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Error sending message. Please try again.
                </motion.div>
              )}
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