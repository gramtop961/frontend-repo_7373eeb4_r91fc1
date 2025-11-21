import HUDNav from './components/HUDNav'
import Hero from './components/Hero'
import TempleMicroWorld from './components/TempleMicroWorld'
import FooterChaos from './components/FooterChaos'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* VHS noise backdrop */}
      <div className="fixed inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(255,255,255,0.05)_5px)]"></div>

      <HUDNav />
      <Hero />
      <TempleMicroWorld />
      <FooterChaos />
    </div>
  )
}

export default App
