"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className=" py-12 px-4 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-black font-bold text-2xl mb-4"> Yash Tour & Travels
          </h1>
          <h6 className="text-gray-700 mb-4 text-justify text-lg">
            Welcome to Yash Tour & Travels, your trusted partner for
            comfortable, reliable, and affordable journeys. Discover the joy of
            travel with our premium rental services across India.every journey
            is a promise of memories that last a lifetime. As your premier
            travel companion, we are dedicated to providing you with
            comfortable, reliable, and affordable travel solutions. Our mission
            is to make your voyages across India's diverse landscapes as
            seamless and enjoyable as possible.
          </h6>
          <p className="text-gray-700 mb-6 text-justify text-lg">
            Our fleet, a symphony of modernity and convenience, is meticulously
            maintained to ensure your safety and comfort. From the sleek sedans
            that glide through cityscapes to the robust SUVs ready for off-road
            adventures, we have a vehicle for every traveler's need. For larger
            groups, our tempo travelers, vans, and buses offer spacious
            interiors and modern amenities, ensuring everyone travels in
            comfort.
          </p>
          <a
            href="#"
            className="uppercase font-bold text-gray-800 hover:text-gray-600"
          >
            Read More
          </a>
        </div>

        {/* Right Image with Play Button */}
        <div className="relative">
          <img
            src="https://wallpaperaccess.com/full/1547040.jpg" // Replace with your image path
            alt="Video Thumbnail"
            width={600}
            height={400}
            className="w-full h-96 rounded"
          />
        </div>
      </div>
    </div>
  );
}
