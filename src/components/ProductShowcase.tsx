import { useState } from 'react';
import { DAIRY_PRODUCTS } from '../data/dairyData';
import { Plus, Minus, ArrowUpRight, Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function ProductShowcase() {
  const { content, t } = useContent();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>({});

  const categories = [
    { id: 'all', labelHi: 'सभी उत्पाद', labelEn: 'All Items' },
    { id: 'milk', labelHi: 'ताज़ा दूध', labelEn: 'Fresh Milk' },
    { id: 'butter', labelHi: 'मक्खन', labelEn: 'Butter' },
    { id: 'dairy', labelHi: 'पनीर व दही', labelEn: 'Dairy Essentials' },
    { id: 'cold-drinks', labelHi: 'कोल्ड ड्रिंक्स', labelEn: 'Cold Drinks' },
    { id: 'beverages', labelHi: 'पेय व एनर्जी ड्रिंक्स', labelEn: 'Beverages' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? DAIRY_PRODUCTS
    : DAIRY_PRODUCTS.filter(p => p.category === activeCategory);

  const updateQuantity = (id: string, delta: number) => {
    setCartQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalItemsInPreview = Object.values(cartQuantities).reduce((a, b) => a + b, 0);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
              {t('दैनिक उत्पाद · Everyday Essentials', 'Daily Essentials · Pure Products')}
            </div>
            <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
              {t('आप क्या-क्या मंगा सकते हैं?', 'What Can You Order?')}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
              {t(
                'ताज़ा दूध, अमूल मक्खन, मलाईदार पनीर से लेकर चिल्ड कोल्ड ड्रिंक्स तक — आपकी स्थानीय दुकान की हर ज़रूरत यहाँ मौजूद है।',
                'From morning farm milk, golden Amul butter, and fresh paneer to chilled soft drinks — all available from your neighborhood dairy.'
              )}
            </p>
          </div>

          <a
            href={content.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1b3f2b] hover:text-[#122e1e] group"
          >
            <span>{t('लाइव ऐप में पूरा स्टॉक देखें', 'Browse Full Live Stock in App')}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Category Filters: Functional buttons adhering to Zero-Pill rule */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max p-1.5 bg-[#f4f1ea] rounded-2xl border border-[#1b3f2b]/10">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`rounded-xl px-4.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#1b3f2b] text-white shadow-dairy-sm'
                      : 'text-[#3f5044] hover:text-[#153322] hover:bg-black/5'
                  }`}
                >
                  <span className="font-hindi">{t(c.labelHi, c.labelEn)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const qty = cartQuantities[p.id] || 0;
            return (
              <div
                key={p.id}
                className="group relative rounded-3xl border border-[#1b3f2b]/12 bg-[#faf8f5] p-5 shadow-dairy-sm transition-all duration-200 hover:border-[#1b3f2b]/30 hover:shadow-dairy-md flex flex-col justify-between"
              >
                <div>
                  {/* Category text and in-stock indicator */}
                  <div className="flex items-center justify-between text-xs text-[#526357] pb-3 border-b border-[#1b3f2b]/8">
                    <span>{t(p.categoryLabelHi, p.category.toUpperCase())}</span>
                    <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>{t('स्टॉक में उपलब्ध', 'In Stock')}</span>
                    </span>
                  </div>

                  {/* Product Title and Pack Info */}
                  <div className="mt-4">
                    <h3 className="font-hindi text-xl font-bold text-[#153322]">
                      {t(p.nameHi, p.name)}
                    </h3>
                    <div className="text-xs font-semibold text-gray-500 font-mono">
                      {p.name} · {p.volume}
                    </div>
                    <p className="font-hindi text-xs text-[#4c5c51] mt-2 line-clamp-2 leading-relaxed">
                      {t(p.descriptionHi, `Fresh ${p.name} delivered carefully from your nearby store.`)}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Price & Interactive Quantity Counter */}
                <div className="mt-6 pt-3 border-t border-[#1b3f2b]/8 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-gray-400">{t('दुकान का दाम', 'Store Price')}</div>
                    <div className="font-mono text-xl font-extrabold text-[#153322]">
                      ₹{p.price}
                    </div>
                  </div>

                  {/* Quantity adjustment controls */}
                  <div className="flex items-center gap-2 bg-white rounded-xl p-1 border border-gray-200 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => updateQuantity(p.id, -1)}
                      disabled={qty === 0}
                      className="h-7 w-7 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-5 text-center font-mono font-bold text-xs text-gray-900">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(p.id, 1)}
                      className="h-7 w-7 rounded-lg flex items-center justify-center bg-[#1b3f2b] text-white hover:bg-[#122e1e]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Sample Cart Summary Notification */}
        {totalItemsInPreview > 0 && (
          <div className="mt-8 rounded-2xl bg-[#153322] p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-dairy-md animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Check className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <div className="font-hindi font-bold text-base">
                  {t(
                    `पूर्वावलोकन: ${totalItemsInPreview} उत्पाद चुने गए`,
                    `Preview: ${totalItemsInPreview} items selected`
                  )}
                </div>
                <div className="text-xs text-emerald-200">
                  {t(
                    'वास्तविक ऑर्डर करने के लिए Apni Dukaan वेब ऐप पर जाएँ',
                    'Open the deployed Apni Dukaan web app to place your order'
                  )}
                </div>
              </div>
            </div>

            <a
              href={content.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#153322] hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {t('Apni Dukaan ऐप में ऑर्डर करें →', 'Order in Apni Dukaan App →')}
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
