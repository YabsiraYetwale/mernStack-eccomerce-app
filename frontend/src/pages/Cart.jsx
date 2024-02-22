import React from 'react'
import { kid } from '../components/utils'
import './css/Cart.css'


const Cart = () => {
  return (
    <>
    <div className="carts1">
    <div className="carts">
      <div className="caheder">
        <div className="pti">
        <span>Product</span>
        <span className='ti'>Title</span>
        </div>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Remove</span>
      </div>
      <div className="kidd">
        {kid.map((ki,i)=>(
          <div className="kidehr" key={i}>
            <hr/>
            <div className="kide">
            <div className="imgti">
            <img src={ki.image} alt="img" />
            <span>{ki.title}</span>
            </div>
             <span>${ki.newprice}</span>
             <div className="qua">2</div>
             <span>${ki.newprice}</span>
             <span>X</span>
            </div>
          </div>
        ))}
        <hr className='hrt'/>
      </div>
    </div>
    <div className="cartright">
      <div className="carrleft">
        <div className="rgti">Cart Totals</div>
        <div className="cals">
          <div className="suthr">
          <div className="sut su">
            <span>Subtotal</span>
            <span>$301</span>
          </div>
          <hr />
          </div>
          <div className="suth">
          <div className="sut su">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <hr />
          </div>
          <div className="sut suth">
            <span>Total</span>
            <span>$301</span>
          </div>
        </div>
      </div>
      <div className="caright">
        <div className="carrs">
         <div  className="promo" >if you have a prome code, Enter it here</div>
         <div className="promocode">
           <input type="text" placeholder="promo code" className="promoi"/>
           <div className="csumit"><span>Submit</span></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart