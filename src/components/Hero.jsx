import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Color eruptions / gradient veils */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-[80vw] h-[80vw] bg-fuchsia-600/30 blur-3xl rounded-full mix-blend-screen animate-pulse"></div>
        <div className="absolute top-40 right-0 w-[70vw] h-[70vw] bg-cyan-400/25 blur-3xl rounded-full mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[40vw] bg-yellow-300/20 blur-3xl rounded-full mix-blend-screen"></div>
      </div>

      {/* Headline: kinetic, layered, glitchy */}
      <div className="relative z-10 pt-28 sm:pt-40 pb-16 sm:pb-24">
        <div className="px-4 sm:px-8">
          <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{type:'spring',stiffness:90}} className="inline-block">
            <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] sm:text-xs tracking-[0.3em] text-white/80 backdrop-blur-md">CYBERPUNK ESCAPE ROOMS — BORDEAUX</span>
          </motion.div>

          <div className="mt-5 sm:mt-8 relative">
            <GlitchText text="CLOCK ESCAPE" />
          </div>

          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg text-white/80">
            Cinematic, chaotic, and ultra-interactive. Hack time itself across neon labyrinths and cursed ruins. Book if you dare.
          </motion.p>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <a href="#temple" className="px-5 py-3 rounded-xl bg-fuchsia-500 text-white font-black tracking-wide shadow-[0_10px_40px_rgba(240,46,170,0.5)] hover:scale-105 active:scale-95 transition">ENTER THE CURSED TEMPLE</a>
            <a href="#book" className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold hover:bg-white/20 transition">BOOK NOW</a>
          </motion.div>
        </div>
      </div>

      {/* HUD overlay hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center text-white/70 text-[10px] sm:text-xs tracking-[0.25em]">
        SWIPE • SCROLL • PLAY WITH THE SCENE
      </div>
    </section>
  )
}

function GlitchText({text}){
  return (
    <div className="relative">
      <h1 className="text-[13vw] leading-none sm:text-[10rem] font-black text-white tracking-tighter">
        {text}
      </h1>
      {/* RGB offsets */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <div className="absolute inset-0 translate-x-1 translate-y-0 text-transparent [text-shadow:_-2px_0_#00ffff]">{/* cyan shadow */}
          <span className="text-[13vw] sm:text-[10rem] font-black opacity-0">{text}</span>
        </div>
        <div className="absolute inset-0 -translate-x-1 text-transparent [text-shadow:_2px_0_#ff00ff]">{/* magenta shadow */}
          <span className="text-[13vw] sm:text-[10rem] font-black opacity-0">{text}</span>
        </div>
      </div>

      {/* Striped mask for analog glitch */}
      <div className="absolute inset-0 mix-blend-color-dodge pointer-events-none opacity-60 bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(255,255,255,0.08)_7px)]"></div>
    </div>
  )
}
