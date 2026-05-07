import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const locations = [
  { name: 'Gardens', address: 'Kloof Street, Gardens, Cape Town', hours: 'Mon–Sat: 10am–9pm' },
  { name: 'Rondebosch', address: 'Main Road, Rondebosch, Cape Town', hours: 'Mon–Sat: 10am–9pm' },
  { name: 'Constantia', address: 'Constantia Main Road, Cape Town', hours: 'Mon–Sat: 10am–9pm' },
];

export default function LocationsPreview() {
  return (
    <section className="py-20 sm:py-28" style={{background: 'linear-gradient(135deg, hsl(38,60%,97%) 0%, hsl(38,50%,95%) 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{color: 'hsl(38,90%,56%)'}}>
            Find Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3" style={{color: 'hsl(22,68%,28%)'}}>
            Our Locations
          </h2>
          <p className="mt-4 max-w-md mx-auto" style={{color: 'hsl(25,15%,55%)'}}>
            Visit us at any of our three Cape Town locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              style={{background: 'white', border: '2px solid hsl(35,28%,90%)'}}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'hsl(38,90%,56%)/15'}}>
                <MapPin className="w-5 h-5" style={{color: 'hsl(38,90%,56%)'}} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2" style={{color: 'hsl(22,68%,28%)'}}>{loc.name}</h3>
              <p className="text-sm mb-1" style={{color: 'hsl(25,15%,55%)'}}>{loc.address}</p>
              <p className="text-sm" style={{color: 'hsl(25,15%,55%)'}}>{loc.hours}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/locations">
            <button className="rounded-full px-6 py-2.5 font-heading font-medium transition-colors" style={{border: '2px solid hsl(38,90%,56%)', color: 'hsl(38,90%,56%)'}}>
              View All Locations
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}