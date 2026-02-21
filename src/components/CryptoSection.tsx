import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoSection = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,tether,ethereum,solana,binancecoin&order=market_cap_desc'
      );
      const json = await res.json();
      setData(json);
    } catch {
      setData([
        { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 97500, price_change_percentage_24h: 2.4 },
        { id: 'tether', symbol: 'usdt', name: 'Tether', current_price: 1.0, price_change_percentage_24h: 0.01 },
        { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 3400, price_change_percentage_24h: 1.8 },
        { id: 'solana', symbol: 'sol', name: 'Solana', current_price: 185, price_change_percentage_24h: 3.2 },
        { id: 'binancecoin', symbol: 'bnb', name: 'BNB', current_price: 620, price_change_percentage_24h: -0.5 },
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
      <div className="container mx-auto max-w-4xl">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((coin) => {
            const isUp = coin.price_change_percentage_24h >= 0;
            return (
              <div key={coin.id} className="rounded-2xl gradient-card border border-border shadow-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary uppercase">
                    {coin.symbol}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{coin.name}</h3>
                    <span className="text-xs text-muted-foreground uppercase">{coin.symbol}/USD</span>
                  </div>
                  <span className={`ml-auto inline-flex items-center gap-1 text-xs font-medium ${isUp ? 'text-primary' : 'text-destructive'}`}>
                    {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <p className="font-display text-2xl font-bold text-foreground mb-4">
                  ${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    {t('cryptoBuy')}
                  </button>
                  <button className="flex-1 py-2 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors">
                    {t('cryptoSell')}
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

export default CryptoSection;