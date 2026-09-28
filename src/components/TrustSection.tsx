import { ShieldCheck, HeartHandshake, Eye, Sparkles, MessageCircle, Store, Users } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function TrustSection() {
  const { t } = useContent();

  const trustPoints = [
    {
      titleHi: 'लोकल-फर्स्ट विचारधारा',
      titleEn: 'Local-First Concept',
      descHi: 'आपके इलाके की अपनी दुकान से सीधा जुड़ाव। कोई दूर की अज्ञात वेयरहाउस प्रणाली नहीं।',
      descEn: 'Direct connection to your neighborhood storefront. No remote anonymous dark-stores.',
      icon: Store,
    },
    {
      titleHi: 'पारदर्शी और स्पष्ट नीतियाँ',
      descHi: 'कीमत, डिलीवरी समय और रद्दीकरण के सभी नियम पूरी तरह साफ और पहले से प्रदर्शित।',
      descEn: 'Transparent pricing, honest dispatch windows, and clear cancellation rules upfront.',
      icon: ShieldCheck,
    },
    {
      titleHi: 'बेहद सरल ऑर्डर प्रक्रिया',
      descHi: 'बिना जटिल पासवर्ड या उलझन भरी सेटिंग्स के, हर उम्र के व्यक्ति के लिए सहज।',
      descEn: 'Simple interface designed so parents and elders can order morning dairy with confidence.',
      icon: Sparkles,
    },
    {
      titleHi: 'लाइव ऑर्डर स्थिति की स्पष्टता',
      descHi: 'ऑर्डर कब स्वीकार हुआ, कब पैक हुआ और कब निकला — सब कुछ स्क्रीन पर दिखता है।',
      descEn: 'Instant progression feedback: Received → Confirmed → Dispatched → Delivered.',
      icon: Eye,
    },
    {
      titleHi: 'दुकानदार से सीधा संपर्क',
      descHi: 'किसी चैटबॉट से लड़ने की जरूरत नहीं। व्हाट्सएप या फोन से सीधे अपनी दुकान से बात करें।',
      icon: MessageCircle,
    },
    {
      titleHi: 'मालिक द्वारा स्वयं प्रबंधित स्टॉक',
      descHi: 'सामान की ताज़गी और गुणवत्ता सीधे डेयरी मालिक की निगरानी में रहती है।',
      descEn: 'Fresh daily dairy supplies inspected and handled directly by the store proprietor.',
      icon: HeartHandshake,
    },
    {
      titleHi: 'दैनिक परिवारों के लिए समर्पित',
      descHi: 'रोज़ की सुबह की चाय से लेकर मेहमानों के लिए ठंडी ड्रिंक्स तक की संपूर्ण व्यवस्था।',
      descEn: 'Catering to actual daily household needs: regular tea milk, breakfast butter, party cold drinks.',
      icon: Users,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('हमारा संकल्प · Trust Principles', 'Our Commitment · Grounded Trust')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('विश्वास, जो वादों से नहीं, व्यवस्था से आता है', 'Trust Built on Simplicity, Not Artificial Claims')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'हम झूठे अवार्ड्स, कृत्रिम रेटिंग्स या फर्जी रिव्यूज़ का दिखावा नहीं करते। हमारा भरोसा इन 7 बुनियादी सिद्धांतों पर टिका है:',
              'No fabricated awards or invented 5-star testimonials. Apni Dukaan is built entirely on these 7 practical local principles:'
            )}
          </p>
        </div>

        {/* 7 Trust Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trustPoints.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-[#1b3f2b]/12 bg-white p-6 shadow-dairy-sm transition-all hover:border-[#1b3f2b]/30 hover:shadow-dairy-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1b3f2b]/10 text-[#1b3f2b] mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-hindi text-lg font-bold text-[#153322]">
                    {t(tp.titleHi, tp.titleEn)}
                  </h3>
                  <div className="text-[11px] font-mono text-gray-400 mt-0.5">
                    {tp.titleEn}
                  </div>
                  <p className="font-hindi text-xs sm:text-sm text-[#44564a] mt-2.5 leading-relaxed">
                    {t(tp.descHi, tp.descEn)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <span>✓ {t('प्रमाणित सिद्धांत', 'Core Standard')}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
