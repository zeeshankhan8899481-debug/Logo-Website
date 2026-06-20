import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 z-10"></div>
        <div className="absolute inset-0 bg-background/40 z-10 mix-blend-multiply"></div>
        <img 
          src="/hero-bg.png" 
          alt="Dark Gym" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.1] mb-6">
              Transform Your <span className="text-primary">Body.</span><br />
              Transform Your <span className="text-primary">Life.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Rawalpindi's trusted body transformation studio helping you reshape your physique with expert coaching and proven training programs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none px-8 py-6 text-lg" asChild>
              <a href="#services">Start Transformation</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider rounded-none px-8 py-6 text-lg bg-transparent" asChild>
              <a href="https://wa.me/923058562226" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2 h-5 w-5" /> WhatsApp Now
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm font-medium text-gray-300 uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐</span> 4.6 Rating (215+ Reviews)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span> Range Rd, Rawalpindi
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🕒</span> Open 24 Hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
