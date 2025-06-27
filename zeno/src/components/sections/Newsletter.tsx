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
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Subscribe to our Newsletter</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Get the latest updates, news, and offers delivered straight to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-auto"
            required
            disabled={submitted}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            disabled={submitted}
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {submitted && <p className="mt-2 text-green-600 dark:text-green-400">Thank you for subscribing!</p>}
      </div>
    </section>
  );
} 