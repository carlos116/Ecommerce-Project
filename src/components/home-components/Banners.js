import React from 'react'
import { Link } from 'react-router-dom'

function Banners() {
  return (
    <div className='banners-section px-3 py-5 text-white'>

            <div className="banner d-flex justify-content-center align-items-center banner-women d-flex">
                <div className="position-absolute d-flex flex-column align-items-center">
                <Link className='banner-link' to="products">
                    <h4>40% off on Women Fashion</h4>
                </Link>
                </div>
            </div>

            <div className="banner d-flex justify-content-center align-items-center banner-electronics">
                <div className="position-absolute d-flex flex-column align-items-center">
                <Link className='banner-link' to="products">
                    <h4 className='banner-text'>Latest in Electronics</h4>
                </Link>    
                </div>
            </div>
            <div className="banner d-flex justify-content-center align-items-center banner-jewerly text-dark">
                <div className="position-absolute d-flex flex-column align-items-center">
                <Link className='banner-link' to="products">   
                    <h4 className='banner-text banner-text-jewerly'>Luxurios Jewerly</h4>
                </Link> 
                </div>
            </div>
            <div className="banner d-flex justify-content-center align-items-center banner-men">
                <div className="position-absolute d-flex flex-column align-items-center">
                <Link className='banner-link' to="products">
                    <h4 className=''>Bestsellers For Men</h4>
                </Link>
                </div>
            </div>
        </div>
  )
}

export default Banners