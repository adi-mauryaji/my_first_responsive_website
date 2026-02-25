import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-forest p-2 rounded-xl">
              <Leaf className="text-cream w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-forest">GreenNest</span>
          </div>
          <p className="text-forest/70 leading-relaxed">
            Nurturing your home with the finest organic seeds and sustainable gardening essentials.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/adi_mauryaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white rounded-full hover:bg-forest hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-forest hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-forest hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-forest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-forest/70">
            <li><Link to="/" className="hover:text-forest transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-forest transition-colors">Shop Seeds</Link></li>
            <li><Link to="/checkout" className="hover:text-forest transition-colors">Checkout</Link></li>
            <li><a href="#" className="hover:text-forest transition-colors">Our Story</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-forest mb-6">Categories</h4>
          <ul className="space-y-4 text-forest/70">
            <li><a href="#" className="hover:text-forest transition-colors">Vegetables</a></li>
            <li><a href="#" className="hover:text-forest transition-colors">Herbs</a></li>
            <li><a href="#" className="hover:text-forest transition-colors">Flowers</a></li>
            <li><a href="#" className="hover:text-forest transition-colors">Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-forest mb-6">Newsletter</h4>
          <p className="text-forest/70 mb-4">Join our community for gardening tips and exclusive offers.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-forest outline-none"
            />
            <button className="bg-forest text-cream p-2 rounded-xl hover:opacity-90 transition-opacity">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-forest/10 text-center text-forest/50 text-sm">
        © {new Date().getFullYear()} GreenNest. All rights reserved aditya maurya. Made with love for nature.
      </div>
    </footer>
  );
}
