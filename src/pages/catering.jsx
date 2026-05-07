import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, Users, Calendar, Sparkles, Phone, Mail } from 'lucide-react';

const services = [
  { icon: Users, title: 'Weddings', description: 'Exquisite vegetarian & vegan menus tailored for your special day, from intimate gatherings to grand celebrations.' },
  { icon: Calendar, title: 'Corporate Functions', description: 'Professional catering for meetings, conferences, and company events with a diverse selection of dishes.' },
  { icon: Sparkles, title: 'Birthday Parties', description: 'Make your birthday unforgettable with a curated spread of authentic Indian flavours your guests will love.' },
  { icon: ChefHat, title: 'Dinner Gatherings', description: 'Elegant private dining experiences featuring our finest vegetarian and vegan specialities.' },
];

const steps = [
  { step: '01', title: 'Initial Consultation', description: 'Schedule a personalised meeting with our head of events to discuss your vision and requirements.' },
  { step: '02', title: 'Tasting Session', description: 'Experience our dishes first-hand and customise your menu to perfectly suit your event.' },
  { step: '03', title: 'Event Planning', description: 'Our dedicated team handles all the details so you can focus on enjoying your special occasion.' },
  { step: '04', title: 'Exceptional Service', description: 'On the day, we deliver outstanding food and service to create a memorable culinary experience.' },
];

export default function Catering() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 sm:py-32" style={{ background: 'linear-gradient(135deg, hsl(349,40%,92%) 0%, hsl(38,60%,94%) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'hsl(38,70%,45%)' }} />
              <span className="font-body text-xs font-semibold tracking-[0.35em] uppercase" style={{ color: 'hsl(38,70%,45%)' }}>Prashad Events</span>
              <div className="h-px w-10" style={{ background: 'hsl(38,70%,45%)' }} />
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-6xl mb-5" style={{ color: 'hsl(349,40%,22%)' }}>
              Catering & Events
            </h1>
            <p className="font-subheading text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'hsl(20,25%,35%)' }}>
              Your premier destination for high-quality vegan and vegetarian catering — from intimate dinners to grand celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="mailto:prashadgroup@gmail.com">
                <button className="px-10 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90 shadow-md" style={{ background: 'hsl(349,45%,30%)', color: 'hsl(38,80%,92%)' }}>
                  Request a Quote
                </button>
              </a>
              <Link to="/contact">
                <button className="px-10 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all" style={{ border: '1.5px solid hsl(349,45%,35%)', color: 'hsl(349,45%,30%)' }}>
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: 'hsl(38,70%,45%)' }} />
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: 'hsl(35,62%,46%)' }}>What We Offer</span>
              <div className="h-px w-8" style={{ background: 'hsl(38,70%,45%)' }} />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{ color: 'hsl(22,68%,18%)' }}>Our Catering Services</h2>
            <p className="mt-4 max-w-md mx-auto font-body text-sm" style={{ color: 'hsl(25,15%,45%)' }}>
              We specialise in creating exceptional culinary experiences for any occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'hsl(38,60%,92%)' }}>
                  <s.icon className="w-6 h-6" style={{ color: 'hsl(35,62%,46%)' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: 'hsl(22,68%,18%)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(25,15%,45%)' }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 sm:py-28" style={{ background: 'hsl(38,40%,96%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: 'hsl(38,70%,45%)' }} />
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: 'hsl(35,62%,46%)' }}>Our Process</span>
              <div className="h-px w-8" style={{ background: 'hsl(38,70%,45%)' }} />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{ color: 'hsl(22,68%,18%)' }}>How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-5xl mb-4" style={{ color: 'hsl(38,70%,70%)' }}>{s.step}</div>
                <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: 'hsl(22,68%,18%)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(25,15%,45%)' }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4" style={{ color: 'hsl(22,68%,18%)' }}>Ready to Plan Your Event?</h2>
            <p className="font-body mb-8 max-w-lg mx-auto" style={{ color: 'hsl(25,15%,45%)' }}>
              Reach out to schedule your initial consultation with our head of events and head chef. We look forward to creating an exceptional experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:prashadgroup@gmail.com" className="flex items-center gap-2 font-body font-medium hover:opacity-80" style={{ color: 'hsl(35,62%,46%)', textDecoration: 'none' }}>
                <Mail className="w-4 h-4" /> prashadgroup@gmail.com
              </a>
              <span className="hidden sm:block" style={{ color: 'hsl(35,28%,83%)' }}>|</span>
              <a href="tel:+27214220264" className="flex items-center gap-2 font-body font-medium hover:opacity-80" style={{ color: 'hsl(35,62%,46%)', textDecoration: 'none' }}>
                <Phone className="w-4 h-4" /> 021 422 0264
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}