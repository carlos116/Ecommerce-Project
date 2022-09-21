import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import SingleProduct from './SingleProduct'

function Products() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    setLoading(true)
      const getProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products')
      const data = await resp.json()
      setData(data)
      setFilterData(data)
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
    <>
    <ul className="d-flex justify-content-center pt-3">
      <li className="category-item my-0 mx-3">
        <a className="category-link" onClick={() => {
          setFilterData(data)
        }}>All</a>
      </li>
      <li className="category-item my-0 mx-2">
        <a className="category-link" onClick={() => {
          setFilterData(data.filter(item => item.category == "men's clothing"))
        }}>Men</a>
      </li>
      <li className="category-item my-0 mx-2">
        <a className="category-link" onClick={() => {
          setFilterData(data.filter(item => item.category == "women's clothing"))
        }}>Women</a>
      </li>
      <li className="category-item my-0 mx-2">
        <a className="category-link" onClick={() => {
          setFilterData(data.filter(item => item.category == "jewelery"))
        }}>Jewelry</a>
      </li>
      <li className="category-item my-0 mx-2">
        <a className="category-link" onClick={() => {
          setFilterData(data.filter(item => item.category == "electronics"))
        }}>Electronics</a>
      </li>
    </ul>
    <hr className='productshr'/>
    <div className="d-flex justify-content-center flex-wrap my-4">
      {filterData.map(item => {
        return(
          <SingleProduct key={item.id} {...item} />
        )
      })}
    </div>
    </>
  )
}

export default Products