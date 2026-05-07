import { Link } from 'react-router-dom';

const HERO_IMAGE = "https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/8cc36ba9b_generated_39a16047.png";

export default function HeroSection() {
  return (
    <section style={{position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0}}>
        <img
          src={HERO_IMAGE}
          alt="Beautiful spread of Indian vegetarian dishes"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, hsl(20,30%,5%) 0%, hsl(20,35%,15%) 50%, hsl(20,30%,10%) 100%)'}} />
      </div>

      <div style={{position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '5rem 1rem', width: '100%'}}>
        <div style={{maxWidth: '40rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem'}}>
            <div style={{height: '1px', flex: 1, maxWidth: '3rem', background: 'hsl(38,90%,42%)'}} />
            <span style={{fontSize: '0.75rem', fontFamily: 'Poppins', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'hsl(38,80%,65%)'}}>
              100% Vegetarian & Vegan
            </span>
            <div style={{height: '1px', flex: 1, maxWidth: '3rem', background: 'hsl(38,90%,42%)'}} />
          </div>

          <h1 style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'hsl(38,80%,92%)'}}>  
            Authentic
            <span style={{display: 'block', fontStyle: 'italic', color: 'hsl(38,90%,62%)'}}>Indian Flavours</span>
          </h1>
          <p style={{fontFamily: 'Cormorant Garamond', fontSize: '1.25rem', marginBottom: '0.75rem', color: 'hsl(38,40%,75%)'}}>
            From Cape Town with Love
          </p>

          <p style={{fontFamily: 'Poppins', fontSize: '1rem', lineHeight: 1.5, marginBottom: '2.5rem', maxWidth: '28rem', color: 'hsl(38,20%,72%)'}}>
            Experience rich, traditional Indian flavours made fresh daily. Pure vegetarian. Pure soul.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start'}}>
            <Link to="/menu" style={{textDecoration: 'none'}}>
              <button style={{padding: '0.875rem 2rem', fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'hsl(38,90%,42%)', color: 'hsl(20,30%,10%)', border: 'none', cursor: 'pointer'}}>  
                View Menu
              </button>
            </Link>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <button style={{padding: '0.875rem 2rem', fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid hsl(38,60%,50%)', color: 'hsl(38,80%,80%)', background: 'hsl(20,30%,15%)', cursor: 'pointer'}}>
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '6rem', background: 'linear-gradient(to top, hsl(38,60%,96%), hsl(20,30%,12%))'}} />
    </section>
  );
}
