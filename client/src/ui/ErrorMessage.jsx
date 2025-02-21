import { motion } from "framer-motion";

const Error = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="mt-1 bg-red-500 text-white font-semibold px-3 py-1 rounded text-xs inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Error;
