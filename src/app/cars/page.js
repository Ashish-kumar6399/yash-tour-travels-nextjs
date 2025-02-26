import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Gauge, Fuel, Briefcase, User, Tv, BatteryFull, Video } from 'lucide-react';

export default function Cars() {
    // Combined vehicle data with features
    const vehicles = [
        {
            id: 1,
            name: "Maruti",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "5+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "120 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Petrol" },
                { icon: <Briefcase size={14} />, tooltip: "5 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Comfort/Seating Yes" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Charging/Battery Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        },
        {
            id: 2,
            name: "Mercedes",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 3,
            name: "Mercedes",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 4,
            name: "Mercedes",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique corrupti voluptatem doloremque temporibus quaerat at eaque maiores quibusdam atque fugiat quod itaque, ad accusantium.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 5,
            name: "Mercedes",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Luxury at its best with premium interiors.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        }, {
            id: 6,
            name: "Mercedes",
            image: "https://www.indiancarrental.com/uploads/carrent/37446_1696414439.jpg",
            description: "Luxury at its best with premium interiors.",
            features: [
                { icon: <Users size={14} />, tooltip: "4+1 Passengers" },
                { icon: <Gauge size={14} />, tooltip: "160 kmph" },
                { icon: <Fuel size={14} />, tooltip: "Diesel" },
                { icon: <Briefcase size={14} />, tooltip: "4 Luggage Space" },
                { icon: <User size={14} />, tooltip: "Luxury Seating" },
                { icon: <Tv size={14} />, tooltip: "(TV) Available" },
                { icon: <BatteryFull size={14} />, tooltip: "Fast Charging Available" },
                { icon: <Video size={14} />, tooltip: "Security/Camera Available" }
            ]
        },
    ];

    const vehicleCategories = [
        { id: 1, name: "Maruti-Swift-Dzire", href: "/maruti-swift-dzire" },
        { id: 2, name: "Maruti Eeco", href: "/maruti-eeco" },
        { id: 3, name: "Toyota Etios", href: "/toyota-etios" },
        { id: 4, name: "Maruti Ertiga", href: "/maruti-ertiga" },
        { id: 5, name: "Toyota Innova Crysta", href: "/toyota-innova-crysta" }
    ];

    return (
        <div className="container mx-auto mt-4 px-4">
            <h1 className="text-center text-dark text-3xl font-bold mb-6">Cars</h1>
            <div className="flex flex-wrap">
                
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-wrap">
                        {vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="w-full md:w-1/2 px-2 mb-4">
                                <Link href={`/${vehicle.name.toLowerCase().replace(/ /g, '-')}`} className="block no-underline">
                                    <div className="border-2 border-primary text-center p-3 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <div className="relative w-full h-96 md:h-48">
                                            <Image src={vehicle.image} alt={vehicle.name} layout="fill" objectFit="cover" className="rounded-md" />
                                        </div>
                                        <h6 className="text-lg font-semibold mt-3">{vehicle.name}</h6>
                                        <p className="text-gray-700 text-sm">{vehicle.description}</p>
                                        <div className="flex justify-center flex-wrap gap-3 mt-5">
                                            {vehicle.features.map((feature, index) => (
                                                <div key={index} className="group relative">
                                                    <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white hover:scale-110 transition-transform cursor-pointer">
                                                        {feature.icon}
                                                    </div>
                                                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded w-24 text-center">
                                                        {feature.tooltip}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-3 rounded-full mt-4 text-white bg-primary  px-6 hover:bg-blue-600 transition-colors duration-300">
                                            View Detail <span className="ml-1">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/4 px-2 ">
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h5 className="text-lg font-semibold mb-4">Quick Enquiry</h5>
                        <form>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Name" />
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Email" />
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Phone Number" />
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Country/City" />
                            <textarea className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Requirements"></textarea>
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">Submit Now</button>
                        </form>
                        <div className="mt-6 hidden lg:block">
                            <div className="bg-gray-900 text-white p-4 rounded-lg">
                                <h5 className="mb-3 font-medium">Vehicle Categories</h5>
                                {vehicleCategories.map((category) => (
                                    <Link key={category.id} href={category.href} className="text-white no-underline block py-2 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200">
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
