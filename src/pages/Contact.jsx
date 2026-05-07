import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactForm from '../components/contact/ContactForm';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+27 21 123 4567', href: 'tel:+27211234567' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/27211234567?text=Hi%20Prashad%20Café!%20I%27d%20like%20to%20place%20an%20order.' },
  { icon: Mail, label: 'Email', value: 'info@prashadcafe.co.za', href: 'mailto:info@prashadcafe.co.za' },
  { icon: MapPin, label: 'Main Location', value: 'Kloof St, Gardens, Cape Town', href: null },
];

export default function Contact() {
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
              Get In Touch
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(22,68%,18%)' }}>
              Order & Contact
            </h1>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'hsl(25,15%,50%)' }}>
              Order your favourite dishes today or get in touch with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'hsl(35,62%,46%)/10' }}>
                      <item.icon className="w-5 h-5" style={{ color: 'hsl(35,62%,46%)' }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: 'hsl(25,15%,45%)' }}>{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-medium transition-colors"
                          style={{ color: 'hsl(22,68%,18%)', textDecoration: 'none' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium" style={{ color: 'hsl(22,68%,18%)' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-2xl p-6" style={{ background: 'hsl(120,60%,95%)', border: '2px solid hsl(120,50%,70%)' }}>
                <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: 'hsl(22,68%,18%)' }}>Quick Order via WhatsApp</h3>
                <p className="text-sm mb-4" style={{ color: 'hsl(25,15%,45%)' }}>
                  The fastest way to place your order — send us a message on WhatsApp!
                </p>
                <a
                  href="https://wa.me/27211234567?text=Hi%20Prashad%20Café!%20I%27d%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full font-heading font-medium bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}>
                <h2 className="font-heading font-bold text-2xl mb-2" style={{ color: 'hsl(22,68%,18%)' }}>Send Us a Message</h2>
                <p className="text-sm mb-6" style={{ color: 'hsl(25,15%,45%)' }}>
                  Have a question or want to place an order? Fill in the form below.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}