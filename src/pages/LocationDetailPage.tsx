"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ui/ImageGallery";
import BookingForm from "../components/ui/BookingForm";
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaParking,
  FaTv,
  FaSnowflake,
} from "react-icons/fa";
import { homeTypes } from "../data/mockData";
import type { Location } from "../types";

const LocationDetailPage = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch location data
    setLoading(true);
    setTimeout(() => {
      // Find the location in all home types
      let foundLocation: Location | null = null;

      for (const homeType of homeTypes) {
        const location = homeType.locations.find(
          (loc) => loc.id === locationId
        );
        if (location) {
          foundLocation = location;
          break;
        }
      }

      setLocation(foundLocation);
      setLoading(false);
    }, 500);
  }, [locationId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-900"></div>
      </div>
    );
  }

  if (!location) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Location Not Found</h2>
        <p className="text-gray-600 mb-8">
          The location you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  // Get features based on the location
  const getFeatures = () => {
    const allFeatures = [
      { icon: <FaWifi />, name: "Free WiFi" },
      { icon: <FaSwimmingPool />, name: "Swimming Pool" },
      { icon: <FaUtensils />, name: "Fully Equipped Kitchen" },
      { icon: <FaParking />, name: "Free Parking" },
      { icon: <FaTv />, name: "Smart TV" },
      { icon: <FaSnowflake />, name: "Air Conditioning" },
    ];

    // In a real app, you would filter based on actual location features
    return allFeatures;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-dark-900">
          {location.name}
        </h1>
        <p className="text-gray-600">{location.country}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <ImageGallery images={location.images} alt={location.name} />

          {/* Location Details */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-dark-900">
              About this location
            </h2>
            <p className="text-gray-700 mb-6">{location.description}</p>

            {/* Features */}
            <h3 className="text-xl font-bold mb-4 text-dark-900">
              What this place offers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {getFeatures().map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gold-600 mr-2">{feature.icon}</span>
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>

            {/* Details */}
            <h3 className="text-xl font-bold mb-4 text-dark-900">Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-gray-500">Max Guests</p>
                <p className="font-medium">{location.maxGuests}</p>
              </div>
              <div>
                <p className="text-gray-500">Bedrooms</p>
                <p className="font-medium">{location.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Bathrooms</p>
                <p className="font-medium">{location.bathrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Size</p>
                <p className="font-medium">{location.size} sqft</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <BookingForm location={location} />
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;
