import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function FooterSimple() {
  return (
    <footer style={{background: 'hsl(20, 28%, 8%)', color: 'hsl(38, 50%, 85%)', padding: '4rem 1.5rem'}}>
      <div style={{height: '4px', width: '100%', background: 'linear-gradient(90deg, hsl(349,52%,28%), hsl(38,90%,42%), hsl(25,70%,50%), hsl(38,90%,42%), hsl(349,52%,28%))', marginBottom: '2rem'}} />
      
      <div style={{maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem'}}>
        <div>
          <div style={{marginBottom: '1.25rem'}}>
            <h2 style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '1.5rem', color: 'hsl(38,90%,68%)'}}> 
              Prashad
            </h2>
            <p style={{fontFamily: 'Cormorant Garamond', fontSize: '0.875rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(38,60%,55%)'}}> Café</p>
          </div>
          <p style={{fontSize: '0.875rem', lineHeight: 1.6, color: 'hsl(38,20%,65%)'}}>
            Authentic Vegetarian & Vegan Indian Cuisine. Cape Town's home of pure flavour.
          </p>
          <div style={{marginTop: '1.25rem'}}>
            <span style={{fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(38,60%,45%)'}}>From Cape Town with Love</span>
          </div>
        </div>

        <div>
          <h4 style={{fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'hsl(38,90%,68%)'}}>
            Quick Links
          </h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'hsl(38,20%,65%)'}}>
            <li><Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/menu" style={{color: 'inherit', textDecoration: 'none'}}>Menu</Link></li>
            <li><Link to="/locations" style={{color: 'inherit', textDecoration: 'none'}}>Locations</Link></li>
            <li><Link to="/contact" style={{color: 'inherit', textDecoration: 'none'}}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'hsl(38,90%,68%)'}}>
            Hours
          </h4>
          <div style={{fontSize: '0.875rem', color: 'hsl(38,20%,65%)', lineHeight: 1.8}}>
            <p>Mon - Sun</p>
            <p>10:00 AM - 9:00 PM</p>
          </div>
        </div>

        <div>
          <h4 style={{fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'hsl(38,90%,68%)'}}>
            Contact
          </h4>
          <div style={{fontSize: '0.875rem', color: 'hsl(38,20%,65%)', lineHeight: 1.8}}>
            <p>📧 prashadgroup@gmail.com</p>
            <p>📱 021 422 0264</p>
          </div>
        </div>
      </div>

      <div style={{borderTop: '1px solid hsl(35, 25%, 85%)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'hsl(38,20%,65%)'}}>
        <p>&copy; 2024 Prashad Café. All rights reserved.</p>
      </div>
    </footer>
  );
}
