import { useSelector } from 'react-redux'
import nextId from "react-id-generator";
import { useDispatch } from 'react-redux';
import { increaseItemAmount, decreaseItemAmount, deleteItem } from '../cartSlice';

function Cart() {
const { items } = useSelector((store) => store.cart);
const dispatch = useDispatch();
let total = 0;

  return (
    <section className='cart-section'>
        <h1 className='mt-2'>Cart</h1>
        <hr />
        {items.length === 0 && <h2>Your cart is empty</h2>}
        <div>
            {items.map(item => {
                total += (item.amount * item.price)
                let htmlId = nextId();
                const {name} = item;
                return(
                    <div key={htmlId} className="cartItem">
                        <img className='cart-item-image' src={item.image} alt={name} />
                        <div className="cart-item-info">
                            <p>{name}</p>
                            <i className="fa-solid fa-arrow-up btn btn-outline-dark ml-5" onClick={() => {
                                dispatch(increaseItemAmount({ name }))
                            }}></i>
                            <p className='item-amount'>{item.amount}<span><i className="fa-solid fa-trash-can ml-5" onClick={() => {
                                dispatch(deleteItem({ name }))
                            }}></i></span></p> 
                            <i className="fa-solid fa-arrow-down btn btn-outline-dark ml-5" onClick={() => {
                                if(item.amount === 1) {
                                    dispatch(deleteItem({ name }))
                                }
                                dispatch(decreaseItemAmount({ name }))
                            }}></i>
                            <p className='mt-3 item-price'> ${(item.price * item.amount).toFixed(2)}</p>
                                </div>
                    </div>
                )
            })}
        </div>
        {items.length > 0 && <h4 className=''>Total: ${total.toFixed(2)}</h4>}
        {items.length > 0 && <button className='btn btn-primary mt-3 mb-5'>Buy Cart</button>}
    </section>
  )
}

export default Cart