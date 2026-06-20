import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ali M.",
    date: "1 month ago",
    text: "Best gym for body transformation in Rawalpindi. The trainers actually care about your progress and push you to your limits.",
    rating: 5
  },
  {
    name: "Hassan T.",
    date: "3 months ago",
    text: "Great trainers and amazing results. If you follow their plan, you will see your body change. Worth every rupee.",
    rating: 5
  },
  {
    name: "Bilal K.",
    date: "5 months ago",
    text: "Highly disciplined and motivating environment. You don't just come here to work out, you come here to transform.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-yellow-500 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            Earned <span className="text-primary">Trust.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Listen to those who have bled on our floor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date} on Google</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
