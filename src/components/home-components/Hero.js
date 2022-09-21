import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero-container d-flex flex-column flex-md-row justify-content-around">
        <div className="hero-text-container d-flex flex-column justify-content-center mx-auto">
          <h3 className="hero-text">Check our latest collections</h3>
          <h3 className="">High quality in our products</h3>
          <Link to='/products' className='general-btn mt-2 text-white py-1 px-3'>Get Deals</Link>
        </div>
        <img src='/images/hero-image.jpg' className="hero-img mx-auto" alt="hero-img"/>
    </div>
  )
}

export default Hero