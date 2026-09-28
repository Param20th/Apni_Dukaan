import { useState } from 'react';
import { Footprints, PhoneCall, MessageSquare, Brain, Clock, Smartphone, CheckSquare, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function ProblemSection() {
  const { content, t } = useContent();
  const [activeTab, setActiveTab] = useState<'traditional' | 'apni-dairy'>('apni-dairy');

  const traditionalSteps = [
    { 
      icon: Footprints, 
      titleHi: 'पैदल जाना', 
      titleEn: 'Walking in Rain or Heat',
      descHi: 'गर्मी या बारिश में 200-300 मीटर चलकर दुकान तक जाना',
      descEn: 'Walking 200-300m in peak sun or rain just for a packet of milk or soda'
    },
    { 
      icon: PhoneCall, 
      titleHi: 'कॉल मिलाना', 
      titleEn: 'Repeated Phone Calls',
      descHi: 'व्यस्त नंबर पर बार-बार घंटी बजाना और दुकानदार की आवाज न सुन पाना',
      descEn: 'Calling an engaged mobile number while the shopkeeper is busy serving walk-ins'
    },
    { 
      icon: MessageSquare, 
      titleHi: 'अधूरे मैसेज', 
      titleEn: 'Lost Text Messages',
      descHi: 'व्हाट्सएप पर टेक्स्ट भेजना जो भीड़ में खो जाते हैं या देर से पढ़े जाते हैं',
      descEn: 'Sending informal WhatsApp messages that get buried under customer chats'
    },
    { 
      icon: Brain, 
      titleHi: 'याद रखने का तनाव', 
      titleEn: 'Remembering Daily Needs',
      descHi: 'शाम का दूध, मक्खन या ठंडी बोतल याद रखने की रोज़ की परेशानी',
      descEn: 'Constantly tracking whether milk is in the fridge or who will go fetch butter'
    },
    { 
      icon: Clock, 
      titleHi: 'अनिश्चित इंतज़ार', 
      titleEn: 'Uncertain Availability',
      descHi: 'पता नहीं दुकान में दूध बचा है या नहीं, या लड़का कब डिलीवरी लेकर निकलेगा',
      descEn: 'Uncertainty over whether stock is fresh or when someone will drop it off'
    },
  ];

  const apniDairySteps = [
    { 
      icon: Smartphone, 
      titleHi: 'एक टैप में खोलें', 
      titleEn: 'Instant 1-Tap Access',
      descHi: 'फोन में सीधे अपनी नज़दीकी दुकान की ताज़ा सूची देखें',
      descEn: 'Open your mobile screen and instantly see available fresh stock'
    },
    { 
      icon: CheckSquare, 
      titleHi: 'सीधा चयन (+ / −)', 
      titleEn: 'Simple (+ / −) Controls',
      descHi: 'दूध, अमूल मक्खन, थम्स अप सीधे मात्रा चुनकर डालें',
      descEn: 'Choose exact quantities of milk packets, butter, or cold drinks with easy taps'
    },
    { 
      icon: Sparkles, 
      titleHi: 'एक क्लिक में ऑर्डर', 
      titleEn: '1-Click Order Placement',
      descHi: 'नकद या UPI चुनकर तुरंत ऑर्डर दर्ज करें',
      descEn: 'Pick Cash on Delivery or UPI with zero hidden convenience fees'
    },
    { 
      icon: Navigation, 
      titleHi: 'लाइव स्थिति देखें', 
      titleEn: 'Live Status Updates',
      descHi: 'स्पष्ट जानकारी: ऑर्डर प्राप्त → पुष्ट → पैक → डिलीवरी',
      descEn: 'Transparent workflow: Received → Confirmed → Packed → Out for Delivery'
    },
    { 
      icon: CheckCircle2, 
      titleHi: 'घर बैठे डिलीवरी', 
      titleEn: 'Familiar Doorstep Delivery',
      descHi: 'नज़दीकी दुकान से परिचित व्यक्ति द्वारा सुरक्षित डिलीवरी',
      descEn: 'Careful local delivery by the familiar neighborhood shop staff'
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('मूल अवलोकन · ज़मीनी समस्या', 'Ground Reality · The Local Problem')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t(content.problemTitleHi, content.problemTitleEn)}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3f5246] leading-relaxed">
            {t(
              'आपके घर से आपकी स्थानीय डेयरी मुश्किल से 200 या 300 मीटर की दूरी पर होती है। समस्या यह कभी नहीं थी कि दुकान दूर है।',
              'Your neighborhood dairy is often barely 200 or 300 meters away. Distance was never the obstacle.'
            )}
          </p>
          <div className="mt-3 rounded-xl border-l-4 border-[#1b3f2b] bg-[#1b3f2b]/5 p-4 text-base sm:text-lg font-bold text-[#153322] font-hindi">
            {t(
              'समस्या यह थी कि: नज़दीकी दुकान डिजिटल रूप से सुविधाजनक नहीं थी।',
              'The real problem was: your nearby trusted dairy lacked a simple digital interface.'
            )}
          </div>
        </div>

        {/* Interactive Mode Selector */}
        <div className="mt-10 flex items-center gap-2 p-1.5 bg-[#eae6dc] rounded-2xl w-fit border border-[#1b3f2b]/10">
          <button
            type="button"
            onClick={() => setActiveTab('traditional')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'traditional'
                ? 'bg-red-800 text-white shadow-sm'
                : 'text-[#445348] hover:text-[#153322]'
            }`}
          >
            {t('पारंपरिक तरीका (झंझट)', 'Traditional Way (Manual)')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('apni-dairy')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'apni-dairy'
                ? 'bg-[#1b3f2b] text-white shadow-sm'
                : 'text-[#445348] hover:text-[#153322]'
            }`}
          >
            {t('Apni Dukaan (आसान समाधान)', 'Apni Dukaan (Simple Digital)')}
          </button>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Traditional Method */}
          <div 
            className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
              activeTab === 'traditional' 
                ? 'border-red-300 bg-red-50/40 ring-2 ring-red-400/40 shadow-dairy-md' 
                : 'border-gray-200 bg-white/70 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-red-200/50">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  {t('पुराना तरीका', 'Old Paradigm')}
                </span>
                <h3 className="font-hindi text-2xl font-bold text-gray-900 mt-0.5">
                  {t('पारंपरिक नज़दीकी खरीदारी', 'Manual Local Ordering')}
                </h3>
              </div>
              <span className="rounded-full bg-red-100 text-red-800 px-3 py-1 text-xs font-bold">
                {t('5+ रुकावटें', '5+ Daily Friction Points')}
              </span>
            </div>

            <div className="mt-6 space-y-3.5">
              {traditionalSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/90 border border-red-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-hindi font-bold text-gray-900 text-base">
                        {t(item.titleHi, item.titleEn)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 mt-0.5">
                        {t(item.descHi, item.descEn)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-red-100/70 text-xs font-semibold text-red-900 flex items-center justify-between">
              <span>{t('परिणाम: समय की बर्बादी और रोज़ की उलझन', 'Outcome: Daily friction and lost time')}</span>
              <span className="font-mono">✕ {t('असुविधा', 'Inconvenient')}</span>
            </div>
          </div>

          {/* Card 2: Apni Dukaan Method */}
          <div 
            className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
              activeTab === 'apni-dairy' 
                ? 'border-[#1b3f2b] bg-[#ffffff] ring-2 ring-[#1b3f2b]/30 shadow-dairy-lg' 
                : 'border-gray-200 bg-white/70 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1b3f2b]/15">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#215135]">
                  {t('नया डिजिटल तरीका', 'Modern Local Paradigm')}
                </span>
                <h3 className="font-hindi text-2xl font-bold text-[#153322] mt-0.5">
                  {t('Apni Dukaan का अनुभव', 'The Apni Dukaan Way')}
                </h3>
              </div>
              <span className="rounded-full bg-[#1b3f2b]/10 text-[#1b3f2b] px-3 py-1 text-xs font-bold">
                {t('सरल व पारदर्शी', 'Simple & Transparent')}
              </span>
            </div>

            <div className="mt-6 space-y-3.5">
              {apniDairySteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-[#faf8f5] border border-[#1b3f2b]/10 shadow-2xs">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1b3f2b] text-white shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-hindi font-bold text-[#153322] text-base">
                        {t(item.titleHi, item.titleEn)}
                      </div>
                      <div className="text-xs sm:text-sm text-[#47574d] mt-0.5">
                        {t(item.descHi, item.descEn)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-[#1b3f2b]/10 text-xs font-semibold text-[#153322] flex items-center justify-between">
              <span>{t('परिणाम: घर बैठे 1 मिनट में बिना किसी झंझट के ऑर्डर', 'Outcome: Effortless order placed in 60 seconds')}</span>
              <span className="font-mono text-emerald-800">✓ {t('सहज सुविधा', 'Seamless')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
