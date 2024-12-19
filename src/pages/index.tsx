import About from '@/components/About'
import HeroBanner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SkillsSection from '@/components/SkillsSection'
import Works from '@/components/Works'
import React from 'react'

export default function index() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <hr className='line' />
      <About />
      <Works />
      <SkillsSection />
      <Footer />
    </>
  )
}
