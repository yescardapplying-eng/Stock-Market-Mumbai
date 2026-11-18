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
      tagline: 'Online Stock Market Education • Mumbai Learners',
      heading: 'Online Stock Market Classes in Mumbai for Beginners and Learners',
      subheading:
        'Learn market basics, technical analysis, price action, option chain concepts, and disciplined risk management online from anywhere in Mumbai. Strictly educational with zero stock tips or advisory.',
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
      tagline: 'ऑनलाइन स्टॉक मार्केट शिक्षा • मुंबई लर्नर्स',
      heading: 'मुंबई के शुरुआती और लर्नर्स के लिए ऑनलाइन स्टॉक मार्केट क्लासेस',
      subheading:
        'मुंबई से घर बैठे ऑनलाइन मार्केट बेसिक्स, टेक्निकल एनालिसिस, प्राइस एक्शन, ऑप्शन चेन और रिस्क मैनेजमेंट सीखें। पूरी तरह शैक्षणिक — कोई स्टॉक टिप्स या एडवाइजरी नहीं।',
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
      tagline: 'ऑनलाइन शेअर मार्केट शिक्षण • मुंबई विद्यार्थी',
      heading: 'मुंबईतील नवशिक्यांसाठी ऑनलाइन स्टॉक मार्केट क्लासेस',
      subheading:
        'मुंबईतून ऑनलाइन मार्केट बेसिक्स, टेक्निकल अ‍ॅनालिसिस, प्राइस अ‍ॅक्शन, ऑप्शन चेन आणि रिस्क मॅनेजमेंट शिका. पूर्णपणे शैक्षणिक — कोणतेही टिप्स किंवा सल्ला नाही.',
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

