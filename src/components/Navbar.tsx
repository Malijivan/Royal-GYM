import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onLogout }: { onLogout: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Workout AI', href: '/workout' },
    { name: 'Diet AI', href: '/diet' },
    { name: 'Protein Shop', href: '/protein-shop' },
    { name: 'Membership', href: '/membership' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'BMI Calculator', href: '/bmi' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-gold-500/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center border border-gold-500/50 group-hover:bg-gold-500/30 transition-colors">
                <Dumbbell className="w-6 h-6 text-gold-500" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                ROYAL <span className="text-gold-500">GYM</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium text-xs xl:text-sm px-2 xl:px-3 py-2 rounded-full transition-colors hover:bg-white/5 ${
                    location.pathname === link.href ? 'text-gold-500 bg-white/5' : 'text-slate-300 hover:text-gold-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <button
                onClick={onLogout}
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-slate-300 hover:text-gold-500 p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex justify-end p-5">
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-300 p-2 hover:text-gold-500">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-4 p-4 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-display font-medium ${
                    location.pathname === link.href ? 'text-gold-500' : 'text-slate-200 hover:text-gold-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-24 h-px bg-gold-500/30 my-4" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="text-lg font-medium text-slate-400"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
