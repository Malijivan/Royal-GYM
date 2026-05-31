import { Dumbbell, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-zinc-950 pb-10 border-t border-white/5 relative ${isHome ? 'pt-20' : 'pt-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHome && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1 border-r border-white/5 pr-8">
              <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
                <div className="w-8 h-8 bg-gold-500/20 rounded border border-gold-500/50 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-gold-500" />
                </div>
                <span className="font-display font-bold text-xl text-white">ROYAL <span className="text-gold-500">GYM</span></span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Owned by Harpal Rajput. The premier destination for those who demand the best in fitness, atmosphere, and guidance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-zinc-800">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-zinc-800">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-zinc-800">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-display tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li><Link to="/" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Home</Link></li>
                <li><Link to="/about" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">About</Link></li>
                <li><Link to="/membership" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Membership</Link></li>
                <li><Link to="/protein-shop" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Protein Shop</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-display tracking-wider">AI FEATURES</h4>
              <ul className="space-y-3">
                <li><Link to="/workout" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Workout Suggester</Link></li>
                <li><Link to="/diet" onClick={scrollToTop} className="text-slate-400 hover:text-gold-400 text-sm transition-colors">Diet Planner</Link></li>
              </ul>
            </div>

            <div className="relative">
              <h4 className="text-white font-bold mb-4 font-display tracking-wider">FITNESS QUOTE</h4>
              <blockquote className="text-slate-400 italic text-sm border-l-2 border-gold-500 pl-4 py-1 relative z-10">
                "Discipline is the bridge between goals and accomplishment. Welcome to the elite."
              </blockquote>
            </div>
          </div>
        )}

        <div className={`pt-8 ${isHome ? 'border-t border-white/5' : ''} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Royal GYM. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-zinc-800"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
