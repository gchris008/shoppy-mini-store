import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, AlertCircle } from 'lucide-react';

const RechargeSection = () => {
  const { t } = useLanguage();
  const [provider, setProvider] = useState<'digicel' | 'natcom'>('digicel');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const amounts = [150, 250, 500, 750, 1000, 2000];

  const numericAmount = Number(amount) || 0;
  const fee = Math.round(numericAmount * 0.10);
  const total = numericAmount + fee;

  const handleSubmit = () => {
    if (numericAmount < 150) {
      setError(t('rechargeError'));
      return;
    }
    setError('');
    // Submit logic would go here
  };

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
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('rechargeAmount')} (HTG)
            <span className="text-xs text-muted-foreground ml-2">— {t('rechargeMin')}</span>
          </label>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => { setAmount(String(a)); setError(''); }}
                className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  amount === String(a)
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {a} HTG
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <input
            type="number"
            value={amount}
            onChange={(e) => { setAmount(e.target.value); setError(''); }}
            placeholder="Autre montant..."
            min={150}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all mb-4"
          />

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm mb-4">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          {/* Fee breakdown */}
          {numericAmount >= 150 && (
            <div className="text-sm border-t border-border pt-3 mb-4 space-y-1">
              <div className="flex justify-between text-muted-foreground">
                <span>{t('rechargeFees')}</span>
                <span>{fee} HTG</span>
              </div>
              <div className="flex justify-between font-semibold text-foreground">
                <span>{t('rechargeTotal')}</span>
                <span>{total} HTG</span>
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl font-semibold gradient-primary text-primary-foreground shadow-emerald hover:shadow-float transition-all hover:-translate-y-0.5"
          >
            {t('rechargeSubmit')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RechargeSection;