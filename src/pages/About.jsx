import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const INTERIOR_IMAGE = "https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/c9704fdf8_generated_65802e53.png";

const values = [
{ icon: Leaf, title: 'Pure Vegetarian', text: 'Every single dish is 100% vegetarian, with a wide range of vegan options.' },
{ icon: Heart, title: 'Made With Love', text: 'Traditional family recipes crafted with care and the finest authentic spices.' },
{ icon: Users, title: 'Community First', text: 'Bringing people together over wholesome, affordable meals since day one.' },
{ icon: Award, title: 'Trusted Quality', text: 'Inspired by the legacy of the Maharajah restaurant family in Cape Town.' }];


export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section style={{ background: 'hsl(22,68%,18%)' }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(38,60%,96%)' }}>
              Our Story
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28" style={{ background: 'hsl(38,60%,96%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'hsl(35,28%,83%)' }}>
                <img
                  src={INTERIOR_IMAGE}
                  alt="Prashad Café interior"
                  className="w-full h-80 lg:h-480 object-cover" />
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              
              <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
                Generations of Flavour
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-6" style={{ color: 'hsl(22,68%,18%)' }}>
                A Legacy of Authentic Indian Cuisine
              </h2>
              <div className="space-y-4 leading-relaxed" style={{ color: 'hsl(25,15%,45%)' }}>
                <p>
                  Prashad Café brings generations of Indian culinary tradition to Cape Town. Inspired by the legacy of the Maharajah restaurant family, we specialise in vegetarian and vegan-friendly Indian cuisine made with authentic spices and fresh ingredients.
                </p>
                <p>
                  Our mission is simple: to serve delicious, affordable meals that bring comfort, culture, and flavour to every plate.
                </p>
                <p>From the aromatic spices in our curries to the golden crispiness of our samoosas, every dish tells a story of tradition meeting modern taste. We believe that vegetarian food should never compromise on flavour  and at Prashad, it never does.

                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, hsl(38,50%,94%) 0%, hsl(38,40%,92%) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              Our Values
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3" style={{ color: 'hsl(22,68%,18%)' }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center"
              style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}>
              
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(35,62%,46%)/10' }}>
                  <v.icon className="w-6 h-6" style={{ color: 'hsl(35,62%,46%)' }} />
                </div>
                <h3 className="font-heading font-semibold mb-2" style={{ color: 'hsl(22,68%,18%)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(25,15%,45%)' }}>{v.text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}