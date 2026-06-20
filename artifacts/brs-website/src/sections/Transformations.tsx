import { motion } from "framer-motion";

const STORIES = [
  {
    name: "Ahmed K.",
    duration: "12 Weeks",
    desc: "Lost 15kg of fat and built lean muscle mass through our intense conditioning program.",
    img: "/transform-1.png"
  },
  {
    name: "Usman R.",
    duration: "6 Months",
    desc: "Complete body recomp. Gained 8kg of solid muscle with targeted hypertrophy training.",
    img: "/transform-2.png"
  }
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            Real <span className="text-primary">Transformations.</span><br/>Real <span className="text-primary">Results.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Proof is in the physique. See what happens when discipline meets expert programming.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {STORIES.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden bg-card border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={story.img} 
                  alt={`${story.name} Transformation`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider">{story.name}</h3>
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">{story.duration}</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{story.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
