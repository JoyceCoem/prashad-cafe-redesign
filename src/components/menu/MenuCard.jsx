import { Leaf, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MenuCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
      style={{ background: 'white', border: '2px solid hsl(35,28%,90%)' }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-heading font-semibold" style={{ color: 'hsl(22,68%,28%)' }}>{item.name}</h3>
          {item.vegan && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'hsl(142,50%,90%)', color: 'hsl(142,50%,35%)' }}>
              <Leaf className="w-3 h-3" /> Vegan
            </span>
          )}
          {item.spicy && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'hsl(0,84%,90%)', color: 'hsl(0,84%,35%)' }}>
              <Flame className="w-3 h-3" /> Spicy
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm mt-1" style={{ color: 'hsl(25,15%,55%)' }}>{item.description}</p>
        )}
      </div>
      {item.price && (
        <span className="font-heading font-bold whitespace-nowrap" style={{ color: 'hsl(38,90%,56%)' }}>
          {item.price}
        </span>
      )}
    </motion.div>
  );
}