import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { WHATSAPP_RAW_NUMBER } from '../data/dairyData';

export default function FinalCTA() {
  const { content, t } = useContent();

  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
    t(
      'नमस्ते! मैं Apni Dukaan के बारे में जानकारी चाहता हूँ / बल्क ऑर्डर देना चाहता हूँ।',
      'Hello! I would like to know more about Apni Dukaan / place a bulk order.'
    )
  )}`;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1b3f2b] to-[#122b1d] text-white relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-0 flex justify-center items-center opacity-30"
      >
        <div className="h-[400px] w-[700px] rounded-full bg-emerald-500 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-200">
          <span>{content.brandPhrase}</span>
          <span aria-hidden="true">·</span>
          <span>Apni Dukaan</span>
        </div>

        <h2 className="font-hindi text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] text-dimensional-dark">
          {t('आपकी नज़दीकी दुकान,', 'Your Nearby Store,')}{' '}
          <br className="hidden sm:inline" />
          <span className="text-emerald-300">
            {t('अब आपकी स्क्रीन पर।', 'Now on Your Screen.')}
          </span>
        </h2>

        <p className="font-hindi max-w-2xl mx-auto text-lg sm:text-xl text-emerald-100/90 leading-relaxed">
          {t(
            'Apni Dukaan खोलें और अपने घर की रोज़मर्रा की ज़रूरतें आसान तरीके से ऑर्डर करें।',
            'Open Apni Dukaan and order your daily milk, butter, and pantry essentials the simple local way.'
          )}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={content.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#153322] shadow-dairy-lg transition-all duration-200 hover:bg-emerald-50 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t('ऐप डाउनलोड करें', 'Download the App')}</span>
            <ArrowUpRight className="h-5 w-5 text-[#153322] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white shadow-sm backdrop-blur-xs transition-all hover:bg-white/20 hover:border-white/40"
          >
            <MessageCircle className="h-5 w-5 text-emerald-300" />
            <span>{t('WhatsApp पर बात करें', 'Chat on WhatsApp')}</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-emerald-200/80">
          {t('सीधा संपर्क:', 'Direct Contact:')}{' '}
          <span className="font-mono font-bold text-white">{content.whatsappNumber}</span>
        </div>

      </div>
    </section>
  );
}
