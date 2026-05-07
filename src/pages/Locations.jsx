import { useState } from 'react';
import { motion } from 'framer-motion';
import LocationCard from '../components/locations/LocationCard';

const locations = [
  {
    name: 'Constantia',
    address: 'Shop 3 Old Village, Constantia Village (opposite Mugg & Bean), 7700',
    phone: '021 795 0049',
    hours: { weekdays: 'Mon–Sun: 10:00am – 9:00pm', sunday: '' },
    orderUrl: 'https://menu.ordabee.com/clients/prashad-cafe-constantia/menu',
    photo: null,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853!2d18.4300!3d-34.0230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzIyLjgiUyAxOMKwMjUnNDguMCJF!5e0!3m2!1sen!2sza!4v1!5m2!1sen!2sza',
  },
  {
    name: 'Rondebosch',
    address: '6 Rondebosch Court, Fountain Place, Rondebosch (behind Pick & Pay parking), 7708',
    phone: '021 685 7891',
    hours: { weekdays: 'Mon–Sun: 11:00am – 9:00pm', sunday: '' },
    orderUrl: 'https://menu.ordabee.com/clients/prashad-cafe-rondebosch/menu',
    photo: 'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/f60c8c220_IMG_3677.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853!2d18.4730!3d-33.9610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzM5LjYiUyAxOMKwMjgnMjIuOCJF!5e0!3m2!1sen!2sza!4v1!5m2!1sen!2sza',
  },
  {
    name: 'Gardens / Kloof Street',
    address: '34 Wandel Street, Gardens, 8000',
    phone: '021 422 0264',
    hours: { weekdays: 'Mon–Sun: 11:00am – 9:00pm', sunday: '' },
    orderUrl: 'https://menu.ordabee.com/clients/prashad-cafe-kloof/menu',
    photo: null,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853!2d18.4097!3d-33.9321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzU2LjAiUyAxOMKwMjQnMzQuOSJF!5e0!3m2!1sen!2sza!4v1!5m2!1sen!2sza',
  },
  {
    name: 'Prashad Express',
    address: 'UCT Upper Campus & UCT Middle Campus, Rondebosch, 7700',
    phone: 'Contact for details',
    email: 'prashadgroup@gmail.com',
    hours: { weekdays: 'Mon–Fri: 8:00am – 5:00pm', sunday: 'Collection only' },
    orderUrl: null,
    photo: null,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853!2d18.4610!3d-33.9570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzI1LjIiUyAxOMKwMjcnMzkuNiJF!5e0!3m2!1sen!2sza!4v1!5m2!1sen!2sza',
  },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleOrderClick = (location) => {
    if (location.orderUrl) {
      window.open(location.orderUrl, '_blank');
    } else {
      setSelectedLocation(location);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 sm:py-28" style={{ background: 'hsl(38,60%,96%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              Visit Us
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(22,68%,18%)' }}>
              Our Locations
            </h1>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'hsl(25,15%,50%)' }}>
              Find us at four convenient locations across Cape Town
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <LocationCard 
                key={loc.name} 
                location={loc} 
                index={i}
                onOrderClick={() => handleOrderClick(loc)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Selection Modal for Prashad Express */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl p-8 max-w-md w-full"
            style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}
          >
            <h2 className="font-heading text-2xl font-bold mb-4" style={{ color: 'hsl(22,68%,18%)' }}>Select Campus</h2>
            <p className="mb-6" style={{ color: 'hsl(25,15%,45%)' }}>Choose your preferred {selectedLocation.name} location:</p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  window.open('https://menu.ordabee.com/clients/prashad-cafe-uct-upper/menu', '_blank');
                  setSelectedLocation(null);
                }}
                className="w-full py-3 rounded-lg transition-colors font-semibold"
                style={{ background: 'hsl(35,62%,46%)', color: 'white' }}
              >
                Order from UCT Upper Campus
              </button>
              <button
                onClick={() => {
                  window.open('https://menu.ordabee.com/clients/prashad-cafe-uct-middle/menu', '_blank');
                  setSelectedLocation(null);
                }}
                className="w-full py-3 rounded-lg transition-colors font-semibold"
                style={{ background: 'hsl(35,62%,46%)', color: 'white' }}
              >
                Order from UCT Middle Campus
              </button>
              <button
                onClick={() => setSelectedLocation(null)}
                className="w-full py-3 rounded-lg transition-colors font-semibold"
                style={{ background: 'hsl(38,60%,94%)', color: 'hsl(25,15%,45%)' }}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}