import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    content: "Zeno transformed our digital presence with their innovative solutions. The team's expertise and dedication were exceptional.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
  },
  {
    content: "The attention to detail and technical excellence displayed by Zeno's team exceeded our expectations. A truly remarkable partnership.",
    author: "Michael Chen",
    role: "Founder, InnovateLab",
  },
  {
    content: "Working with Zeno was a game-changer for our business. Their solutions are not just innovative but also highly scalable.",
    author: "Emily Rodriguez",
    role: "Product Director, FutureScale",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent">
            Client Success Stories
          </motion.h2>
        </motion.div>

        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl bg-white/5 backdrop-blur-xl p-6 sm:p-10">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-light/20 to-accent/20 opacity-0 group-hover:opacity-10 transition-all duration-500" />
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative">
                  <p className="text-xl font-semibold leading-8 tracking-tight text-white sm:text-2xl sm:leading-9">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="mt-8 flex items-center gap-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-light to-accent flex items-center justify-center text-2xl font-bold text-white">
                      {testimonials[currentIndex].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[currentIndex].author}</div>
                      <div className="text-sm leading-6 text-gray-400">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </motion.blockquote>
              </motion.div>

              {/* Navigation buttons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="rounded-full p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 transition-colors duration-300">
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="rounded-full p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 transition-colors duration-300">
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;