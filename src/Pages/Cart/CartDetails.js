import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./CartDetails.css"
import { ADD, DLTONE, REMOVE } from '../../redux/action';
import { toast } from 'react-toastify';
import { DeviceUUID } from 'device-uuid';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useLocation from '../Hooks/useLocation';

function CartDetails() {
  const getdata = useSelector((state) => state.cartreducer)
  const uuid = new DeviceUUID().get();
  const [user] = useAuthState(auth);
  const distance = useLocation()
  // console.log(distance);
  // console.log();
  const navigate = useNavigate()
  let total = 0;
  let quantity = 0;
  const dispatch = useDispatch();
  const add = (ele) => {
    console.log(ele)
    dispatch(ADD(ele));

  }
  const remove = (ele) => {
    dispatch(REMOVE(ele));

  }
  const deleteOne = (id) => {
    dispatch(DLTONE(id));


  }
  
  const HandleOrder = (totalPrice) => {
    
    const cartsData = {
      userId: uuid,
      carts: getdata,
      totalPrice:totalPrice
    }
    fetch('https://manufacture-backend.onrender.com/order', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(cartsData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your order is complete")
          navigate('/')
        }
      })
  }
  console.log(total);
  return (
    <div className='cartcontainer'>
      <div className='carttext'>Cart</div>
      {
        getdata.carts.map((product, index) => {
          quantity = quantity + product.qnty;
          // total = total + product.prices[this.props.currencyIndex].amount * product.qnty;
          total = total + parseInt(product.price) * product.qnty;
          // setTotalPrice(total)
          // symbol = product.prices[this.props.currencyIndex].currency.symbol;
          // tax = 0.21 * total;
          return (
            <div key={index}>
              <div className='line'></div>
              <div className='cartContainer'>

                <div className='detailscontainer'>
                  <div className='details'>
                    <div className='nametag'>{product.name}</div>
                    <div className='pricetag'>Price: {product.price}</div>

                  </div>
                  <div className='buttongroup'>
                    <div className='plusMinusButton' >
                      <button onClick={() => add(product)}>plus</button>
                    </div>
                    <div>{product.qnty}</div>
                    <div className='plusMinusButton'
                      onClick={product.qnty <= 1 ? () => deleteOne(product.id) : () => remove(product)}>
                      {/* onClick={product.qnty <= 1 ? () =>console.log(product.qnty): () => remove(product)}> */}
                      Minus
                    </div>
                  </div>
                </div>
                <div className='imagecontainer' >
                  {/* <img src="/public/entry-level-front-end-developer.png" alt='' /> */}
                  <h1>My Image</h1>
                </div>
              </div>
            </div>
          )
        })
      }
      <div>
        <div className='line'></div>
        <div className='totalarea'>

          <div className='taxarea'>
            {/* <div >Tax 21% : {symbol}{tax.toFixed(2)}</div> */}
            {/* <div>Quantity : {quantity}</div> */}
            <div>Total: {total} tk</div>
          </div>
          {/* {
            distance<180 ?
            
          :
          <div>You are not in the area</div>
          } */}
          <div className='orderbutton'>
            <div className='ordertext'
              onClick={() => HandleOrder(total)}
            >Order</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetails