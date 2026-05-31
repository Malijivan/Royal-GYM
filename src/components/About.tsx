import { motion } from 'motion/react';
import { Target, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative">
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-[2.5rem] transform -rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" 
              alt="Harpal Rajput - Royal GYM Owner" 
              className="rounded-[2.5rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5] w-full max-w-md mx-auto shadow-2xl"
            />
            
            <div className="absolute bottom-10 left-0 lg:-left-12 z-20 glass-gold p-6 rounded-2xl w-64">
              <p className="text-gold-400 font-bold mb-1">Owner & Founder</p>
              <h4 className="text-2xl font-display font-bold text-white">Harpal Rajput</h4>
              <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                THE STORY OF <br/><span className="text-gold-500">ROYAL GYM</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Founded by Harpal Rajput, Royal GYM was born from a singular vision: to create a premium, uncompromised fitness environment where champions are forged. We believe that an elite atmosphere breeds elite results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/30">
                  <Target className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                  <p className="text-slate-400">To provide state-of-the-art facilities and intelligent AI-driven guidance that empowers individuals to shatter their fitness ceilings.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/30">
                  <Shield className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                  <p className="text-slate-400">To be the undisputed standard of luxury fitness and intelligent body transformation in the region.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/30">
                  <Zap className="text-gold-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Fitness Philosophy</h4>
                  <p className="text-slate-400">Discipline over motivation. Consistency over intensity. We blend classic iron philosophy with modern intelligent programming.</p>
                </div>
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
