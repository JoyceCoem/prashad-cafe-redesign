import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const dishes = [
  {
    name: 'Butter Chicken',
    description: 'Signature dish — soya pieces in a deeply flavoured, creamy tomato gravy',
    image: 'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/e36018ba8_generated_ab7ebd4e.png',
    tag: 'Vegan',
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Rich, creamy tomato gravy with soft paneer cubes',
    image: 'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/44299b9bd_generated_dfc375cd.png',
    tag: 'Vegetarian',
  },
  {
    name: 'Chicken Biryani',
    description: 'Fragrant Durban-style biryani with whole spices and rich gravy',
    image: 'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/23a4a9e3d_generated_6933baaf.png',
    tag: 'Vegan',
  },
  {
    name: 'Potato Samosa (4pcs)',
    description: 'Classic crispy samosas filled with spiced potato',
    image: 'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/a2d8e2474_generated_25751fa5.png',
    tag: 'Vegan',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{background: 'hsl(38,90%,56%)'}} />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase" style={{color: 'hsl(38,90%,56%)'}}>
              Our Specialities
            </span>
            <div className="h-px w-8" style={{background: 'hsl(38,90%,56%)'}} />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2" style={{color: 'hsl(22,68%,28%)'}}>
            Featured Dishes
          </h2>
          <p className="mt-4 max-w-md mx-auto font-body text-sm" style={{color: 'hsl(25,15%,55%)'}}>
            Discover our most loved dishes, crafted with authentic spices and fresh ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ background: 'white', border: '2px solid hsl(35,28%,90%)' }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.9)', color: 'hsl(22,68%,18%)' }}>
                    {dish.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg" style={{color: 'hsl(22,68%,28%)'}}>{dish.name}</h3>
                <p className="text-sm mt-1 leading-relaxed" style={{color: 'hsl(25,15%,55%)'}}>
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-heading font-medium hover:opacity-80 transition-opacity"
            style={{color: 'hsl(38,90%,56%)'}}
          >
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}