import AboutSection from '@/components/Aboutsection'
import CarRentalCarousel from '@/components/CarCraousel'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import UpperNavbar from '@/components/Uppernavbar'
import React from 'react'

function page() {
  return (
    <div>
      
        <CarRentalCarousel/>
        <FeaturesSection/>
        <AboutSection/>

    </div>
  )
}

export default page