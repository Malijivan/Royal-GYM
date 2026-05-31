import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = (e: FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(w / (h * h));
    }
  };

  const getStatus = (value: number) => {
    if (value < 18.5) return { text: 'Underweight', color: 'text-blue-400' };
    if (value < 25) return { text: 'Normal', color: 'text-green-400' };
    if (value < 30) return { text: 'Overweight', color: 'text-orange-400' };
    return { text: 'Obese', color: 'text-red-400' };
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-gold rounded-[2rem] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="w-12 h-12 bg-gold-500/20 rounded-2xl flex items-center justify-center border border-gold-500/50 mb-6">
                <Calculator className="w-6 h-6 text-gold-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                CALCULATE <span className="text-gold-500">YOUR BMI</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Body Mass Index (BMI) evaluates your body weight relative to your height. It's a quick indicator of your general health category.
              </p>

              <form onSubmit={calculateBmi} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="number" 
                      placeholder="Height (cm)" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="number" 
                      placeholder="Weight (kg)" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white transition-all"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-3 rounded-xl transition-colors">
                  Calculate
                </button>
              </form>
            </div>

            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center items-center h-full min-h-[250px]">
              {bmi === null ? (
                <p className="text-slate-500 text-center">Enter your details to see your calculated BMI and health classification.</p>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <p className="text-6xl font-display font-bold text-white mb-2">{bmi.toFixed(1)}</p>
                  <p className="text-slate-400 text-sm tracking-widest uppercase mb-4">Your BMI Is</p>
                  <div className={`px-4 py-2 rounded-full border border-current ${getStatus(bmi).color} bg-current/10 font-bold uppercase tracking-wider text-sm inline-block`}>
                    {getStatus(bmi).text}
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
