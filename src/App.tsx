/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PROPERTIES } from './data/mockData';
import { Property } from './types/property';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFilterBar } from './components/QuickFilterBar';
import { FeaturedProperties } from './components/FeaturedProperties';
import { TrustBadges } from './components/TrustBadges';
import { CategoryGrid } from './components/CategoryGrid';
import { SlantedPromoBanner } from './components/SlantedPromoBanner';
import { VirtualTourBanner } from './components/VirtualTourBanner';
import { LocationGrid } from './components/LocationGrid';
import { Testimonials } from './components/Testimonials';
import { NewsletterBanner } from './components/NewsletterBanner';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { ListPropertyModal } from './components/ListPropertyModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [propertiesList, setPropertiesList] = useState<Property[]>(PROPERTIES);
  const [favorites, setFavorites] = useState<string[]>(['prop-1', 'prop-3']);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('all');

  // Modals State
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isListPropertyOpen, setIsListPropertyOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Toggle Favorite
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Add New Listed Property
  const handleAddNewProperty = (newPropData: any) => {
    const newProp: Property = {
      id: `prop-${Date.now()}`,
      title: newPropData.title,
      price: newPropData.price,
      location: 'Prime Architectural Location',
      city: newPropData.city,
      category: newPropData.category,
      beds: newPropData.beds,
      baths: newPropData.baths,
      sqft: newPropData.sqft,
      tag: 'NEW',
      description: 'A curated modern architectural residence newly submitted to the HavenEstates portfolio.',
      yearBuilt: 2025,
      garage: 2,
      architectureStyle: 'Contemporary Modern',
      agent: {
        name: 'Julian Vance',
        role: 'Principal Architectural Partner',
        phone: '+1 (310) 849-2041',
        email: 'j.vance@havenestates.com',
      },
      amenities: ['Floor-to-Ceiling Glass', 'Smart Home Integration', 'Designer Kitchen'],
      gradientTheme: 'from-slate-200 to-slate-400',
      svgSceneType: 'minimalist-villa',
    };

    setPropertiesList((prev) => [newProp, ...prev]);
  };

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return propertiesList.filter((prop) => {
      // Category filter (from quick filter or type select)
      if (selectedCategory !== 'all' && prop.category !== selectedCategory) {
        return false;
      }
      if (typeFilter !== 'all' && prop.category !== typeFilter) {
        return false;
      }

      // Location filter
      if (locationFilter !== 'all' && !prop.city.toLowerCase().includes(locationFilter.toLowerCase())) {
        return false;
      }

      // Price filter
      if (priceFilter === 'under-2m' && prop.price >= 2000000) return false;
      if (priceFilter === '2m-3.5m' && (prop.price < 2000000 || prop.price > 3500000)) return false;
      if (priceFilter === '3.5m-plus' && prop.price < 3500000) return false;

      return true;
    });
  }, [propertiesList, selectedCategory, typeFilter, locationFilter, priceFilter]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setLocationFilter('all');
    setTypeFilter('all');
    setPriceFilter('all');
  };

  const handleHeroSearch = () => {
    const target = document.getElementById('properties');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-slate-900 font-sans antialiased">
      {/* 1. Top Navigation Bar (Strict Top Bar Contract) */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenListProperty={() => setIsListPropertyOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Architectural Render & Search Capsule */}
        <Hero
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          onSearch={handleHeroSearch}
        />

        {/* 3. Quick Filter Bar (Curved wave transition + 6 categories) */}
        <QuickFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 4. Featured Properties Grid (8 Cards: 2 rows of 4) */}
        <FeaturedProperties
          properties={filteredProperties}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          selectedCategory={selectedCategory}
          onClearFilters={clearAllFilters}
        />

        {/* 5. Trust Badges Strip (6 Circular Badges) */}
        <TrustBadges />

        {/* 6. Explore By Category (6 cards with counts) */}
        <CategoryGrid
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 7. Angled Parallelogram Promo Banner */}
        <SlantedPromoBanner
          onExplore={() => {
            const target = document.getElementById('properties');
            target?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Virtual Tour Feature Banner (3 bullets + Living Room with Play button) */}
        <VirtualTourBanner
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 9. Prime Locations Strip (6 City Cards) */}
        <LocationGrid
          onSelectLocation={(city) => {
            setLocationFilter(city);
            const target = document.getElementById('properties');
            target?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10. Client Testimonials (3 Cards with Navigation) */}
        <Testimonials />

        {/* 11. Newsletter CTA Wavy Dark Banner */}
        <NewsletterBanner />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={toggleFavorite}
          onLaunchVirtualTour={() => {
            setSelectedProperty(null);
            setIsVirtualTourOpen(true);
          }}
        />
      )}

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        allProperties={propertiesList}
        onToggleFavorite={toggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      <ListPropertyModal
        isOpen={isListPropertyOpen}
        onClose={() => setIsListPropertyOpen(false)}
        onSubmitProperty={handleAddNewProperty}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}
