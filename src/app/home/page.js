import AboutSection from '@/components/Aboutsection'
import ServicesSection from '@/components/Aiportsection'
import BusBooking from '@/components/Busbooking'
import CarRentalCarousel from '@/components/CarCraousel'
import FeaturesSection from '@/components/FeaturesSection'
import TourPackagesSection from '@/components/Packages'
import VehicleSlider from '@/components/Vehicleslider'

function page() {
  return (
    <div>
      
        <CarRentalCarousel/>
        <FeaturesSection/>
        <AboutSection/>
        <VehicleSlider/>
        <BusBooking/>
        <ServicesSection/>
        <TourPackagesSection/>

    </div>
  )
}

export default page