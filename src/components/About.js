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
      <h2 className="inline-block mb-6 text-4xl font-semibold border-b-4 border-indigo-600">
        درباره من
      </h2>
      <p className="text-lg leading-relaxed text-gray-700">
        سلام! من یلدا هستم، توسعه‌دهنده وب با علاقه به ساخت پروژه‌های مدرن و کاربرپسند.
        با Next.js و React به طراحی رابط‌های کاربری حرفه‌ای می‌پردازم.
      </p>
    </motion.section>
  );
}
