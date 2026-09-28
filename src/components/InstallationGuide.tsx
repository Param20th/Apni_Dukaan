import { MoreVertical, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function InstallationGuide() {
  const { content, t } = useContent();

  const steps = [
    {
      num: '01',
      titleHi: 'App खोलें',
      titleEn: 'Open in Chrome',
      descHi: 'नीचे दिए गए बटन को दबाकर Chrome ब्राउज़र में Apni Dukaan का लिंक खोलें।',
      descEn: 'Open the apni-dukaan app link in your mobile Chrome browser.',
      icon: ExternalLink,
    },
    {
      num: '02',
      titleHi: '⋮ मेन्यू दबाएँ',
      titleEn: 'Tap Three Dots (⋮)',
      descHi: 'Chrome में ऊपर दाईं ओर दिख रहे तीन बिंदुओं (⋮) पर टैप करें।',
      descEn: 'Tap the three-dot menu at the top-right of your Chrome browser.',
      icon: MoreVertical,
    },
    {
      num: '03',
      titleHi: 'Install चुनें',
      titleEn: 'Select Install App',
      descHi: '"Install App" या "Add to Home Screen" चुनें। ऐप तुरंत आपकी होम स्क्रीन पर आ जाएगी।',
      descEn: 'Select "Install App" or "Add to Home Screen". The app will appear right on your screen.',
      icon: Download,
    },
  ];

  return (
    <section id="install" className="py-16 md:py-24 bg-[#f4f1ea] border-y border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('सरल फोन सेटअप · 30 सेकंड', 'Quick Phone Setup · 30 Seconds')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('Apni Dukaan को फोन में रखें', 'Keep Apni Dukaan on Your Phone')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'प्ले स्टोर के भारी डाउनलोड और अपडेट के झंझट के बिना — सिर्फ तीन आसान कदमों में ऐप को अपने मोबाइल पर सुरक्षित रखें।',
              'No bulky Play Store downloads or recurring storage hassles — install smoothly in 3 simple steps.'
            )}
          </p>
        </div>

        {/* 3 Step Cards + Interactive Phone Mockup */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Steps List */}
          <div className="lg:col-span-7 space-y-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex items-start gap-4 rounded-2xl border border-[#1b3f2b]/10 bg-white p-5 sm:p-6 shadow-dairy-sm transition-all hover:border-[#1b3f2b]/25 hover:shadow-dairy-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1b3f2b] text-white font-mono font-bold text-lg shadow-sm">
                  {s.num}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-hindi text-xl font-bold text-[#153322]">
                      {t(s.titleHi, s.titleEn)}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#3d4f44] leading-relaxed font-hindi">
                    {t(s.descHi, s.descEn)}
                  </p>
                </div>
              </div>
            ))}

            {/* Direct Open Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={content.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b3f2b] px-6 py-3.5 text-base font-bold text-white shadow-dairy-sm transition-all hover:bg-[#132c1e] hover:shadow-dairy-md active:scale-98"
              >
                <span>{t('अभी Chrome में खोलें', 'Open in Chrome Now')}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-[#526357]">
                URL: <span className="font-mono font-semibold text-[#153322]">apni-dairy.vercel.app</span>
              </span>
            </div>
          </div>

          {/* Right: Phone Frame with Chrome Menu Visual Guide */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[40px] border-[7px] border-[#223328] bg-[#1a251e] p-3 shadow-2xl">
              
              {/* Phone Speaker notch */}
              <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-[#2c3d32] flex items-center justify-center">
                <div className="h-1.5 w-10 rounded-full bg-[#1e2a22]" />
              </div>

              {/* Inside Screen Container */}
              <div className="rounded-[28px] bg-white overflow-hidden text-left border border-gray-100 shadow-inner">
                
                {/* Chrome Browser URL Bar */}
                <div className="bg-[#f1f3f4] px-3 py-2.5 border-b border-gray-200 flex items-center justify-between text-xs text-gray-700">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-700 font-bold">🔒</span>
                    <span className="truncate font-mono text-[11px] text-gray-800">apni-dairy.vercel.app</span>
                  </div>
                  {/* Highlighted 3 dots */}
                  <div className="flex items-center gap-1">
                    <span className="rounded-full bg-emerald-600/10 p-1 text-emerald-800 ring-2 ring-emerald-600 animate-pulse">
                      <MoreVertical className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Simulated Chrome Dropdown Popover */}
                <div className="bg-[#ffffff] p-3 text-xs border-b border-gray-200">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Chrome {t('मेन्यू', 'Menu')}
                  </div>
                  <div className="space-y-1.5 text-gray-600">
                    <div className="p-1 rounded text-gray-400">New tab</div>
                    <div className="p-1 rounded text-gray-400">History</div>
                    {/* The highlighted action */}
                    <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-2.5 py-2 font-bold text-emerald-950 border border-emerald-300 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-emerald-700" />
                        <span className="font-hindi text-xs">
                          {t('Install App / फोन में जोड़ें', 'Install App / Add to Home Screen')}
                        </span>
                      </div>
                      <span className="text-[10px] bg-emerald-700 text-white rounded px-1.5 py-0.5 font-bold">
                        {t('चुनें', 'Tap')}
                      </span>
                    </div>
                    <div className="p-1 rounded text-gray-400">Share...</div>
                  </div>
                </div>

                {/* Simulated App Page Header inside phone */}
                <div className="p-4 bg-[#faf8f5]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-hindi font-black text-sm text-[#153322]">Apni Dukaan</div>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {t('स्थानीय स्टोर', 'Local Store')}
                    </span>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-[#1b3f2b]/10 text-center shadow-2xs">
                    <div className="font-hindi font-bold text-xs text-[#153322]">
                      {t('दूध और मक्खन ऑर्डर करें', 'Order Milk & Butter')}
                    </div>
                    <div className="mt-1 text-[11px] text-gray-500">
                      {t('सीधे आपके घर तक', 'Direct to Doorstep')}
                    </div>
                  </div>
                </div>

                {/* Phone Bottom Gesture Bar */}
                <div className="bg-white py-2 flex justify-center">
                  <div className="h-1 w-20 rounded-full bg-gray-300" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
