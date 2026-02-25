import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Sprout } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Home Gardener",
    content: "The seeds from GreenNest have a 100% germination rate in my garden. Absolutely thrilled!",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Urban Farmer",
    content: "Fast delivery and the packaging is eco-friendly. My go-to shop for all things green.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Plant Enthusiast",
    content: "Beautiful website and even better products. The herbs are thriving on my balcony!",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-sage text-forest text-sm font-bold rounded-full mb-6">
              🌱 100% Organic & Sustainable
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-forest leading-[1.1] mb-8">
              Grow Your Own <span className="text-sage-dark italic">Green Oasis</span>
            </h1>
            <p className="text-lg text-forest/70 mb-10 max-w-lg leading-relaxed">
              Discover a curated collection of premium seeds and gardening essentials designed to bring life to your home and joy to your soul.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-forest text-cream rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-forest/20"
              >
                Shop Seeds <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-white text-forest rounded-2xl font-bold border border-forest/10 hover:bg-mint transition-colors">
                Our Story
              </button>
            </div>
          </motion.div>

          <div className="relative h-[500px] lg:h-[700px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-2/3 h-4/5 rounded-[40px] overflow-hidden shadow-2xl z-0"
            >
              <img
                src="https://picsum.photos/seed/garden1/800/1000"
                alt="Lush Garden"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-1/2 h-3/5 rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-cream"
            >
              <img
                src="https://picsum.photos/seed/garden2/600/800"
                alt="Seedlings"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blush/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-sage/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-mint/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Featured Categories</h2>
            <p className="text-forest/60">Everything you need to start your gardening journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Vegetables", img: "https://picsum.photos/seed/veg/600/800", color: "bg-sage" },
              { title: "Herbs", img: "https://picsum.photos/seed/herbs/600/800", color: "bg-blush" },
              { title: "Flowers", img: "https://picsum.photos/seed/flowers/600/800", color: "bg-mint" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-[32px] overflow-hidden cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-cream mb-2">{cat.title}</h3>
                  <p className="text-cream/70 text-sm mb-4">Explore our premium collection</p>
                  <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-forest group-hover:w-full transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Sprout />, title: "100% Organic", desc: "No harmful chemicals, just pure nature." },
            { icon: <ShieldCheck />, title: "Quality Guaranteed", desc: "Hand-picked and tested for high yield." },
            { icon: <Truck />, title: "Fast Delivery", desc: "Eco-friendly shipping to your doorstep." },
            { icon: <Star />, title: "Expert Support", desc: "Gardening advice from our specialists." }
          ].map((benefit, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-white border border-forest/5 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center text-forest mb-6">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-forest mb-3">{benefit.title}</h4>
              <p className="text-forest/60 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-blush/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">What Our Gardeners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[32px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-forest">{t.name}</h5>
                    <p className="text-xs text-forest/50">{t.role}</p>
                  </div>
                </div>
                <p className="text-forest/70 italic leading-relaxed">"{t.content}"</p>
                <div className="flex gap-1 mt-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-forest rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-cream rounded-full" />
            <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-cream rounded-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">Join the Green Club</h2>
            <p className="text-cream/70 mb-10 max-w-xl mx-auto">
              Get weekly gardening tips, early access to new seed drops, and 10% off your first order.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-cream placeholder:text-cream/40 outline-none focus:bg-white/20 transition-all"
              />
              <button className="px-8 py-4 bg-cream text-forest rounded-2xl font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
