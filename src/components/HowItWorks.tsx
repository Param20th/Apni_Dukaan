import { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/dairyData';
import { User, Store, Bike, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function HowItWorks() {
  const { t } = useContent();
  const [selectedStep, setSelectedStep] = useState(1);

  const currentStepData = WORKFLOW_STEPS.find(s => s.step === selectedStep) || WORKFLOW_STEPS[0];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('व्यापार प्रक्रिया · 6 सरल कदम', 'Business Workflow · 6 Simple Steps')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('Apni Dukaan कैसे काम करता है?', 'How Apni Dukaan Works')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'ग्राहक के फोन से लेकर दुकानदार के चिलर और आपके घर की दहलीज तक — हर कदम पारदर्शी और सरल है।',
              'From your phone screen to the store chiller and your doorstep — every single step is transparent.'
            )}
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max p-1.5 bg-[#ebe7de] rounded-2xl border border-[#1b3f2b]/10">
            {WORKFLOW_STEPS.map((s) => {
              const isSelected = s.step === selectedStep;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setSelectedStep(s.step)}
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#1b3f2b] text-white shadow-dairy-sm scale-[1.02]'
                      : 'text-[#38463c] hover:text-[#153322] hover:bg-black/5'
                  }`}
                >
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-mono font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#1b3f2b]/10 text-[#1b3f2b]'
                  }`}>
                    {s.step}
                  </span>
                  <span className="font-hindi">{t(s.titleHi, s.titleEn)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Detail Card */}
        <div className="mt-8 rounded-3xl border border-[#1b3f2b]/15 bg-white p-6 sm:p-10 shadow-dairy-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1b3f2b] text-white font-mono font-bold text-lg">
                  0{currentStepData.step}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#2d6342]">
                    {currentStepData.actor === 'customer' 
                      ? t('ग्राहक का कदम', 'Customer Action')
                      : currentStepData.actor === 'dairy' 
                      ? t('दुकानदार का कदम', 'Dairy Merchant Action')
                      : t('डिलीवरी का कदम', 'Delivery Action')}
                  </div>
                  <h3 className="font-hindi text-2xl sm:text-3xl font-bold text-[#153322]">
                    {t(currentStepData.titleHi, currentStepData.titleEn)}
                  </h3>
                </div>
              </div>

              <p className="font-hindi text-base sm:text-lg text-[#2e3e34] leading-relaxed">
                {t(currentStepData.descHi, currentStepData.descEn)}
              </p>

              {/* Feature points */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#35523f] mb-2">
                  {t('इस चरण की मुख्य विशेषताएँ:', 'Key Aspects of this Stage:')}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentStepData.detailItems.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-xl bg-[#faf8f5] p-2.5 border border-[#1b3f2b]/10 text-xs font-semibold text-[#1f2d24]">
                      <CheckCircle2 className="h-4 w-4 text-[#205234] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step trigger */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedStep(selectedStep === 6 ? 1 : selectedStep + 1)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1b3f2b] hover:text-[#122e1e] transition-colors"
                >
                  <span>
                    {selectedStep === 6 
                      ? t('शुरुआत से देखें (कदम 1)', 'View from Step 1') 
                      : t(`अगला कदम देखें (कदम ${selectedStep + 1})`, `View Next Step (Step ${selectedStep + 1})`)}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Visual actor illustration */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#f2eee5] to-[#e7e1d5] p-6 border border-[#1b3f2b]/10 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1b3f2b] text-white shadow-dairy-md">
                {currentStepData.actor === 'customer' && <User className="h-10 w-10 text-emerald-200" />}
                {currentStepData.actor === 'dairy' && <Store className="h-10 w-10 text-amber-200" />}
                {currentStepData.actor === 'delivery' && <Bike className="h-10 w-10 text-blue-200" />}
              </div>

              <div className="font-hindi text-lg font-bold text-[#153322]">
                {currentStepData.actor === 'customer' 
                  ? t('ग्राहक का फ़ोन', 'Customer Smartphone')
                  : currentStepData.actor === 'dairy' 
                  ? t('डेयरी स्टोर डैशबोर्ड', 'Dairy Merchant Dashboard') 
                  : t('सुरक्षित नज़दीकी डिलीवरी', 'Familiar Local Delivery')}
              </div>
              <div className="mt-1 text-xs text-[#526357]">
                {t(`चरण ${currentStepData.step} / 6`, `Step ${currentStepData.step} of 6`)}
              </div>

              <div className="mt-4 rounded-xl bg-white p-3.5 text-xs text-left font-mono text-[#26382c] border border-black/5 shadow-2xs space-y-1">
                <div className="text-[10px] uppercase font-bold text-gray-400">
                  {t('सिस्टम स्थिति:', 'Workflow State:')}
                </div>
                <div className="text-[#1b3f2b] font-semibold">
                  STATUS: {currentStepData.actor.toUpperCase()}_STAGE_ACTIVE
                </div>
                <div className="text-gray-600">
                  FLOW: LOCAL_STORE_TO_HOUSEHOLD
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
