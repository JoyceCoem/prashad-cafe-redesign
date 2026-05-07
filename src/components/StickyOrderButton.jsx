import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyOrderButton() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <Link
        to="/locations"
        className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase shadow-2xl"
        style={{background: 'hsl(349,52%,28%)', color: 'hsl(38,80%,85%)', border: '1px solid hsl(38,60%,45%)'}}
      >
        <ShoppingBag className="w-4 h-4" />
        Order Now
      </Link>
    </motion.div>
  );
}