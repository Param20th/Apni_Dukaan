import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Store, ArrowRight, Smartphone, Home } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import ApniLogo from './ApniLogo';

export default function Hero() {
  const { content, t, lang, imageSlots } = useContent();

  const heroLogoUrl = imageSlots.heroLogo?.currentUrl;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28">
      {/* Subtle organic ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
      >
        <div className="h-[440px] w-[850px] max-w-full rounded-full bg-gradient-to-tr from-[#1b3f2b]/10 via-[#2f6847]/8 to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#f4ecd8]/60 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Dominant Brand Phrase & Core Value */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#245438]">
              <span>{t('स्थानीय भरोसा', 'Local Trust')}</span>
              <span aria-hidden="true">·</span>
              <span>{t('डिजिटल सुविधा', 'Digital Convenience')}</span>
              <span aria-hidden="true">·</span>
              <span>{t('कोई 10-मिनट का ड्रामा नहीं', 'No 10-Min Stunts')}</span>
            </div>

            {/* Dominant Hero Headline: "Apne Ghar ki Apni Dukaan" / "अपने घर की अपनी दुकान" */}
            <h1 className="font-hindi text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#153322] leading-[1.12] text-dimensional">
              {lang === 'hi' ? (
                <>
                  अपने घर की <br />
                  <span className="text-[#205234]">अपनी दुकान</span>
                </>
              ) : (
                <>
                  Apne Ghar ki <br />
                  <span className="text-[#205234]">Apni Dukaan</span>
                </>
              )}
            </h1>

            {/* Supporting Line */}
            <p className="font-hindi text-xl sm:text-2xl font-bold text-[#29382f] leading-snug">
              {t(content.heroSublineHi, content.heroSublineEn)}
            </p>

            {/* Short & clear concept explanation */}
            <p className="max-w-2xl text-base sm:text-lg text-[#47574d] leading-relaxed">
              {t(content.heroDescHi, content.heroDescEn)}
            </p>

            {/* Visual Value Connection: Local Dairy -> Apni Dukaan -> Customer */}
            <div className="rounded-2xl border border-[#1b3f2b]/12 bg-white/70 p-3 sm:p-4 backdrop-blur-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#265337] mb-2">
                {t('सरल व्यापार मॉडल', 'Direct Connection')}
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#153322]">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1b3f2b]/10 text-[#1b3f2b]">
                    <Store className="h-4 w-4" />
                  </div>
                  <span>{t('स्थानीय डेयरी', 'Local Dairy')}</span>
                </div>

                <ArrowRight className="h-4 w-4 text-[#1b3f2b]/60" />

                <div className="flex items-center gap-1.5 text-[#1b3f2b]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1b3f2b] text-white">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <span className="font-black">Apni Dukaan</span>
                </div>

                <ArrowRight className="h-4 w-4 text-[#1b3f2b]/60" />

                <div className="flex items-center gap-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1b3f2b]/10 text-[#1b3f2b]">
                    <Home className="h-4 w-4" />
                  </div>
                  <span>{t('आपका घर', 'Your Household')}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={content.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#1b3f2b] px-7 py-4 text-base font-bold text-white shadow-dairy-md transition-all duration-200 hover:bg-[#142e1f] hover:shadow-dairy-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>{t(content.heroCtaHi, content.heroCtaEn)}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1b3f2b]/20 bg-white/80 px-6 py-4 text-base font-semibold text-[#1b3f2b] shadow-dairy-sm transition-all hover:bg-white hover:border-[#1b3f2b]/40 hover:shadow-dairy-md text-center"
              >
                <span>{t('कैसे काम करता है?', 'How It Works')}</span>
                <ArrowDown className="h-4 w-4 text-[#1b3f2b]/70" />
              </a>
            </div>

            {/* Transparent notice */}
            <p className="text-xs text-[#607166]">
              {t(
                '* लिंक सीधे लाइव वेब ऐप खोलता है, जिसे आप Chrome मेन्यू (⋮) से 1-टैप में इंस्टॉल कर सकते हैं।',
                '* The button opens the deployed web app/PWA directly, installable via Chrome menu (⋮) in one tap.'
              )}
            </p>
          </div>

          {/* Right Column: User's Logo in Blank White 3D Floating Hero Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-b from-[#255639]/15 to-[#e9ded0]/40 blur-xl" />

              {/* Main 3D Floating Showcase Card with user logo */}
              <div className="relative rounded-[36px] border border-[#1b3f2b]/15 bg-white p-6 sm:p-7 shadow-dairy-3d transition-transform duration-300 hover:scale-[1.01]">
                
                {/* Store Status Top Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-3 w-3 rounded-full bg-emerald-600 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-[#153322]">
                        {t('नज़दीकी अपनी दुकान', 'Nearby Apni Dukaan')}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {t('वार्ड 14 · 300 मीटर की दूरी पर', 'Ward 14 · 300m away')}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {t('दुकान खुली है', 'Store Open')}
                  </span>
                </div>

                {/* The 3D Floating Logo Showcase Container */}
                <div className="relative my-2 rounded-2xl bg-[#faf7f0] border border-[#1b3f2b]/10 p-5 flex flex-col items-center justify-center overflow-hidden shadow-inner group">
                  
                  {/* Subtle 3D badge on top */}
                  <div className="absolute top-2.5 right-3 text-[10px] font-bold font-mono uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                    Official Brand
                  </div>

                  {/* The Official Logo Component (User's Logo) */}
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1">
                    <ApniLogo size="lg" customImageUrl={heroLogoUrl} />
                  </div>

                  {/* Brand Tagline Banner below logo */}
                  <div className="mt-2 text-center">
                    <div className="font-hindi text-xs font-bold text-[#1b251f]">
                      {t('शुद्ध दूध, मक्खन व ताज़ा पेय', 'Pure Milk, Butter & Chilled Beverages')}
                    </div>
                  </div>
                </div>

                {/* Floating Product Badges */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-[#faf8f5] p-2 border border-[#1b3f2b]/8">
                    <div className="font-bold text-[#153322]">{t('ताज़ा दूध', 'Fresh Milk')}</div>
                    <div className="text-[10px] text-gray-500 font-mono">Full Cream</div>
                  </div>
                  <div className="rounded-xl bg-[#faf8f5] p-2 border border-[#1b3f2b]/8">
                    <div className="font-bold text-[#153322]">{t('अमूल मक्खन', 'Amul Butter')}</div>
                    <div className="text-[10px] text-gray-500 font-mono">100g / 500g</div>
                  </div>
                  <div className="rounded-xl bg-[#faf8f5] p-2 border border-[#1b3f2b]/8">
                    <div className="font-bold text-[#153322]">{t('कोल्ड ड्रिंक्स', 'Cold Drinks')}</div>
                    <div className="text-[10px] text-gray-500 font-mono">Chilled</div>
                  </div>
                </div>

                {/* Trust Footer inside card */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#415347]">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-[#205234]" />
                    <span>{t('दुकानदार से सीधा सत्यापन', 'Direct Owner Verified')}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-gray-500">
                    <Clock className="h-3.5 w-3.5 text-[#205234]" />
                    <span>20-40 min</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
