import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, Zap, Headphones, Package } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Package, label: t('heroStats1') },
    { icon: Zap, label: t('heroStats2') },
    { icon: Headphones, label: t('heroStats3') },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center gradient-hero overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
          <ShoppingBag className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Shoppy Mini Store</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">{t('heroTitle')}</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {t('heroSubtitle')}
        </p>

        <a
          href="#services"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gradient-primary text-primary-foreground shadow-emerald hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t('heroCta')}
        </a>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;