"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Receipt from "../components/ui/Receipt";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [receiptData, setReceiptData] = useState<any>(null);

  useEffect(() => {
    // Get receipt data from session storage
    const storedReceiptData = sessionStorage.getItem("receiptData");

    if (!storedReceiptData) {
      // If no receipt data, redirect to home page
      navigate("/");
      return;
    }

    setReceiptData(JSON.parse(storedReceiptData));
  }, [navigate]);

  if (!receiptData) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-dark-900">
          Thank You for Your Booking!
        </h1>

        <Receipt receiptData={receiptData} />

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block luxury-button px-6 py-3 rounded-md font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
