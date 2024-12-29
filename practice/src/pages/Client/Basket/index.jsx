import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BasketContext } from "../../../context/BasketProvider";
import { useContext } from 'react';
const Basket = () => {
  const { basket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket } = useContext(BasketContext)
  const calculateTotalPrice = () => {
    return basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
}
  return (
    <>
<h1>Total price is <span>{calculateTotalPrice()}</span></h1>
     
        {
            basket.length === 0 ? <h1>basket item is empty</h1> : 
            
            <table className='table table-dark table-striped'>
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Increase</th>
                <th scope="col">Quantity</th>
                <th scope="col">Decrease</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {
              basket.map((b)=>{
                return(
                  <tbody key={b.id}>
                    <tr>
                      <td>
                        <img src={b.image} alt={b.title}  width={150}/>
                      </td>
                      <td>
                        {b.title}
                      </td>
                      <td>
                        {b.price}
                      </td>
                      <td>
                        <button onClick={()=>{increaseBasketCount(b)}} className='btn btn-outline-success'>+</button>
                      </td>
                      <td>
                        {b.quantity}
                      </td>
                      <td>
                        <button onClick={()=>{decreaseBasketCount(b)}} className='btn btn-outline-info'>-</button>
                      </td>
                      <td>
                        {b.price*b.quantity}
                      </td>
                      <td>
                        <button onClick={()=>{removeBasketItem(b)}} className='btn btn-outline-danger'>X</button>
                      </td>
                    </tr>
                   
                  </tbody>
                   
                  
                )
              })
            }

            </table>
             
        }
      


    </>
  )
}

export default Basket