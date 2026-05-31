import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Optimum Nutrition Gold Standard 100% Whey',
    category: 'Whey Protein',
    price: '₹3,299',
    description: 'The world\'s best-selling whey protein powder. 24g of protein per serving.',
    benefits: ['Muscle Recovery', 'Lean Muscle Build', 'Fast Absorbing'],
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Royal Premium Isolate Zero',
    category: 'Isolate Protein',
    price: '₹4,599',
    description: 'Ultra-pure isolate with zero carbs and fat. Perfect for cutting phases.',
    benefits: ['Zero Carbs/Fat', 'Lactose Free', 'Premium Quality'],
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'MusclePharm Assault Pre-Workout',
    category: 'Pre Workout',
    price: '₹1,999',
    description: 'Explosive energy and laser focus for your most intense workouts.',
    benefits: ['Intense Focus', 'Endurance', 'Explosive Energy'],
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Royal Classic Mass Gainer',
    category: 'Mass Gainer',
    price: '₹2,899',
    description: 'High-calorie blend to help you pack on size and strength quickly.',
    benefits: ['Weight Gain', 'Strength', 'High Calories'],
    image: 'https://images.unsplash.com/photo-1622486144883-937963ea75e6?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              PROTEIN <span className="text-gold-500">SHOP</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl">Premium supplements available directly at Royal GYM. Order via WhatsApp to confirm availability.</p>
          </div>
          <button className="flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors group">
            View All Categories 
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-gold-500/30 transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-zinc-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gold-400">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2 leading-tight h-12 line-clamp-2">{product.name}</h3>
                <p className="text-gold-500 font-bold mb-4">{product.price}</p>
                <div className="flex flex-wrap gap-2 mb-6 h-[50px] overflow-hidden">
                  {product.benefits.map(benefit => (
                    <span key={benefit} className="bg-white/5 px-2 py-1 rounded text-[10px] text-slate-300 uppercase tracking-wide">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`https://wa.me/910000000000?text=Hi! I am interested in buying ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white font-bold py-3 rounded-xl transition-opacity"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
