import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha M.',
    location: 'Gardens',
    rating: 5,
    text: 'The vegan butter chicken is absolutely incredible — I can\'t believe it\'s plant-based! Rich, creamy and full of authentic spice. Prashad is my go-to every week.',
    avatar: 'AM',
  },
  {
    name: 'Sanjay P.',
    location: 'Rondebosch',
    rating: 5,
    text: 'As someone who grew up eating Indian food, Prashad truly brings back the authentic home-cooked taste. The paneer masala and breyani are outstanding.',
    avatar: 'SP',
  },
  {
    name: 'Leila R.',
    location: 'Constantia',
    rating: 5,
    text: 'Finally a place in Cape Town that takes vegetarian food seriously. The samoosas are crispy perfection and the staff are always so warm and welcoming.',
    avatar: 'LR',
  },
  {
    name: 'David K.',
    location: 'Gardens',
    rating: 5,
    text: 'Affordable, fresh, and absolutely delicious. The chana masala is the best I\'ve ever had outside of India. Highly recommend to anyone looking for genuine Indian flavours.',
    avatar: 'DK',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4" style={{fill: 'hsl(35,62%,46%)', color: 'hsl(35,62%,46%)'}} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28" style={{background: 'hsl(38,60%,96%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{background: 'hsl(35,62%,46%)'}} />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase" style={{color: 'hsl(35,62%,46%)'}}>Customer Reviews</span>
            <div className="h-px w-8" style={{background: 'hsl(35,62%,46%)'}} />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{color: 'hsl(22,68%,18%)'}}>
            What Our Guests Say
          </h2>
          <p className="mt-4 max-w-md mx-auto font-body text-sm" style={{color: 'hsl(25,15%,45%)'}}>
            Rated <strong>4.9</strong> on Google across all locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{background: 'white', border: '2px solid hsl(35,28%,83%)'}}
            >
              <Stars count={t.rating} />
              <p className="text-sm leading-relaxed flex-1" style={{color: 'hsl(25,15%,45%)'}}>{`"${t.text}"`}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-sm" style={{background: 'hsl(35,62%,46%)', color: 'white'}}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm" style={{color: 'hsl(22,68%,18%)'}}>{t.name}</p>
                  <p className="text-xs" style={{color: 'hsl(25,15%,45%)'}}>{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}