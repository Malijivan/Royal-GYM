import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            GET IN <span className="text-gold-500">TOUCH</span>
          </motion.h2>
          <p className="text-slate-400">Ready to start your premium fitness journey? Contact us today.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-gold-500 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold mb-2">Phone Structure</h4>
              <p className="text-slate-400 text-sm mb-4">+91 0000 000 000</p>
              <a href="tel:+910000000000" className="mt-auto text-xs font-bold text-gold-400 uppercase tracking-widest hover:text-white transition-colors">Call Now</a>
            </div>

            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="text-gold-500 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold mb-2">WhatsApp</h4>
              <p className="text-slate-400 text-sm mb-4">Direct Message to Harpal Rajput</p>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="mt-auto text-xs font-bold text-gold-400 uppercase tracking-widest hover:text-white transition-colors">Chat Now</a>
            </div>

            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-gold-500 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold mb-2">Email Address</h4>
              <p className="text-slate-400 text-sm mb-4">hello@royalgym.com</p>
              <a href="mailto:hello@royalgym.com" className="mt-auto text-xs font-bold text-gold-400 uppercase tracking-widest hover:text-white transition-colors">Email Us</a>
            </div>

            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-gold-500 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold mb-2">Location</h4>
              <p className="text-slate-400 text-sm mb-4">123 Premium Street, City, State, 123456</p>
              <a href="#" className="mt-auto text-xs font-bold text-gold-400 uppercase tracking-widest hover:text-white transition-colors">Get Directions</a>
            </div>
          </div>

          <div className="glass rounded-[2rem] overflow-hidden flex flex-col relative h-[400px] lg:h-auto border border-zinc-800">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-12 h-12 text-zinc-700 mb-4" />
                <h3 className="text-xl font-bold text-slate-500 mb-2">Interactive Map Area</h3>
                <p className="text-sm text-slate-600 mb-6">Google Maps Integration Placeholder</p>
                <a href="#" className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">Open in Google Maps</a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
