import React, { createContext, useContext, useState, useEffect } from 'react';
import { APP_DEPLOY_URL, WHATSAPP_PHONE } from '../data/dairyData';

export type Language = 'hi' | 'en';

export interface ImageSlotConfig {
  id: string;
  name: string;
  nameHi: string;
  aspectRatio: string;
  description: string;
  descriptionHi: string;
  currentUrl: string | null;
}

export interface WebsiteContent {
  // Brand Phrases (Protected - never translated)
  brandPhrase: string;
  brandPhraseHi: string;
  
  // Hero
  heroHeadlineHi: string;
  heroHeadlineEn: string;
  heroSublineHi: string;
  heroSublineEn: string;
  heroDescHi: string;
  heroDescEn: string;
  heroCtaHi: string;
  heroCtaEn: string;

  // Problem
  problemTitleHi: string;
  problemTitleEn: string;
  problemDescHi: string;
  problemDescEn: string;

  // Solution / Philosophy
  whyTitleHi: string;
  whyTitleEn: string;
  whyDescHi: string;
  whyDescEn: string;

  // Settings
  appUrl: string;
  whatsappNumber: string;
}

const DEFAULT_CONTENT: WebsiteContent = {
  brandPhrase: 'Apne Ghar ki Apni Dukaan',
  brandPhraseHi: 'अपने घर की अपनी दुकान',
  
  heroHeadlineHi: 'अपने घर की अपनी दुकान',
  heroHeadlineEn: 'Apne Ghar ki Apni Dukaan', // Brand phrase preserved in English mode as required!
  
  heroSublineHi: 'आपकी रोज़मर्रा की ज़रूरतें, आपकी अपनी नज़दीकी डेयरी से।',
  heroSublineEn: 'Your everyday household needs, from your trusted nearby local dairy.',
  
  heroDescHi: 'Apni Dukaan आपके घर के पास की परिचित दुकान और डेयरी को एक सरल डिजिटल अनुभव से जोड़ती है — बिना किसी 10-मिनट डिलीवरी के ड्रामे के, सिर्फ सच्ची और आसान सुविधा।',
  heroDescEn: 'Apni Dukaan connects households with their nearby local store and dairy through a simple digital experience — no 10-minute delivery gimmicks, just genuine local convenience.',
  
  heroCtaHi: 'ऐप डाउनलोड करें',
  heroCtaEn: 'Download App',

  problemTitleHi: 'एक छोटी सी समस्या थी।',
  problemTitleEn: 'There was a simple local problem.',
  problemDescHi: 'दुकान घर से सिर्फ 200-300 मीटर दूर थी। समस्या यह नहीं थी कि दुकान दूर है; समस्या यह थी कि नज़दीकी दुकान डिजिटल रूप से सुविधाजनक नहीं थी।',
  problemDescEn: 'The local shop was barely 200-300 meters away. The issue was never distance; the problem was that the nearby shop lacked a simple digital interface.',

  whyTitleHi: 'नज़दीकी दुकान को दूर की ऐप क्यों बनाएं?',
  whyTitleEn: 'Why replace your local shop with a distant app?',
  whyDescHi: 'स्थानीय दुकानें पहले से मौजूद हैं। हमारा लक्ष्य उन्हें बदलना नहीं, बल्कि उन्हें एक आसान डिजिटल शक्ति देना है।',
  whyDescEn: 'Neighborhood shops already have trust and proximity. Our goal is not to replace them, but to give them a modern, simple digital bridge.',

  appUrl: APP_DEPLOY_URL,
  whatsappNumber: WHATSAPP_PHONE,
};

const DEFAULT_IMAGE_SLOTS: Record<string, ImageSlotConfig> = {
  heroLogo: {
    id: 'heroLogo',
    name: 'Hero 3D Floating Logo',
    nameHi: 'हीरो 3D फ्लोटिंग लोगो',
    aspectRatio: '1:1',
    description: 'Main Apni Dukaan logo shown in the hero 3D card.',
    descriptionHi: 'हीरो सेक्शन के 3D कार्ड में दिखने वाला मुख्य Apni Dukaan लोगो।',
    currentUrl: null,
  },
  heroBanner: {
    id: 'heroBanner',
    name: 'Hero Showcase Visual',
    nameHi: 'हीरो मुख्य विजुअल',
    aspectRatio: '16:9 or 4:3',
    description: 'Background or primary showcase graphic in hero.',
    descriptionHi: 'हीरो सेक्शन का मुख्य डिस्प्ले विजुअल।',
    currentUrl: null,
  },
  storyImage: {
    id: 'storyImage',
    name: 'Our Story & Problem Visual',
    nameHi: 'कहानी व समस्या विजुअल',
    aspectRatio: '4:3',
    description: 'Visual illustrating local neighborhood shopping realities.',
    descriptionHi: 'पारंपरिक खरीदारी व मोहल्ले की डेयरी का विजुअल।',
    currentUrl: null,
  },
  howItWorksImage: {
    id: 'howItWorksImage',
    name: 'How It Works / Workflow Visual',
    nameHi: 'कार्य प्रणाली विजुअल',
    aspectRatio: '16:9',
    description: 'Visual for dairy merchant dashboard or customer ordering flow.',
    descriptionHi: 'दुकानदार डैशबोर्ड या डिलीवरी प्रक्रिया का विजुअल।',
    currentUrl: null,
  },
  builderImage: {
    id: 'builderImage',
    name: 'Founder / Builder Section Visual',
    nameHi: 'संस्थापक व निर्माण कहानी विजुअल',
    aspectRatio: '4:3',
    description: 'Real photo or visual for the founder & learning journey.',
    descriptionHi: 'संस्थापक और ज़मीनी अनुभव के लिए विजुअल।',
    currentUrl: null,
  },
};

interface ContentContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (hi?: string, en?: string) => string;
  content: WebsiteContent;
  updateContent: (key: keyof WebsiteContent, val: string) => void;
  resetContent: () => void;
  imageSlots: Record<string, ImageSlotConfig>;
  updateImageSlot: (slotId: string, url: string) => void;
  resetImageSlot: (slotId: string) => void;
  resetAllImages: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language state: default 'hi'
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('apni_dairy_lang');
      if (saved === 'hi' || saved === 'en') return saved;
    } catch (e) {
      // ignore
    }
    return 'hi';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('apni_dairy_lang', newLang);
      document.documentElement.lang = newLang;
    } catch (e) {
      // ignore
    }
  };

  // Helper function for quick inline bilingual text
  const t = (hi: string = '', en: string = '') => (lang === 'hi' ? hi : en || hi);

  // 2. Content overrides state
  const [content, setContentState] = useState<WebsiteContent>(() => {
    try {
      const saved = localStorage.getItem('apni_dairy_content_v1');
      if (saved) {
        return { ...DEFAULT_CONTENT, ...JSON.parse(saved) };
      }
    } catch (e) {
      // ignore
    }
    return DEFAULT_CONTENT;
  });

  const updateContent = (key: keyof WebsiteContent, val: string) => {
    setContentState((prev) => {
      const next = { ...prev, [key]: val };
      try {
        localStorage.setItem('apni_dairy_content_v1', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  const resetContent = () => {
    setContentState(DEFAULT_CONTENT);
    try {
      localStorage.removeItem('apni_dairy_content_v1');
    } catch (e) {
      // ignore
    }
  };

  // 3. Image slots state
  const [imageSlots, setImageSlotsState] = useState<Record<string, ImageSlotConfig>>(() => {
    try {
      const saved = localStorage.getItem('apni_dairy_images_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...DEFAULT_IMAGE_SLOTS };
        Object.keys(parsed).forEach((k) => {
          if (merged[k]) {
            merged[k].currentUrl = parsed[k];
          }
        });
        return merged;
      }
    } catch (e) {
      // ignore
    }
    return DEFAULT_IMAGE_SLOTS;
  });

  const updateImageSlot = (slotId: string, url: string) => {
    setImageSlotsState((prev) => {
      const updated = {
        ...prev,
        [slotId]: {
          ...prev[slotId],
          currentUrl: url,
        },
      };
      try {
        const persistObj: Record<string, string | null> = {};
        Object.keys(updated).forEach((k) => {
          persistObj[k] = updated[k].currentUrl;
        });
        localStorage.setItem('apni_dairy_images_v1', JSON.stringify(persistObj));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const resetImageSlot = (slotId: string) => {
    updateImageSlot(slotId, '');
  };

  const resetAllImages = () => {
    setImageSlotsState(DEFAULT_IMAGE_SLOTS);
    try {
      localStorage.removeItem('apni_dairy_images_v1');
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <ContentContext.Provider
      value={{
        lang,
        setLang,
        t,
        content,
        updateContent,
        resetContent,
        imageSlots,
        updateImageSlot,
        resetImageSlot,
        resetAllImages,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return ctx;
};
