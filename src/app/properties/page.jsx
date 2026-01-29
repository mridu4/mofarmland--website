'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PropertyCard from '@/components/PropertyCard';
import { properties, locations, priceRanges } from '@/data/properties';

export default function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const filteredProperties = properties.filter((property) => {
    const matchLocation = !selectedLocation || property.location === selectedLocation;
    
    let matchPrice = true;
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-').map(Number);
      matchPrice = property.cashPrice >= min && property.cashPrice <= max;
    }
    
    return matchLocation && matchPrice;
  });

  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent">Properties</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore all our available land projects across Kenya's beautiful highlands
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-charcoal">Filter by:</span>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>

            {(selectedLocation || selectedPrice) && (
              <button
                onClick={() => { setSelectedLocation(''); setSelectedPrice(''); }}
                className="text-primary hover:text-primary-dark underline"
              >
                Clear filters
              </button>
            )}

            <span className="ml-auto text-gray-500">
              {filteredProperties.length} properties found
            </span>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No properties match your filters.</p>
              <button
                onClick={() => { setSelectedLocation(''); setSelectedPrice(''); }}
                className="mt-4 btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
