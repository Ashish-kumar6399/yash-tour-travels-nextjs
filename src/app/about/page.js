'use client';

import { useState } from 'react';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    fromDate: '',
    toDate: '',
    persons: '',
    itinerary: '',
    validation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Section */}
      <div className="bg-black text-white py-3 px-5 text-sm">
        <span>HOME / ABOUT US</span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* About Us Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Left Side - About Text */}
          <div className="md:col-span-2 text-gray-700 space-y-4 text-justify">
            <p>
              The journey with Indian Car Rental is more than just a RIDE – it's an EXPERIENCE. 
              That's why we go above and beyond to deliver exceptional service every single time. 
              Experience luxury, convenience, and style with the highest-rated Indian Car Rental Chauffeur Driven Services.
            </p>
            <p>
              Indian Car Rental makes available Luxury Car, Imported Van, Volvo, Mercedes, Bharat Benz, 
              Isuzu & Tata super luxury buses, rental requirements in Delhi, Mumbai, Goa, Pune, Bengaluru, 
              Hyderabad, Kochi, Chennai, Ahmedabad, and across Pan India with highly professional uniform drivers.
            </p>
            <p>
              Indian Car Rental provides Local and Outstation Car, Cab, Taxi, Van, Traveller, Mini Bus, 
              Large Coaches for Personal, Corporate, Wedding, Business Events, Weekend Trips, 
              Holiday Travel Packages, and Airport Transfers (Pick-up and Drop Facility).
            </p>
            <p>
              Each journey with us is tailored to your individual preferences, ensuring an unparalleled 
              level of service that anticipates and exceeds your expectations.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black p-6 text-white rounded-md">
            <h3 className="text-lg font-bold mb-4">CONTACT US NOW</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="name" placeholder="Name Please" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <input type="text" name="phone" placeholder="Phone No" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <input type="email" name="email" placeholder="Email ID" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <input type="text" name="country" placeholder="Country Name" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <div className="grid grid-cols-2 gap-2">
                <input type="date" name="fromDate" onChange={handleChange} className="p-2 text-black rounded-md w-full" />
                <input type="date" name="toDate" onChange={handleChange} className="p-2 text-black rounded-md w-full" />
              </div>
              <input type="number" name="persons" placeholder="Number of Persons" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <textarea name="itinerary" placeholder="Tour Itinerary" onChange={handleChange} className="w-full p-2 text-black rounded-md h-24"></textarea>
              <input type="text" name="validation" placeholder="Enter Validation" onChange={handleChange} className="w-full p-2 text-black rounded-md" />
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
