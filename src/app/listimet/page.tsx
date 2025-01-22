"use client";
import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/PropertyFilter";

// Mock data - replace with actual API call
const mockProperties = [
  {
    id: "1",
    title: "Modern Apartment in City Center",
    price: 250000,
    size: 85,
    location: "City Center",
    imageUrl: "/property-1.jpg",
    type: "apartment",
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    price: 750000,
    size: 250,
    location: "Suburban Area",
    imageUrl: "/property-2.jpg",
    type: "villa",
  },
  {
    id: "3",
    title: "Office Space in Business District",
    price: 450000,
    size: 150,
    location: "Business District",
    imageUrl: "/property-3.jpg",
    type: "office",
  },
  // Add more mock properties as needed
];

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  const handleFilterChange = (filters: {
    minSize?: number;
    maxSize?: number;
    type?: string;
  }) => {
    const filtered = mockProperties.filter((property) => {
      const sizeMatch =
        (!filters.minSize || property.size >= filters.minSize) &&
        (!filters.maxSize || property.size <= filters.maxSize);
      const typeMatch = !filters.type || property.type === filters.type;
      return sizeMatch && typeMatch;
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/10 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-gray-600">
              Find your perfect property from our curated selection.
            </p>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <PropertyFilter onFilterChange={handleFilterChange} />
            </div>

            {/* Property Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    No properties match your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
