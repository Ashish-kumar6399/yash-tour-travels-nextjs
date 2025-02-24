"use client";
import React from "react";
import { FaShuttleVan, FaCity, FaRandom } from "react-icons/fa"; // Importing Icons

const services = [
  {
    title: "AIRPORT PICKUP & DROP",
    description:
      "Airport Transfer is a great way to travel conveniently, whether you are visiting a foreign country or just another domestic city, whether you are on a vacation or on a business trip. We are delivering private transportation for groups and individuals, holidays and business, from any airport Pickup & drop service in India. The service is extremely convenient when you are visiting places.",
    icon: <FaShuttleVan size={50} />,
  },
  {
    title: "OTHER CITIES IN INDIA",
    description:
      "India is the world famous tourism destination in South Asia. Tourists from all across the world visit the country to have a flavor of the amazing diversified culture that exists. There are some of the prominent states of India which are known for incredible tourism. The tourists from all across the world have a delightful experience of life after an exploration of this country.",
    icon: <FaCity size={50} />,
  },
  {
    title: "ONEWAY PICKUP & DROP",
    description:
      "A leading provider of one way drop service in India include car rental service, luxury van on hire & bus booking for airport transfer, hotel pickup & dropping.",
    icon: <FaRandom size={50} />,
  },
];

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <div key={index} className="p-6">
            {/* Icon with border */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-gray-400 rounded-full">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-700 mb-4">{service.description}</p>

            {/* Read More Button */}
            <button className="px-5 py-2 border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
