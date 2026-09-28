import { useState } from 'react';
import { Check, Clock, Bike, Home, PackageCheck } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function OrderTracking() {
  const { t } = useContent();
  const [currentStage, setCurrentStage] = useState<number>(2);

  const stages = [
    {
      id: 0,
      titleHi: 'ऑर्डर प्राप्त हुआ',
      titleEn: 'Order Received',
      time: '08:10 AM',
      descHi: 'दुकानदार को सूचना मिल गई है। स्टॉक की जांच की जा रही है।',
      descEn: 'Store received notification and verified fresh inventory.',
      icon: Clock,
    },
    {
      id: 1,
      titleHi: 'पुष्टि हो गई',
      titleEn: 'Confirmed & Packed',
      time: '08:14 AM',
      descHi: 'ताज़ा दूध और मक्खन सुरक्षित बैग में पैक कर दिए गए हैं।',
      descEn: 'Milk packets and chilled drinks packed safely.',
      icon: PackageCheck,
    },
    {
      id: 2,
      titleHi: 'डिलीवरी के लिए निकला',
      titleEn: 'Out for Delivery',
      time: '08:22 AM',
      descHi: 'दुकान का परिचित साथी आपके पते की ओर निकल चुका है।',
      descEn: 'Local shop staff dispatched towards your address.',
      icon: Bike,
    },
    {
      id: 3,
      titleHi: 'सफलतापूर्वक पहुँचा',
      titleEn: 'Delivered',
      time: '08:31 AM',
      descHi: 'सामान आपके हाथ में पहुँच चुका है। आपका धन्यवाद!',
      descEn: 'Order received at your doorstep. Fresh & verified.',
      icon: Home,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('लाइव स्थिति · Real-time Visibility', 'Live Status · Real-time Visibility')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('“मेरा ऑर्डर अभी कहाँ है?”', '“Where is my order right now?”')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'कॉल पर पूछने की आवश्यकता नहीं कि "भैया कब तक आएगा?"। ऐप में बिना किसी जटिलता के साफ़ और पारदर्शी तरीके से हर चरण दिखाई देता है।',
              'No need to make awkward phone calls asking if someone has left with your milk. Clear visual progression keeps you informed.'
            )}
          </p>
        </div>

        {/* Interactive Order Card Tracker */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-[#1b3f2b]/15 bg-[#faf8f5] p-6 sm:p-10 shadow-dairy-md">
          
          {/* Card Top: Order Summary */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1b3f2b]/10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2d6342]">
                {t('सजीव ट्रैकिंग उदाहरण', 'Live Tracking Simulation')}
              </div>
              <h3 className="font-mono text-2xl font-black text-[#153322]">
                Order #1048
              </h3>
              <div className="text-xs text-[#526357] mt-0.5">
                {t('नज़दीकी अपनी दुकान (वार्ड 14) · पता: मकान नं. 42', 'Nearby Apni Dukaan (Ward 14) · Address: House #42')}
              </div>
            </div>

            {/* Stage selector */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-gray-200">
              <span className="text-[11px] font-bold text-gray-400 px-2">
                {t('स्टेज चुनें:', 'Stage:')}
              </span>
              {[0, 1, 2, 3].map((stepIdx) => (
                <button
                  key={stepIdx}
                  type="button"
                  onClick={() => setCurrentStage(stepIdx)}
                  className={`h-7 px-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    currentStage === stepIdx
                      ? 'bg-[#1b3f2b] text-white shadow-2xs'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {stepIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Timeline Nodes */}
          <div className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {stages.map((stg) => {
                const isPassed = currentStage > stg.id;
                const isCurrent = currentStage === stg.id;
                const Icon = stg.icon;

                return (
                  <div
                    key={stg.id}
                    onClick={() => setCurrentStage(stg.id)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                      isCurrent
                        ? 'border-[#1b3f2b] bg-white ring-2 ring-[#1b3f2b]/20 shadow-dairy-sm'
                        : isPassed
                        ? 'border-emerald-200 bg-emerald-50/50'
                        : 'border-gray-200 bg-white/60 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        isCurrent
                          ? 'bg-[#1b3f2b] text-white'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {isPassed ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                      </div>
                      <span className="font-mono text-xs font-semibold text-gray-500">
                        {stg.time}
                      </span>
                    </div>

                    <div className="font-hindi text-base font-bold text-[#153322]">
                      {t(stg.titleHi, stg.titleEn)}
                    </div>
                    <div className="text-[11px] font-mono text-gray-500">
                      {stg.titleEn}
                    </div>

                    <p className="font-hindi text-xs text-[#44564a] mt-2 line-clamp-2 leading-relaxed">
                      {t(stg.descHi, stg.descEn)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Status Banner */}
          <div className="rounded-2xl bg-white p-4 border border-[#1b3f2b]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-600 animate-ping" />
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t('वर्तमान स्थिति:', 'Current Stage:')}
                </span>
                <div className="font-hindi text-base font-bold text-[#153322]">
                  {t(stages[currentStage].titleHi, stages[currentStage].titleEn)}
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              {t('अनुमानित आगमन:', 'Estimated Time:')}{' '}
              <span className="font-mono font-bold text-gray-900">
                {t('लगभग 10-15 मिनट', '~10-15 minutes')}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
