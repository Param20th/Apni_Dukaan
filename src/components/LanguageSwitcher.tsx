import { useContent } from '../context/ContentContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useContent();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-xl bg-[#1b3f2b]/8 p-1 border border-[#1b3f2b]/15 text-xs font-semibold ${className}`}
    >
      <div className="flex items-center pl-1.5 pr-1 text-[#1b3f2b]/70" aria-hidden="true">
        <Globe className="h-3.5 w-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLang('hi')}
        className={`rounded-lg px-2.5 py-1 transition-all font-hindi font-bold ${
          lang === 'hi'
            ? 'bg-[#1b3f2b] text-white shadow-xs'
            : 'text-[#394d3f] hover:text-[#153322]'
        }`}
        aria-pressed={lang === 'hi'}
      >
        हिन्दी
      </button>

      <span className="text-[#1b3f2b]/30 px-0.5 select-none" aria-hidden="true">|</span>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-lg px-2.5 py-1 transition-all font-sans font-bold ${
          lang === 'en'
            ? 'bg-[#1b3f2b] text-white shadow-xs'
            : 'text-[#394d3f] hover:text-[#153322]'
        }`}
        aria-pressed={lang === 'en'}
      >
        English
      </button>
    </div>
  );
}
