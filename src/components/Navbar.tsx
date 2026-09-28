import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { content, t } = useContent();

  const navLinks = [
    { labelHi: 'समस्या', labelEn: 'The Problem', href: '#problem' },
    { labelHi: 'काम कैसे करता है', labelEn: 'How It Works', href: '#how-it-works' },
    { labelHi: 'उत्पाद', labelEn: 'Products', href: '#products' },
    { labelHi: 'नीतियाँ', labelEn: 'Policies', href: '#policies' },
    { labelHi: 'कहानी', labelEn: 'Our Story', href: '#about' },
    { labelHi: 'FAQ', labelEn: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1b3f2b]/10 bg-[#faf8f5]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-2xl font-black tracking-tight text-[#153322] transition-opacity hover:opacity-90 font-hindi"
        >
          Apni Dukaan
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-[#2d3a31]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#153322] hover:underline underline-offset-8 decoration-2 decoration-[#2d6343]"
            >
              {t(link.labelHi, link.labelEn)}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language switcher + primary action */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Bilingual Switcher */}
          <LanguageSwitcher />

          {/* Primary Action Button */}
          <a
            href={content.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#1b3f2b] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-dairy-sm transition-all duration-200 hover:bg-[#142e1f] hover:shadow-dairy-md active:scale-[0.98] whitespace-nowrap"
          >
            <span>{t(content.heroCtaHi, content.heroCtaEn)}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-[#1b3f2b] hover:bg-[#1b3f2b]/10 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1b3f2b]/10 bg-[#faf8f5] px-4 pt-3 pb-6 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-[#1b251f] hover:bg-[#1b3f2b]/5 transition-colors"
              >
                {t(link.labelHi, link.labelEn)}
              </a>
            ))}

            <div className="pt-3 border-t border-[#1b3f2b]/10">
              <a
                href={content.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b3f2b] py-3 text-sm font-semibold text-white shadow-sm"
              >
                <span>{t(content.heroCtaHi, content.heroCtaEn)}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
