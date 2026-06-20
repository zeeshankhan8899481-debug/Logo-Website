import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923058562226"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
