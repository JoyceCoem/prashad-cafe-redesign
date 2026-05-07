import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, ExternalLink } from 'lucide-react';

const galleryImages = [
  'https://static.wixstatic.com/media/a73843_59c53c64a3514ee5a7225e7554585a57~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_5972e5de67bd46c9bcd565862c9dbb49~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_738316fba5b648b495e7dd854fd112ea~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_26b34f45568347608fd85a899f46abbc~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_eee560ff8ebb4eef88deb592213a8f13~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_a9b082cbc4c54ad4acb3300dbd91e9b6~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_7d6f7550eb4f41e784f322180b501964~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_d4d80a6e1ce94615814e6ec4bc97eec6~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_2796f09edb504abca84da5be69e67ec7~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_c9517eeb567d4f32ae1bd2029ab9cca6~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_b5fed9d2049b495592633a518dfde80d~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_d91843c8783646fb859a11aaf40a5ff4~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_495bd6f079f440cdbe91fa1f079cfece~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_5e7a18af7b7744598374702ccb33e3f4~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_9bd94a6ec5334547a7ec8e71e397b260~mv2.jpg',
  'https://static.wixstatic.com/media/a73843_a2a795ec34e443518509627d800cd347~mv2.jpg',
  'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/e36018ba8_generated_ab7ebd4e.png',
  'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/44299b9bd_generated_dfc375cd.png',
  'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/23a4a9e3d_generated_6933baaf.png',
  'https://media.base44.com/images/public/69c11c2adc8bda812ecc5fb1/a2d8e2474_generated_25751fa5.png',
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: 'white' }}>
      <section className="py-20 sm:py-28" style={{ background: 'hsl(22,68%,18%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              Our Story in Pictures
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(38,60%,96%)' }}>
              Gallery
            </h1>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'hsl(38,30%,72%)' }}>
              A glimpse into our food, spaces and the people who make Prashad special.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Prashad gallery ${i + 1}`}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media & More Gallery Section */}
      <section className="py-20" style={{ background: 'hsl(38,50%,94%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: 'hsl(22,68%,18%)' }}>See More on Social Media</h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: 'hsl(25,15%,45%)' }}>
              Follow us for daily updates, behind-the-scenes content, and location photos!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.instagram.com/prashadcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-8 hover:shadow-lg transition-shadow"
                style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}
              >
                <Instagram className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(35,62%,46%)' }} />
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'hsl(22,68%,18%)' }}>Instagram</h3>
                <p className="mb-4" style={{ color: 'hsl(35,62%,46%)' }}>@prashadcafe</p>
                <p className="text-sm mb-4" style={{ color: 'hsl(25,15%,45%)' }}>
                  Photos, videos, location updates & specials
                </p>
                <span className="inline-flex items-center gap-2 font-semibold" style={{ color: 'hsl(35,62%,46%)' }}>
                  Follow Us <ExternalLink className="w-4 h-4" />
                </span>
              </motion.a>

              {/* Bing Image Search */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.bing.com/images/search?q=prashadcafe+image&form=HDRSC3&first=1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-8 hover:shadow-lg transition-shadow"
                style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-2xl" style={{ background: 'hsl(35,62%,46%)', color: 'white' }}>
                  🔍
                </div>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'hsl(22,68%,18%)' }}>More Images</h3>
                <p className="mb-4" style={{ color: 'hsl(35,62%,46%)' }}>Bing Search</p>
                <p className="text-sm mb-4" style={{ color: 'hsl(25,15%,45%)' }}>
                  Browse more food photos and location pictures
                </p>
                <span className="inline-flex items-center gap-2 font-semibold" style={{ color: 'hsl(35,62%,46%)' }}>
                  Explore <ExternalLink className="w-4 h-4" />
                </span>
              </motion.a>

              {/* Full Gallery */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.prashadcafe.com/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-8 hover:shadow-lg transition-shadow"
                style={{ background: 'white', border: '2px solid hsl(35,28%,83%)' }}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-2xl" style={{ background: 'hsl(35,62%,46%)', color: 'white' }}>
                  📸
                </div>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'hsl(22,68%,18%)' }}>Website Gallery</h3>
                <p className="mb-4" style={{ color: 'hsl(35,62%,46%)' }}>Prashadcafe.com</p>
                <p className="text-sm mb-4" style={{ color: 'hsl(25,15%,45%)' }}>
                  Complete gallery with all our amazing content
                </p>
                <span className="inline-flex items-center gap-2 font-semibold" style={{ color: 'hsl(35,62%,46%)' }}>
                  Visit <ExternalLink className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-white p-2" onClick={() => setSelected(null)}>
              <X className="w-6 h-6" />
            </button>
            <img src={selected} alt="Gallery" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
