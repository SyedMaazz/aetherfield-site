import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Principles from './components/Principles';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Principles />
      </main>
    </div>
  );
}

export default App;