import React from 'react'
import Features from './Features/Features'
import Hero from './Hero/Hero'

import Brand from './Brand/Brand'
import Contact from './Contact/Contact'
import Pamja from  './Pamja/Pamja'
import Stuff from './Stuff/Stuff'

import NavbarNew from './Navbar/NavbarNew'
import Footer from './Footer/Footer'




const Index = () => {
  
  return (    
    <>
    <NavbarNew/>
    <Hero/>
    <Stuff/>
  
    <Features/>
    <Pamja/>
    <Brand/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Index