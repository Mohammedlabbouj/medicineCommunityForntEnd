import React from "react";
import NaveBar from "../components/NaveBar";

export default function Home() {
    
  return (
    <div className="bg-gray-100 min-h-screen">
      <NaveBar />
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-gray-600">
          This is where you can find the latest updates and features.
        </p>
      </div>
      
    </div>
  );
}
