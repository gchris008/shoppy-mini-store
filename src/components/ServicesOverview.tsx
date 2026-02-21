import { useLanguage } from '@/contexts/LanguageContext';
import { Play, CreditCard, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  { id: 'streaming', icon: Play, color: 'from-red-500 to-pink-500' },
  { id: 'cards', icon: CreditCard, color: 'from-blue-500 to-indigo-500' },
  { id: 'recharge', icon: Smartphone, color: 'from-yellow-500 to-orange-500' },
  { id: 'crypto', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
] as const;

const ServicesOverview = () => {
  const { t } = useLanguage();

  const getTitle = (id: string) => t(`${id}Title` as any);
  const getDesc = (id: string) => t(`${id}Desc` as any);

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            {t('servicesTitle')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('servicesSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group gradient-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {getTitle(service.id)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getDesc(service.id)}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
