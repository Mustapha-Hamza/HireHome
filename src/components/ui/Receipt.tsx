"use client";

import { useRef } from "react";
import { FaPrint, FaDownload, FaCheckCircle } from "react-icons/fa";

type ReceiptProps = {
  receiptData: {
    locationId: string;
    locationName: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
    pricePerNight: number;
    paymentMethod: "card" | "paypal";
    paymentDate: string;
    confirmationNumber: string;
  };
};

const Receipt = ({ receiptData }: ReceiptProps) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  // Calculate nights
  const checkInDate = new Date(receiptData.checkIn);
  const checkOutDate = new Date(receiptData.checkOut);
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
  );

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Print receipt
  const handlePrint = () => {
    const printContents = receiptRef.current?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = `
        <html>
          <head>
            <title>HireHome Booking Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .receipt-header { text-align: center; margin-bottom: 20px; }
              .receipt-section { margin-bottom: 15px; }
              .receipt-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
              .receipt-total { font-weight: bold; border-top: 1px solid #ddd; padding-top: 10px; }
            </style>
          </head>
          <body>
            ${printContents}
          </body>
        </html>
      `;
      window.print();
      document.body.innerHTML = originalContents;
    }
  };

  // Download receipt as PDF (in a real app, you'd use a library like jsPDF)
  const handleDownload = () => {
    alert("In a real application, this would download a PDF of your receipt.");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-dark-900">
          Booking Confirmation
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrint}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            title="Print Receipt"
          >
            <FaPrint className="text-gray-600" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            title="Download Receipt"
          >
            <FaDownload className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-center bg-green-50 p-4 rounded-lg text-green-700">
        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
        <p className="font-medium">Your booking has been confirmed!</p>
      </div>

      <div ref={receiptRef}>
        <div className="receipt-header mb-6 text-center">
          <h3 className="text-xl font-bold">HireHome</h3>
          <p className="text-gray-500">Booking Receipt</p>
        </div>

        <div className="receipt-section mb-6 pb-4 border-b">
          <h4 className="font-semibold mb-2 text-dark-900">Booking Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Confirmation Number</p>
              <p className="font-medium">{receiptData.confirmationNumber}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Booking Date</p>
              <p>{formatDate(receiptData.paymentDate)}</p>
            </div>
          </div>
        </div>

        <div className="receipt-section mb-6 pb-4 border-b">
          <h4 className="font-semibold mb-2 text-dark-900">Stay Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Property</p>
              <p className="font-medium">{receiptData.locationName}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Guests</p>
              <p>{receiptData.guests}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Check-in</p>
              <p>{formatDate(receiptData.checkIn)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Check-out</p>
              <p>{formatDate(receiptData.checkOut)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Nights</p>
              <p>{nights}</p>
            </div>
          </div>
        </div>

        <div className="receipt-section mb-6 pb-4 border-b">
          <h4 className="font-semibold mb-2 text-dark-900">
            Payment Information
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Payment Method</p>
              <p className="capitalize">{receiptData.paymentMethod}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Payment Date</p>
              <p>{formatDate(receiptData.paymentDate)}</p>
            </div>
          </div>
        </div>

        <div className="receipt-section">
          <h4 className="font-semibold mb-2 text-dark-900">Price Details</h4>
          <div className="space-y-2">
            <div className="receipt-row flex justify-between">
              <span className="text-gray-600">
                ${receiptData.pricePerNight} x {nights} nights
              </span>
              <span>${receiptData.totalPrice}</span>
            </div>
            <div className="receipt-row flex justify-between">
              <span className="text-gray-600">Cleaning fee</span>
              <span>$100</span>
            </div>
            <div className="receipt-row flex justify-between">
              <span className="text-gray-600">Service fee</span>
              <span>$50</span>
            </div>
            <div className="receipt-total flex justify-between font-bold pt-2 border-t">
              <span>Total (USD)</span>
              <span>${receiptData.totalPrice + 150}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
