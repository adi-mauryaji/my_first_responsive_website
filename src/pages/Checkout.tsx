import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, CheckCircle, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-12 rounded-[48px] text-center"
        >
          <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center text-forest mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-3xl font-bold text-forest mb-4">Order Confirmed!</h1>
          <p className="text-forest/60 mb-10 leading-relaxed">
            Thank you for choosing GreenNest. Your seeds are being prepared for their journey to your garden.
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-4 bg-forest text-cream rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/shop" className="p-2 hover:bg-forest/5 rounded-full transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-4xl font-bold text-forest">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center gap-4 mb-8">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    step >= s ? 'bg-forest text-cream' : 'bg-white text-forest/20 border border-forest/10'
                  }`}>
                    {s}
                  </div>
                  <span className={`text-sm font-medium ${step >= s ? 'text-forest' : 'text-forest/20'}`}>
                    {s === 1 ? 'Shipping' : 'Payment'}
                  </span>
                  {s === 1 && <div className="w-12 h-px bg-forest/10 mx-2" />}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-forest/5 shadow-sm">
              {step === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="text-forest" />
                    <h2 className="text-xl font-bold text-forest">Shipping Details</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-forest/60">First Name</label>
                      <input type="text" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-forest/60">Last Name</label>
                      <input type="text" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-forest/60">Address</label>
                    <input type="text" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-2">
                      <label className="text-sm font-medium text-forest/60">City</label>
                      <input type="text" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-forest/60">Zip Code</label>
                      <input type="text" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-forest text-cream font-bold rounded-2xl hover:opacity-90 transition-opacity mt-4"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handlePayment}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <CreditCard className="text-forest" />
                      <h2 className="text-xl font-bold text-forest">Payment Method</h2>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-forest/5 rounded border border-forest/10" />
                      <div className="w-10 h-6 bg-forest/5 rounded border border-forest/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-forest/60">Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                      <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-forest/20" size={16} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-forest/60">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-forest/60">CVV</label>
                      <input type="text" placeholder="***" className="w-full bg-mint/30 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sage" />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-4 bg-white text-forest font-bold rounded-2xl border border-forest/10 hover:bg-mint transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      disabled={isProcessing}
                      className="flex-1 py-4 bg-forest text-cream font-bold rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Pay $${(totalPrice + 5.99).toFixed(2)}`
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] p-8 border border-forest/5 shadow-sm sticky top-32">
              <h2 className="text-xl font-bold text-forest mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-forest text-sm">{item.name}</h4>
                        <span className="font-bold text-forest text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-forest/50">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                {cart.length === 0 && (
                  <p className="text-forest/40 text-center py-8 italic">Your cart is empty</p>
                )}
              </div>

              <div className="space-y-4 pt-6 border-t border-forest/10">
                <div className="flex justify-between text-sm text-forest/60">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-forest/60">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between text-sm text-forest/60">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="pt-4 flex justify-between text-xl font-bold text-forest">
                  <span>Total</span>
                  <span>${(totalPrice + (cart.length > 0 ? 5.99 : 0)).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Promo code" 
                    className="flex-1 bg-mint/30 border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sage"
                  />
                  <button className="px-4 py-3 bg-sage text-forest font-bold rounded-xl text-sm hover:bg-forest hover:text-cream transition-all">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
