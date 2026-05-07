import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MenuCard from '../components/menu/MenuCard';

const menuCategories = [
  {
    name: 'Starters',
    emoji: '',
    items: [
      { name: 'Cheese & Corn Samosa (4pcs)', description: 'Golden pastry parcels filled with cheese and sweet corn', price: 'R45', vegan: false },
      { name: 'Potato Samosa (4pcs)', description: 'Classic crispy samosas filled with spiced potato', price: 'R45', vegan: true },
      { name: 'Soya Mince Samosa (4pcs)', description: 'Crispy samosas filled with seasoned soya mince', price: 'R45', vegan: true },
      { name: 'Spinach & Paneer Samosa (2pcs)', description: 'Delicate pastry filled with spinach and paneer', price: 'R45', vegan: false },
      { name: 'Punjabi Samosa (2pcs)', description: 'Large Punjabi-style samosas with bold spiced filling', price: 'R40', vegan: true },
      { name: 'Papadams', description: 'Crispy lentil wafers served with chutneys', price: 'R12', vegan: true },
      { name: 'Mixed Veg Springroll (2pcs)', description: 'Golden rolls stuffed with fresh seasoned vegetables', price: 'R40', vegan: true },
      { name: 'Onion Bahji (4pcs)', description: 'Crispy spiced onion fritters', price: 'R45', vegan: true },
      { name: 'Batata Vada (3pcs)', description: 'Spiced potato balls in a crispy chickpea batter', price: 'R30', vegan: true },
    ],
  },
  {
    name: 'Tandoori Starters',
    emoji: '',
    items: [
      { name: 'Paneer Tikka', description: 'Marinated paneer grilled to perfection with tandoori spices', price: 'R95', vegan: false, spicy: true },
      { name: 'Tandoori Gobi', description: 'Whole cauliflower florets marinated in vibrant tandoori masala', price: 'R95', vegan: true, spicy: true },
    ],
  },
  {
    name: 'Durban Heritage Curries',
    emoji: '',
    items: [
      { name: 'Butter Bean Curry', description: 'Slow-simmered butter beans in a rich, aromatic Durban-style gravy', price: 'R120', vegan: true },
      { name: 'Mixed Vegetable Curry', description: 'Seasonal vegetables in a vibrant, bold Durban curry sauce', price: 'R130', vegan: true, spicy: true },
      { name: 'Soy Chicken Curry', description: 'A plant-based twist on a Durban classic', price: 'R135', vegan: true, spicy: true },
    ],
  },
  {
    name: 'Royal North Indian Kitchen',
    emoji: '',
    items: [
      { name: 'Aloo Gobi', description: 'Potato and cauliflower cooked with aromatic spices', price: 'R130', vegan: true },
      { name: 'Mushroom Kadai', description: 'Earthy mushrooms and sweet peas gently simmered in aromatic spices', price: 'R130', vegan: true },
      { name: 'Paneer Kadai', description: 'A truly regal and mild curry experience with paneer', price: 'R130', vegan: false },
      { name: 'Paneer Butter Masala', description: 'Rich, creamy tomato gravy with soft paneer cubes', price: 'R130', vegan: false },
      { name: 'Paneer Tikka Masala', description: 'Grilled paneer in a smoky, spiced masala sauce', price: 'R150', vegan: false, spicy: true },
      { name: 'Soy Butter Chicken', description: 'Signature dish — soya pieces in a deeply flavoured, creamy tomato gravy', price: 'R135', vegan: true },
    ],
  },
  {
    name: 'Southern Coastal Specialities',
    emoji: '',
    items: [
      { name: 'Chicken Chettinad', description: 'Classic Tamil Nadu dish with soya chicken in coconut milk and fiery spices', price: 'R135', vegan: true, spicy: true },
      { name: 'Paneer Chettinad', description: 'Tamil Nadu classic with tender paneer in creamy coconut milk', price: 'R135', vegan: false, spicy: true },
      { name: 'Baigan Ke Salan', description: 'Hyderabadi-style fried aubergines in a nutty coconut and spice sauce', price: 'R130', vegan: true },
    ],
  },
  {
    name: 'Creamed Cashew Kormas',
    emoji: '',
    items: [
      { name: 'Paneer Korma', description: 'Paneer bathed in a lavish, rich and creamy cashew sauce', price: 'R130', vegan: false },
      { name: 'Soya Chicken Korma', description: 'Tender soya chicken in a rich and creamy cashew sauce', price: 'R130', vegan: true },
      { name: 'Vegetable Korma', description: 'Colourful medley of garden-fresh vegetables in a decadent cashew gravy', price: 'R135', vegan: true },
    ],
  },
  {
    name: 'Artisan Indian Breads',
    emoji: '',
    items: [
      { name: 'Plain Naan', description: 'Soft, fluffy oven-baked leavened bread', price: 'R20', vegan: false },
      { name: 'Butter Naan', description: 'Naan brushed generously with butter', price: 'R24', vegan: false },
      { name: 'Garlic Naan', description: 'Naan topped with garlic and coriander', price: 'R28', vegan: false },
      { name: 'Tandoori Roti', description: 'Traditional whole-wheat roti baked in the tandoor', price: 'R30', vegan: true },
      { name: 'Laccha Paratha', description: 'Multi-layered, flaky whole-wheat bread', price: 'R32', vegan: true },
    ],
  },
  {
    name: 'Fragrant Biryani',
    emoji: '',
    items: [
      { name: 'Mixed Vegetable Biryani', description: 'Fragrant basmati rice layered with spiced seasonal vegetables', price: 'R120', vegan: true },
      { name: 'Durban Biryani', description: 'Fragrant Durban-style biryani with whole spices and rich gravy', price: 'R130', vegan: true },
      { name: 'Durban Spiced Soya Chicken Biryani', description: 'Bold Durban biryani with spiced soya chicken', price: 'R135', vegan: true, spicy: true },
      { name: 'Paneer Tikka Biryani', description: 'Aromatic biryani layered with grilled paneer tikka', price: 'R135', vegan: false, spicy: true },
    ],
  },
  {
    name: 'Durban Street Favourites',
    emoji: '',
    items: [
      { name: 'Beans Bunny', description: 'The iconic Durban beans bunny chow', price: 'R90', vegan: true },
      { name: 'Mixed Veg Bunny', description: 'Durban-style bunny chow filled with mixed vegetable curry', price: 'R90', vegan: true },
      { name: 'Soya Chicken Bunny', description: 'Bunny chow filled with our signature soya chicken curry', price: 'R95', vegan: true },
    ],
  },
  {
    name: 'Indian Crafted Drinks',
    emoji: '',
    items: [
      { name: 'Punjabi Sweet Lassi', description: 'Classic yoghurt lassi, lightly sweet and deeply comforting', price: 'R65', vegan: false },
      { name: 'Mango Magic Lassi', description: 'Sun-ripened mango blended into creamy perfection', price: 'R75', vegan: false },
      { name: 'Bombay Crush', description: 'Rich, floral rose milkshake layered with falooda strands', price: 'R75', vegan: false },
    ],
  },
  {
    name: 'Desserts',
    emoji: '',
    items: [
      { name: 'Home Made Sooji', description: 'Warm semolina pudding, gently spiced with cardamom', price: 'R65', vegan: false },
      { name: 'Vegan Chocolate Cake', description: 'Rich, moist chocolate indulgence made entirely plant-based', price: 'R85', vegan: true },
      { name: 'Burfee Ice Cream', description: 'Traditional Indian burfee folded into creamy frozen bliss', price: 'R65', vegan: false },
    ],
  },
];

export default function Menu() {
  const [expandedCategory, setExpandedCategory] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, hsl(38,60%,96%), white)' }}>
      {/* Hero Section */}
      <section className="py-20 sm:py-28" style={{ background: 'hsl(22,68%,18%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              Culinary Excellence
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(38,60%,96%)' }}>
              Our Menu
            </h1>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'hsl(38,30%,72%)' }}>
              Explore our carefully curated collection of traditional Indian dishes with a modern twist
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border-2"
              style={{ borderColor: 'hsl(35,28%,83%)' }}
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between transition-colors"
                style={{
                  background: expandedCategory === index ? 'hsl(35,62%,46%)' : 'hsl(38,60%,96%)',
                  color: expandedCategory === index ? 'white' : 'hsl(22,65%,14%)',
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="font-heading font-bold text-xl">{category.name}</h3>
                </div>
                <ChevronDown
                  className="w-5 h-5 transition-transform"
                  style={{ transform: expandedCategory === index ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>

              {/* Category Items */}
              {expandedCategory === index && (
                <div className="px-6 py-6 space-y-6" style={{ background: 'white', borderTop: '2px solid hsl(35,28%,83%)' }}>
                  {category.items.map((item, itemIndex) => (
                    <MenuCard key={itemIndex} item={item} index={itemIndex} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20" style={{ background: 'hsl(22,68%,18%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(35,62%,46%)' }}>
              Special Events
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mt-3" style={{ color: 'hsl(38,60%,96%)' }}>
              Catering Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'hsl(38,30%,72%)' }}>
              Let Prashad bring the authentic taste of India to your celebration. From intimate gatherings to grand events, our expert team curates the perfect menu tailored to your needs.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Corporate Events', description: 'Professional catering for meetings, conferences and team building' },
                { title: 'Weddings', description: 'Traditional or modern, we celebrate your special day with exquisite cuisine' },
                { title: 'Private Parties', description: 'Customized menus for birthdays, anniversaries and intimate gatherings' }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl"
                  style={{ background: 'hsl(38,40%,97%)', border: '2px solid hsl(35,28%,83%)' }}
                >
                  <h3 className="font-heading font-bold text-xl" style={{ color: 'hsl(22,65%,14%)' }}>
                    {service.title}
                  </h3>
                  <p className="mt-2" style={{ color: 'hsl(25,15%,45%)' }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-12 px-8 py-3 rounded-lg font-heading font-bold text-lg transition-colors"
              style={{ background: 'hsl(35,62%,46%)', color: 'white' }}
              onClick={() => window.open('https://www.prashadcafe.com/catering', '_blank')}
            >
              Learn More About Catering
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}