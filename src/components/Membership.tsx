import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: '1 Month Plan',
    price: '₹1,500',
    duration: 'per month',
    popular: false,
    benefits: [
      'Access to all gym equipment',
      'Free fitness consultation',
      'Locker room access',
      'Standard support'
    ]
  },
  {
    name: '3 Month Plan',
    price: '₹4,000',
    duration: 'quarter',
    popular: true,
    benefits: [
      'Everything in 1 Month Plan',
      'Customized Diet Plan',
      '2 Personal Training Sessions',
      '10% off Protein Shop'
    ]
  },
  {
    name: '6 Month Plan',
    price: '₹7,500',
    duration: 'half year',
    popular: false,
    benefits: [
      'Everything in 3 Month Plan',
      'Advanced Workout Regimen',
      '5 Personal Training Sessions',
      'Free Shaker Bottle'
    ]
  },
  {
    name: '12 Month Plan',
    price: '₹12,000',
    duration: 'per year',
    popular: false,
    benefits: [
      'Everything in 6 Month Plan',
      'Unlimited VIP Access',
      'Free AI Diet & Workout Access',
      '20% off Protein Shop',
      '1 Month Free for a friend'
    ]
  }
];

export default function Membership() {
  return (
    <section id="plans" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            PREMIUM <span className="text-gold-500">MEMBERSHIP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Choose the plan that fits your goals. Unlock access to premium equipment, personalized guidance, and a thriving fitness community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-3xl p-px ${plan.popular ? 'bg-gradient-to-b from-gold-400 to-gold-600' : 'bg-zinc-800'}`}
            >
              <div className="h-full bg-zinc-900 rounded-[calc(1.5rem-1px)] p-8 flex flex-col">
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold font-display text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 border-b border-zinc-800 pb-6">
                  <span className="text-4xl font-bold text-gold-400">{plan.price}</span>
                  <span className="text-sm text-slate-400">/{plan.duration}</span>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="mt-0.5 rounded-full bg-gold-500/20 p-0.5">
                        <Check className="w-3 h-3 text-gold-500" />
                      </div>
                      <span className="flex-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gold-500 hover:bg-gold-400 text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}>
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
