import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function LocationCard({ location, index, onOrderClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden shadow-sm h-full flex flex-col"
      style={{ background: 'white', border: '2px solid hsl(35,28%,90%)' }}
    >
      {/* Photo or Map */}
      <div className="h-56 shrink-0" style={{ background: 'hsl(38,60%,96%)' }}>
        {location.photo ? (
          <img src={location.photo} alt={location.name} className="w-full h-full object-cover" />
        ) : (
          <iframe
            title={`${location.name} map`}
            src={location.mapUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-xl mb-4">{location.name}</h3>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(38,90%,56%)' }} />
            <span style={{ color: 'hsl(25,15%,55%)' }}>{location.address}</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(38,90%,56%)' }} />
            <div>
              <a href={`tel:${location.phone.replace(/\s/g,'')}`} style={{ color: 'hsl(25,15%,55%)', textDecoration: 'none' }}>{location.phone}</a>
              {location.email && <p style={{ color: 'hsl(25,15%,55%)' }}>{location.email}</p>}
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(38,90%,56%)' }} />
            <div style={{ color: 'hsl(25,15%,55%)' }}>
              <p>{location.hours.weekdays}</p>
              {location.hours.sunday && <p>{location.hours.sunday}</p>}
            </div>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-2 mt-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full rounded-full font-heading font-medium">
              <Navigation className="w-3.5 h-3.5 mr-1.5" />
              Get Directions
            </Button>
          </a>
          <button
            onClick={onOrderClick}
            className="flex-1 py-2 px-4 rounded-full font-heading font-medium transition-colors text-sm"
            style={{ background: 'hsl(38,90%,56%)', color: 'white' }}
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}