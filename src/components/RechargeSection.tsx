import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone } from 'lucide-react';

const RechargeSection = () => {
  const { t } = useLanguage();
  const [provider, setProvider] = useState<'digicel' | 'natcom'>('digicel');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const amounts = [50, 100, 250, 500, 1000];

  return (
    <section id="recharge" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-lg">
        <h2 className="font-display text-3xl font-bold text-center mb-3 text-foreground">{t('rechargeTitle')}</h2>
        <p className="text-center text-muted-foreground mb-10">{t('rechargeDesc')}</p>

        <div className="rounded-2xl gradient-card border border-border shadow-card p-6">
          {/* Provider toggle */}
          <div className="flex rounded-xl bg-muted p-1 mb-6">
            <button
              onClick={() => setProvider('digicel')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                provider === 'digicel'
                  ? 'gradient-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('rechargeDigicel')}
            </button>
            <button
              onClick={() => setProvider('natcom')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                provider === 'natcom'
                  ? 'gradient-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('rechargeNatcom')}
            </button>
          </div>

          {/* Phone */}
          <label className="block text-sm font-medium text-foreground mb-2">{t('rechargePhone')}</label>
          <div className="relative mb-5">
            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+509 XXXX XXXX"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>

          {/* Amount */}
          <label className="block text-sm font-medium text-foreground mb-2">{t('rechargeAmount')} (HTG)</label>
          <div className="grid grid-cols-5 gap-2 mb-5">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(String(a))}
                className={`py-2 rounded-lg text-sm font-medium border transition-all ${
                  amount === String(a)
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <button className="w-full py-3.5 rounded-xl font-semibold gradient-primary text-primary-foreground shadow-emerald hover:shadow-float transition-all hover:-translate-y-0.5">
            {t('rechargeSubmit')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RechargeSection;
