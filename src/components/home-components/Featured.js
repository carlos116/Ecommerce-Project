import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import SingleProduct from '../SingleProduct'

function Featured() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
      const getProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const data = await resp.json();
      setProducts(data)
      setLoading(false)
    }
    getProducts() 
  },[])
  
  if(loading) {
    return(
      <Loading />
    )
  }


  return (
    <div className="featured-container">
      <div className="featured-text-container pt-2 pb-1">
        <h2 className='text-center'>Featured Products</h2>
        <p className='text-center'>Sorted by our user's reviews</p>
      </div>
        <div className="products-container d-flex flex-wrap justify-content-center mt-4">
          {products.slice(0,6).map((product) => {
            return (
            <div key={product.id} className="mx-4">
              <SingleProduct {...product} />
            </div>
            )
          } )}
        </div>
    </div>
  )
}

export default Featured