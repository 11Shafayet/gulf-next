import Image from 'next/image'
import {primary} from '@/app/layout'
import About from '@/components/About'
import Hero from '@/components/Hero'
import VehicleSearch from '@/components/VehicleSearch'
import WhatWeOffer from '@/components/WhatWeOffer'
import Services from '@/components/Services'
import Brands from '@/components/Brands'
import PopularCars from '@/components/PopularCar'

export default function Home() {
  return (
   <>
   <Hero/>
   <VehicleSearch/>
   <WhatWeOffer/>
   <About/>
   <Services/>
   <Brands/>
   <PopularCars/>
   </>
  )
}
