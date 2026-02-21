import { useLanguage } from '@/contexts/LanguageContext';
import { Gamepad2, Zap } from 'lucide-react';

const GamingSection = () => {
  const { t } = useLanguage();

  const products = [
    { name: 'Free Fire', currency: 'Diamants', options: [100, 310, 520, 1060], pricePerUnit: 0.01, color: 'from-yellow-500 to-orange-500', icon: '🔥' },
    { name: 'PUBG Mobile', currency: 'UC', options: [60, 325, 660, 1800], pricePerUnit: 0.015, color: 'from-yellow-600 to-amber-500', icon: '🎯' },
    { name: 'Call of Duty Mobile', currency: 'CP', options: [80, 420, 880, 2400], pricePerUnit: 0.012, color: 'from-green-700 to-green-500', icon: '🎖️' },
    { name: 'Roblox', currency: 'Robux', options: [400, 800, 1700, 4500], pricePerUnit: 0.0125, color: 'from-red-500 to-red-400', icon: '🧱' },
    { name: 'PlayStation Network', currency: 'USD', options: [10, 25, 50, 100], pricePerUnit: 1, color: 'from-blue-700 to-blue-500', icon: '🎮' },
    { name: 'Xbox Gift Card', currency: 'USD', options: [10, 25, 50, 100], pricePerUnit: 1, color: 'from-green-600 to-green-400', icon: '🟢' },
    { name: 'Nintendo eShop', currency: 'USD', options: [10, 20, 35, 50], pricePerUnit: 1, color: 'from-red-600 to-red-400', icon: '🍄' },
    { name: 'Steam Card', currency: 'USD', options: [5, 10, 20, 50], pricePerUnit: 1, color: 'from-slate-700 to-slate-500', icon: '🎲' },
    { name: 'Razer Gold', currency: 'USD', options: [5, 10, 25, 50], pricePerUnit: 1, color: 'from-green-500 to-lime-400', icon: '🐍' },
    { name: 'Mobile Legends', currency: 'Diamants', options: [86, 172, 344, 706], pricePerUnit: 0.018, color: 'from-blue-500 to-cyan-400', icon: '⚔️' },
  ];

  return (
    <section id="gaming" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Gamepad2 className="w-7 h-7 text-primary" />
          <h2 className="font-display text-3xl font-bold text-foreground">{t('gamingTitle')}</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12">{t('gamingDesc')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.name} className="rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              <div className={`bg-gradient-to-br ${product.color} p-5 flex items-center gap-3`}>
                <span className="text-3xl">{product.icon}</span>
                <div>
                  <span className="text-primary-foreground font-display font-bold">{product.name}</span>
                  <p className="text-primary-foreground/80 text-xs">{product.currency}</p>
                </div>
              </div>
              <div className="p-4 gradient-card space-y-2">
                {product.options.map((amount) => {
                  const price = +(amount * product.pricePerUnit).toFixed(2);
                  const fee = +(price * 0.10).toFixed(2);
                  const total = +(price + fee).toFixed(2);
                  return (
                    <div key={amount} className="flex items-center justify-between p-2.5 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                      <div>
                        <span className="text-sm font-semibold text-foreground">{amount.toLocaleString()} {product.currency}</span>
                        <span className="text-[10px] text-muted-foreground ml-2">(+${fee} frais)</span>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg text-xs font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        ${total}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingSection;