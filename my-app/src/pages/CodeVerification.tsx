import React from "react";

export default function CodeVerification() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
        {" "}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 tracking-tight font-sans">
          Email Verification
        </h1>
        <p className="text-gray-600 text-lg mb-12 font-medium">
          Please enter the 6-digit code sent to your email address.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          {Array(6)
            .fill(undefined)
            .map((_, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className="w-16 h-16 text-center text-3xl font-bold tracking-widest
                border border-gray-300 rounded-lg bg-gray-100
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300
                transition-all duration-150 shadow-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            ))}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl
            py-4 px-12 rounded-lg shadow-md transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        >
          Verify Code
        </button>
      </div>
    </div>
  );
}
