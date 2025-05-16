"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import HomeTypeCard from "../components/ui/HomeTypeCard";
import SearchBar from "../components/ui/SearchBar";
import Slideshow from "../components/ui/Slideshow";
import { homeTypes } from "../data/mockData";

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Dedicated homepage slider images
  const homeSliderImages = [
    "/assets/homeImages/luxury-home-1.jpg",
    "/assets/homeImages/luxury-home-2.jpg",
    "/assets/homeImages/luxury-home-3.jpg",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <Slideshow images={homeSliderImages} interval={7000} autoplay={true} />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Find Your Dream Vacation Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl drop-shadow-md">
            Experience luxury vacation homes in the world's most beautiful
            destinations
          </p>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="luxury-button-accent flex items-center"
          >
            <FaSearch className="mr-2" />
            Search Destinations
          </button>
        </div>

        {/* Search Overlay */}
        {showSearch && (
          <div className="absolute inset-0 z-30 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          </div>
        )}
      </section>

      {/* Featured Home Types Section */}
      <section id="explore-section" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 relative inline-block">
              Explore Our Luxury Home Types
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gold-600"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeTypes.map((homeType) => (
              <HomeTypeCard key={homeType.id} homeType={homeType} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 relative inline-block">
              Why Choose HireHome
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gold-600"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-md bg-white luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-dark-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-900">
                Luxury Experience
              </h3>
              <p className="text-gray-600">
                Handpicked luxury homes with premium amenities and stunning
                views.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-md bg-white luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-dark-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-900">
                Secure Booking
              </h3>
              <p className="text-gray-600">
                Safe and secure booking process with 24/7 customer support.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-md bg-white luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-dark-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-900">
                Home Away From Home
              </h3>
              <p className="text-gray-600">
                Experience the comfort of home with the luxury of a premium
                vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-dark-900 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Vacation Home?
          </h2>
          <p className="text-xl mb-8">
            Browse our selection of luxury homes in premium destinations around
            the world.
          </p>
          <a
            href="#explore-section"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("explore-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="luxury-button-accent inline-block"
          >
            Explore Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
