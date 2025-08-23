
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-8xl font-bold text-red-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-2xl mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
    
      </motion.div>

      <motion.div
        className="mt-10 w-80 h-80"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error Illustration"
          className="w-full h-full object-contain"
        />
      </motion.div>
          <Link
          to="/"
          className="px-6 py-3 mt-4 bg-red-500 hover:bg-red-600 transition rounded-full font-semibold"
        >
          Go Home
        </Link>
    </div>
  );
}
