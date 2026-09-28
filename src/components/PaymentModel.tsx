import { Banknote, QrCode, Calendar, Check, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function PaymentModel() {
  const { t } = useContent();

  const paymentMethods = [
    {
      id: 'cod',
      titleHi: 'कैश ऑन डिलीवरी (COD)',
      titleEn: 'Cash on Delivery (COD)',
      descHi: 'सामान घर पहुँचने पर नकद भुगतान करें। किसी भी ऑनलाइन ऐप की बाध्यता नहीं।',
      descEn: 'Pay in cash directly upon verifying your milk and grocery items at the door.',
      icon: Banknote,
      status: 'live',
      statusTextHi: 'सक्रिय (Live)',
      statusTextEn: 'Active (Live)',
    },
    {
      id: 'upi',
      titleHi: 'UPI / ऑनलाइन भुगतान',
      titleEn: 'Instant UPI / Online',
      descHi: 'Google Pay, PhonePe, Paytm या किसी भी BHIM UPI ऐप से तुरंत और सुरक्षित भुगतान।',
      descEn: 'Scan & pay with Google Pay, PhonePe, Paytm, or any BHIM UPI app securely.',
      icon: QrCode,
      status: 'live',
      statusTextHi: 'सक्रिय (Live)',
      statusTextEn: 'Active (Live)',
    },
    {
      id: 'monthly-khata',
      titleHi: 'मासिक खाता (डिजिटल खाता)',
      titleEn: 'Monthly Khata (Account)',
      descHi: 'स्थानीय डेयरी के साथ नियमित परिवारों के लिए महीने के अंत में डिजिटल हिसाब व भुगतान।',
      descEn: 'Digital monthly milk accounting and ledger for regular daily households.',
      icon: Calendar,
      status: 'planned',
      statusTextHi: 'प्रस्तावित (Coming Soon)',
      statusTextEn: 'Planned (Coming Soon)',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] border-b border-[#1b3f2b]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#265337] mb-2">
            {t('भुगतान विकल्प · पारदर्शी व सुरक्षित', 'Payment Options · Transparent & Secure')}
          </div>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153322] tracking-tight">
            {t('सुविधाजनक भुगतान व्यवस्था', 'Convenient Payment Options')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#47574d] leading-relaxed">
            {t(
              'हम किसी अतिरिक्त प्लेटफार्म चार्ज या छिपे हुए शुल्क के बिना वही दाम लेते हैं जो आपकी स्थानीय दुकान का है।',
              'You pay the exact neighborhood dairy shelf price. Zero platform markups or hidden delivery fees.'
            )}
          </p>
        </div>

        {/* Payment Method Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((pm) => {
            const Icon = pm.icon;
            const isLive = pm.status === 'live';
            return (
              <div
                key={pm.id}
                className="relative rounded-3xl border border-[#1b3f2b]/15 bg-white p-7 shadow-dairy-sm transition-all hover:border-[#1b3f2b]/30 hover:shadow-dairy-md flex flex-col justify-between"
              >
                <div>
                  {/* Status header unboxed */}
                  <div className="flex items-center justify-between text-xs font-semibold pb-4 border-b border-gray-100">
                    <span className="text-gray-500 font-mono text-[11px] uppercase">
                      {pm.titleEn}
                    </span>
                    <span className={`inline-flex items-center gap-1 ${
                      isLive ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'
                    }`}>
                      {isLive ? <Check className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                      <span>{t(pm.statusTextHi, pm.statusTextEn)}</span>
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b3f2b]/10 text-[#1b3f2b]">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-hindi text-xl font-bold text-[#153322] mt-4">
                    {t(pm.titleHi, pm.titleEn)}
                  </h3>
                  <p className="font-hindi text-sm text-[#415247] mt-2 leading-relaxed">
                    {t(pm.descHi, pm.descEn)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  {isLive 
                    ? t('वर्तमान में चालू सुविधा', 'Fully operational feature') 
                    : t('आगामी रिलीज़ में सक्रिय', 'Scheduled for upcoming rollout')}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
