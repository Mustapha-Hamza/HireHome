"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocationCard from "../components/ui/LocationCard";
import { homeTypes } from "../data/mockData";
import type { HomeType } from "../types";

const HomeTypePage = () => {
  const { homeTypeId } = useParams<{ homeTypeId: string }>();
  const [homeType, setHomeType] = useState<HomeType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch home type data
    setLoading(true);
    setTimeout(() => {
      const foundHomeType =
        homeTypes.find((type) => type.id === homeTypeId) || null;
      setHomeType(foundHomeType);
      setLoading(false);
    }, 500);
  }, [homeTypeId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-900"></div>
      </div>
    );
  }

  if (!homeType) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Home Type Not Found</h2>
        <p className="text-gray-600 mb-8">
          The home type you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">
          {homeType.name}
        </h1>
        <p className="text-lg text-gray-600">{homeType.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {homeType.locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      {homeType.locations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No locations available for this home type at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeTypePage;
