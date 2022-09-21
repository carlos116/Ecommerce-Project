import React, { useState } from 'react'
import { Link }  from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

  const { items } = useSelector((store) => store.cart);
  const [showNav, setShowNav] = useState(false)

  const hideNavbar = () => {
    setShowNav(false)
  }

  window.addEventListener('resize', () => {
      if(window.innerWidth > 768) {
        hideNavbar()
      }
    })
  
  return (
    <nav className={`navbar d-md-flex shadow-sm ${showNav ? 'd-block' : 'd-flex'} `} >

      <Link className="navbar-brand mx-5" to="/"><h4>The Elegant Flea.</h4></Link>
      <i onClick={() => setShowNav(true)} className={`fa-solid fa-bars d-md-none mx-3 ${showNav ? 'd-none' : 'd-flex'}`} />

        <div className={`d-md-flex mx-5 ${showNav ? 'd-flex flex-column' : 'd-none'}`}>
          <i onClick={() => hideNavbar()} className={`fa-solid fa-x d-md-none align-self-end ${showNav ? 'd-flex' : 'd-none'}`} />
          <Link onClick={() => hideNavbar()} to='/' className='nav-link'>Home</Link>
          <Link onClick={() => hideNavbar()} to='products' className='nav-link'>Shop</Link>
          <Link onClick={() => hideNavbar()} to='contact' className= 'nav-link' > Contact</Link>
          <Link onClick={() => hideNavbar()} className='nav-link icon-cart-btn' to="cart">Cart <i className="fa-solid fa-bag-shopping" />({items.length})</Link>
        </div>
    </nav>
  )
}

export default Navbar