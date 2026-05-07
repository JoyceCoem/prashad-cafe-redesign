import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'hsl(20, 30%, 10%)'}}>
      <div style={{height: '4px', width: '100%', background: 'linear-gradient(90deg, hsl(349,52%,28%), hsl(38,90%,42%), hsl(25,70%,50%), hsl(38,90%,42%), hsl(349,52%,28%))'}} />
      <div style={{maxWidth: '100%', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{fontFamily: 'Playfair Display', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: 1, color: 'hsl(38,90%,72%)'}}>
              Prashad
            </span>
            <span style={{fontFamily: 'Cormorant Garamond', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(38,60%,55%)'}}>
              Café
            </span>
          </div>
        </Link>

        <div style={{marginLeft: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
          <Link to="/menu" style={{color: 'hsl(38,80%,70%)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Poppins'}}>Menu</Link>
          <Link to="/about" style={{color: 'hsl(38,80%,70%)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Poppins'}}>About</Link>
          <Link to="/contact" style={{background: 'hsl(349,52%,28%)', color: 'hsl(38,80%,85%)', padding: '0.5rem 1.5rem', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Poppins', fontWeight: 500, border: '1px solid hsl(38,70%,45%)', cursor: 'pointer'}}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
