import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-primary mb-3">
              <ShoppingBag className="w-5 h-5" />
              Shoppy Mini Store
            </div>
            <p className="text-sm text-muted-foreground">{t('footerDesc')}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">{t('servicesTitle')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#streaming" className="block hover:text-primary transition-colors">{t('streamingTitle')}</a>
              <a href="#gaming" className="block hover:text-primary transition-colors">{t('gamingTitle')}</a>
              <a href="#cards" className="block hover:text-primary transition-colors">{t('cardsTitle')}</a>
              <a href="#recharge" className="block hover:text-primary transition-colors">{t('rechargeTitle')}</a>
              <a href="#crypto" className="block hover:text-primary transition-colors">{t('cryptoTitle')}</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">{t('footerFollow')}</h4>
            <div className="space-y-2">
              <a href="https://wa.me/50932008670" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                TikTok
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;