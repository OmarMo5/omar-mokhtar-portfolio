import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar skeleton */}
      <div className="h-16 border-b border-border flex items-center justify-between px-8">
        <div className="skeleton-pulse h-6 w-32 rounded" />
        <div className="hidden md:flex gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-pulse h-4 w-16 rounded" />
          ))}
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-3xl w-full space-y-6">
          <div className="skeleton-pulse h-5 w-48 rounded" />
          <div className="skeleton-pulse h-12 w-96 max-w-full rounded" />
          <div className="skeleton-pulse h-12 w-80 max-w-full rounded" />
          <div className="space-y-3 mt-4">
            <div className="skeleton-pulse h-4 w-full rounded" />
            <div className="skeleton-pulse h-4 w-5/6 rounded" />
            <div className="skeleton-pulse h-4 w-4/6 rounded" />
          </div>
          <div className="flex gap-4 mt-6">
            <div className="skeleton-pulse h-12 w-36 rounded-lg" />
            <div className="skeleton-pulse h-12 w-36 rounded-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkeletonLoader;
