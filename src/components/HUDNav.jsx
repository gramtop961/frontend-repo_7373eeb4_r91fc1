import { useEffect, useState } from 'react'
import { Compass, Map, Zap, Timer, Ticket, Info, Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HUDNav() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-3 left-3 right-3 z-50 pointer-events-none">
      {/* scanline */}
      <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.08)_96%,transparent_97%)] bg-[length:100%_3px]"></div>

      <div className="relative grid grid-cols-3 gap-3">
        {/* Left cluster */}
        <motion.div className="pointer-events-auto" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>
          <div className="backdrop-blur-xl bg-fuchsia-500/15 border border-fuchsia-400/40 rounded-xl shadow-[0_0_30px_rgba(255,0,255,0.35)] overflow-hidden">
            <div className="px-4 py-2 flex items-center gap-3 text-fuchsia-200">
              <Compass className="w-4 h-4 animate-pulse" />
              <span className="text-xs tracking-widest">CLOCK ESCAPE // BORDEAUX</span>
            </div>
            <div className="px-4 pb-2 text-[10px] text-fuchsia-300/80 tracking-wider">
              <div className="flex items-center gap-2"><Zap className="w-3 h-3"/> SYNTH-LINK ONLINE</div>
              <div className="opacity-70">STATUS: READY // {time}</div>
            </div>
          </div>
        </motion.div>

        {/* Center cluster */}
        <motion.div className="justify-self-center pointer-events-auto" initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} transition={{type:'spring',stiffness:120}}>
          <div className="relative px-4 py-2 rounded-full border border-cyan-300/50 bg-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.35)] text-cyan-100 flex items-center gap-3">
            <Map className="w-4 h-4"/>
            <span className="text-xs font-semibold tracking-[0.25em]">NEON NAV MODULE</span>
            <button onClick={()=>setOpen(v=>!v)} className="ml-2 p-1 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 transition">
              {open ? <X className="w-4 h-4"/> : <Menu className="w-4 h-4"/>}
            </button>
          </div>
        </motion.div>

        {/* Right cluster */}
        <motion.div className="justify-self-end pointer-events-auto" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>
          <div className="flex gap-2">
            <HUDButton icon={<Timer className='w-4 h-4'/>} label="Timer" color="violet"/>
            <HUDButton icon={<Ticket className='w-4 h-4'/>} label="Book" color="emerald"/>
            <HUDButton icon={<Phone className='w-4 h-4'/>} label="Call" color="amber"/>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="pointer-events-auto mt-3 mx-auto max-w-5xl">
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {label:'Missions', icon:<Zap className='w-4 h-4'/>},
                {label:'Lore', icon:<Info className='w-4 h-4'/>},
                {label:'Pricing', icon:<Ticket className='w-4 h-4'/>},
                {label:'Contact', icon:<Phone className='w-4 h-4'/>},
              ].map((item,i)=> (
                <motion.a key={i} whileHover={{scale:1.04, rotate: (i%2?1:-1)}} whileTap={{scale:0.98}} href="#" className="group relative rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_30px_rgba(255,255,255,0.12)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/10 to-yellow-300/10 group-hover:opacity-100 opacity-50 transition"></div>
                  <div className="relative z-10 flex items-center gap-3 text-white">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10">{item.icon}</div>
                    <div>
                      <div className="text-sm font-bold tracking-wider">{item.label}</div>
                      <div className="text-[10px] opacity-70">INITIATE // OPEN SEQUENCE</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function HUDButton({icon, label, color='violet'}) {
  const colorMap = {
    violet: 'from-fuchsia-500/30 to-indigo-500/30 border-fuchsia-300/40 text-fuchsia-100',
    emerald: 'from-emerald-500/30 to-cyan-500/30 border-emerald-300/40 text-emerald-100',
    amber: 'from-amber-500/30 to-pink-500/30 border-amber-300/40 text-amber-100',
  }
  return (
    <button className={`px-3 py-2 rounded-lg bg-gradient-to-br ${colorMap[color]} backdrop-blur-xl border flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.12)] hover:scale-105 active:scale-95 transition`}> 
      {icon}
      <span className="text-[10px] tracking-wider font-semibold">{label}</span>
    </button>
  )
}
