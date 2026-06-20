import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Take The <span className="text-primary">First Step.</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <p className="text-gray-300 text-lg mb-12">
              Ready to change your life? Reach out to us today. We are here to guide you through your transformation journey.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-gray-400">0305 8562226</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400">Range Rd, Afshan Colony<br/>Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none flex-1" asChild>
                <a href="tel:03058562226">
                  <FaPhone className="mr-2" /> Call Now
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold uppercase tracking-wider rounded-none flex-1" asChild>
                <a href="https://wa.me/923058562226" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-white hover:bg-secondary font-bold uppercase tracking-wider rounded-none flex-1" asChild>
                <a href="https://maps.google.com/?q=body+reshaping+studio+rawalpindi" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt className="mr-2" /> Directions
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto min-h-[400px] bg-background border border-border p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.846433246473!2d73.013583!3d33.609255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb3c294156c7%3A0xc6c42ffdd919315f!2sBody%20Reshaping%20Studio!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Body Reshaping Studio Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
