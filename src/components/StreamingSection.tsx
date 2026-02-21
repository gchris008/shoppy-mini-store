import { useLanguage } from '@/contexts/LanguageContext';

const StreamingSection = () => {
  const { t } = useLanguage();

  const plans = [
    { name: t('streamingNetflix'), price: '$8.99', features: ['HD', '1 écran', '30 jours'], popular: true },
    { name: t('streamingYoutube'), price: '$5.99', features: ['Sans pub', 'YouTube Music', '30 jours'], popular: false },
  ];

  return (
    <section id="streaming" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-3 text-foreground">{t('streamingTitle')}</h2>
        <p className="text-center text-muted-foreground mb-12">{t('streamingDesc')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-primary shadow-emerald gradient-card'
                  : 'border-border gradient-card shadow-card'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground mb-4">
                  Populaire
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{plan.price}<span className="text-sm text-muted-foreground font-normal">/mois</span></p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                {t('streamingBuy')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
