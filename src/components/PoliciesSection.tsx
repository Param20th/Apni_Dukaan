import { useState } from 'react';
import { DAIRY_POLICIES } from '../data/dairyData';
import { Shield, ChevronDown, ChevronUp, Search, Info } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function PoliciesSection() {
  const { t } = useContent();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'order' | 'delivery' | 'payment' | 'trust'>('all');
  const [expandedPolicyId, setExpandedPolicyId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelHi: 'सभी नीतियाँ', labelEn: 'All Policies' },
    { id: 'order', labelHi: 'ऑर्डर व रद्दीकरण', labelEn: 'Ordering' },
    { id: 'delivery', labelHi: 'डिलीवरी नियम', labelEn: 'Delivery' },
    { id: 'payment', labelHi: 'भुगतान व खाता', labelEn: 'Payments' },
    { id: 'trust', labelHi: 'सुरक्षा व प्राइवेसी', labelEn: 'Trust & Privacy' },
  ];

  const filteredPolicies = DAIRY_POLICIES.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesQuery = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.titleHi.includes(searchQuery) ||
      p.shortDescHi.includes(searchQuery) ||
      p.fullDescHi.includes(searchQuery) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const togglePolicy = (id: string) => {
    setExpandedPolicyId(prev => (prev === id ? null : id));
  };

  return (
    <section id="policies" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
              {t('पारदर्शिता व विश्वास · Dynamic Policy Architecture', 'Transparency & Policies · Community Standards')}
            </div>
            <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
              {t('हमारी नीतियाँ', 'Our Policies')}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
              {t(
                'स्पष्ट नियम, ताकि ग्राहक और स्थानीय दुकानदार दोनों के बीच विश्वास हमेशा बना रहे। कोई छिपा हुआ नियम या अस्पष्ट शर्तें नहीं।',
                'Clear rules so that households and shopkeepers always maintain mutual trust. No hidden clauses or surprise terms.'
              )}
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('नीति खोजें (जैसे: डिलीवरी, भुगतान)...', 'Search policies (e.g. delivery, payment)...')}
              className="w-full rounded-xl border border-[#1b3f2b]/15 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-gray-900 placeholder:text-gray-400 focus:border-[#1b3f2b] focus:outline-none focus:ring-1 focus:ring-[#1b3f2b]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max p-1.5 bg-[#ebe7df] rounded-2xl border border-[#1b3f2b]/10">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id as any)}
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#1b3f2b] text-white shadow-dairy-sm'
                      : 'text-[#394a3e] hover:text-[#153322] hover:bg-black/5'
                  }`}
                >
                  <span className="font-hindi">{t(c.labelHi, c.labelEn)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Policies List */}
        <div className="mt-8 space-y-4">
          {filteredPolicies.map((p) => {
            const isExpanded = expandedPolicyId === p.id;
            return (
              <div
                key={p.id}
                className="rounded-2xl border border-[#1b3f2b]/12 bg-white transition-all hover:border-[#1b3f2b]/25 shadow-dairy-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => togglePolicy(p.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1b3f2b]/10 text-[#1b3f2b] mt-0.5 sm:mt-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-hindi text-lg sm:text-xl font-bold text-[#153322]">
                          {t(p.titleHi, p.title)}
                        </h3>
                        <span className="text-xs font-mono text-gray-500 hidden sm:inline">
                          ({p.title})
                        </span>
                      </div>
                      <p className="font-hindi text-xs sm:text-sm text-[#44564a] mt-1 leading-relaxed">
                        {t(p.shortDescHi, p.shortDesc)}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-xs text-emerald-800 font-semibold hidden md:inline">
                      {t('सक्रिय (Active)', 'Active')}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="border-t border-[#1b3f2b]/8 bg-[#faf8f5] p-5 sm:p-6 text-sm text-[#2b3a30] animate-in fade-in duration-200">
                    <div className="space-y-3 max-w-4xl">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                          {t('विस्तृत विवरण (Hindi):', 'Hindi Detail:')}
                        </div>
                        <p className="font-hindi text-base leading-relaxed text-[#1b251f]">
                          {p.fullDescHi}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-200/60">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                          {t('अंग्रेज़ी विवरण (English Policy Detail):', 'English Detail:')}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                          {p.fullDesc}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
                        <span>{t('क्रम:', 'Order:')} {p.displayOrder}</span>
                        <span aria-hidden="true">·</span>
                        <span>Apni Dukaan Merchant Rules Ready</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Backend Extensibility Note */}
        <div className="mt-8 rounded-2xl bg-white p-4 border border-[#1b3f2b]/10 text-xs text-gray-500 flex items-center gap-2.5">
          <Info className="h-4 w-4 text-[#1b3f2b] shrink-0" />
          <span>
            {t(
              'यह नीतियां एक गतिशील डेटा संरचना द्वारा संचालित हैं, जिसे Apni Dukaan बैकएंड/एडमिन डैशबोर्ड से सीधे अद्यतन किया जा सकता है।',
              'These policies are backed by a dynamic JSON data schema, fully ready to connect with the merchant admin backend.'
            )}
          </span>
        </div>

      </div>
    </section>
  );
}
