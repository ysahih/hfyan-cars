import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      nav: {
        home: 'Home',
        fleet: 'Our Fleet',
        about: 'About',
        contact: 'Contact',
        bookNow: 'Book Now'
      },
      // Hero
      hero: {
        subtitle: 'Premium Car Rental',
        title: 'Experience Luxury on Every Journey',
        description: 'Discover the finest selection of premium vehicles in Ben Ahmed, Morocco. From elegant sedans to powerful SUVs, we deliver excellence in every ride.',
        exploreFleet: 'Explore Our Fleet',
        contactUs: 'Contact Us'
      },
      // Fleet Section
      fleet: {
        title: 'Our Premium Fleet',
        subtitle: 'Choose from our exclusive collection of luxury vehicles',
        perDay: '/day',
        bookNow: 'Book Now',
        categories: {
          all: 'All Vehicles',
          luxury: 'Luxury',
          suv: 'SUV',
          sport: 'Sport',
          economy: 'Economy'
        },
        features: {
          passengers: 'Passengers',
          transmission: 'Transmission',
          fuel: 'Fuel'
        }
      },
      // About Section
      about: {
        title: 'Why Choose H-FYAN CARS?',
        subtitle: 'Your trusted partner for premium car rentals in Morocco',
        features: {
          premium: {
            title: 'Premium Vehicles',
            description: 'Our fleet consists only of the finest luxury vehicles, maintained to the highest standards.'
          },
          service: {
            title: '24/7 Support',
            description: 'Our dedicated team is available around the clock to assist you with any needs.'
          },
          prices: {
            title: 'Competitive Rates',
            description: 'Enjoy luxury without compromise with our transparent and competitive pricing.'
          },
          location: {
            title: 'Prime Location',
            description: 'Conveniently located in Ben Ahmed with easy access and flexible pickup options.'
          }
        }
      },
      // Contact Section
      contact: {
        title: 'Get in Touch',
        subtitle: 'Ready to experience luxury? Contact us today.',
        form: {
          name: 'Your Name',
          email: 'Email Address',
          phone: 'Phone Number',
          message: 'Your Message',
          send: 'Send Message',
          sending: 'Sending...',
          success: 'Message sent successfully!',
          error: 'Failed to send message. Please try again.'
        },
        info: {
          address: 'Address',
          addressValue: 'Ben Ahmed, 26050\nMorocco',
          phone: 'Phone',
          phoneValue: '+212 6XX XXX XXX',
          email: 'Email',
          emailValue: 'contact@hfyancars.ma',
          hours: 'Working Hours',
          hoursValue: 'Mon - Sun: 8:00 AM - 8:00 PM'
        }
      },
      // Footer
      footer: {
        description: 'Your premier destination for luxury car rentals in Morocco. Experience excellence with every journey.',
        quickLinks: 'Quick Links',
        contact: 'Contact Info',
        followUs: 'Follow Us',
        rights: 'All rights reserved.',
        location: 'Ben Ahmed, 26050 Morocco'
      }
    }
  },
  fr: {
    translation: {
      // Header
      nav: {
        home: 'Accueil',
        fleet: 'Notre Flotte',
        about: 'À Propos',
        contact: 'Contact',
        bookNow: 'Réserver'
      },
      // Hero
      hero: {
        subtitle: 'Location de Voitures Premium',
        title: 'Vivez le Luxe à Chaque Voyage',
        description: 'Découvrez la plus belle sélection de véhicules premium à Ben Ahmed, Maroc. Des berlines élégantes aux SUV puissants, nous offrons l\'excellence à chaque trajet.',
        exploreFleet: 'Découvrir Notre Flotte',
        contactUs: 'Nous Contacter'
      },
      // Fleet Section
      fleet: {
        title: 'Notre Flotte Premium',
        subtitle: 'Choisissez parmi notre collection exclusive de véhicules de luxe',
        perDay: '/jour',
        bookNow: 'Réserver',
        categories: {
          all: 'Tous les Véhicules',
          luxury: 'Luxe',
          suv: 'SUV',
          sport: 'Sport',
          economy: 'Économique'
        },
        features: {
          passengers: 'Passagers',
          transmission: 'Transmission',
          fuel: 'Carburant'
        }
      },
      // About Section
      about: {
        title: 'Pourquoi Choisir H-FYAN CARS?',
        subtitle: 'Votre partenaire de confiance pour la location de voitures premium au Maroc',
        features: {
          premium: {
            title: 'Véhicules Premium',
            description: 'Notre flotte se compose uniquement des meilleurs véhicules de luxe, entretenus aux plus hauts standards.'
          },
          service: {
            title: 'Support 24/7',
            description: 'Notre équipe dédiée est disponible 24h/24 pour répondre à tous vos besoins.'
          },
          prices: {
            title: 'Tarifs Compétitifs',
            description: 'Profitez du luxe sans compromis avec nos prix transparents et compétitifs.'
          },
          location: {
            title: 'Emplacement Idéal',
            description: 'Idéalement situé à Ben Ahmed avec un accès facile et des options de prise en charge flexibles.'
          }
        }
      },
      // Contact Section
      contact: {
        title: 'Contactez-Nous',
        subtitle: 'Prêt à vivre le luxe? Contactez-nous aujourd\'hui.',
        form: {
          name: 'Votre Nom',
          email: 'Adresse Email',
          phone: 'Numéro de Téléphone',
          message: 'Votre Message',
          send: 'Envoyer le Message',
          sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès!',
          error: 'Échec de l\'envoi. Veuillez réessayer.'
        },
        info: {
          address: 'Adresse',
          addressValue: 'Ben Ahmed, 26050\nMaroc',
          phone: 'Téléphone',
          phoneValue: '+212 6XX XXX XXX',
          email: 'Email',
          emailValue: 'contact@hfyancars.ma',
          hours: 'Heures d\'Ouverture',
          hoursValue: 'Lun - Dim: 8h00 - 20h00'
        }
      },
      // Footer
      footer: {
        description: 'Votre destination premium pour la location de voitures de luxe au Maroc. Vivez l\'excellence à chaque voyage.',
        quickLinks: 'Liens Rapides',
        contact: 'Coordonnées',
        followUs: 'Suivez-Nous',
        rights: 'Tous droits réservés.',
        location: 'Ben Ahmed, 26050 Maroc'
      }
    }
  },
  ar: {
    translation: {
      // Header
      nav: {
        home: 'الرئيسية',
        fleet: 'أسطولنا',
        about: 'من نحن',
        contact: 'اتصل بنا',
        bookNow: 'احجز الآن'
      },
      // Hero
      hero: {
        subtitle: 'تأجير السيارات الفاخرة',
        title: 'عش الفخامة في كل رحلة',
        description: 'اكتشف أفضل مجموعة من السيارات الفاخرة في بن أحمد، المغرب. من السيارات الأنيقة إلى سيارات الدفع الرباعي القوية، نقدم التميز في كل رحلة.',
        exploreFleet: 'استكشف أسطولنا',
        contactUs: 'اتصل بنا'
      },
      // Fleet Section
      fleet: {
        title: 'أسطولنا الفاخر',
        subtitle: 'اختر من مجموعتنا الحصرية من السيارات الفاخرة',
        perDay: '/يوم',
        bookNow: 'احجز الآن',
        categories: {
          all: 'جميع السيارات',
          luxury: 'فاخرة',
          suv: 'دفع رباعي',
          sport: 'رياضية',
          economy: 'اقتصادية'
        },
        features: {
          passengers: 'الركاب',
          transmission: 'ناقل الحركة',
          fuel: 'الوقود'
        }
      },
      // About Section
      about: {
        title: 'لماذا تختار H-FYAN CARS؟',
        subtitle: 'شريكك الموثوق لتأجير السيارات الفاخرة في المغرب',
        features: {
          premium: {
            title: 'سيارات فاخرة',
            description: 'يتكون أسطولنا فقط من أفضل السيارات الفاخرة، تتم صيانتها وفق أعلى المعايير.'
          },
          service: {
            title: 'دعم على مدار الساعة',
            description: 'فريقنا المتخصص متاح على مدار الساعة لمساعدتك في أي احتياجات.'
          },
          prices: {
            title: 'أسعار تنافسية',
            description: 'استمتع بالفخامة دون تنازلات مع أسعارنا الشفافة والتنافسية.'
          },
          location: {
            title: 'موقع متميز',
            description: 'يقع في بن أحمد مع سهولة الوصول وخيارات استلام مرنة.'
          }
        }
      },
      // Contact Section
      contact: {
        title: 'تواصل معنا',
        subtitle: 'مستعد لتجربة الفخامة؟ تواصل معنا اليوم.',
        form: {
          name: 'اسمك',
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
          message: 'رسالتك',
          send: 'إرسال الرسالة',
          sending: 'جاري الإرسال...',
          success: 'تم إرسال الرسالة بنجاح!',
          error: 'فشل الإرسال. يرجى المحاولة مرة أخرى.'
        },
        info: {
          address: 'العنوان',
          addressValue: 'بن أحمد، 26050\nالمغرب',
          phone: 'الهاتف',
          phoneValue: '+212 6XX XXX XXX',
          email: 'البريد الإلكتروني',
          emailValue: 'contact@hfyancars.ma',
          hours: 'ساعات العمل',
          hoursValue: 'الإثنين - الأحد: 8:00 ص - 8:00 م'
        }
      },
      // Footer
      footer: {
        description: 'وجهتك المميزة لتأجير السيارات الفاخرة في المغرب. عش التميز في كل رحلة.',
        quickLinks: 'روابط سريعة',
        contact: 'معلومات الاتصال',
        followUs: 'تابعنا',
        rights: 'جميع الحقوق محفوظة.',
        location: 'بن أحمد، 26050 المغرب'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
