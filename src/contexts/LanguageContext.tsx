import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'fr' | 'ht';

const translations = {
  fr: {
    // Navbar
    navHome: 'Accueil',
    navStreaming: 'Streaming',
    navCards: 'Cartes',
    navRecharge: 'Recharge',
    navCrypto: 'Crypto',
    navLogin: 'Connexion',
    navSignup: "S'inscrire",
    navDashboard: 'Dashboard',
    navLogout: 'Déconnexion',

    // Hero
    heroTitle: 'Votre Mini Store Digital',
    heroSubtitle: 'Streaming, Cartes Virtuelles, Recharges Téléphone & Crypto — tout en un seul endroit.',
    heroCta: 'Découvrir nos services',

    // Services
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Tout ce dont vous avez besoin, simplifié.',

    streamingTitle: 'Streaming',
    streamingDesc: 'Accédez à Netflix et YouTube Premium à prix réduit.',
    streamingNetflix: 'Netflix Premium',
    streamingYoutube: 'YouTube Premium',
    streamingBuy: 'Commander',

    cardsTitle: 'Cartes Virtuelles',
    cardsDesc: 'Obtenez votre carte Visa ou Mastercard virtuelle instantanément.',
    cardsVisa: 'Visa Virtuelle',
    cardsMastercard: 'Mastercard Virtuelle',
    cardsOrder: 'Commander',

    rechargeTitle: 'Recharge Mobile',
    rechargeDesc: 'Rechargez votre téléphone Digicel ou Natcom en quelques secondes.',
    rechargePhone: 'Numéro de téléphone',
    rechargeAmount: 'Montant',
    rechargeSubmit: 'Recharger',
    rechargeDigicel: 'Digicel',
    rechargeNatcom: 'Natcom',

    cryptoTitle: 'Crypto',
    cryptoDesc: 'Suivez les taux USDT et BTC en temps réel.',
    cryptoPrice: 'Prix',
    cryptoChange: 'Variation 24h',
    cryptoRefresh: 'Actualiser',

    // Footer
    footerRights: '© 2026 Shoppy Mini Store. Tous droits réservés.',
    footerContact: 'Contact',
    footerFollow: 'Suivez-nous',

    // Auth
    loginTitle: 'Connexion',
    loginEmail: 'Email',
    loginPassword: 'Mot de passe',
    loginSubmit: 'Se connecter',
    loginNoAccount: "Pas de compte ?",
    loginCreate: "Créer un compte",

    signupTitle: 'Inscription',
    signupName: 'Nom complet',
    signupEmail: 'Email',
    signupPassword: 'Mot de passe',
    signupSubmit: "S'inscrire",
    signupHasAccount: 'Déjà un compte ?',
    signupLogin: 'Se connecter',

    // Dashboard
    dashTitle: 'Mon Dashboard',
    dashWelcome: 'Bienvenue',
    dashOrders: 'Mes Commandes',
    dashCodes: 'Mes Codes',
    dashNoOrders: 'Aucune commande pour le moment.',
    dashNoCodes: 'Aucun code disponible.',
    dashOrderDate: 'Date',
    dashOrderType: 'Type',
    dashOrderStatus: 'Statut',

    // General
    language: 'Français',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
  },
  ht: {
    navHome: 'Akèy',
    navStreaming: 'Streaming',
    navCards: 'Kat',
    navRecharge: 'Rechaj',
    navCrypto: 'Crypto',
    navLogin: 'Konekte',
    navSignup: 'Enskri',
    navDashboard: 'Tablo',
    navLogout: 'Dekonekte',

    heroTitle: 'Ti Boutik Dijital Ou',
    heroSubtitle: 'Streaming, Kat Vityèl, Rechaj Telefòn & Crypto — tout nan yon sèl kote.',
    heroCta: 'Dekouvri sèvis nou yo',

    servicesTitle: 'Sèvis Nou Yo',
    servicesSubtitle: 'Tout sa w bezwen, fè l pi fasil.',

    streamingTitle: 'Streaming',
    streamingDesc: 'Jwenn Netflix ak YouTube Premium a bon pri.',
    streamingNetflix: 'Netflix Premium',
    streamingYoutube: 'YouTube Premium',
    streamingBuy: 'Kòmande',

    cardsTitle: 'Kat Vityèl',
    cardsDesc: 'Jwenn kat Visa oswa Mastercard vityèl ou touswit.',
    cardsVisa: 'Visa Vityèl',
    cardsMastercard: 'Mastercard Vityèl',
    cardsOrder: 'Kòmande',

    rechargeTitle: 'Rechaj Telefòn',
    rechargeDesc: 'Rechaje telefòn Digicel oswa Natcom ou nan kèk segonn.',
    rechargePhone: 'Nimewo telefòn',
    rechargeAmount: 'Montan',
    rechargeSubmit: 'Rechaje',
    rechargeDigicel: 'Digicel',
    rechargeNatcom: 'Natcom',

    cryptoTitle: 'Crypto',
    cryptoDesc: 'Swiv to USDT ak BTC an tan reyèl.',
    cryptoPrice: 'Pri',
    cryptoChange: 'Chanjman 24è',
    cryptoRefresh: 'Aktyalize',

    footerRights: '© 2026 Shoppy Mini Store. Tout dwa rezève.',
    footerContact: 'Kontak',
    footerFollow: 'Swiv nou',

    loginTitle: 'Koneksyon',
    loginEmail: 'Imèl',
    loginPassword: 'Modpas',
    loginSubmit: 'Konekte',
    loginNoAccount: 'Pa gen kont ?',
    loginCreate: 'Kreye yon kont',

    signupTitle: 'Enskripsyon',
    signupName: 'Non konplè',
    signupEmail: 'Imèl',
    signupPassword: 'Modpas',
    signupSubmit: 'Enskri',
    signupHasAccount: 'Deja gen yon kont ?',
    signupLogin: 'Konekte',

    dashTitle: 'Tablo Mwen',
    dashWelcome: 'Byenveni',
    dashOrders: 'Kòmand Mwen Yo',
    dashCodes: 'Kòd Mwen Yo',
    dashNoOrders: 'Pa gen kòmand pou kounye a.',
    dashNoCodes: 'Pa gen kòd disponib.',
    dashOrderDate: 'Dat',
    dashOrderType: 'Tip',
    dashOrderStatus: 'Estati',

    language: 'Kreyòl',
    darkMode: 'Mòd sòm',
    lightMode: 'Mòd klè',
  },
} as const;

type TranslationKey = keyof typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('fr');

  const t = useCallback((key: TranslationKey): string => {
    return translations[lang][key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
