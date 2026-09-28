import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { WHATSAPP_RAW_NUMBER } from '../data/dairyData';

export default function WhatsAppFloatingButton() {
  const { content, t } = useContent();
  const [showQuickModal, setShowQuickModal] = useState(false);
  const [orderType, setOrderType] = useState('bulk');
  const [userNote, setUserNote] = useState('');

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    let text = t('नमस्ते! मुझे Apni Dukaan से संपर्क करना है।', 'Hello! I want to contact Apni Dukaan.');
    
    if (orderType === 'bulk') {
      text = t(
        `नमस्ते! मुझे शादी / पार्टी / कार्यक्रम के लिए बल्क ऑर्डर (Bulk Order) की जानकारी चाहिए। ${userNote ? `विवरण: ${userNote}` : ''}`,
        `Hello! I need information regarding a bulk / party order. ${userNote ? `Details: ${userNote}` : ''}`
      );
    } else if (orderType === 'monthly') {
      text = t(
        `नमस्ते! मैं अपने घर के लिए मासिक दूध व्यवस्था (Monthly Milk Delivery) के बारे में बात करना चाहता हूँ। ${userNote ? `विवरण: ${userNote}` : ''}`,
        `Hello! I would like to inquire about monthly milk delivery for my household. ${userNote ? `Details: ${userNote}` : ''}`
      );
    } else if (userNote) {
      text = `${t('नमस्ते! सवाल:', 'Hello! Inquiry:')} ${userNote}`;
    }

    const url = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowQuickModal(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <aside 
        aria-label="WhatsApp Support and Inquiries" 
        className="fixed bottom-5 right-5 z-40 flex flex-col items-end"
      >
        <button
          type="button"
          onClick={() => setShowQuickModal(!showQuickModal)}
          className="group flex items-center gap-2.5 rounded-full bg-[#1b3f2b] p-3.5 sm:px-5 sm:py-3.5 text-white shadow-dairy-lg transition-all duration-200 hover:bg-[#142e1f] hover:scale-105 active:scale-95"
          aria-label={t('WhatsApp पर बात करें या बल्क ऑर्डर दें', 'Chat on WhatsApp or place a bulk inquiry')}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping group-hover:opacity-100" />
            <MessageCircle className="relative h-6 w-6 text-emerald-300" />
          </div>
          <span className="hidden sm:inline font-hindi text-sm font-bold tracking-tight">
            {t('WhatsApp पर बात करें', 'WhatsApp Chat')}
          </span>
        </button>
      </aside>

      {/* Quick WhatsApp Inquiry Popover */}
      {showQuickModal && (
        <div className="fixed bottom-20 right-5 z-50 w-[320px] sm:w-[360px] rounded-3xl border border-[#1b3f2b]/15 bg-white p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-hindi text-sm font-bold text-[#153322]">
                  {t('सीधा WhatsApp संपर्क', 'Direct WhatsApp Contact')}
                </h4>
                <div className="font-mono text-[11px] text-gray-500">
                  {content.whatsappNumber}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowQuickModal(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleOpenWhatsApp} className="mt-4 space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                {t('आप क्या पूछना चाहते हैं?', 'What is your inquiry?')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('bulk')}
                  className={`rounded-xl p-2 text-xs font-bold font-hindi border transition-all ${
                    orderType === 'bulk'
                      ? 'border-[#1b3f2b] bg-[#1b3f2b]/10 text-[#1b3f2b]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t('बल्क / पार्टी ऑर्डर', 'Bulk Order')}
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('monthly')}
                  className={`rounded-xl p-2 text-xs font-bold font-hindi border transition-all ${
                    orderType === 'monthly'
                      ? 'border-[#1b3f2b] bg-[#1b3f2b]/10 text-[#1b3f2b]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t('मासिक दूध की बात', 'Monthly Milk')}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                {t('संदेश (वैकल्पिक):', 'Message (Optional):')}
              </label>
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder={t(
                  'जैसे: मुझे कल सुबह 10 लीटर दूध और 20 कोल्ड ड्रिंक्स चाहिए...',
                  'e.g., We need 10L milk and 20 cold drinks tomorrow morning...'
                )}
                rows={2}
                className="w-full rounded-xl border border-gray-200 p-2.5 text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#1b3f2b] focus:outline-none focus:ring-1 focus:ring-[#1b3f2b]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
            >
              <span>{t('WhatsApp पर भेजें', 'Send on WhatsApp')}</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
