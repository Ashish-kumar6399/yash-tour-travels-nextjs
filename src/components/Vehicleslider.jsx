"use client";

const vehicleData = [
    {
        name: "SEDAN CARS FLEET",
        image: "https://www.indiancarrental.com/uploads/carrent/1696482201.jpg",
        vehicles: ["Toyota camry", "BMW 5 series", "Mercedes BenZ C Class", "Skoda solvia", "Mercedes E250"]
    },
    {
        name: "BMW CARS FLEET",
        image: "https://www.indiancarrental.com/uploads/carrent/1696427287.jpeg",
        vehicles: ["BMW 7 Series", "BMW 5 Series", "BMW X5", "BMW X7", "BMW 6GT"]
    },
    {
        name: "LUXURY CARS FLEET",
        image: "https://www.indiancarrental.com/uploads/carrent/1696514464.jpeg",
        vehicles: ["Rolls Royce", "Range Rover Vogue ", "Merceds", "Audi A4", "Audi Q3"]
    },
    {
        name: "TOYOTA CARS FLEET",
        image: "https://www.indiancarrental.com/uploads/carrent/1696426866.jpg",
        vehicles: ["Toyota Land Cruiser Prado", "Toyota Camry Hybrid", "Toyota Fortuner", "Toyota Innova Crysta", "Toyota Corolla Altis"]
    },
    {
        name: "SUV & MUV VEHICLE FLEET",
        image: "https://www.indiancarrental.com/uploads/carrent/1696427287.jpeg",
        vehicles: ["Audi Q7 Matrix", "Mercedes GLS 350D", "BMW X5", "BMW X7", "Land Cruiser Prado"]
    }
];

export default function VehicleShowcase() {
    return (
        <div className=" px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {vehicleData.map((vehicle, index) => (
                    <div key={index} className="bg-white  rounded-lg overflow-hidden">
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            width={400}
                            height={250}
                            className="w-full h-auto"
                        />
                        <div className="bg-yellow-500 text-black text-start px-3 py-2 font-bold text-lg">
                            {vehicle.name}
                        </div>
                        <div className="p-2 text-gray-700">
                            <ul className="list-disc list-inside">
                                {vehicle.vehicles.map((car, idx) => (
                                    <li key={idx}>{car}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-2 text-center">
                            <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded flex items-center ">
                                Read More ➜
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
