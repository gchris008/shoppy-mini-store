import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/hooks/useTheme';
import { Menu, X, Sun, Moon, Globe, ShoppingBag, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  const links = [
    { to: '/', label: t('navHome') },
    { to: '/#streaming', label: t('navStreaming') },
    { to: '/#gaming', label: t('navGaming') },
    { to: '/#cards', label: t('navCards') },
    { to: '/#recharge', label: t('navRecharge') },
    { to: '/#crypto', label: t('navCrypto') },
  ];

  const scrollToSection = (hash: string) => {
    setOpen(false);
    if (location.pathname !== '/') return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <ShoppingBag className="w-6 h-6" />
          Shoppy
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => {
                if (link.to.startsWith('/#')) {
                  e.preventDefault();
                  scrollToSection(link.to.replace('/', ''));
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'fr' ? 'ht' : 'fr')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'fr' ? 'KR' : 'FR'}
          </button>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t('navLogin')}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => {
                  if (link.to.startsWith('/#')) {
                    e.preventDefault();
                    scrollToSection(link.to.replace('/', ''));
                  }
                  setOpen(false);
                }}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <button
                onClick={() => setLang(lang === 'fr' ? 'ht' : 'fr')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:bg-accent"
              >
                <Globe className="w-4 h-4" />
                {lang === 'fr' ? 'Kreyòl' : 'Français'}
              </button>
              <button onClick={toggle} className="p-2 rounded-lg text-muted-foreground hover:bg-accent">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="ml-auto px-4 py-2 rounded-lg text-sm font-medium gradient-primary text-primary-foreground"
              >
                {t('navLogin')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;