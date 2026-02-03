"use client";

import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Car, Clock, Banknote, MapPin } from 'lucide-react';

export function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Car,
      title: t('about.features.premium.title'),
      description: t('about.features.premium.description'),
    },
    {
      icon: Clock,
      title: t('about.features.service.title'),
      description: t('about.features.service.description'),
    },
    {
      icon: Banknote,
      title: t('about.features.prices.title'),
      description: t('about.features.prices.description'),
    },
    {
      icon: MapPin,
      title: t('about.features.location.title'),
      description: t('about.features.location.description'),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50" data-testid="section-about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-white">
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-white/70 text-sm">Premium Vehicles</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold mb-1">1000+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold mb-1">5+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
