import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center">
          Return Policy
        </h1>

        <p className="text-gray-700 text-justify mb-4">
          At <span className="font-semibold">Finds Perfect Plants</span>, we are
          committed to making sure you are satisfied with your purchase. If you
          are not fully happy with your plant, we offer a simple and easy return
          process.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Return Eligibility
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          Plants can be returned within 7 days of delivery if they are damaged,
          unhealthy, or not as described. Please ensure that the plant is
          returned in its original pot and packaging.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Return Process
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          To initiate a return, please contact our customer support with your
          order details and reason for return. Our team will guide you through
          the steps to complete the return process smoothly.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Refund Policy
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          Once we receive the returned plant and verify its condition, a full
          refund will be processed to your original payment method. Refunds may
          take 5-7 business days to reflect in your account.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Non-Returnable Items
        </h2>
        <p className="text-gray-700 text-justify mb-6">
          Plants that have been damaged due to improper care or handling after
          delivery are not eligible for returns. Clearance sale items are also
          non-returnable.
        </p>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Finds Perfect Plants. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
