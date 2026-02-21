import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const CryptoSection = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,tether&order=market_cap_desc'
      );
      const json = await res.json();
      setData(json);
    } catch {
      // fallback data
      setData([
        { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 97500, price_change_percentage_24h: 2.4, image: '' },
        { id: 'tether', symbol: 'usdt', name: 'Tether', current_price: 1.0, price_change_percentage_24h: 0.01, image: '' },
      ]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="crypto" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">{t('cryptoTitle')}</h2>
            <p className="text-muted-foreground mt-1">{t('cryptoDesc')}</p>
          </div>
          <button
            onClick={fetchPrices}
            disabled={loading}
            className="p-2.5 rounded-xl border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="space-y-4">
          {data.map((coin) => {
            const isUp = coin.price_change_percentage_24h >= 0;
            return (
              <div key={coin.id} className="rounded-2xl gradient-card border border-border shadow-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary uppercase">
                  {coin.symbol}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{coin.name}</h3>
                  <span className="text-xs text-muted-foreground uppercase">{coin.symbol}/USD</span>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-bold text-foreground">
                    ${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${isUp ? 'text-primary' : 'text-destructive'}`}>
                    {isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
