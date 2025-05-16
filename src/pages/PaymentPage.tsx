"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PaymentForm from "../components/ui/PaymentForm";
import { homeTypes } from "../data/mockData";
import type { Location } from "../types";

const PaymentPage = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  const [location, setLocation] = useState<Location | null>(null);
  const [bookingData, setBookingData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get booking data from session storage
    const storedBookingData = sessionStorage.getItem("bookingData");

    if (!storedBookingData) {
      // If no booking data, redirect to location page
      navigate(`/locations/${locationId}`);
      return;
    }

    setBookingData(JSON.parse(storedBookingData));

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
  }, [locationId, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-900"></div>
      </div>
    );
  }

  if (!location || !bookingData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Payment Information Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Please go back and select a location to book.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-dark-900">
          Complete Your Booking
        </h1>
        <PaymentForm bookingData={bookingData} />
      </div>
    </div>
  );
};

export default PaymentPage;
