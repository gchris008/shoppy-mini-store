import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'fr' | 'ht';

const translations = {
  fr: {
    // Navbar
    navHome: 'Accueil',
    navStreaming: 'Streaming',
    navGaming: 'Jeux Vidéo',
    navCards: 'Cartes',
    navRecharge: 'Recharge',
    navCrypto: 'Crypto',
    navLogin: 'Connexion',
    navSignup: "S'inscrire",
    navDashboard: 'Dashboard',
    navLogout: 'Déconnexion',

    // Hero
    heroTitle: 'La Plateforme #1 en Haïti',
    heroSubtitle: 'Streaming, Jeux, Cartes Virtuelles, Recharges & Crypto — la plateforme de services numériques la plus complète du marché haïtien.',
    heroCta: 'Explorer le catalogue',
    heroStats1: '50+ Produits',
    heroStats2: 'Livraison Instant',
    heroStats3: 'Support 24/7',

    // Services
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Un catalogue massif de services numériques pour tous vos besoins.',

    // Streaming
    streamingTitle: 'Streaming & Musique',
    streamingDesc: 'Accédez aux meilleures plateformes de streaming et musique.',
    streamingBuy: 'Commander',

    // Gaming
    gamingTitle: 'Jeux Vidéo (Top-up)',
    gamingDesc: 'Rechargez vos jeux favoris avec des diamants, UC, CP et plus.',
    gamingBuy: 'Acheter',

    // Cards
    cardsTitle: 'Cartes Virtuelles',
    cardsDesc: 'Pour abonnements, pubs Facebook/Google et achats internationaux.',
    cardsVisa: 'Visa Virtuelle',
    cardsMastercard: 'Mastercard Virtuelle',
    cardsAmex: 'American Express',
    cardsOrder: 'Commander',

    // Recharge
    rechargeTitle: 'Recharge Mobile',
    rechargeDesc: 'Rechargez votre téléphone Digicel ou Natcom en quelques secondes.',
    rechargePhone: 'Numéro de téléphone',
    rechargeAmount: 'Montant',
    rechargeSubmit: 'Recharger',
    rechargeDigicel: 'Digicel',
    rechargeNatcom: 'Natcom',
    rechargeMin: 'Minimum 150 HTG',
    rechargeError: 'Le montant minimum est de 150 HTG.',
    rechargeFees: 'Frais de service (10%)',
    rechargeTotal: 'Total à payer',

    // Crypto
    cryptoTitle: 'Crypto',
    cryptoDesc: 'Suivez les taux en temps réel. Achat et vente disponibles.',
    cryptoPrice: 'Prix',
    cryptoChange: 'Variation 24h',
    cryptoRefresh: 'Actualiser',
    cryptoBuy: 'Acheter',
    cryptoSell: 'Vendre',

    // Fees
    feesLabel: 'Frais (10%)',
    feesTotal: 'Total',
    feesIncluded: 'Frais de 10% inclus',

    // Footer
    footerRights: '© 2026 Shoppy Mini Store. Tous droits réservés.',
    footerContact: 'Contact',
    footerFollow: 'Suivez-nous',
    footerDesc: 'La plateforme de services numériques la plus complète en Haïti.',

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
    dashOrderFees: 'Frais',
    dashOrderTotal: 'Total',

    // General
    language: 'Français',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
    viewAll: 'Voir tout',
    popular: 'Populaire',
    instant: 'Instantané',
    perMonth: '/mois',
  },
  ht: {
    navHome: 'Akèy',
    navStreaming: 'Streaming',
    navGaming: 'Jwèt Videyo',
    navCards: 'Kat',
    navRecharge: 'Rechaj',
    navCrypto: 'Crypto',
    navLogin: 'Konekte',
    navSignup: 'Enskri',
    navDashboard: 'Tablo',
    navLogout: 'Dekonekte',

    heroTitle: 'Platfòm #1 an Ayiti',
    heroSubtitle: 'Streaming, Jwèt, Kat Vityèl, Rechaj & Crypto — platfòm sèvis nimerik ki pi konplè nan mache ayisyen an.',
    heroCta: 'Eksplore katalòg la',
    heroStats1: '50+ Pwodui',
    heroStats2: 'Livrezon Enstantan',
    heroStats3: 'Sipò 24/7',

    servicesTitle: 'Sèvis Nou Yo',
    servicesSubtitle: 'Yon gwo katalòg sèvis nimerik pou tout bezwen ou yo.',

    streamingTitle: 'Streaming & Mizik',
    streamingDesc: 'Jwenn meyè platfòm streaming ak mizik yo.',
    streamingBuy: 'Kòmande',

    gamingTitle: 'Jwèt Videyo (Top-up)',
    gamingDesc: 'Rechaje jwèt prefere ou yo ak dyaman, UC, CP ak plis.',
    gamingBuy: 'Achte',

    cardsTitle: 'Kat Vityèl',
    cardsDesc: 'Pou abònman, piblisite Facebook/Google ak acha entènasyonal.',
    cardsVisa: 'Visa Vityèl',
    cardsMastercard: 'Mastercard Vityèl',
    cardsAmex: 'American Express',
    cardsOrder: 'Kòmande',

    rechargeTitle: 'Rechaj Telefòn',
    rechargeDesc: 'Rechaje telefòn Digicel oswa Natcom ou nan kèk segonn.',
    rechargePhone: 'Nimewo telefòn',
    rechargeAmount: 'Montan',
    rechargeSubmit: 'Rechaje',
    rechargeDigicel: 'Digicel',
    rechargeNatcom: 'Natcom',
    rechargeMin: 'Minimòm 150 HTG',
    rechargeError: 'Montan minimòm se 150 HTG.',
    rechargeFees: 'Frè sèvis (10%)',
    rechargeTotal: 'Total pou peye',

    cryptoTitle: 'Crypto',
    cryptoDesc: 'Swiv to yo an tan reyèl. Acha ak vant disponib.',
    cryptoPrice: 'Pri',
    cryptoChange: 'Chanjman 24è',
    cryptoRefresh: 'Aktyalize',
    cryptoBuy: 'Achte',
    cryptoSell: 'Vann',

    feesLabel: 'Frè (10%)',
    feesTotal: 'Total',
    feesIncluded: 'Frè 10% enkli',

    footerRights: '© 2026 Shoppy Mini Store. Tout dwa rezève.',
    footerContact: 'Kontak',
    footerFollow: 'Swiv nou',
    footerDesc: 'Platfòm sèvis nimerik ki pi konplè an Ayiti.',

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
    dashOrderFees: 'Frè',
    dashOrderTotal: 'Total',

    language: 'Kreyòl',
    darkMode: 'Mòd sòm',
    lightMode: 'Mòd klè',
    viewAll: 'Wè tout',
    popular: 'Popilè',
    instant: 'Enstantan',
    perMonth: '/mwa',
  },
} as const;

type TranslationKey = keyof typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

// Language context for FR/HT
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