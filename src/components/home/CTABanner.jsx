import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{background: 'hsl(22,68%,18%)'}}>
      {/* ornamental background */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(35,62%,46%) 0%, transparent 70%)'}} />
      <div className="absolute top-0 left-0 right-0 h-1" style={{background: 'linear-gradient(90deg, transparent, hsl(35,62%,46%), transparent)'}} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{background: 'linear-gradient(90deg, transparent, hsl(35,62%,46%), transparent)'}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-3" style={{color: 'hsl(35,62%,46%)'}}>Ready to taste the difference?</p>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl mb-4" style={{color: 'hsl(38,60%,96%)'}}>  
            Order Today
          </h2>
          <p className="font-subheading text-lg mb-8 max-w-md mx-auto" style={{color: 'hsl(38,30%,72%)'}}>
            Your favourite vegetarian & vegan Indian dishes, made fresh to order.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <button className="px-10 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90" style={{background: 'hsl(35,62%,46%)', color: 'white'}}>
                Order Now
              </button>
            </Link>
            <Link to="/menu">
              <button className="px-10 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all hover:bg-white/10" style={{border: '1px solid hsl(35,62%,46%)', color: 'hsl(35,62%,46%)'}}>
                Browse Menu
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}