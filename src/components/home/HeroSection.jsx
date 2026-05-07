import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HERO_IMAGE = "https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/8cc36ba9b_generated_39a16047.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Beautiful spread of Indian vegetarian dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(20,50,20,0.70) 50%, rgba(20,10,5,0.50) 100%)'}} />
        {/* Subtle mandala-inspired radial overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(38,90%,42%) 0%, transparent 60%), radial-gradient(circle at 80% 20%, hsl(349,52%,35%) 0%, transparent 50%)'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Ornamental line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-12" style={{background: 'hsl(38,90%,42%)'}} />
            <span className="text-xs font-body tracking-[0.4em] uppercase" style={{color: 'hsl(38,80%,65%)'}}>
              100% Vegetarian & Vegan
            </span>
            <div className="h-px flex-1 max-w-12" style={{background: 'hsl(38,90%,42%)'}} />
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-4" style={{color: 'hsl(38,80%,92%)'}}>  
            Authentic
            <span className="block italic" style={{color: 'hsl(38,90%,62%)'}}>Indian Flavours</span>
          </h1>
          <p className="font-subheading text-xl sm:text-2xl mb-3" style={{color: 'hsl(38,40%,75%)'}}>
            From Cape Town with Love
          </p>

          <p className="font-body text-base sm:text-lg leading-relaxed mb-10 max-w-xl" style={{color: 'hsl(38,20%,72%)'}}>
            Experience rich, traditional Indian flavours made fresh daily. Pure vegetarian. Pure soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <button className="px-8 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90" style={{background: 'hsl(38,90%,42%)', color: 'hsl(20,30%,10%)'}}>  
                View Menu
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10" style={{border: '1px solid hsl(38,60%,50%)', color: 'hsl(38,80%,80%)'}}>
                Order Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{background: 'linear-gradient(to top, hsl(38,60%,96%), transparent)'}} />
    </section>
  );
}