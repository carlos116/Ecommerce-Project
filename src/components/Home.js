import React from 'react'
import Banners from './home-components/Banners'
import Featured from './home-components/Featured'
import Footer from './home-components/Footer'
import Hero from './home-components/Hero'

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Banners />
      <Footer />
    </>
  )
}

export default Home
