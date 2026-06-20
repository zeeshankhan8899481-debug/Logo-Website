import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "4.6★ Rated, 215+ Google Reviews",
  "Open 24/7 Availability",
  "Experienced, Elite Trainers",
  "Result-Driven Training System",
  "Transformation-Focused Approach",
  "Highly Motivational Environment"
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <p className="text-gray-300 text-lg mb-8">
              We aren't a casual health club. We are a facility dedicated entirely to results. When you join BRS, you enter an environment engineered for success.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <span className="text-white font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <img 
              src="/transform-2.png" 
              alt="Athlete" 
              className="w-full h-full object-cover object-center grayscale opacity-80 border-l-4 border-b-4 border-primary"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
