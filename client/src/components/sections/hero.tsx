import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          AI-Driven
          <br />
          Development
          <br />
          Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          Transforming ideas into intelligent applications through AI innovation
          and decade-long system development expertise.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#about"
          className="text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
