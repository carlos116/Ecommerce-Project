import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container d-flex flex-column flex-md-row justify-content-around pl-4 pl-md-0'>
                <div className=' my-4 my-md-5'>
                    <h6 className='mb-3'>Contact</h6>
                    <p className='p-0 m-0'>Street: 26 Harley drive</p>
                    <p className='p-0 m-0'>Zip Code: 21211</p>
                    <p className='p-0 m-0'>Phone: 444-123-4378 </p>
                    <p className='p-0 m-0'>email: support@tef.com</p>
                </div>
                <div className='footer-sections my-md-5 d-flex flex-column'>
                    <h6 className='mb-3'>Navigation</h6>
                    <Link to="/" className='p-0 m-0 footer-link'>Home</Link>
                    <Link to="products" className='p-0 m-0 footer-link'>Shop</Link>
                    <Link to="contact" className='p-0 m-0 footer-link'>Contact</Link>
                    <Link to="cart" className='p-0 m-0 footer-link'>Cart</Link>
                </div>
                <div className='footer-sections my-4 m-md-5'>
                    <h6 className='mb-3'>Follow us</h6>
                    <div className='d-flex flex-md-column align-items-center'>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook icon pr-2 px-md-0" /></a>
                        <a href="https://twitter.com/"><i className="fa-brands fa-twitter icon px-2 px-md-0" /></a>
                        <a href="https://youtube.com/"><i className="fa-brands fa-youtube icon px-2 px-md-0" /></a>
                        <a href="https://instagram.com/"><i className="fa-brands fa-instagram icon px-2 px-md-0" /></a> 
                    </div>
                </div>
        </div>
  )
}

export default Footer