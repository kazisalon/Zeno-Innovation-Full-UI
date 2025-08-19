import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    content: "Working with this team has transformed our digital presence. Their innovative solutions have helped us reach new heights in our industry.",
    author: "Shristi Sharma",
    role: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    companyLogo: null // Add logo URL if available
  },
  {
    content: "The level of expertise and attention to detail is outstanding. They delivered our project on time and exceeded our expectations.",
    author: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    companyLogo: null
  },
  {
    content: "Their team's ability to understand our needs and translate them into effective solutions is remarkable. A true partner in our success.",
    author: "Emily Rodriguez",
    role: "Director of Digital Strategy, GrowthLabs",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    companyLogo: null
  }
];

const StarRating = ({ animate = false }) => (
  <div className="flex items-center mb-2" aria-label="5 star rating">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className="w-5 h-5 text-yellow-400 mr-0.5 drop-shadow"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        animate={animate ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
        transition={{ duration: 0.6, repeat: animate ? Infinity : 0, delay: i * 0.1 }}
      >
        <polygon points="10 1.5 12.59 7.36 18.9 7.64 13.97 11.97 15.54 18.09 10 14.5 4.46 18.09 6.03 11.97 1.1 7.64 7.41 7.36 10 1.5" />
      </motion.svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const controls = useAnimation();

  // Carousel auto-play logic
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearTimeout(timeoutRef.current ?? undefined);
  }, [current, paused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % testimonials.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_75%)] animate-pulse" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(var(--accent-light-rgb),0.05)_1px,transparent_1px)] bg-[size:4rem_100%] blur-[2px]" />
      <div className="absolute -inset-x-20 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent-light to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent [text-shadow:0_4px_8px_rgba(var(--accent-light-rgb),0.3)] hover:scale-105 transition-transform duration-300">
            Client Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hear from our clients about their experience working with us
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="mx-auto mt-16 max-w-2xl flex flex-col items-center relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -60, rotateY: -30 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.04, rotateY: 6 }}
              className="relative group hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 cursor-pointer bg-gradient-to-br from-primary/80 to-accent/10 rounded-2xl p-8 shadow-lg"
              tabIndex={0}
              aria-label={`Testimonial from ${testimonials[current].author}`}
            >
              <div className="flex items-center gap-x-4 mb-4">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-12 w-12 rounded-full bg-accent-light/10 ring-2 ring-accent-light/30 hover:ring-accent-light/50 transition-all duration-300"
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white hover:text-accent-light transition-colors duration-300">
                    {testimonials[current].author}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">{testimonials[current].role}</p>
                </div>
                {/* Company logo placeholder */}
                {testimonials[current].companyLogo ? (
                  <img src={testimonials[current].companyLogo} alt="Company logo" className="h-8 w-8 ml-2 rounded-full bg-white/20" />
                ) : (
                  <span className="h-8 w-8 ml-2 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300 border border-gray-600">Logo</span>
                )}
              </div>
              <StarRating animate={true} />
              <div className="relative mt-6">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 0.15, x: 0 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                  className="absolute -top-8 -left-6 text-7xl text-accent-light select-none pointer-events-none"
                >
                  “
                </motion.span>
                <p className="text-base leading-7 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                  "{testimonials[current].content}"
                </p>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 0.15, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  aria-hidden="true"
                  className="absolute -bottom-8 right-2 text-7xl text-accent-light select-none pointer-events-none"
                >
                  ”
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
          {/* Carousel controls */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-accent-light border-accent-light' : 'bg-gray-700 border-gray-500'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={current === idx ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
        {/* Call-to-Action Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block rounded-lg bg-accent-light px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 transition-all duration-300"
          >
            Share Your Success Story
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;