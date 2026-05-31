import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Dumbbell } from 'lucide-react';

const workoutsData: Record<string, string[]> = {
  Chest: ['Bench Press (4 sets x 8-12 reps)', 'Incline Dumbbell Press (3 sets x 10-12 reps)', 'Chest Fly (3 sets x 12-15 reps)', 'Push Ups (3 sets to failure)'],
  Back: ['Pull Ups (4 sets to failure)', 'Lat Pulldown (3 sets x 10-12 reps)', 'Barbell Row (4 sets x 8-10 reps)', 'Deadlift (3 sets x 5-8 reps)'],
  Biceps: ['Barbell Curl (3 sets x 10-12 reps)', 'Hammer Curl (3 sets x 12 reps)', 'Concentration Curl (3 sets x 12 reps)', 'Preacher Curl (3 sets x 10-12 reps)'],
  Triceps: ['Tricep Pushdown (4 sets x 12-15 reps)', 'Skull Crushers (3 sets x 10-12 reps)', 'Bench Dips (3 sets to failure)', 'Overhead Extension (3 sets x 12 reps)'],
  Shoulders: ['Shoulder Press (4 sets x 8-10 reps)', 'Lateral Raises (4 sets x 15 reps)', 'Front Raises (3 sets x 12 reps)', 'Rear Delt Fly (3 sets x 15 reps)'],
  Legs: ['Squats (4 sets x 8-10 reps)', 'Leg Press (3 sets x 10-12 reps)', 'Lunges (3 sets x 10 laps)', 'Calf Raises (4 sets x 15-20 reps)'],
  Abs: ['Crunches (3 sets x 20 reps)', 'Leg Raises (3 sets x 15 reps)', 'Russian Twists (3 sets x 20 reps)', 'Plank (3 sets x 60 seconds)'],
  'Full Body': ['Squats (3 sets x 10 reps)', 'Push Ups (3 sets to failure)', 'Pull Ups (3 sets to failure)', 'Burpees (3 sets x 15 reps)']
};

const muscleGroups = Object.keys(workoutsData);

export default function WorkoutAI() {
  const [selectedMuscle, setSelectedMuscle] = useState('Chest');

  return (
    <section id="workout" className="py-24 bg-zinc-950/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Activity className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">Intelligent Generation</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            AI WORKOUT <span className="text-gold-500">SUGGESTIONS</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select a muscle group below and let our intelligent system generate a specialized workout routine for maximum gains.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Controls */}
          <div className="lg:w-1/3">
            <div className="glass-gold p-6 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
                <Dumbbell className="text-gold-500 w-5 h-5" /> Target Area
              </h3>
              <div className="flex flex-wrap gap-3">
                {muscleGroups.map(muscle => (
                  <button
                    key={muscle}
                    onClick={() => setSelectedMuscle(muscle)}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedMuscle === muscle 
                        ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-black shadow-lg' 
                        : 'bg-zinc-900 border border-zinc-800 text-slate-300 hover:border-gold-500/50 hover:text-gold-400'
                    }`}
                  >
                    {muscle}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMuscle}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMuscle} Routine</h3>
                  <p className="text-gold-400 text-sm">Recommended for optimal muscle stimulation.</p>
                </div>
                
                {workoutsData[selectedMuscle].map((exercise, index) => {
                  const [name, sets] = exercise.split(' (');
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className="glass p-6 rounded-2xl flex items-center justify-between group hover:border-gold-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-gold-500 font-display font-bold text-lg group-hover:scale-110 transition-transform">
                          0{index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-100">{name}</h4>
                          <p className="text-slate-400 text-sm">{sets ? sets.replace(')', '') : ''}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
