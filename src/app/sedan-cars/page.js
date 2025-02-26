 "use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Breadcrumb from "@/components/Breadcrumb";

export default function CarRental( ) {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      country: "",
      fromDate: "",
      toDate: "",
      persons: "",
      itinerary: "",
      validation: "",
    });
  
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const images = [
      "https://www.indiancarrental.com/uploads/carrent/91562_1696397972.jpeg",
      "https://www.indiancarrental.com/uploads/carrent/2007_1696397972.jpeg",
      "https://www.indiancarrental.com/uploads/carrent/53095_1696397972.jpeg",
      "https://www.indiancarrental.com/uploads/carrent/96737_1696397972.jpeg",
      "https://www.indiancarrental.com/uploads/carrent/2007_1696397972.jpeg",
      "https://www.indiancarrental.com/uploads/carrent/54777_1696397972.jpeg",
    ];
  
    return (
        <>
            {/* <Breadcrumb/> */}

      <div className="conatiner mx-auto px-2 lg:px-24 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        
        <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl text-center font-bold mt-4 underline">SEDAN CARS</h1>
          {/* Main Slider */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            modules={[Autoplay, Navigation, Thumbs]}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="relative"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
  
          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mt-4"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
  
          <h2 className="text-xl font-bold">INTRODUCTION</h2>
          <p className="text-gray-700">
            lorem*1
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
            velit et tristique dictum, lectus arcu convallis ligula, at vestibulum
          </p>
          <div className="bg-gray-100 p-4 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2"><span>🚗</span> 4 passengers + 1 driver</div>
            <div className="flex items-center gap-2"><span>🛄</span> 5 Luggage</div>
            <div className="flex items-center gap-2"><span>🎵</span> Audio system</div>
            <div className="flex items-center gap-2"><span>❄️</span> Air Conditioning</div>
            <div className="flex items-center gap-2"><span>🔋</span> Mobile Charger</div>
            <div className="flex items-center gap-2"><span>🎬</span> Television</div>
          </div>
        </div>
  
        {/* Right Section - Contact Form */}
        <div className="bg-black text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">CONTACT US NOW</h3>
          <form className="space-y-2">
            <input type="text" name="name" placeholder="Name Please" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone No" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country Name" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="date" name="toDate" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="number" name="persons" placeholder="Number of Persons" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <textarea name="itinerary" placeholder="Tour Itinerary" className="w-full p-2 text-black rounded" onChange={handleChange}></textarea>
            <input type="text" name="validation" placeholder="Enter Validation" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <button type="submit" className="w-full bg-yellow-500 text-black font-bold p-2 rounded">SEND</button>
          </form>
        </div>
      </div>
      </>
    );
  }
  