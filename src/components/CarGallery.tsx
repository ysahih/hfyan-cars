"use client";

import * as React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Users, Gauge, Fuel } from 'lucide-react';

import carMercedes from '@/assets/images/car-mercedes.jpg';
import carSuv from '@/assets/images/car-suv.jpg';
import carAudi from '@/assets/images/car-audi.jpg';
import carRangeRover from '@/assets/images/car-range-rover.jpg';
import carPorsche from '@/assets/images/car-porsche.jpg';
import carEconomy from '@/assets/images/car-economy.jpg';

interface Car {
  id: number;
  name: string;
  category: 'luxury' | 'suv' | 'sport' | 'economy';
  image: any;
  price: number;
  passengers: number;
  transmission: string;
  fuel: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'luxury',
    image: carMercedes,
    price: 2500,
    passengers: 5,
    transmission: 'Auto',
    fuel: 'Diesel',
  },
  {
    id: 2,
    name: 'BMW X7',
    category: 'suv',
    image: carSuv,
    price: 2200,
    passengers: 7,
    transmission: 'Auto',
    fuel: 'Diesel',
  },
  {
    id: 3,
    name: 'Audi RS7',
    category: 'sport',
    image: carAudi,
    price: 2800,
    passengers: 4,
    transmission: 'Auto',
    fuel: 'Petrol',
  },
  {
    id: 4,
    name: 'Range Rover Vogue',
    category: 'suv',
    image: carRangeRover,
    price: 2600,
    passengers: 5,
    transmission: 'Auto',
    fuel: 'Diesel',
  },
  {
    id: 5,
    name: 'Porsche 911',
    category: 'sport',
    image: carPorsche,
    price: 3200,
    passengers: 2,
    transmission: 'Auto',
    fuel: 'Petrol',
  },
  {
    id: 6,
    name: 'Toyota Camry',
    category: 'economy',
    image: carEconomy,
    price: 800,
    passengers: 5,
    transmission: 'Auto',
    fuel: 'Petrol',
  },
];

export function CarGallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('fleet.categories.all') },
    { id: 'luxury', label: t('fleet.categories.luxury') },
    { id: 'suv', label: t('fleet.categories.suv') },
    { id: 'sport', label: t('fleet.categories.sport') },
    { id: 'economy', label: t('fleet.categories.economy') },
  ];

  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeCategory);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 md:py-28 bg-background" data-testid="section-fleet">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('fleet.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('fleet.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'}
              data-testid={`button-category-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300" data-testid={`card-car-${car.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={car.image.src || car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge 
                    className="absolute top-4 left-4 bg-amber-500 text-primary font-medium border-0"
                    data-testid={`badge-category-${car.id}`}
                  >
                    {t(`fleet.categories.${car.category}`)}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">{car.name}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{car.passengers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gauge className="h-4 w-4" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="h-4 w-4" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">{car.price} MAD</span>
                      <span className="text-muted-foreground text-sm">{t('fleet.perDay')}</span>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={scrollToContact}
                      data-testid={`button-book-car-${car.id}`}
                    >
                      {t('fleet.bookNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
