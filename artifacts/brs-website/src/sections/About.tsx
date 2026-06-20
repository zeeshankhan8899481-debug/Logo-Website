import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden">
        <h2 className="font-display text-[15rem] font-bold text-white uppercase tracking-tighter">
          NO EXCUSES
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="/transform-1.png" 
              alt="Transformation Training" 
              className="relative z-10 w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-black/50 border border-border"
            />
            {/* Accent border frame */}
            <div className="absolute -inset-4 border-2 border-primary/30 z-0 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              More Than <span className="text-primary">A Gym.</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Body Reshaping Studio is a dedicated fitness transformation center focused on personalized training, discipline-based coaching, and result-oriented fitness programs. 
              </p>
              <p>
                Designed for people who want real physical change, not just gym workouts. We believe that transformation happens when expert guidance meets your unyielding commitment.
              </p>
              <p className="font-semibold text-white border-l-4 border-primary pl-4 py-2 bg-background/50">
                This is where ordinary people become extraordinary. Are you ready?
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
