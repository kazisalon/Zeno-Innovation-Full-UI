import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Working with this team has transformed our digital presence. Their innovative solutions have helped us reach new heights in our industry.",
    author: "Sarah Johnson",
    role: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The level of expertise and attention to detail is outstanding. They delivered our project on time and exceeded our expectations.",
    author: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Their team's ability to understand our needs and translate them into effective solutions is remarkable. A true partner in our success.",
    author: "Emily Rodriguez",
    role: "Director of Digital Strategy, GrowthLabs",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
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

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group hover:scale-105 transition-all duration-500"
            >
              <div className="absolute -inset-x-4 -inset-y-4 glass-effect rounded-2xl -z-10 gradient-border group-hover:animate-glow transition-all duration-500 shadow-lg shadow-accent/20 group-hover:shadow-accent/40">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-x-4">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="h-10 w-10 rounded-full bg-accent-light/10 ring-2 ring-accent-light/30 hover:ring-accent-light/50 transition-all duration-300"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white hover:text-accent-light transition-colors duration-300">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm leading-6 text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300 group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;