import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Droplets, Flame, Loader2 } from 'lucide-react';

export default function DietAI() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | any>(null);

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Fake AI Delay
    setTimeout(() => {
      setIsGenerating(false);
      setResult({
        calories: '2,200 kcal',
        protein: '140g',
        water: '3.5 Liters',
        meals: [
          { time: 'Breakfast', foods: 'Oats with milk, 1 Banana, 2 Boiled Eggs, 1 scoop Peanut Butter' },
          { time: 'Mid-Morning', foods: 'Handful of Roasted Chana & Peanuts' },
          { time: 'Lunch', foods: 'Rice, Dal, 2 Chapatis, Mix Vegetable Sabzi, Small bowl Curd' },
          { time: 'Pre Workout', foods: '1 Apple, Black Coffee' },
          { time: 'Post Workout', foods: 'Soya Chunks or Whey Protein, 1 Banana' },
          { time: 'Dinner', foods: '2 Chapatis, Paneer/Chicken Sabzi, Green Salad' }
        ]
      });
    }, 1500);
  };

  return (
    <section id="diet" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gold-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            SMART <span className="text-gold-500">DIET PLANNER</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Input your details below to generate a tailored nutritional plan based on Indian dietary staples and your specific fitness goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-gold p-8 rounded-3xl">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Age</label>
                  <input type="number" required placeholder="e.g. 24" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Weight (kg)</label>
                  <input type="number" required placeholder="e.g. 70" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Height (cm)</label>
                  <input type="number" required placeholder="e.g. 175" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Gender</label>
                  <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none appearance-none">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Primary Goal</label>
                <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none appearance-none">
                  <option>Muscle Gain</option>
                  <option>Fat Loss</option>
                  <option>Weight Loss</option>
                  <option>Weight Gain</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Diet Preference</label>
                <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-white outline-none appearance-none">
                  <option>Natural Indian Diet (Low Budget)</option>
                  <option>Vegetarian</option>
                  <option>Non Vegetarian</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-bold rounded-xl px-4 py-4 transition-all flex items-center justify-center disabled:opacity-70 mt-4"
              >
                {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Generate Custom Diet Plan'}
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div>
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <Utensils className="w-16 h-16 text-zinc-800 mb-4" />
                  <h3 className="text-xl font-bold text-slate-500 mb-2">No Plan Generated</h3>
                  <p className="text-slate-600 text-sm">Fill out the form and generate to see your customized macro breakdown and meal plan.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Flame className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-xl font-bold font-display text-white">{result.calories}</span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider">Calories</span>
                    </div>
                    <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                      <div className="w-6 h-6 mb-2 text-gold-500 flex items-center justify-center font-bold text-lg border border-gold-500 rounded-sm">P</div>
                      <span className="text-xl font-bold font-display text-white">{result.protein}</span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider">Protein</span>
                    </div>
                    <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Droplets className="w-6 h-6 text-blue-400 mb-2" />
                      <span className="text-xl font-bold font-display text-white">{result.water}</span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider">Daily Water</span>
                    </div>
                  </div>

                  <div className="glass rounded-3xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Daily Meal Plan</h3>
                    <div className="space-y-5">
                      {result.meals.map((meal: any, idx: number) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-24 shrink-0">
                            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">{meal.time}</span>
                          </div>
                          <div className="flex-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <p className="text-slate-300 text-sm leading-relaxed">{meal.foods}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 text-center italic mt-4">
                    Disclaimer: These diet suggestions are general fitness guidance and should not replace advice from a qualified dietitian or healthcare professional.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
