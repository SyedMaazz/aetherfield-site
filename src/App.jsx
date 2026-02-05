import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Principles from './components/Principles';
import Foundations from './components/Foundations';
import Journal from './components/Journal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Principles />
        <Foundations />
        <Journal />
      </main>
    </div>
  );
}

export default App;