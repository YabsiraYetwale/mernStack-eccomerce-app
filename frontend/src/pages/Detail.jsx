import {useEffect} from 'react'
import { catagory } from '../components/utils'
import {Link, useNavigate, useParams} from 'react-router-dom'
import './css/Detail.css'
import {useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProduct } from '../actions/product'
const Detail = () => {
  const {product,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  const {id}=useParams()
  const history=useNavigate()
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch,id])
  if (!product) {
    return(null)
  }
  if (isLoading) {
    return('Loading ...')
  }
  return (
     <>
  
   <div className="details">
    <div className='dcat' >
        <div className='images'>
            <div className='imagesleft'>
            <img src={product?.image} alt='img'/>
            <img src={product?.image} alt='img'/>
            <img src={product?.image} alt='img'/>
            <img src={product?.image} alt='img'/>
            </div>
            <div className='imagesright'>
            <img src={product?.image} alt='img'/>
            </div>
        </div>
       <div className='dca'>
          <span className='dtitle'>{product?.title}</span>
          <div  className='dprice'>
          <span >${product?.newPrice}</span>
          <span className='dold'>${product?.oldPrice}</span>
          </div>
          <span className='description'>{product?.description}</span>
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
    <Link to={`/editProduct/${product?._id}`} className="des edit"><span>Edit</span></Link>
    <button className="des del"><span onClick={()=>dispatch(deleteProduct(product._id,history))}>Delete</span></button>
    </div>
    </div>
   </div>
   
    
    </>
  )
}

export default Detail