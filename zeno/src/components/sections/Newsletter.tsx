import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000); // Auto-reset after 3s
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center mb-4 animate-float">
          {/* Mail Icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-cyan-500 dark:text-cyan-400" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="currentColor" fillOpacity="0.1"/>
            <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Zm2.13-.62 5.37 4.03a1 1 0 0 0 1.2 0l5.37-4.03A1.5 1.5 0 0 0 17.5 8h-11c.3 0 .59.09.83.26ZM6 10.24V15.5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5.26l-5.13 3.85a3 3 0 0 1-3.74 0L6 10.24Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Subscribe to our Newsletter</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Get the latest updates, news, and offers delivered straight to your inbox.</p>
        <div className="glass-effect p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur"
              required
              disabled={submitted}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 hover-scale animate-glow"
              disabled={submitted}
            >
              {submitted ? (
                <span className="inline-flex items-center gap-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-green-400"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Subscribed!
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Zm2.13-.62 5.37 4.03a1 1 0 0 0 1.2 0l5.37-4.03A1.5 1.5 0 0 0 17.5 8h-11c.3 0 .59.09.83.26ZM6 10.24V15.5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5.26l-5.13 3.85a3 3 0 0 1-3.74 0L6 10.24Z" fill="currentColor"/></svg>
                  Subscribe
                </span>
              )}
            </button>
          </form>
          {error && (
            <p className="mt-2 text-red-500 flex items-center justify-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-red-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              {error}
            </p>
          )}
          {submitted && (
            <p className="mt-2 text-green-600 dark:text-green-400 flex items-center justify-center gap-2 animate-float">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-green-400"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 