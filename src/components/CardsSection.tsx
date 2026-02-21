import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, Shield, Star, Zap } from 'lucide-react';

const CardsSection = () => {
  const { t } = useLanguage();

  const cards = [
    { name: t('cardsVisa'), icon: CreditCard, price: 5.00, color: 'from-blue-600 to-blue-400', features: ['Achats en ligne', 'Abonnements', 'Valide 1 an'] },
    { name: t('cardsMastercard'), icon: Shield, price: 5.00, color: 'from-orange-500 to-red-500', features: ['Paiements intl.', 'Pubs Facebook', 'Valide 1 an'] },
    { name: t('cardsAmex'), icon: Star, price: 8.00, color: 'from-indigo-600 to-purple-500', features: ['Premium', 'Google Ads', 'Limite élevée'] },
  ];

  return (
    <section id="cards" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-3 text-foreground">{t('cardsTitle')}</h2>
        <p className="text-center text-muted-foreground mb-12">{t('cardsDesc')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            const fee = +(card.price * 0.10).toFixed(2);
            const total = +(card.price + fee).toFixed(2);
            return (
              <div key={card.name} className="rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${card.color} p-8 flex flex-col items-center`}>
                  <Icon className="w-12 h-12 text-primary-foreground mb-3" />
                  <span className="text-primary-foreground font-display font-bold text-lg">{card.name}</span>
                </div>
                <div className="p-6 gradient-card">
                  <ul className="space-y-1.5 mb-4">
                    {card.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-foreground">${card.price}</span>
                    <div className="flex items-center gap-1 text-primary text-sm">
                      <Zap className="w-4 h-4" />
                      {t('instant')}
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground mb-3 border-t border-border pt-2 space-y-0.5">
                    <div className="flex justify-between"><span>{t('feesLabel')}</span><span>${fee}</span></div>
                    <div className="flex justify-between font-semibold text-foreground"><span>{t('feesTotal')}</span><span>${total}</span></div>
                  </div>
                  <button className="w-full py-3 rounded-xl font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    {t('cardsOrder')}
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

export default CardsSection;