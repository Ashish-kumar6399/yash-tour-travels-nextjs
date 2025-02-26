"use client";
import React from "react";

const tourPackages = [
  {
    title: "Kashmir Tour",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg", // Replace with actual image
  },
  {
    title: "Gangtok Darjeeling",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1585127333_d_and_g_1.jpg", // Replace with actual image
  },
  {
    title: "Andaman Tour",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://www.ghumindiaghum.com/blog/wp-content/uploads/2022/08/andaman.jpg", // Replace with actual image
  },
  {
    title: "Golden Traingle",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://absolutetourism.in/wp-content/uploads/2024/02/golden-triangle-tour-1.jpg", // Replace with actual image
  },
];

const TourPackagesSection = () => {
  return (
    
    <div className="container mx-auto px-4 py-12">
        <h1 className="text-center text-3xl mb-6 text-orange  underline">TOUR PACKAGES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tourPackages.map((tour, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" />

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{tour.title}</h3>
              <p className="text-gray-600 text-sm">{tour.description}</p>
              <p className="text-green-600 font-semibold text-sm mt-1">Best Service Guarantee</p>

              {/* Buttons Section */}
              <div className="flex justify-between items-center mt-4">
                <button className="  px-2 md:px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-800">
                  BOOK NOW
                </button>
                <button className=" px-2 md:px-4 py-2 bg-orange text-white text-sm rounded-md hover:bg-orange-700">
                  DETAIL
                </button>
                <button className="  px-2 md:px-4 lg:px-4 py-2 bg-green-500 text-white text-sm rounded-md flex items-center gap-1 hover:bg-green-700">
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesSection;
