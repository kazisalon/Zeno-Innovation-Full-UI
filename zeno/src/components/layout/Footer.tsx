import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Newsletter from '../sections/Newsletter';
import ReactLogo from '../../assets/react.svg';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
};

const quickLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative mt-24 sm:mt-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 z-0 h-96 w-[60rem] -translate-x-1/2 bg-gradient-to-tr from-accent-light/20 via-accent-light/10 to-white/0 opacity-50 blur-3xl animate-gradient-move" />
      {/* Enhanced glowing accent border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-light/0 via-accent-light/70 to-accent-light/0 blur-sm opacity-70" />
      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Logo, Company Name, Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-3 mb-6">
            <img src={ReactLogo} alt="React Logo" className="h-12 w-12 drop-shadow-lg transition-transform hover:scale-105 hover:drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 8px #38bdf8aa)' }} />
            <span className="text-2xl font-bold tracking-tight text-accent-light drop-shadow-md">Zeno Innovation</span>
            <span className="text-sm text-gray-400 font-medium">Innovating for a smarter future</span>
          </div>
          <span className="text-xl font-bold tracking-wide text-accent-light">Your Company</span>
          <span className="text-sm text-gray-400 mt-2 text-center max-w-xs">Empowering innovation through technology and creativity.</span>
        </motion.div>

        {/* Navigation Links */}
        <nav className="mt-10 flex flex-wrap justify-center gap-6" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-base text-gray-300 hover:text-accent-light transition-colors font-semibold px-3 py-1 rounded-md hover:bg-accent-light/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group text-gray-400 hover:text-accent-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 group-hover:scale-110 group-hover:drop-shadow-lg transition-transform" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <Newsletter />
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col items-center space-y-4"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 6.94a8 8 0 1111.31 11.31l-1.42-1.42a6 6 0 10-8.48-8.48l-1.41-1.41z" /><path d="M7 10a3 3 0 116 0 3 3 0 01-6 0z" /></svg>
            <span>hello@example.com</span>
          </div>
          <div className="flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-accent-light transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-accent-light to-accent shadow-lg text-white font-semibold hover:from-accent hover:to-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light transition-all duration-300 border border-accent-light/30"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5 mr-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            Back to Top
          </button>
        </motion.div>

        {/* Quick links */}
        <div className="mt-8 flex justify-center gap-8">
          {quickLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-gray-400 hover:text-accent-light transition-colors px-2 py-1 rounded hover:bg-accent-light/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact & Built With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col items-center text-gray-400 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 6.94a8 8 0 1111.31 11.31l-1.42-1.42a6 6 0 10-8.48-8.48l-1.41-1.41z" /><path d="M7 10a3 3 0 116 0 3 3 0 01-6 0z" /></svg>
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span>123 Innovation Ave, Tech City</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-2">
            <span>Built with</span>
            <img src={ReactLogo} alt="React Logo" className="h-4 w-4 mx-1" />
            <span>React, Tailwind CSS, Framer Motion</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col items-center">
          <div className="w-full max-w-2xl border-t border-gray-800 mb-4" />
          <span className="text-xs text-gray-500 tracking-wide">&copy; {currentYear} Zeno Innovation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;