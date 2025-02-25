"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const busData = [
    {
        name: "LARGE SIZE LUXURY COACHES",
        image: "https://www.indiancarrental.com/uploads/carrent/1697033179.jpg",
        link: "volvo-bus.html",
    },
    {
        name: "MERCEDES BENZ BUSES",
        image: "https://www.indiancarrental.com/uploads/carrent/1697033425.jpg",
        link: "volvo-bus.html",
    },
    {
        name: "VOLVO BUSES",
        image: "https://www.indiancarrental.com/uploads/carrent/32424_1696941040.jpg",
        link: "volvo-bus.html",
    },
    {
        name: "MINI BUSES",
        image: "https://www.indiancarrental.com/uploads/carrent/1697033653.JPG",
        link: "volvo-bus.html",
    },
    {
        name: "TOYOTA MINI BUS",
        image: "https://www.indiancarrental.com/uploads/carrent/1697033425.jpg",
        link: "volvo-bus.html",
    },
];

const BusBooking = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Title Section */}
            <div>
                <h2 className="text-3xl font-bold text-center mb-2">ONLINE BUS BOOKING</h2>
                <p className="text-center text-gray-600">
                    Book the Best Value luxury Bus & Coach rental service across India for tours, events, and more.
                </p>
            </div>

            {/* Bus Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Large Bus (Volvo) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {busData.slice(1).map((bus, index) => (
                        <div key={index} className="relative group">
                            <Link href={bus.link}>
                                <div className="overflow-hidden">
                                    <Image
                                        src={bus.image}
                                        alt={bus.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 sm:h-56 object-cover transform transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <div className=" bottom-2 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-1 text-sm font-semibold">
                                {bus.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small Buses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {busData.slice(1).map((bus, index) => (
                        <div key={index} className="relative group">
                            <Link href={bus.link}>
                                <div className="overflow-hidden">
                                    <Image
                                        src={bus.image}
                                        alt={bus.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 sm:h-56 object-cover transform transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <div className=" bottom-2 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-1 text-sm font-semibold">
                                {bus.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusBooking;
