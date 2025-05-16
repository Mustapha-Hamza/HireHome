"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { homeTypes } from "../../data/mockData";

type SearchFormData = {
  homeType: string;
  location: string;
  guests: number;
  priceRange: number;
};

type SearchBarProps = {
  onClose?: () => void;
};

const SearchBar = ({ onClose }: SearchBarProps) => {
  const navigate = useNavigate();
  const [selectedHomeType, setSelectedHomeType] = useState<string>("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SearchFormData>({
    defaultValues: {
      homeType: "",
      location: "",
      guests: 2,
      priceRange: 1000,
    },
  });

  // Get locations based on selected home type
  const getLocations = () => {
    const selectedType = homeTypes.find((type) => type.id === selectedHomeType);
    return selectedType ? selectedType.locations : [];
  };

  const onSubmit = (data: SearchFormData) => {
    console.log("Search data:", data);

    // If a home type is selected, navigate to that page
    if (data.homeType) {
      navigate(`/home-types/${data.homeType}`);
    }

    // Close the search bar if onClose is provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-dark-900">
          Find Your Dream Vacation Home
        </h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-dark-900"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Home Type */}
          <div>
            <label
              htmlFor="homeType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Home Type
            </label>
            <select
              id="homeType"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                errors.homeType ? "border-red-500" : "border-gray-300"
              }`}
              {...register("homeType", { required: "Home type is required" })}
              onChange={(e) => setSelectedHomeType(e.target.value)}
            >
              <option value="">Select Home Type</option>
              {homeTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.homeType && (
              <p className="mt-1 text-sm text-red-500">
                {errors.homeType.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <select
              id="location"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              {...register("location")}
              disabled={!selectedHomeType}
            >
              <option value="">Select Location</option>
              {getLocations().map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="mt-1 text-sm text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Number of Guests */}
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              max="20"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                errors.guests ? "border-red-500" : "border-gray-300"
              }`}
              {...register("guests", {
                required: "Number of guests is required",
                min: { value: 1, message: "Minimum 1 guest" },
                max: { value: 20, message: "Maximum 20 guests" },
              })}
            />
            {errors.guests && (
              <p className="mt-1 text-sm text-red-500">
                {errors.guests.message}
              </p>
            )}
          </div>

          {/* Price Range */}
          <div>
            <label
              htmlFor="priceRange"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price Range (per night): $
              <Controller
                name="priceRange"
                control={control}
                render={({ field }) => <span>{field.value}</span>}
              />
            </label>
            <Controller
              name="priceRange"
              control={control}
              render={({ field }) => (
                <input
                  type="range"
                  id="priceRange"
                  min="100"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-dark-900 hover:bg-dark-800 text-white font-semibold rounded-md transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
