import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-3xl mx-auto mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6 border-b-4 border-indigo-600 inline-block">
        درباره من
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        سلام! من یلدا هستم، توسعه‌دهنده وب با علاقه به ساخت پروژه‌های مدرن و کاربرپسند.  
        با Next.js و React به طراحی رابط‌های کاربری حرفه‌ای می‌پردازم.
      </p>
    </motion.section>
  );
}
