import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../cartSlice';

function SingleProduct({ image, title, price, description }) {

     const [showMore, setShowMore] = useState(false)
     const [showAlert, setShowAlert] = useState(false)
     const dispatch = useDispatch();

  return (
          <div className="card product-card m-2">
            <img src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
              <h4 className='item-name'>{title.substring(0, 18)}</h4>
              <p className="card-text">${price.toFixed(2)}</p>
              <p className='product-description'>{ showMore ? description : `${description.substring(0, 40)}...`}<span onClick={() => {setShowMore(!showMore)}} className='toggle-description'>{!showMore ? ' show more' : ' show less'}</span></p>
              <button onClick={() => {
                dispatch(addItem({ title, image, price }))
                setShowAlert(true)
                setTimeout(() => {
                  setShowAlert(false) 
                },2000)
              }} className="btn btn-primary">Add to cart</button>
            </div>
            {showAlert && <div className='alert alert-success m-0'>Item added</div>}
          </div>        
  )
}

export default SingleProduct