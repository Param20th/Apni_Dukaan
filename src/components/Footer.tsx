import { MessageCircle, Heart, ArrowUpRight, Lock } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { WHATSAPP_RAW_NUMBER } from '../data/dairyData';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { content, t } = useContent();
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
    t('नमस्ते! मुझे Apni Dukaan से संपर्क करना है।', 'Hello! I would like to contact Apni Dukaan.')
  )}`;

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/admin');
    } else {
      window.location.pathname = '/admin';
    }
  };

  return (
    <footer className="border-t border-[#1b3f2b]/10 bg-[#faf8f5] text-[#243329] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1b3f2b]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-hindi text-2xl font-black text-[#153322]">
              Apni Dukaan
            </a>
            <p className="font-hindi text-lg font-bold text-[#205234]">
              {content.brandPhrase}
            </p>
            <p className="max-w-sm text-sm text-[#4d5e53] leading-relaxed">
              {t(
                'स्थानीय डेयरी और पड़ोस के परिवारों को जोड़ने वाला सरल और विश्वसनीय डिजिटल माध्यम।',
                'Connecting neighborhood dairies with local households through a clean digital ordering experience.'
              )}
            </p>
            <div className="text-xs text-[#5f7065] flex items-center gap-1.5 pt-1">
              <span>Built with technology for local commerce.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#153322]">
              {t('नेविगेशन (Navigation)', 'Navigation')}
            </div>
            <ul className="space-y-2 text-sm text-[#384a3f]">
              <li>
                <a href="#" className="hover:text-[#153322] transition-colors">{t('होम (Home)', 'Home')}</a>
              </li>
              <li>
                <a href="#problem" className="hover:text-[#153322] transition-colors">{t('समस्या (The Problem)', 'The Problem')}</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#153322] transition-colors">{t('काम कैसे करता है (How It Works)', 'How It Works')}</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#153322] transition-colors">{t('उत्पाद (Products)', 'Products')}</a>
              </li>
              <li>
                <a href="#policies" className="hover:text-[#153322] transition-colors">{t('नीतियाँ (Policies)', 'Policies')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#153322] transition-colors">{t('हमारे बारे में (Our Story)', 'Our Story')}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#153322] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#153322]">
              {t('संपर्क व सहायता (Contact)', 'Contact & Support')}
            </div>
            <p className="text-xs text-[#47574d] leading-relaxed">
              {t(
                'किसी भी बल्क ऑर्डर, विशेष व्यवस्था या तकनीकी पूछताछ के लिए सीधे हमारी सहायता टीम से संपर्क करें:',
                'For bulk party orders, recurring supply inquiries, or support, chat with us directly:'
              )}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-900/20 bg-white px-4 py-2.5 text-xs font-bold text-[#153322] shadow-2xs hover:border-[#153322] transition-all"
            >
              <MessageCircle className="h-4 w-4 text-emerald-700" />
              <span>WhatsApp: <strong className="font-mono">{content.whatsappNumber}</strong></span>
            </a>

            <div>
              <a
                href={content.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b3f2b] hover:underline"
              >
                <span>Live Apni Dukaan Web Application</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line with discreet /admin link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6a7c71] gap-4">
          <div>
            © {currentYear} Apni Dukaan. {t('सर्वाधिकार सुरक्षित (All Rights Reserved).', 'All Rights Reserved.')}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>{t('पड़ोस के विश्वास के साथ निर्मित', 'Crafted with neighborhood trust')}</span>
              <Heart className="h-3.5 w-3.5 text-emerald-800 fill-current" />
            </div>

            <span>·</span>

            {/* Discrete admin portal link */}
            <a
              href="/admin"
              onClick={handleAdminClick}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors"
              title="Admin Portal"
            >
              <Lock className="h-3 w-3" />
              <span>/admin</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
