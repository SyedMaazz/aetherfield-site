import Navbar from './components/Navbar';
import Hero from './components/Hero'; //

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* We'll add the Features Grid next */}
      </main>
    </div>
  );
}

export default App;