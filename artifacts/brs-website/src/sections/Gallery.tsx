import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const IMAGES = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-secondary rounded-full text-white mb-6">
            <FaInstagram size={32} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Live From Our <span className="text-primary">Studio</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Follow us for daily transformation updates.
          </p>
          <a 
            href="https://www.instagram.com/bodyreshapingstudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary font-bold hover:text-white transition-colors uppercase tracking-wider border-b-2 border-primary pb-1"
          >
            @bodyreshapingstudio
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-square relative group overflow-hidden bg-card"
            >
              <img 
                src={src} 
                alt={`Studio Image ${idx + 1}`} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaInstagram size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
