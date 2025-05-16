"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import type { Location } from "../../types";

type BookingFormProps = {
  location: Location;
};

type BookingFormData = {
  checkIn: string;
  checkOut: string;
  guests: number;
};

const BookingForm = ({ location }: BookingFormProps) => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      checkIn: "",
      checkOut: "",
      guests: 2,
    },
  });

  const watchCheckIn = watch("checkIn");
  const watchCheckOut = watch("checkOut");
  const watchGuests = watch("guests");

  // Calculate total price when dates and guests change
  const calculateTotalPrice = () => {
    if (watchCheckIn && watchCheckOut) {
      const checkInDate = new Date(watchCheckIn);
      const checkOutDate = new Date(watchCheckOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (nights > 0) {
        const extraGuestFee = watchGuests > 2 ? (watchGuests - 2) * 50 : 0;
        const total = (location.pricePerNight + extraGuestFee) * nights;
        setTotalPrice(total);
        return;
      }
    }
    setTotalPrice(0);
  };

  // Trigger recalculation when inputs change
  useEffect(() => {
    calculateTotalPrice();
  }, [watchCheckIn, watchCheckOut, watchGuests]);

  const onSubmit = (data: BookingFormData) => {
    sessionStorage.setItem(
      "bookingData",
      JSON.stringify({
        ...data,
        locationId: location.id,
        locationName: location.name,
        totalPrice: totalPrice + 150, // include cleaning + service fee
        pricePerNight: location.pricePerNight,
      })
    );
    navigate(`/payment/${location.id}`);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-100">
      <h3 className="text-xl font-bold mb-6 flex items-center justify-between border-b pb-4 border-gray-100">
        <span className="text-dark-900">
          ${location.pricePerNight}{" "}
          <span className="text-sm font-normal text-gray-500">/ night</span>
        </span>
        {location.rating && (
          <span className="flex items-center text-sm">
            <span className="text-gold-500 mr-1">★</span>
            {location.rating} ({location.reviews} reviews)
          </span>
        )}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-2 border border-gray-200 rounded-lg overflow-hidden">
          {/* Check-in Date */}
          <div className="p-3 border-r border-b border-gray-200">
            <label
              htmlFor="checkIn"
              className="block text-xs font-medium text-gray-500 mb-1"
            >
              CHECK-IN
            </label>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input
                type="date"
                id="checkIn"
                min={today}
                className={`w-full border-none p-0 focus:ring-0 text-sm ${
                  errors.checkIn ? "text-red-500" : ""
                }`}
                {...register("checkIn", {
                  required: "Required",
                  validate: {
                    notPast: (value) => {
                      const date = new Date(value);
                      const now = new Date();
                      now.setHours(0, 0, 0, 0);
                      return date >= now || "Cannot be in the past";
                    },
                  },
                })}
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="p-3 border-b border-gray-200">
            <label
              htmlFor="checkOut"
              className="block text-xs font-medium text-gray-500 mb-1"
            >
              CHECK-OUT
            </label>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input
                type="date"
                id="checkOut"
                min={watchCheckIn || today}
                className={`w-full border-none p-0 focus:ring-0 text-sm ${
                  errors.checkOut ? "text-red-500" : ""
                }`}
                {...register("checkOut", {
                  required: "Required",
                  validate: {
                    afterCheckIn: (value) => {
                      if (!watchCheckIn) return true;
                      return (
                        new Date(value) > new Date(watchCheckIn) ||
                        "Must be after check-in"
                      );
                    },
                  },
                })}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="p-3 col-span-2">
            <label
              htmlFor="guests"
              className="block text-xs font-medium text-gray-500 mb-1"
            >
              GUESTS
            </label>
            <div className="flex items-center">
              <FaUser className="text-gray-400 mr-2" />
              <Controller
                name="guests"
                control={control}
                rules={{
                  required: "Required",
                  min: { value: 1, message: "Minimum 1 guest" },
                  max: {
                    value: location.maxGuests,
                    message: `Maximum ${location.maxGuests} guests`,
                  },
                }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full border-none p-0 focus:ring-0 text-sm"
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value));
                    }}
                  >
                    {[...Array(location.maxGuests)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} {i === 0 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>
        </div>

        {/* Error messages */}
        <div className="space-y-1">
          {errors.checkIn && (
            <p className="text-red-500 text-xs">{errors.checkIn.message}</p>
          )}
          {errors.checkOut && (
            <p className="text-red-500 text-xs">{errors.checkOut.message}</p>
          )}
          {errors.guests && (
            <p className="text-red-500 text-xs">{errors.guests.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-dark-900 text-white font-semibold rounded-md hover:bg-dark-800 transition-colors"
        >
          Rent Now
        </button>

        <p className="text-center text-sm text-gray-500">
          You won't be charged yet
        </p>

        {/* Price breakdown */}
        {totalPrice > 0 && (
          <div className="mt-6 space-y-2 pt-4 border-t">
            <div className="flex justify-between">
              <span className="text-gray-600">
                ${location.pricePerNight} x{" "}
                {Math.ceil(
                  (new Date(watchCheckOut).getTime() -
                    new Date(watchCheckIn).getTime()) /
                    (1000 * 3600 * 24)
                )}{" "}
                nights
              </span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cleaning fee</span>
              <span>$100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service fee</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total</span>
              <span>${totalPrice + 150}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
