import { TIMELINE_STEPS } from '../data/dairyData';
import { Compass } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function AboutBuilder() {
  const { t } = useContent();

  return (
    <section id="about" className="py-16 md:py-24 bg-[#ffffff] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Founder Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#265337]">
              {t('संस्थापक की सोच · Founder’s Note', 'Founder’s Journey · Real Problem Solving')}
            </div>
            
            <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
              {t('Apni Dukaan को किसने बनाया?', 'Who Built Apni Dukaan?')}
            </h2>

            <p className="font-hindi text-base sm:text-lg text-[#324337] leading-relaxed">
              {t(
                'Apni Dukaan की शुरुआत किसी कॉर्पोरेट बोर्डरूम या सिलिकॉन वैली के पिच-डेक से नहीं हुई। इसकी शुरुआत अपने ही मोहल्ले के एक सरल अवलोकन से हुई:',
                'Apni Dukaan didn’t originate in a venture pitch deck. It started from an everyday household observation in our own neighborhood:'
              )}
            </p>

            <blockquote className="rounded-2xl border-l-4 border-[#1b3f2b] bg-[#faf8f5] p-5 font-hindi text-base text-[#1b251f] italic leading-relaxed">
              {t(
                '“हमारी दूध की डेयरी घर से केवल 300 मीटर की दूरी पर थी। फिर भी सुबह दूध कम पड़ने पर या शाम को मेहमान आने पर, ऑर्डर करने के लिए या तो खुद पैदल जाना पड़ता था, या बार-बार कॉल और व्हाट्सएप संदेश भेजने पड़ते थे।”',
                '“Our neighborhood dairy was barely 300 meters away. Yet ordering morning milk or an evening cold drink still meant walking in the heat, making multiple calls to an engaged phone, or sending WhatsApp texts that got overlooked.”'
              )}
            </blockquote>

            <p className="text-sm sm:text-base text-[#4a5c50] leading-relaxed">
              {t(
                'समस्या दुकान की दूरी नहीं थी — समस्या यह थी कि पास की दुकान तक पहुँचने का कोई आसान डिजिटल रास्ता नहीं था। इसलिए हमने बिना किसी कृत्रिम 10-मिनट डिलीवरी के दिखावे के, हमारी स्थानीय दुकान को तकनीक का एक सरल और विश्वसनीय सहारा देने का प्रयास किया।',
                'The problem was never physical distance; it was the lack of a modern, lightweight digital link to a store that was right there. Apni Dukaan was built to bridge this gap simply, without artificial delivery speed gimmicks.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#2b4d38]">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              <span>
                {t(
                  'ज़मीनी अनुभव से निर्मित · स्थानीय अर्थव्यवस्था के हित में',
                  'Built from Ground Realities · Backing Neighborhood Commerce'
                )}
              </span>
            </div>
          </div>

          {/* Builder Values Card */}
          <div className="lg:col-span-5 rounded-3xl border border-[#1b3f2b]/15 bg-[#faf8f5] p-7 sm:p-8 shadow-dairy-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1b3f2b] text-white mb-5 shadow-sm">
              <Compass className="h-6 w-6 text-emerald-300" />
            </div>

            <h3 className="font-hindi text-2xl font-bold text-[#153322]">
              {t('हम क्या नहीं हैं', 'What We Are Not')}
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-[#3b4c40] font-hindi">
              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span>
                  {t(
                    'हम कोई अंधाधुंध फंडेड स्टार्टअप या डिलीवरी एग्रीगेटर नहीं हैं।',
                    'We are not an impersonal venture giant or hyper-funded gig network.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span>
                  {t(
                    'हम डिलीवरी राइडर्स पर खतरनाक 10-मिनट का दबाव नहीं डालते।',
                    'We never subject delivery riders to artificial, dangerous 10-minute deadlines.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span>
                  {t(
                    'हम स्थानीय दुकानदारों की जगह लेने नहीं आए हैं।',
                    'We do not seek to displace local shopkeepers; we empower them.'
                  )}
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#1b3f2b]/10">
              <div className="font-hindi font-bold text-[#153322] text-sm mb-1">
                {t('हमारा एकमात्र लक्ष्य:', 'Our Sole Purpose:')}
              </div>
              <p className="font-hindi text-xs text-[#526357] leading-relaxed">
                {t(
                  'स्थानीय दुकानदार और पड़ोस के परिवारों के बीच तकनीक की एक ऐसी खिड़की तैयार करना जो दोनों के लिए दिनचर्या को आसान बनाए।',
                  'To create a digital bridge between neighborhood shopkeepers and local households that makes everyday life effortless.'
                )}
              </p>
            </div>
          </div>

        </div>

        {/* Built to Learn Timeline */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
              {t('विकास यात्रा · Evolution Timeline', 'Built from a Real Problem · Improved Through Real Use')}
            </div>
            <h3 className="font-hindi text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153322]">
              {t(
                'एक सच्ची समस्या से शुरू। वास्तविक उपयोग से बेहतर।',
                'Born from a genuine problem. Refined through daily use.'
              )}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#47574d]">
              {t(
                'यह कोई रात भर का दावा नहीं, बल्कि स्थानीय दुकानदारों और परिवारों से सीखी गई ज़मीनी समझ है।',
                'Not an overnight claim, but practical lessons learned sitting inside local dairy shops.'
              )}
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
            {TIMELINE_STEPS.map((tItem, idx) => (
              <div
                key={tItem.phase}
                className="relative rounded-2xl border border-[#1b3f2b]/12 bg-[#faf8f5] p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#1b3f2b]/8">
                    <span className="font-mono text-xs font-bold text-[#1b3f2b]">
                      STEP {tItem.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {idx === 4 ? t('वर्तमान', 'Today') : t('अनुभव', 'Lesson')}
                    </span>
                  </div>

                  <h4 className="font-hindi text-base font-bold text-[#153322] mt-3">
                    {t(tItem.titleHi, tItem.title)}
                  </h4>
                  <p className="font-hindi text-xs text-[#44564a] mt-2.5 leading-relaxed">
                    {t(tItem.descHi, tItem.desc)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                  {t(tItem.phaseHi, `Phase ${tItem.phase}`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Vision */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#153322] to-[#0f2418] p-8 sm:p-12 text-white shadow-dairy-lg">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
              {t('भविष्य की दृष्टि · Business Vision', 'Long-term Vision · Sustainable Local Commerce')}
            </div>
            <h3 className="font-hindi text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              {t('यह सिर्फ दूध की बात नहीं है।', 'This is not just about milk.')}
            </h3>
            <p className="mt-3 font-hindi text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              {t(
                'स्थानीय दुकानों के पास पहले से ही सब कुछ है: ग्राहक, उत्पाद, त्वरित डिलीवरी की क्षमता, और मोहल्ले का दशकों पुराना विश्वास।',
                'Local neighborhood shops already possess what massive corporations spend millions trying to replicate: immediate physical proximity, customer familiarity, and genuine community trust.'
              )}
            </p>
            <p className="mt-2 text-sm text-emerald-200/80 leading-relaxed">
              {t(
                'तकनीक बस एक पुल बन सकती है — जो ऑर्डर हिस्ट्री, इन्वेंट्री की स्पष्टता, और आवर्ती मांग को व्यवस्थित करती है। हमारा दीर्घकालिक दृष्टिकोण है: स्थानीय व्यापार + सहज तकनीक + मोहल्ले का अटूट विश्वास।',
                'Technology simply provides the clean digital pipe: ordering ease, inventory visibility, and recurring convenience. Our vision is simple: Local commerce + simple software + neighborhood trust.'
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
