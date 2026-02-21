import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-primary">
            <ShoppingBag className="w-5 h-5" />
            Shoppy Mini Store
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/50933450795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>

          <p className="text-xs text-muted-foreground">{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
