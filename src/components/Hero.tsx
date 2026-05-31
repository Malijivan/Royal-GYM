import { motion } from 'motion/react';
import { ArrowRight, Play, Trophy, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative flex-1 flex items-center overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">Premium Fitness Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              ELEVATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                FITNESS JOURNEY
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Welcome to Royal GYM, owned by Harpal Rajput. Experience state-of-the-art equipment, personalized AI guidance, and a luxurious environment designed for champions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/membership" className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" />
                Who We Are
              </Link>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 md:mt-24 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-400">
                <Trophy className="w-5 h-5" />
                <span className="text-2xl font-bold font-display">Elite</span>
              </div>
              <span className="text-sm text-slate-400">Equipment & Facilities</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-400">
                <Users className="w-5 h-5" />
                <span className="text-2xl font-bold font-display">24/7</span>
              </div>
              <span className="text-sm text-slate-400">Personalized Support</span>
            </div>
            <div className="hidden md:flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-2xl font-bold font-display">5.0</span>
              </div>
              <span className="text-sm text-slate-400">Member Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
