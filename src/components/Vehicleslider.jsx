// cars  slider with owl carousel

// "use client";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// function Vehicleslider() {
//     const vehicleData = [
//         { name: "BMW CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696482201.jpg" },
//         { name: "SUV CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696427287.jpeg" },
//         { name: "LUXURY  CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696514464.jpeg" },
//         { name: "MERCEEDS Swift Dzire", image: "https://www.indiancarrental.com/uploads/carrent/1696426866.jpg" },
//     ];

//     const responsive = {
//         desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
//         tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
//         mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
//     };

//     return (
//         <>
//             {/* ✅ Move Heading & Description OUTSIDE the Carousel */}
//             <div className="container mx-auto px-4">
//                 <div className="text-start py-8">
//                     <h2 className="text-3xl font-bold mb-4">
//                         {/* <span className="text-gray-800">Welcome to</span>{" "} */}
//                         <span className="text-gray-900">          Luxury Cars For Rent                        </span>
//                     </h2>
//                     <h5 className="container mx-auto text-gray-600  text-lg text-justify">
//                         Yash tour & Travels offers reliable, comfortable, and affordable travel solutions across India. With a diverse fleet of well-maintained vehicles, from sedans to buses, we ensure a seamless journey for solo travelers and groups alike. Our personalized tour packages cover iconic destinations like the Taj Mahal, Varanasi, and the Himalayas, creating unforgettable travel experiences. Beyond rentals, we provide 24/7 customer support and experienced drivers who double as guides, enhancing your journey with local insights. Committed to sustainability, we promote eco-friendly practices while ensuring transparent pricing and hassle-free bookings. Choose us as your trusted travel partner and embark on a journey filled with memories, adventure, and discovery.
//                     </h5>
//                 </div>
//             </div>

//             {/* ✅ Make Carousel Full Width with AutoPlay */}
//             <div className="w-full px-2">
//                 <Carousel
//                     swipeable
//                     draggable
//                     showDots={false}
//                     responsive={responsive}
//                     ssr
//                     infinite
//                     autoPlay={true}    // ✅ AutoPlay Enabled
//                     autoPlaySpeed={3000}  // ✅ AutoPlay Speed Set to 3s
//                     keyBoardControl
//                     customTransition="all 0.5s"
//                     transitionDuration={500}
//                     containerClass="w-full"
//                     removeArrowOnDeviceType={["desktop"]}
//                     dotListClass="custom-dot-list-style"
//                 >
//                     {vehicleData.map((vehicle, index) => (
//                         <div key={index} className="p-2">
//                             <div className="bg-white shadow-lg  overflow-hidden rounded lg:rounded-none">
//                                 <img src={vehicle.image} alt={vehicle.name} className="w-full h-56 object-cover" />
//                                 <div className="bg-gray-900 text-white text-center py-2 font-semibold">{vehicle.name}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//             <div>

//             </div>
//         </>
//     );
// }

// export default Vehicleslider;



"use client";

import Image from 'next/image';

const vehicleData = [
    { name: "BMW CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696482201.jpg" },
    { name: "SUV CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696427287.jpeg" },
    { name: "LUXURY  CARS FLEET", image: "https://www.indiancarrental.com/uploads/carrent/1696514464.jpeg" }, 
    { name: "MERCEEDS Swift Dzire", image: "https://www.indiancarrental.com/uploads/carrent/1696426866.jpg" },
];

export default function VehicleShowcase() {
    return (
        <div className="container mx-auto px-6 py-8 text-center">
              <div className="container mx-auto px-4">
                <div className="text-start py-8">
                 <h2 className="text-3xl font-bold mb-4">
                      {/* <span className="text-gray-800">Welcome to</span>{" "} */}
                        <span className="text-gray-900">          Luxury Cars For Rent                        </span>                    </h2>
                    <h5 className="container mx-auto text-gray-600  text-lg text-justify">
                        Yash tour & Travels offers reliable, comfortable, and affordable travel solutions across India. With a diverse fleet of well-maintained vehicles, from sedans to buses, we ensure a seamless journey for solo travelers and groups alike. Our personalized tour packages cover iconic destinations like the Taj Mahal, Varanasi, and the Himalayas, creating unforgettable travel experiences. Beyond rentals, we provide 24/7 customer support and experienced drivers who double as guides, enhancing your journey with local insights. Committed to sustainability, we promote eco-friendly practices while ensuring transparent pricing and hassle-free bookings. Choose us as your trusted travel partner and embark on a journey filled with memories, adventure, and discovery.
                     </h5>
                 </div>
            </div>

            {/* Vehicle Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {vehicleData.map((vehicle, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            width={400}
                            height={250}
                            className="w-full h-auto"
                        />
                        <div className="bg-gray-900 text-white text-center py-2 font-semibold">{vehicle.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}




