import { motion } from 'framer-motion'
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react'

export default function FooterChaos(){
  return (
    <footer id="book" className="relative overflow-hidden bg-gradient-to-b from-black via-fuchsia-950 to-black text-white">
      <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_10%_0%,#06b6d4_0%,transparent_40%),radial-gradient(circle_at_90%_20%,#ec4899_0%,transparent_45%)] blur-3xl"></div>

      <div className="relative z-10 px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
          <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
            <h3 className="text-3xl sm:text-5xl font-black leading-none">Ready to escape?</h3>
            <p className="mt-3 text-white/80 max-w-md">Bordeaux centre. Bookings open. Bring your crew and dive into the glitch.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="px-5 py-3 rounded-xl bg-fuchsia-500 text-white font-black shadow-[0_10px_40px_rgba(240,46,170,0.5)]">Book a slot</a>
              <a className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl">Gift cards</a>
            </div>
          </motion.div>

          <motion.div initial={{scale:0.9,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <InfoLine icon={<Phone className='w-4 h-4'/>} label="Call" value="+33 5 56 00 00 00"/>
              <InfoLine icon={<MapPin className='w-4 h-4'/>} label="Find us" value="Bordeaux Centre"/>
              <InfoLine icon={<Instagram className='w-4 h-4'/>} label="Instagram" value="@clock.escape"/>
              <InfoLine icon={<Facebook className='w-4 h-4'/>} label="Facebook" value="/clockescape"/>
            </div>
            <div className="mt-6 text-[10px] tracking-widest text-white/60">Open daily 10:00–22:00</div>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-[10px] tracking-[0.3em] text-white/50">© Clock Escape — Bordeaux</div>
      </div>

      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(255,255,255,0.06)_7px)]"></div>
    </footer>
  )
}

function InfoLine({icon,label,value}){
  return (
    <div className="flex items-center gap-2 p-3 rounded-xl bg-black/30 border border-white/10">
      <div className="p-2 rounded-lg bg-black/40 border border-white/10">{icon}</div>
      <div className="text-white/80">
        <div className="text-[10px] tracking-widest">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  )
}
