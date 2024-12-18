import { motion } from "framer-motion";

export const SectionSeparator = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent translate-y-px blur-sm" />
            <div className="relative flex justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-white/20 to-white/10 shadow-lg shadow-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 