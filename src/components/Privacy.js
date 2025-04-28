import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-justify mb-4">
          Welcome to <span className="font-semibold">Finds Perfect Plants</span>
          ! Your privacy is very important to us. We are committed to protecting
          your personal information and your right to privacy.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          We may collect your name, email address, and preferences regarding
          plants when you interact with our website. This information helps us
          suggest the best plants for your home environment.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          We use your information to improve your experience, provide
          personalized recommendations, and communicate important updates about
          our services. We never sell or share your personal data with third
          parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Data Security
        </h2>
        <p className="text-gray-700 text-justify mb-4">
          We implement strong security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Your Choices
        </h2>
        <p className="text-gray-700 text-justify mb-6">
          You have the right to access, update, or delete your personal
          information at any time. If you have any questions or concerns, feel
          free to contact us.
        </p>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Finds Perfect Plants. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
