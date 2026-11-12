export type LanguageCode = 'en' | 'hi' | 'mr';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
];

export interface TranslationDict {
  nav: {
    home: string;
    services: string;
    about: string;
    packages: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    tagline: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
  };
  popup: {
    successTitle: string;
    successMsg: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Our Services',
      about: 'About Us',
      packages: 'Our Packages',
      contact: 'Contact Us',
      cta: 'Apply Now',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      tagline: '100% Educational Platform • Mumbai',
      heading: 'Master Stock Market Trading in Mumbai',
      subheading:
        'Learn structured price action, option chain basics, and capital risk control in Mumbai. Pure trading education with zero tips or advisory.',
      primaryCta: 'View Plans',
      secondaryCta: 'Apply Now',
    },
    popup: {
      successTitle: 'Enquiry Received!',
      successMsg:
        'Thank you for connecting with Stock Market Mumbai. Our education counselor will reach out shortly.',
    },
  },
  hi: {
    nav: {
      home: 'Home',
      services: 'Our Services',
      about: 'About Us',
      packages: 'Our Packages',
      contact: 'Contact Us',
      cta: 'Apply Now',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      tagline: '100% एजुकेशनल प्लेटफॉर्म • मुंबई',
      heading: 'मुंबई में सीखें स्टॉक मार्केट ट्रेडिंग',
      subheading:
        'प्राइस एक्शन, ऑप्शन चेन और कैपिटल रिस्क कंट्रोल सीखें। 100% एजुकेशनल ट्रेनिंग — कोई टिप्स या एडवाइजरी नहीं।',
      primaryCta: 'View Plans',
      secondaryCta: 'Apply Now',
    },
    popup: {
      successTitle: 'पूछताछ प्राप्त हुई!',
      successMsg:
        'Stock Market Mumbai से जुड़ने के लिए धन्यवाद। हमारे एजुकेशन काउंसलर जल्द ही आपसे संपर्क करेंगे।',
    },
  },
  mr: {
    nav: {
      home: 'Home',
      services: 'Our Services',
      about: 'About Us',
      packages: 'Our Packages',
      contact: 'Contact Us',
      cta: 'Apply Now',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      tagline: '100% शैक्षणिक व्यासपीठ • मुंबई',
      heading: 'मुंबईत शिका स्टॉक मार्केट ट्रेडिंग',
      subheading:
        'प्राइस अ‍ॅक्शन, ऑप्शन चेन आणि कॅपिटल रिस्क कंट्रोल शिका. 100% शैक्षणिक प्रशिक्षण — कोणतेही टिप्स किंवा सल्ला नाही.',
      primaryCta: 'View Plans',
      secondaryCta: 'Apply Now',
    },
    popup: {
      successTitle: 'चौकशी प्राप्त झाली!',
      successMsg:
        'Stock Market Mumbai शी संपर्क साधल्याबद्दल धन्यवाद. आमचे शैक्षणिक सल्लागार लवकरच संपर्क साधतील.',
    },
  },
};

