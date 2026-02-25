import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

const products: Product[] = [
  { id: 1, name: "Heirloom Tomato", price: 4.99, category: "Vegetables", image: "https://picsum.photos/seed/tomato/400/400", description: "Rich, sweet flavor and high yield." },
  { id: 2, name: "Organic Basil", price: 3.50, category: "Herbs", image: "https://picsum.photos/seed/basil/400/400", description: "Aromatic leaves perfect for pesto." },
  { id: 3, name: "Wildflower Mix", price: 6.99, category: "Flowers", image: "https://picsum.photos/seed/wildflower/400/400", description: "Attracts bees and butterflies." },
  { id: 4, name: "Sweet Bell Pepper", price: 4.50, category: "Vegetables", image: "https://picsum.photos/seed/pepper/400/400", description: "Crunchy and colorful garden staple." },
  { id: 5, name: "Lavender", price: 5.99, category: "Flowers", image: "https://picsum.photos/seed/lavender/400/400", description: "Calming scent and beautiful purple blooms." },
  { id: 6, name: "Peppermint", price: 3.99, category: "Herbs", image: "https://picsum.photos/seed/mint/400/400", description: "Refreshing herb for teas and cooking." },
  { id: 7, name: "Sunflowers", price: 4.25, category: "Flowers", image: "https://picsum.photos/seed/sunflower/400/400", description: "Towering giants that follow the sun." },
  { id: 8, name: "Baby Spinach", price: 3.75, category: "Vegetables", image: "https://picsum.photos/seed/spinach/400/400", description: "Nutrient-dense greens for salads." },
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart, setIsCartOpen } = useCart();

  const categories = ["All", "Vegetables", "Herbs", "Flowers"];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-forest mb-4">Shop Seeds</h1>
            <p className="text-forest/60">Find the perfect seeds for your garden.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40" size={18} />
              <input
                type="text"
                placeholder="Search seeds..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-forest/10 rounded-2xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-sage transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-forest text-cream shadow-lg shadow-forest/20' 
                    : 'bg-white text-forest/60 border border-forest/5 hover:bg-mint'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-forest/5 shadow-sm hover:shadow-2xl transition-all duration-500 perspective-1000"
              >
                <div className="relative h-64 overflow-hidden preserve-3d">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-forest text-xs font-bold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-forest">{product.name}</h3>
                    <span className="text-lg font-bold text-forest">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-forest/60 mb-6 line-clamp-2">{product.description}</p>
                  <button
                    onClick={() => {
                      addToCart(product);
                      setIsCartOpen(true);
                    }}
                    className="w-full py-3 bg-sage text-forest font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-forest hover:text-cream transition-all duration-300"
                  >
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
