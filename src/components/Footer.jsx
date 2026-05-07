import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{background: 'hsl(20, 28%, 8%)', color: 'hsl(38, 50%, 85%)'}}>
      {/* decorative top border */}
      <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, hsl(349,52%,28%), hsl(38,90%,42%), hsl(25,70%,50%), hsl(38,90%,42%), hsl(349,52%,28%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <h2 className="font-heading font-bold text-2xl" style={{color: 'hsl(38,90%,68%)'}}>
                Prashad
              </h2>
              <p className="font-subheading text-sm tracking-[0.3em] uppercase" style={{color: 'hsl(38,60%,55%)'}}>Café</p>
            </div>
            <p className="text-sm leading-relaxed" style={{color: 'hsl(38,20%,65%)'}}>
              Authentic Vegetarian & Vegan Indian Cuisine. Cape Town's home of pure flavour.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <span className="text-xs tracking-[0.2em] uppercase" style={{color: 'hsl(38,60%,45%)'}}>From Cape Town with Love</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-5" style={{color: 'hsl(38,90%,68%)'}}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{color: 'hsl(38,20%,65%)'}}>
              {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About Us'], ['/locations', 'Locations'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-yellow-300 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-5" style={{color: 'hsl(38,90%,68%)'}}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{color: 'hsl(38,20%,65%)'}}>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{color: 'hsl(38,70%,50%)'}} />
                <span>+27 21 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{color: 'hsl(38,70%,50%)'}} />
                <span>info@prashadcafe.co.za</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{color: 'hsl(38,70%,50%)'}} />
                <span>Mon–Sat: 10am – 9pm<br />Sun: 11am – 8pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-5" style={{color: 'hsl(38,90%,68%)'}}>
              Our Branches
            </h4>
            <ul className="space-y-3 text-sm" style={{color: 'hsl(38,20%,65%)'}}>
              {['Gardens, Cape Town', 'Rondebosch, Cape Town', 'Constantia, Cape Town'].map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{color: 'hsl(38,70%,50%)'}} />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{borderTop: '1px solid hsl(38,20%,20%)', color: 'hsl(38,15%,45%)'}}>
          <p>© 2026 Prashad Café. All rights reserved.</p>
          <p className="tracking-wider">Pure Flavour. Pure Vegetarian.</p>
        </div>
      </div>
    </footer>
  );
}