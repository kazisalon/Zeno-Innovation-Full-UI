import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <main>
          <Hero />
          <Services />
        </main>
      </div>
    </Router>
  );
}

export default App
