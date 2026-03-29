import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "hsl(222, 47%, 6%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(174, 72%, 56%) 0%, transparent 70%)" }}
        />
      </div>

      {/* Name reveal */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "hsl(210, 40%, 92%)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gradient">Omar Mokhtar</span>
        </motion.h1>

        {/* Minimal loading bar */}
        <motion.div
          className="h-[2px] rounded-full"
          style={{ background: "hsl(174, 72%, 56%)" }}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "hsl(215, 20%, 55%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Portfolio
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonLoader;
