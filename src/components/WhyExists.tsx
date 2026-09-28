import { Store, Plus, Smartphone, Equal, HeartHandshake, CheckCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function WhyExists() {
  const { content, t } = useContent();

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('मूल दर्शन · Business Philosophy', 'Core Philosophy · Local Commerce')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t(content.whyTitleHi, content.whyTitleEn)}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(content.whyDescHi, content.whyDescEn)}
          </p>
        </div>

        {/* Visual Formula: Local Dairy + Digital Ordering = Apni Dukaan */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4">
            
            {/* Component 1: Local Dairy */}
            <div className="md:col-span-3 rounded-3xl border border-[#1b3f2b]/15 bg-[#faf8f5] p-6 text-center shadow-dairy-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b3f2b]/10 text-[#1b3f2b]">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="font-hindi text-xl font-bold text-[#153322]">
                {t('नज़दीकी स्थानीय डेयरी', 'Local Dairy Shop')}
              </h3>
              <p className="mt-1 text-xs text-[#526357]">Neighborhood Storefront</p>
              <ul className="mt-4 space-y-2 text-left text-xs text-[#394a3e]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('सालों पुराना मोहल्ले का विश्वास', 'Decades of local trust')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('दैनिक ताज़ा दूध व मक्खन', 'Fresh milk & dairy arrival')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('घर से कुछ ही कदमों की दूरी', 'Steps from customer homes')}</span>
                </li>
              </ul>
            </div>

            {/* Operator 1: PLUS */}
            <div className="md:col-span-1 flex justify-center py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b3f2b] text-white shadow-sm font-bold">
                <Plus className="h-5 w-5" />
              </div>
            </div>

            {/* Component 2: Simple Digital Ordering */}
            <div className="md:col-span-3 rounded-3xl border border-[#1b3f2b]/15 bg-[#faf8f5] p-6 text-center shadow-dairy-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b3f2b]/10 text-[#1b3f2b]">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="font-hindi text-xl font-bold text-[#153322]">
                {t('सरल डिजिटल ऑर्डर', 'Simple Digital Ordering')}
              </h3>
              <p className="mt-1 text-xs text-[#526357]">Lightweight Web Experience</p>
              <ul className="mt-4 space-y-2 text-left text-xs text-[#394a3e]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('1 मिनट में मोबाइल से ऑर्डर', 'Order on phone in 60s')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('दुकानदार को लाइव सूचना', 'Instant merchant chime')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#205234] shrink-0" />
                  <span>{t('पारदर्शी स्थिति और बिलिंग', 'No hidden markups or fees')}</span>
                </li>
              </ul>
            </div>

            {/* Operator 2: EQUALS */}
            <div className="md:col-span-1 flex justify-center py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b3f2b] text-white shadow-sm font-bold">
                <Equal className="h-5 w-5" />
              </div>
            </div>

            {/* Result: Apni Dukaan */}
            <div className="md:col-span-3 rounded-3xl border-2 border-[#1b3f2b] bg-[#153322] p-6 text-center text-white shadow-dairy-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                <HeartHandshake className="h-8 w-8 text-emerald-300" />
              </div>
              <h3 className="font-hindi text-2xl font-black text-white">
                Apni Dukaan
              </h3>
              <p className="mt-1 text-xs text-emerald-200 font-hindi font-bold">
                {content.brandPhrase}
              </p>
              <div className="mt-4 rounded-xl bg-white/10 p-3 text-xs leading-relaxed text-emerald-50 font-hindi">
                {t(
                  'पड़ोस की भरोसेमंद दुकान अब आपके स्मार्टफोन में। बिना किसी बिचौलिए के सीधा, सहज और विश्वसनीय संबंध।',
                  'Your trusted neighborhood store now inside your phone. Direct, human, and dependable local commerce.'
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
