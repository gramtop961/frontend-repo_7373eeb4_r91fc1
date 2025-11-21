import { motion } from 'framer-motion'

export default function TempleMicroWorld(){
  return (
    <section id="temple" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Layered backgrounds: tribal patterns + neon ruins */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#06b6d4_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#ec4899_0%,transparent_35%),radial-gradient(circle_at_60%_80%,#fbbf24_0%,transparent_40%)] blur-3xl"></div>
        <div className="absolute inset-0 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:`repeating-conic-gradient(from_0deg,transparent_0_15deg,rgba(255,255,255,0.08)_15deg_30deg)`}}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 pt-24 sm:pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} className="inline-block">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-[0.3em] text-white/90">MISSION // THE CURSED TEMPLE</span>
          </motion.div>

          {/* Impossible layout grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <motion.div initial={{rotate:-2,opacity:0,y:20}} whileInView={{rotate:0,opacity:1,y:0}} viewport={{once:true}} className="sm:col-span-7 relative rounded-3xl overflow-hidden border border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 shadow-[0_0_80px_rgba(255,0,255,0.25)]">
              <img src="https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1400&auto=format&fit=crop" alt="Neon ruins" className="w-full h-72 sm:h-[28rem] object-cover mix-blend-screen"/>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,0,255,0.2),transparent_50%)]"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">The Cursed Temple</h2>
                <p className="mt-2 text-white/80 max-w-xl">A neon-jungle labyrinth haunted by ancient code spirits. Decipher tribal circuits, dodge temporal traps, and appease the algorithmic gods.</p>
              </div>
            </motion.div>

            <motion.div initial={{scale:0.9,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} transition={{type:'spring',stiffness:140}} className="sm:col-span-5 relative rounded-3xl overflow-hidden border border-yellow-300/40 bg-yellow-400/10 backdrop-blur-xl p-6">
              <h3 className="text-white font-extrabold tracking-widest">TRIBAL TECH STATS</h3>
              <ul className="mt-3 space-y-2 text-sm text-yellow-100/90">
                <li>Players: 2–6 shamans</li>
                <li>Difficulty: Wrath of the Sun God</li>
                <li>Length: 60 minutes of warped time</li>
                <li>Best Record: 42:13 by TEAM HYPERDRUIDS</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Pill>Neon ruins</Pill>
                <Pill>Temporal traps</Pill>
                <Pill>Rhythm puzzles</Pill>
                <Pill>Projection mapping</Pill>
              </div>
              <a href="#book" className="mt-6 inline-block px-5 py-3 rounded-xl bg-yellow-300 text-black font-black tracking-wider shadow-[0_10px_40px_rgba(251,191,36,0.5)] hover:scale-105 active:scale-95 transition">Book this madness</a>
            </motion.div>

            {/* Warped shapes panel */}
            <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="sm:col-span-4 relative rounded-3xl overflow-hidden border border-cyan-300/40 bg-cyan-500/10 p-6">
              <h4 className="text-cyan-100 font-bold tracking-widest">WARPED ARTIFACTS</h4>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {Array.from({length:9}).map((_,i)=> (
                  <div key={i} className="aspect-square rounded-xl bg-black/40 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0" style={{backgroundImage:`conic-gradient(from_${i*40}deg,#22d3ee,#a78bfa,#f472b6,#22d3ee)`}}></div>
                    <div className="absolute inset-0 mix-blend-color text-white/10 text-[8px] p-1">ARTIFACT-{i+1}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} className="sm:col-span-8 relative rounded-3xl overflow-hidden border border-fuchsia-300/40 bg-fuchsia-500/10">
              <div className="p-6">
                <h4 className="text-fuchsia-100 font-bold tracking-widest">IMPOSSIBLE LAYOUT</h4>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['RUNE GATE','GLITCH ALTAR','SUN PRISM','DARK CODE','JAGUAR KEY','HUM','MIRROR LOOP','VOID'].map((t,i)=> (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-fuchsia-600/40 to-cyan-500/30 border border-white/20 flex items-center justify-center text-center text-[10px] text-white/90 font-bold p-2 rotate-[var(--r)]" style={{'--r':`${(i%2?3:-3)}deg`}}>{t}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scanlines + noise */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 bg-[repeating-linear-gradient(180deg,transparent,transparent_6px,rgba(255,255,255,0.06)_7px)]"></div>
    </section>
  )
}

function Pill({children}){
  return <span className="px-3 py-1 rounded-full bg-black/50 border border-yellow-200/30 text-[10px] tracking-widest text-yellow-100">{children}</span>
}
