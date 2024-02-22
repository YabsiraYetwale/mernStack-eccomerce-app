import React from 'react'
import { catagory } from '../components/utils'
import {Link} from 'react-router-dom'
import './css/Detail.css'
const Detail = () => {
  return (
     <>
   {catagory.map((post,i)=>( 
   <div className="details">
    <div className='dcat' key={i}>
        <div className='images'>
            <div className='imagesleft'>
            <img src={post.image} alt='img'/>
            <img src={post.image} alt='img'/>
            <img src={post.image} alt='img'/>
            <img src={post.image} alt='img'/>
            </div>
            <div className='imagesright'>
            <img src={post.image} alt='img'/>
            </div>
        </div>
       <div className='dca'>
          <span className='dtitle'>{post.title}</span>
          <div  className='dprice'>
          <span >${post.newprice}</span>
          <span className='dold'>${post.oldprice}</span>
          </div>
          <span className='description'>{post.description}</span>
          <div className="selectsize">Select Size</div>
          <div className="sizes">
            <div className="size"><span>S</span></div>
            <div className="size"><span>M</span></div>
            <div className="size"><span>L</span></div>
            <div className="size"><span>XL</span></div>
            <div className="size"><span>XXL</span></div>
            </div>
            <div className="addcart"><span>ADD TO CART</span></div>
            <div className="catags">
              <div className="catg"><span>Catagory</span> : Women,T-shirt,Crop Cop</div>
              <div className="tags"><span>Tags</span>: Modern,Latest</div>
            </div>
       </div>
    </div>
    <div className="sides">
    <div className="dess">
    <Link to={`/editProduct/${post._id}`} className="des edit"><span>Edit</span></Link>
    <button className="des del"><span>Delete</span></button>
    </div>
    </div>
   </div>
   ))
    }
    
    </>
  )
}

export default Detail