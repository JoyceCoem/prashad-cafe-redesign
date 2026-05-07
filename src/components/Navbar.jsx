import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{background: 'hsl(20, 30%, 10%)'}}>
      {/* Top decorative border */}
      <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, hsl(349,52%,28%), hsl(38,90%,42%), hsl(25,70%,50%), hsl(38,90%,42%), hsl(349,52%,28%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-wide leading-none" style={{color: 'hsl(38,90%,72%)'}}>
                Prashad
              </span>
              <span className="font-subheading text-xs tracking-[0.25em] uppercase" style={{color: 'hsl(38,60%,55%)'}}>
                Café
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-yellow-300'
                    : 'text-stone-300 hover:text-yellow-200'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full" style={{background: 'hsl(38,90%,42%)'}} />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/locations">
              <Button className="rounded-none px-6 font-body font-medium text-sm tracking-widest uppercase" style={{background: 'hsl(349,52%,28%)', color: 'hsl(38,80%,85%)', border: '1px solid hsl(38,70%,45%)'}}>
                Order Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 transition-colors"
            style={{color: 'hsl(38,80%,70%)'}}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{background: 'hsl(20, 28%, 8%)', borderTop: '1px solid hsl(38,40%,25%)'}}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? 'text-yellow-300'
                      : 'text-stone-300 hover:text-yellow-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/locations" onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-none font-body font-medium uppercase tracking-widest text-sm" style={{background: 'hsl(349,52%,28%)', color: 'hsl(38,80%,85%)'}}>
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}