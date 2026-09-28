import { useState } from 'react';
import { FAQS } from '../data/dairyData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function FaqSection() {
  const { t } = useContent();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#ffffff] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('प्रश्नोत्तरी · Frequently Asked Questions', 'Questions & Answers · Clarity for Households')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('अक्सर पूछे जाने वाले सवाल', 'Frequently Asked Questions')}
          </h2>
          <p className="mt-3 text-base text-[#47574d]">
            {t(
              'Apni Dukaan के काम करने के तरीके, डिलीवरी और भुगतान से जुड़ी हर स्पष्ट जानकारी।',
              'Clear, honest answers about how Apni Dukaan operates, delivery expectations, and payments.'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#1b3f2b]/12 bg-[#faf8f5] overflow-hidden transition-all shadow-dairy-sm hover:border-[#1b3f2b]/25"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1b3f2b]/10 text-[#1b3f2b]">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-hindi text-base sm:text-lg font-bold text-[#153322]">
                        {t(faq.questionHi, faq.questionEn)}
                      </h3>
                      <span className="text-xs text-gray-500 font-sans hidden sm:inline">
                        {faq.questionEn}
                      </span>
                    </div>
                  </div>

                  <div className="h-7 w-7 shrink-0 rounded-lg bg-white flex items-center justify-center text-gray-600 border border-gray-200">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#1b3f2b]/8 bg-white p-5 sm:p-6 text-sm text-[#34463a] animate-in fade-in duration-150">
                    <p className="font-hindi text-base leading-relaxed text-[#1b251f]">
                      {t(faq.answerHi, faq.answerEn)}
                    </p>
                    {/* In Hindi mode, show English subtitle; in English mode, show Hindi translation */}
                    <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed font-sans border-t border-gray-100 pt-2">
                      {t(faq.answerEn, faq.answerHi)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
