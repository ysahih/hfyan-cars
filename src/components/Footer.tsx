"use client";

import { useTranslation } from 'react-i18next';
import { Car, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#fleet', label: t('nav.fleet') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiWhatsapp, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-primary text-white" data-testid="footer">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide">H-FYAN</span>
                <span className="text-amber-400 text-xs font-medium tracking-widest -mt-1">CARS</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-colors hover-elevate"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{t('footer.location')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">+212 6XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">contact@hfyancars.ma</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.followUs')}</h4>
            <p className="text-white/70 text-sm mb-4">
              Stay connected with us on social media for the latest offers and updates.
            </p>
            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30">
              <p className="text-amber-400 font-semibold text-sm">Special Offer!</p>
              <p className="text-white/80 text-xs mt-1">Get 10% off on your first rental</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} H-FYAN CARS. {t('footer.rights')}
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400" /> in Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}
