import React from 'react'
import { useCart } from '../context/CartContext'
import "../css/Cart.css"
function Cart() {
  const {cartItems,setCartItems}=useCart()
  const removeItem=(item)=>{
   setCartItems((prev)=>{
      const newCart=prev.filter(element=>element.id !==item.id)
      return newCart
    })
  }
  const incrementItemCount = (item) => {
    setCartItems((prev) => {
      return prev.map((element) =>
        element.id === item.id ? { ...element, count: element.count + 1 } : element
      );
    });
  };

  const decrementItemCount = (item) => {
    setCartItems((prev) => {
      return prev.map((element) =>
        element.id === item.id && element.count > 1 ? { ...element, count: element.count - 1 } : element
      );
    });
  };
  return (
    <>
       
    <section className='cart' >
      {
        cartItems.length === 0  && <h1 className='empty'>Cart is Empty</h1>
      }
            {
              cartItems.map(item =>{
                return <div className='item'>
                       <img src={item.images[0]} alt={item.title}  height={"200px"} width={"200px"}/>
                       <h2 className='child'>{item.title}</h2>
                       <div className='child'>
                        <button className='button' onClick={() => incrementItemCount(item)}>+</button> 
                        <b>{item.count}</b> 
                        <button className='button'  onClick={() => decrementItemCount(item)}>-</button>
                       </div>
                       <h3 className='child'>{(item.price * item.count).toFixed(2)}$</h3>
                       <button className='remove-btn' onClick={()=>removeItem(item) }>remove</button>
                </div>
              })
            }
    </section>
    </>
  )
}

export default Cart