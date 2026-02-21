import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { Package, Key, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="p-2 rounded-lg hover:bg-accent text-muted-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">{t('dashTitle')}</h1>
            <p className="text-muted-foreground text-sm">{t('dashWelcome')}, utilisateur</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Orders */}
          <div className="rounded-2xl gradient-card border border-border shadow-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">{t('dashOrders')}</h2>
            </div>
            <div className="text-center py-8 text-muted-foreground text-sm">
              {t('dashNoOrders')}
            </div>
          </div>

          {/* Codes */}
          <div className="rounded-2xl gradient-card border border-border shadow-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Key className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">{t('dashCodes')}</h2>
            </div>
            <div className="text-center py-8 text-muted-foreground text-sm">
              {t('dashNoCodes')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
