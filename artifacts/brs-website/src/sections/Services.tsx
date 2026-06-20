import { motion } from "framer-motion";
import { Dumbbell, Activity, HeartPulse, Flame, Target, Users, Apple } from "lucide-react";

const SERVICES = [
  { icon: Target, title: "Body Transformation Plans", desc: "Complete overhauls designed for radical physical changes." },
  { icon: Flame, title: "Weight Loss Programs", desc: "Burn fat efficiently with targeted cardio and strength routines." },
  { icon: Dumbbell, title: "Muscle Building", desc: "Hypertrophy-focused training to pack on serious muscle mass." },
  { icon: Users, title: "Personal Coaching", desc: "1-on-1 expert guidance to ensure form, intensity, and results." },
  { icon: Activity, title: "Strength & Conditioning", desc: "Build functional strength, power, and athletic endurance." },
  { icon: HeartPulse, title: "Cardio Training", desc: "High-intensity interval training to boost your stamina." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Fuel your transformation with customized macro plans." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            Our <span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            The tools, programs, and coaching you need to forge a new physique.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <Icon size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary rounded-none flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
