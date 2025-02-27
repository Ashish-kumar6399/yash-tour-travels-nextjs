import Breadcrumbs from '@/components/Breadcrumb'
import ContactUs from '@/components/Contact/Contact'
import ContactForm from '@/components/Contact/Contactform'
import React from 'react'

function page() {
  return (
    <div>
        <ContactUs/>
        <Breadcrumbs  />
        <ContactForm/>
    </div>
  )
}

export default page