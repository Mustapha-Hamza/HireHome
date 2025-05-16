"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

type PaymentFormProps = {
  bookingData: {
    locationId: string;
    locationName: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
    pricePerNight: number;
  };
};

type PaymentFormData = {
  paymentMethod: "card" | "paypal";
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
  paypalEmail?: string;
};

const PaymentForm = ({ bookingData }: PaymentFormProps) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const onSubmit = (data: PaymentFormData) => {
    console.log("Payment data:", data);

    // Store receipt data in session storage
    sessionStorage.setItem(
      "receiptData",
      JSON.stringify({
        ...bookingData,
        paymentMethod: data.paymentMethod,
        paymentDate: new Date().toISOString(),
        confirmationNumber: Math.random()
          .toString(36)
          .substring(2, 10)
          .toUpperCase(),
      })
    );

    // Navigate to confirmation page
    navigate("/confirmation");
  };

  // Calculate nights
  const checkInDate = new Date(bookingData.checkIn);
  const checkOutDate = new Date(bookingData.checkOut);
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-dark-900 pb-4 border-b border-gray-100">
        Payment Details
      </h2>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2 text-dark-900">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Location:</span>{" "}
            {bookingData.locationName}
          </p>
          <p>
            <span className="font-medium">Check-in:</span>{" "}
            {new Date(bookingData.checkIn).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Check-out:</span>{" "}
            {new Date(bookingData.checkOut).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Guests:</span> {bookingData.guests}
          </p>
          <p>
            <span className="font-medium">Nights:</span> {nights}
          </p>
          <div className="pt-2 mt-2 border-t border-gray-200">
            <p className="flex justify-between">
              <span className="font-medium">Total:</span>
              <span className="font-bold">${bookingData.totalPrice + 150}</span>
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                paymentMethod === "card"
                  ? "border-gold-600 bg-gray-50"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <input
                type="radio"
                id="card"
                value="card"
                className="mr-2"
                checked={paymentMethod === "card"}
                {...register("paymentMethod")}
                onChange={() => setPaymentMethod("card")}
              />
              <label
                htmlFor="card"
                className="flex items-center cursor-pointer"
              >
                <FaCreditCard className="mr-2 text-gray-600" />
                Credit/Debit Card
              </label>
            </div>
            <div
              className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                paymentMethod === "paypal"
                  ? "border-gold-600 bg-gray-50"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <input
                type="radio"
                id="paypal"
                value="paypal"
                className="mr-2"
                checked={paymentMethod === "paypal"}
                {...register("paymentMethod")}
                onChange={() => setPaymentMethod("paypal")}
              />
              <label
                htmlFor="paypal"
                className="flex items-center cursor-pointer"
              >
                <FaPaypal className="mr-2 text-blue-600" />
                PayPal
              </label>
            </div>
          </div>
        </div>

        {/* Credit Card Form */}
        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardName"
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  errors.cardName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John Doe"
                {...register("cardName", {
                  required: "Cardholder name is required",
                })}
              />
              {errors.cardName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.cardName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="1234 5678 9012 3456"
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: "Please enter a valid 16-digit card number",
                  },
                })}
              />
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.cardNumber.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                    errors.expiryDate ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="MM/YY"
                  {...register("expiryDate", {
                    required: "Expiry date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: "Please enter a valid expiry date (MM/YY)",
                    },
                  })}
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.expiryDate.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="123"
                  {...register("cvv", {
                    required: "CVV is required",
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid CVV",
                    },
                  })}
                />
                {errors.cvv && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PayPal Form */}
        {paymentMethod === "paypal" && (
          <div>
            <label
              htmlFor="paypalEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              PayPal Email
            </label>
            <input
              type="email"
              id="paypalEmail"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                errors.paypalEmail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your-email@example.com"
              {...register("paypalEmail", {
                required: "PayPal email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.paypalEmail && (
              <p className="mt-1 text-sm text-red-500">
                {errors.paypalEmail.message}
              </p>
            )}
            <p className="mt-2 text-sm text-gray-500">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 bg-dark-900 text-white font-semibold rounded-md hover:bg-dark-800 transition-colors"
          >
            Pay ${bookingData.totalPrice + 150}
          </button>
          <p className="mt-2 text-xs text-center text-gray-500">
            By clicking "Pay", you agree to our terms and conditions.
          </p>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
