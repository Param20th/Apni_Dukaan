import { Sliders, Type, Smartphone, Eye, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function CustomerExperience() {
  const { t } = useContent();

  const uxFeatures = [
    {
      titleHi: 'बड़े और स्पष्ट बटन',
      titleEn: 'Large, Accessible Buttons',
      descHi: 'छोटे आइकनों को ढूँढने की ज़रूरत नहीं। हर उम्र के लोगों के लिए आरामदायक बड़े टच बटन।',
      descEn: 'No squinting or tiny text. Generously sized touch targets designed for all ages.',
      icon: Smartphone,
    },
    {
      titleHi: 'हिंदी-प्रथम सरल भाषा',
      titleEn: 'Hindi-First Natural Language',
      descHi: 'कठिन तकनीकी शब्दावली के बिना, सहज और स्वाभाविक हिंदी में हर निर्देश।',
      descEn: 'Natural Devanagari Hindi without technical jargon or awkward robotic phrases.',
      icon: Type,
    },
    {
      titleHi: 'आसान + और − मात्रा नियंत्रण',
      descHi: 'दूध या पेय की संख्या जोड़ना और घटाना केवल एक क्लिक का काम है।',
      descEn: 'Effortless tap-based quantity adjustments with clear live price totals.',
      icon: Sliders,
    },
    {
      titleHi: 'पारदर्शी लाइव स्थिति',
      descHi: 'ऑर्डर कहाँ है — यह जानने के लिए बार-बार कॉल करने की आवश्यकता नहीं।',
      descEn: 'Check whether your order is packed or out for delivery at a single glance.',
      icon: Eye,
    },
    {
      titleHi: 'कम से कम कदम',
      descHi: 'बिना किसी विज्ञापन या अतिरिक्त रुकावट के सीधे कार्ट और ऑर्डर की पुष्टि।',
      descEn: 'Zero intrusive popups, banners, or upsell friction. Pure household convenience.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('यूज़र अनुभव · Designed for Everyday People', 'User Experience · Designed for Everyday People')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('आम परिवारों के लिए, बेहद आसान।', 'Built for Everyday Families.')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'यह ऐप केवल युवाओं या तकनीक के जानकारों के लिए नहीं है। इसे इस तरह तैयार किया गया है कि माता-पिता और घर के बुजुर्ग भी बिना किसी परेशानी के ऑर्डर कर सकें।',
              'Apni Dukaan was designed for real households — simple and intuitive enough for parents and elders to order their morning milk in seconds.'
            )}
          </p>
        </div>

        {/* Feature Grid & Mockup Preview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Feature List */}
          <div className="lg:col-span-7 space-y-4">
            {uxFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-[#1b3f2b]/10 bg-white p-4.5 sm:p-5 shadow-dairy-sm transition-all hover:border-[#1b3f2b]/25 hover:shadow-dairy-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1b3f2b]/10 text-[#1b3f2b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-hindi text-lg font-bold text-[#153322]">
                      {t(f.titleHi, f.titleEn)}
                    </h3>
                    <p className="font-hindi text-sm text-[#44564a] mt-1 leading-relaxed">
                      {t(f.descHi, f.descEn)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[44px] border-[8px] border-[#223328] bg-white p-3 shadow-dairy-3d">
              {/* Dynamic island / speaker */}
              <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-[#1b251f] flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-900 ml-auto mr-2" />
              </div>

              {/* Inside Screen Mockup */}
              <div className="rounded-[28px] bg-[#faf8f5] p-3 text-left border border-gray-100 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <div className="font-hindi font-black text-sm text-[#153322]">Apni Dukaan</div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    {t('दूध व मक्खन', 'Dairy & Drinks')}
                  </span>
                </div>

                {/* Sample Large Accessible Card in Mockup */}
                <div className="rounded-xl bg-white p-3 border border-emerald-900/10 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-hindi text-xs font-bold text-gray-900">
                        {t('ताज़ा फुल क्रीम दूध', 'Full Cream Milk')}
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono">1 Litre · ₹68</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg p-1">
                      <span className="h-6 w-6 rounded bg-white flex items-center justify-center text-xs font-bold text-gray-700 shadow-2xs">-</span>
                      <span className="font-mono text-xs font-bold px-1 text-gray-900">2</span>
                      <span className="h-6 w-6 rounded bg-[#1b3f2b] flex items-center justify-center text-xs font-bold text-white shadow-2xs">+</span>
                    </div>
                  </div>
                </div>

                {/* Second Item in Mockup */}
                <div className="rounded-xl bg-white p-3 border border-amber-900/10 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-hindi text-xs font-bold text-gray-900">
                        {t('अमूल बटर (100g)', 'Amul Butter (100g)')}
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono">₹60</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg p-1">
                      <span className="h-6 w-6 rounded bg-white flex items-center justify-center text-xs font-bold text-gray-700 shadow-2xs">-</span>
                      <span className="font-mono text-xs font-bold px-1 text-gray-900">1</span>
                      <span className="h-6 w-6 rounded bg-[#1b3f2b] flex items-center justify-center text-xs font-bold text-white shadow-2xs">+</span>
                    </div>
                  </div>
                </div>

                {/* Big Order Button in Mockup */}
                <div className="pt-2">
                  <div className="rounded-xl bg-[#1b3f2b] p-3 text-center text-white shadow-sm font-hindi font-bold text-xs">
                    {t('ऑर्डर करें (कुल: ₹196) →', 'Confirm Order (Total: ₹196) →')}
                  </div>
                </div>

                <div className="text-center text-[10px] text-gray-400">
                  {t('सीधे नज़दीकी डेयरी को भेजा जाएगा', 'Sent directly to your neighborhood dairy')}
                </div>

              </div>

              {/* Bottom bar */}
              <div className="py-2 flex justify-center">
                <div className="h-1 w-24 rounded-full bg-gray-300" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
