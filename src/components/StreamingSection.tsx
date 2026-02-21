import { useLanguage } from '@/contexts/LanguageContext';
import { Zap } from 'lucide-react';

const StreamingSection = () => {
  const { t } = useLanguage();

  const plans = [
    { name: 'Netflix Premium', price: 8.99, features: ['4K Ultra HD', '4 écrans', '30 jours'], popular: true, color: 'from-red-600 to-red-400' },
    { name: 'YouTube Premium', price: 5.99, features: ['Sans pub', 'YouTube Music', '30 jours'], popular: false, color: 'from-red-500 to-orange-400' },
    { name: 'Disney+', price: 7.99, features: ['4K HDR', '4 écrans', '30 jours'], popular: true, color: 'from-blue-600 to-blue-400' },
    { name: 'Amazon Prime', price: 6.99, features: ['HD / 4K', '3 écrans', '30 jours'], popular: false, color: 'from-sky-500 to-cyan-400' },
    { name: 'Paramount+', price: 5.49, features: ['Full HD', '3 écrans', '30 jours'], popular: false, color: 'from-blue-700 to-blue-500' },
    { name: 'Crunchyroll', price: 4.99, features: ['Anime HD', '1 écran', '30 jours'], popular: false, color: 'from-orange-500 to-yellow-400' },
    { name: 'Spotify Premium', price: 4.99, features: ['Sans pub', 'Hors-ligne', '30 jours'], popular: true, color: 'from-green-600 to-green-400' },
    { name: 'Apple Music', price: 5.49, features: ['Lossless', 'Spatial Audio', '30 jours'], popular: false, color: 'from-pink-500 to-rose-400' },
    { name: 'Deezer Premium', price: 4.49, features: ['FLAC HiFi', 'Sans pub', '30 jours'], popular: false, color: 'from-purple-600 to-purple-400' },
    { name: 'IPTV Pro', price: 12.99, features: ['2000+ chaînes', 'HD/4K', '30 jours'], popular: true, color: 'from-indigo-600 to-indigo-400' },
  ];

  return (
    <section id="streaming" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-3 text-foreground">{t('streamingTitle')}</h2>
        <p className="text-center text-muted-foreground mb-12">{t('streamingDesc')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const fee = +(plan.price * 0.10).toFixed(2);
            const total = +(plan.price + fee).toFixed(2);
            return (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'border-primary shadow-emerald' : 'border-border shadow-card'
                }`}
              >
                <div className={`bg-gradient-to-br ${plan.color} p-5 relative`}>
                  {plan.popular && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-background/90 text-primary">
                      {t('popular')}
                    </span>
                  )}
                  <span className="text-primary-foreground font-display font-bold text-lg">{plan.name}</span>
                </div>
                <div className="p-5 gradient-card">
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-xs text-muted-foreground">{t('perMonth')}</span>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-muted-foreground mb-3 border-t border-border pt-2 space-y-0.5">
                    <div className="flex justify-between"><span>{t('feesLabel')}</span><span>${fee}</span></div>
                    <div className="flex justify-between font-semibold text-foreground"><span>{t('feesTotal')}</span><span>${total}</span></div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl text-sm font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    {t('streamingBuy')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;