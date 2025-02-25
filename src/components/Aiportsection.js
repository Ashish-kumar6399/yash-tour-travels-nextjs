"use client";
import React from "react";
import { FaShuttleVan, FaCity } from "react-icons/fa"; // Importing Icons
import Image from "next/image";

const services = [
  {
    title: "AIRPORT TRANSFERS",
    description:
      "Airport Transfer is a great way to travel conveniently, whether you are visiting a foreign country or just another domestic city, whether you are on a vacation or on a business trip. We are delivering private transportation for groups and individuals, holidays and business, from any airport Pickup & drop service in India. The service is extremely convenient when you are visiting places.",
    icon: <FaShuttleVan size={50} />,
  },
  {
    title: "MAJOR CITIES IN INDIA",
    description:
      "We provide transport services in major Indian cities including Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Jaipur, and Ahmedabad. Travel hassle-free with our reliable car and bus rental options.",
    icon: <FaCity size={50} />,
  },
];

const ServicesSection = () => {
  return (
    <>
    <div className="container mx-auto px-2 px-lg-6 py-12">
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
            <p className="text-gray-700 mb-4 text-justify text-lg">{service.description}</p>

            {/* Read More Button */}
            <button className="px-5 py-2 border bg-lightpink text-white font-semibold rounded-md hover:bg-black hover:text-white transition-all">
              READ MORE
            </button>
          </div>
        ))}

        {/* Replacing "ONEWAY PICKUP & DROP" section with an Image */}
        <div className="p-2  px-lg-6 flex justify-center">
          <img
            src="https://mauritiustaxi-service.com/wp-content/uploads/2021/04/airport-transfer-Mauritius.jpg" // Replace with your image URL
            alt="Oneway Pickup & Drop"
            // Adjust as needed
            className="rounded-lg  h-20rem md:h-[26rem] lg:h-[24rem] mt-10"
          />
        </div>
      </div>
    </div>
    <div
  className="whatsapp z-[999] bg-[#40c351] rounded-full px-3 py-3 fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center space-x-2 md:space-x-4 shadow-lg cursor-pointer transition-transform hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
  >
    <path
      fill="#fff"
      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
    />
    <path
      fill="#40c351"
      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
      clipRule="evenodd"
    />
  </svg>
</div>
    </>
  );
};

export default ServicesSection;
