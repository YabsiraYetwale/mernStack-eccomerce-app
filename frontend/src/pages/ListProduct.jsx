import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { deleteProducts, fetchProducts } from '../actions/product'
import { useEffect } from 'react'
import {Delete} from '@mui/icons-material'
import './css/ListProduct.css'

const ListProduct = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return('Loading ...')
  }
return (
    <>
    <div className="lists1">
    <div className="lists">
      <div className="listheder">
        <div className="listi">
        <span>Products</span>
        <span className='liti'>Title</span>
        </div>
        <span>Old Price</span>
        <span>New Price</span>
        <span>Category</span>
        <span>Remove</span>
      </div>
      <div className="list">
        {products.map((product,i)=>(
          <div className="listhr" key={i}>
            <hr/>
            <div className="liste">
            <div className="imglis">
            <img src={product.image} alt="img" />
            <span>{product.title}</span>
            </div>
            <span>${product.oldPrice}</span>
             <span>${product.newPrice}</span>
             <span>{product.category}</span>
             <span className='dellis' onClick={()=>dispatch(deleteProducts(product._id))}><Delete/></span>
            </div>
          </div>
        ))}
        <hr className='lhrt'/>
      </div>
    </div>
    <div className="listright">
      <div className="listleft">
        <div className="rglist">Totals</div>
         <div className="totcals">
         <div className="lisuthr">
         <div className="lisut lisu">
           <span>Men</span>
           <span>6</span>
         </div>
         <hr />
         </div>
         <div className="lisuthr">
         <div className="lisut lisu">
           <span>Women</span>
           <span>10</span>
         </div>
         <hr />
         </div>
         <div className="lisuthr">
         <div className="lisut lisu">
           <span>Kids</span>
           <span>8</span>
         </div>
         <hr />
         </div>
         <div className="lisut lisuth">
           <span>Total</span>
           <span>{products.length}</span>
         </div>
       </div>
      </div>
    </div>
    </div>
    </>  )
}

export default ListProduct