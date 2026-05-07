import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function StickyOrderButton() {
  return (
    <div style={{position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 50}}>
      <Link
        to="/contact"
        style={{display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', background: 'hsl(349,52%,28%)', color: 'hsl(38,80%,85%)', border: '1px solid hsl(38,60%,45%)', textDecoration: 'none', borderRadius: '4px', cursor: 'pointer'}}
      >
        <ShoppingBag style={{width: '1rem', height: '1rem'}} />
        Order Now
      </Link>
    </div>
  );
}
