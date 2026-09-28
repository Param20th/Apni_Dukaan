import { useState } from 'react';
import { Plus, Minus, Users, Coffee, Check, AlertCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function RecurringMilkSection() {
  const { t } = useContent();
  const [milkQuantity, setMilkQuantity] = useState(1);
  const [guestScenario, setGuestScenario] = useState(false);

  const handleToggleGuests = () => {
    if (!guestScenario) {
      setGuestScenario(true);
      setMilkQuantity(3);
    } else {
      setGuestScenario(false);
      setMilkQuantity(1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('दैनिक व्यवस्था · Household Peace of Mind', 'Daily Routine · Household Peace of Mind')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('रोज़ का दूध, रोज़ की चिंता नहीं।', 'Daily Milk, Without Daily Worries.')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'हर सुबह दूध वाले का इंतज़ार करना या शाम को अचानक दूध कम पड़ने की उलझन को अलविदा कहें। अपनी नज़दीकी दुकान से हर दिन का ताज़ा दूध मंगाना अब एक सहज दिनचर्या बन जाता है।',
              'Say goodbye to waiting by the door or panicking when the milk runs out before evening tea. Getting fresh dairy from your nearby shop becomes second nature.'
            )}
          </p>
        </div>

        {/* Interactive Household Scenario Showcase */}
        <div className="mt-12 rounded-3xl border border-[#1b3f2b]/15 bg-[#faf8f5] p-6 sm:p-10 shadow-dairy-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Real Life Story & Guest button */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl bg-white p-5 border border-[#1b3f2b]/10 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#215135]">
                  <Coffee className="h-4 w-4 text-[#215135]" />
                  <span>{t('दैनिक घरेलू स्थिति', 'Everyday Household Scenario')}</span>
                </div>
                <h3 className="font-hindi text-2xl font-bold text-[#153322] mt-2">
                  {t('“अरे, शाम को मेहमान आ गए?”', '“Guests arrived unexpectedly?”')}
                </h3>
                <p className="font-hindi text-sm sm:text-base text-[#415247] mt-2 leading-relaxed">
                  {t(
                    'घर में रिश्तेदार या मेहमान आ गए और चाय के लिए अतिरिक्त दूध चाहिए? आपको बाज़ार जाने या किसी से बार-बार कहने की ज़रूरत नहीं है। बस ऐप में मात्रा को 1 से 3 लीटर करें और तुरंत अतिरिक्त ऑर्डर भेजें।',
                    'Relatives dropped by and you need extra milk for tea and sweets? No need to leave your guests or dial multiple busy numbers. Simply bump the quantity from 1L to 3L in the app.'
                  )}
                </p>

                {/* Scenario Toggle Button */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#526357]">
                    {t('सिमुलेशन आज़माएँ:', 'Try Simulation:')}
                  </div>
                  <button
                    type="button"
                    onClick={handleToggleGuests}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      guestScenario
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-[#1b3f2b]/10 text-[#1b3f2b] hover:bg-[#1b3f2b]/20'
                    }`}
                  >
                    <Users className="h-4 w-4" />
                    <span>
                      {guestScenario 
                        ? t('मेहमान मोड सक्रिय (3L)', 'Guests Mode Active (3L)') 
                        : t('“मेहमान आ गए” बटन दबाएँ', 'Tap "Guests Arrived" Scenario')}
                    </span>
                  </button>
                </div>
              </div>

              {/* Status Note on Automation */}
              <div className="flex items-start gap-3 rounded-2xl bg-[#edf3ef] p-4 text-xs text-[#293d31] border border-[#1b3f2b]/15">
                <AlertCircle className="h-4 w-4 text-[#205234] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{t('पारदर्शिता नोट:', 'Transparency Note:')}</span>{' '}
                  {t(
                    'वर्तमान में आप रोज़ाना आसानी से अपनी आवश्यकतानुसार तुरंत ऑर्डर कर सकते हैं। स्वचालित आवर्ती शेड्यूलिंग फीचर पर विकास जारी है और इसे जल्द ही लाया जा रहा है।',
                    'Currently you can place daily on-demand orders effortlessly. An automated recurring scheduling feature is in active development and planned for an upcoming update.'
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quantity Stepper Mockup */}
            <div className="lg:col-span-6 rounded-2xl bg-white p-6 sm:p-8 border border-[#1b3f2b]/10 shadow-sm text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('मात्रा समायोजन पूर्वावलोकन', 'Quantity Adjustment Preview')}
              </div>

              <div className="font-hindi text-lg font-bold text-[#153322]">
                {t('फुल क्रीम ताज़ा दूध', 'Full Cream Fresh Milk')}
              </div>
              <div className="text-xs text-[#526357]">
                {t('दुकान की ताज़ा आपूर्ति', 'Fresh store supply')}
              </div>

              {/* Stepper Control */}
              <div className="my-6 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => setMilkQuantity(Math.max(1, milkQuantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-800 transition-colors hover:bg-gray-200 active:scale-95"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-5 w-5" />
                </button>

                <div className="w-24 text-center">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-[#153322]">
                    {milkQuantity}
                  </span>
                  <div className="font-hindi text-xs font-bold text-gray-500 mt-1">
                    {t('लीटर दूध', 'Litres')}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMilkQuantity(milkQuantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1b3f2b] text-white transition-colors hover:bg-[#122e1e] active:scale-95 shadow-sm"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {/* Price Calculation */}
              <div className="rounded-xl bg-[#faf8f5] p-3 text-xs font-semibold text-[#2c3d31] flex items-center justify-between border border-[#1b3f2b]/8">
                <span>{t('कुल अनुमानित मूल्य (₹68/L):', 'Estimated Total (₹68/L):')}</span>
                <span className="font-mono font-black text-base text-[#153322]">
                  ₹{milkQuantity * 68}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#205234] font-medium">
                <Check className="h-4 w-4" />
                <span>
                  {t('1 टैप में दुकानदार को नया परिमाण प्राप्त हो जाता है', 'Updated order chimes on the shopkeeper dashboard instantly')}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
