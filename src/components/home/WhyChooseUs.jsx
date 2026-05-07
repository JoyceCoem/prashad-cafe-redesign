import { motion } from 'framer-motion';
import { Leaf, ChefHat, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Vegetarian & Vegan',
    description: 'Every dish on our menu is completely meat-free with abundant vegan options.',
  },
  {
    icon: ChefHat,
    title: 'Authentic Indian Recipes',
    description: 'Traditional family recipes passed down through generations of Indian cooking.',
  },
  {
    icon: Clock,
    title: 'Freshly Prepared Daily',
    description: 'All meals are made fresh every day using the finest spices and ingredients.',
  },
  {
    icon: MapPin,
    title: 'Multiple Locations',
    description: 'Conveniently located across Cape Town — Gardens, Rondebosch & Constantia.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28" style={{background: 'linear-gradient(135deg, hsl(38,60%,96%) 0%, hsl(38,50%,94%) 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{background: 'hsl(35,62%,46%)'}} />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase" style={{color: 'hsl(35,62%,46%)'}}>
              Why Prashad
            </span>
            <div className="h-px w-8" style={{background: 'hsl(35,62%,46%)'}} />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{color: 'hsl(22,68%,18%)'}}>Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{background: 'white', border: '2px solid hsl(35,28%,83%)'}}
            >
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-lg" style={{background: 'hsl(38,60%,94%)'}}>
                <f.icon className="w-6 h-6" style={{color: 'hsl(35,62%,46%)'}} />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2" style={{color: 'hsl(22,68%,18%)'}}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'hsl(25,15%,45%)'}}>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}