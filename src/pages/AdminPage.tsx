import { useState, useRef } from 'react';
import { useContent } from '../context/ContentContext';
import { 
  Globe, ExternalLink, Save, Check, RotateCcw, Upload, 
  Image as ImageIcon, FileText, Settings, ArrowLeft, 
  ShieldAlert, Radio, AlertCircle, Sparkles, CheckCircle2
} from 'lucide-react';
import ApniLogo from '../components/ApniLogo';

interface AdminPageProps {
  onNavigate: (path: string) => void;
}

export default function AdminPage({ onNavigate }: AdminPageProps) {
  const { 
    content, 
    updateContent, 
    resetContent,
    imageSlots, 
    updateImageSlot, 
    resetImageSlot,
    resetAllImages,
    lang,
    setLang,
    t
  } = useContent();

  const [activeTab, setActiveTab] = useState<'deployment' | 'images' | 'content' | 'settings'>('deployment');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [tempAppUrl, setTempAppUrl] = useState(content.appUrl);
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [activeSlotForUpload, setActiveSlotForUpload] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const handleSaveDeploymentUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanUrl = tempAppUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      setIsUrlValid(false);
      return;
    }
    setIsUrlValid(true);
    updateContent('appUrl', cleanUrl);
    showNotification('डेप्लॉयमेंट लिंक सफलतापूर्वक अपडेट हो गया! (Deployment link saved live)');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeSlotForUpload) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('फ़ाइल का आकार 5MB से कम होना चाहिए। (File size must be under 5MB)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUrl = uploadEvent.target?.result as string;
      if (dataUrl) {
        updateImageSlot(activeSlotForUpload, dataUrl);
        showNotification(`${imageSlots[activeSlotForUpload]?.nameHi || 'इमेज'} सफलतापूर्वक अपडेट कर दी गई!`);
      }
    };
    reader.readAsDataURL(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerUpload = (slotId: string) => {
    setActiveSlotForUpload(slotId);
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#19241d] flex flex-col antialiased">
      
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/png, image/jpeg, image/webp, image/svg+xml"
        className="hidden"
        aria-hidden="true"
      />

      {/* Admin Top Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-[#1b3f2b]/15 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-2 text-xs font-bold text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>वेबसाइट पर लौटें (Public Site)</span>
            </button>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div>
              <div className="flex items-center gap-2">
                <span className="font-hindi text-lg font-black text-[#153322]">
                  Apni Dukaan
                </span>
                <span className="rounded-md bg-[#1b3f2b]/10 px-2 py-0.5 font-mono text-[11px] font-bold text-[#1b3f2b]">
                  /admin
                </span>
              </div>
              <p className="text-[11px] text-[#526357] hidden sm:block">
                Deployment & Website Management Console
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {successMessage && (
              <div className="flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 border border-emerald-200 animate-in fade-in">
                <Check className="h-4 w-4" />
                <span>{successMessage}</span>
              </div>
            )}

            <a
              href={content.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#1b3f2b] px-3.5 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#122e1e] transition-colors"
            >
              <span>लाइव ऐप खोलें (Test Live App)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('deployment')}
            className={`flex items-center gap-2 rounded-xl px-4.5 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'deployment'
                ? 'bg-[#1b3f2b] text-white shadow-sm'
                : 'bg-white text-[#44564b] hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Globe className="h-4 w-4" />
            <span>डेप्लॉयमेंट लिंक (Deployment Link)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('images')}
            className={`flex items-center gap-2 rounded-xl px-4.5 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'images'
                ? 'bg-[#1b3f2b] text-white shadow-sm'
                : 'bg-white text-[#44564b] hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            <span>इमेज व विजुअल्स (Images & Visuals)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 rounded-xl px-4.5 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-[#1b3f2b] text-white shadow-sm'
                : 'bg-white text-[#44564b] hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>वेबसाइट टेक्स्ट (Content Editor)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 rounded-xl px-4.5 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-[#1b3f2b] text-white shadow-sm'
                : 'bg-white text-[#44564b] hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Settings className="h-4 w-4" />
            <span>सेटिंग्स (Settings)</span>
          </button>
        </div>

        {/* Tab 1: DEPLOYMENT LINK CONFIGURATION (Prominent & Primary) */}
        {activeTab === 'deployment' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            
            {/* Main Deployment Card */}
            <div className="rounded-3xl border border-[#1b3f2b]/15 bg-white p-6 sm:p-10 shadow-dairy-sm">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
                  <Globe className="h-4 w-4 text-[#265337]" />
                  <span>Deployment Link Control · डेप्लॉयमेंट यूआरएल</span>
                </div>
                <h2 className="font-hindi text-2xl sm:text-3xl font-extrabold text-[#153322]">
                  Apni Dukaan एप्लीकेशन का डेप्लॉयमेंट लिंक यहाँ दर्ज करें
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#47574d] leading-relaxed font-hindi">
                  यहाँ डाला गया लिंक पूरी वेबसाइट के सभी डाउनलोड व ऑर्डर बटनों (Header, Hero, Install Guide, Final CTA) में तुरंत लागू हो जाएगा।
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSaveDeploymentUrl} className="mt-8 max-w-3xl space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    लाइव डेप्लॉयमेंट यूआरएल (Live Application Web URL)
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Globe className="h-4 w-4" />
                      </div>
                      <input
                        type="url"
                        value={tempAppUrl}
                        onChange={(e) => {
                          setTempAppUrl(e.target.value);
                          setIsUrlValid(true);
                        }}
                        placeholder="https://apni-dairy.vercel.app"
                        className={`w-full rounded-2xl border py-3.5 pl-10 pr-4 text-sm font-mono font-medium text-gray-900 shadow-2xs focus:outline-none transition-colors ${
                          !isUrlValid
                            ? 'border-red-400 bg-red-50 focus:border-red-500'
                            : 'border-gray-200 bg-white focus:border-[#1b3f2b] focus:ring-1 focus:ring-[#1b3f2b]'
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1b3f2b] px-7 py-3.5 text-sm font-bold text-white shadow-dairy-sm hover:bg-[#122e1e] active:scale-98 transition-all whitespace-nowrap"
                    >
                      <Save className="h-4 w-4" />
                      <span>सहेजें और लागू करें (Save Link)</span>
                    </button>
                  </div>

                  {!isUrlValid && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-semibold">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>कृपया एक मान्य URL दर्ज करें (जैसे: https://apni-dairy.vercel.app)</span>
                    </p>
                  )}
                </div>

                {/* Current Active Status Box */}
                <div className="rounded-2xl bg-[#faf8f5] p-4 border border-[#1b3f2b]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-emerald-600 animate-pulse" />
                    <div>
                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        वर्तमान सक्रिय डेप्लॉयमेंट लिंक:
                      </div>
                      <div className="font-mono text-sm font-bold text-[#153322] break-all">
                        {content.appUrl}
                      </div>
                    </div>
                  </div>

                  <a
                    href={content.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-[#153322] hover:bg-gray-50 transition-colors whitespace-nowrap"
                  >
                    <span>लिंक टेस्ट करें (Test Link)</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </form>

              {/* Where this link is automatically placed */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-hindi text-base font-bold text-[#153322] mb-3">
                  यह लिंक सार्वजनिक वेबसाइट पर कहाँ-कहाँ काम करता है:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs text-[#2c3d31]">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">हेडर "App खोलें" बटन</span>
                      <div className="text-gray-500 text-[11px]">शीर्ष नेविगेशन बार में मुख्य CTA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">हीरो "ऐप डाउनलोड करें" बटन</span>
                      <div className="text-gray-500 text-[11px]">मुख्य स्क्रीन का प्राथमिक डाउनलोड CTA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">इंस्टॉलेशन गाइड बटन</span>
                      <div className="text-gray-500 text-[11px]">"अभी Chrome में खोलें" लिंक</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">उत्पाद सूची लाइव स्टॉक</span>
                      <div className="text-gray-500 text-[11px]">"लाइव ऐप में पूरा स्टॉक देखें"</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">अंतिम कॉल-टू-एक्शन (Final CTA)</span>
                      <div className="text-gray-500 text-[11px]">पेज के अंत में बड़ा डाउनलोड बटन</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">फुटर लाइव ऐप लिंक</span>
                      <div className="text-gray-500 text-[11px]">वेबसाइट के नीचे सीधा लिंक</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: IMAGES & VISUALS */}
        {activeTab === 'images' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-gray-200 shadow-2xs">
              <div>
                <h3 className="font-hindi text-lg font-bold text-[#153322]">
                  वेबसाइट विजुअल व इमेज प्रबंधन
                </h3>
                <p className="text-xs text-[#526357]">
                  यहाँ से आप हीरो लोगो, स्टोरी फोटो या कार्यप्रणाली की इमेज बिना किसी कोडिंग के तुरंत बदल सकते हैं।
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  resetAllImages();
                  showNotification('सभी विजुअल्स डिफ़ॉल्ट पर रीसेट कर दिए गए!');
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>सभी इमेज रीसेट करें (Reset All)</span>
              </button>
            </div>

            {/* Image Slots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(imageSlots).map((slot) => {
                const hasCustom = !!slot.currentUrl;
                return (
                  <div
                    key={slot.id}
                    className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-2xs transition-all hover:border-[#1b3f2b]/30"
                  >
                    <div>
                      {/* Slot Header */}
                      <div className="flex items-start justify-between gap-2 pb-3 border-b border-gray-100">
                        <div>
                          <h4 className="font-hindi text-base font-bold text-[#153322]">
                            {slot.nameHi}
                          </h4>
                          <span className="text-[11px] font-mono text-gray-500">
                            {slot.name} · ({slot.aspectRatio})
                          </span>
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                          hasCustom ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {hasCustom ? 'कस्टम इमेज सक्रिय' : 'डिफ़ॉल्ट विजुअल'}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mt-2 font-hindi">
                        {slot.descriptionHi}
                      </p>

                      {/* Image Preview Box */}
                      <div className="mt-4 flex items-center justify-center rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-4 h-52 overflow-hidden relative group">
                        {slot.id === 'heroLogo' && !hasCustom ? (
                          <div className="scale-75">
                            <ApniLogo size="md" />
                          </div>
                        ) : hasCustom ? (
                          <img
                            src={slot.currentUrl!}
                            alt={slot.name}
                            className="max-h-full max-w-full object-contain rounded-xl shadow-2xs"
                          />
                        ) : (
                          <div className="text-center text-gray-400 p-4">
                            <ImageIcon className="h-10 w-10 mx-auto text-gray-300 mb-2" />
                            <div className="text-xs font-semibold text-gray-600">डिफ़ॉल्ट वेक्टर / CSS विजुअल सक्रिय है</div>
                            <div className="text-[10px] text-gray-400 mt-1">नई इमेज अपलोड करने के लिए नीचे बटन दबाएँ</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => triggerUpload(slot.id)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1b3f2b] py-2.5 px-3 text-xs font-bold text-white shadow-2xs hover:bg-[#122e1e] transition-colors"
                      >
                        <Upload className="h-3.5 w-3.5" />
                        <span>{hasCustom ? 'इमेज बदलें (Replace)' : 'नई इमेज चुनें (Upload)'}</span>
                      </button>

                      {hasCustom && (
                        <button
                          type="button"
                          onClick={() => {
                            resetImageSlot(slot.id);
                            showNotification(`${slot.nameHi} डिफ़ॉल्ट पर रीसेट कर दी गई!`);
                          }}
                          className="inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 p-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-100"
                          title="डिफ़ॉल्ट पर रीसेट करें"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: BILINGUAL CONTENT EDITOR */}
        {activeTab === 'content' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-gray-200 shadow-2xs">
              <div>
                <h3 className="font-hindi text-lg font-bold text-[#153322]">
                  द्विभाषी टेक्स्ट संपादन (Hindi & English Content)
                </h3>
                <p className="text-xs text-[#526357]">
                  सार्वजनिक वेबसाइट का मुख्य टेक्स्ट यहाँ से तुरंत अद्यतन करें।
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  resetContent();
                  showNotification('सभी टेक्स्ट डिफ़ॉल्ट पर रीसेट कर दिए गए!');
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>टेक्स्ट रीसेट करें</span>
              </button>
            </div>

            {/* Protected Brand Phrase Notice */}
            <div className="rounded-3xl border border-amber-300 bg-amber-50/80 p-5 text-xs text-amber-900 flex items-start gap-3.5">
              <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider">सुरक्षित ब्रांड टैगलाइन (Protected Brand Phrase):</span>
                <div className="font-hindi font-black text-lg text-[#153322] mt-0.5">
                  “{content.brandPhraseHi}” / “{content.brandPhrase}”
                </div>
                <p className="text-xs text-amber-800 mt-1">
                  यह मुख्य ब्रांड पहचान है और अंग्रेजी मोड में भी सुरक्षित हिंदी रूप में प्रदर्शित होती है।
                </p>
              </div>
            </div>

            {/* Content Fields */}
            <div className="space-y-6">
              
              {/* Hero Section Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1b3f2b] pb-2 border-b border-gray-100">
                  1. हीरो सेक्शन (Hero Section)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-hindi mb-1">
                      मुख्य हेडलाइन (Hindi)
                    </label>
                    <input
                      type="text"
                      value={content.heroHeadlineHi}
                      onChange={(e) => updateContent('heroHeadlineHi', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs font-hindi text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Headline in English Mode (Brand preserved)
                    </label>
                    <input
                      type="text"
                      value={content.heroHeadlineEn}
                      onChange={(e) => updateContent('heroHeadlineEn', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-hindi mb-1">
                      सबलाइन (Hindi Subline)
                    </label>
                    <input
                      type="text"
                      value={content.heroSublineHi}
                      onChange={(e) => updateContent('heroSublineHi', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs font-hindi text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Subline (English)
                    </label>
                    <input
                      type="text"
                      value={content.heroSublineEn}
                      onChange={(e) => updateContent('heroSublineEn', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-hindi mb-1">
                      डाउनलोड बटन टेक्स्ट (Hindi CTA)
                    </label>
                    <input
                      type="text"
                      value={content.heroCtaHi}
                      onChange={(e) => updateContent('heroCtaHi', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs font-hindi text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Download Button Text (English CTA)
                    </label>
                    <input
                      type="text"
                      value={content.heroCtaEn}
                      onChange={(e) => updateContent('heroCtaEn', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Problem Section Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1b3f2b] pb-2 border-b border-gray-100">
                  2. समस्या व अवलोकन (Problem Section)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-hindi mb-1">
                      समस्या हेडिंग (Hindi)
                    </label>
                    <input
                      type="text"
                      value={content.problemTitleHi}
                      onChange={(e) => updateContent('problemTitleHi', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs font-hindi text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Problem Heading (English)
                    </label>
                    <input
                      type="text"
                      value={content.problemTitleEn}
                      onChange={(e) => updateContent('problemTitleEn', e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-2xs">
              <h3 className="font-hindi text-lg font-bold text-[#153322] pb-3 border-b border-gray-100">
                सामान्य सेटिंग्स (General Settings)
              </h3>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  डिफ़ॉल्ट सक्रिय भाषा (Default Active Language)
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setLang('hi');
                      showNotification('डिफ़ॉल्ट भाषा हिन्दी सेट की गई');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-hindi transition-all ${
                      lang === 'hi' ? 'bg-[#1b3f2b] text-white shadow-xs' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    हिन्दी (Hindi - डिफ़ॉल्ट)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      showNotification('Default language set to English');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      lang === 'en' ? 'bg-[#1b3f2b] text-white shadow-xs' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  व्हाट्सएप सपोर्ट नंबर (WhatsApp Contact)
                </label>
                <input
                  type="text"
                  value={content.whatsappNumber}
                  onChange={(e) => updateContent('whatsappNumber', e.target.value)}
                  className="w-full max-w-sm rounded-xl border border-gray-200 p-3 text-xs font-mono text-gray-900 focus:border-[#1b3f2b] focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Admin Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 mt-12 text-center text-xs text-gray-500">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="font-bold text-[#1b3f2b] hover:underline"
          >
            ← सार्वजनिक वेबसाइट पर लौटें (Return to Website)
          </button>
          <span>·</span>
          <span>Apni Dukaan Admin Panel</span>
        </div>
      </footer>

    </div>
  );
}
