import {MenCatagory,WomenCatagory,KidsCatagory} from './Catagory'
import {catagories} from '../utils/index'
import m7 from '../../assets/m77.png'
import w5 from '../../assets/w10.png'
import k4 from '../../assets/k44.png'
import './catagory.css'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { fetchProducts } from '../../actions/product'
import { useEffect } from 'react'
export const MenCatagories = () => {
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
   <div className='catagorys1'>
    <div  className='catagorys'>
    <div className='catagory'>
     <div className="catagoryparticles">
        <div className="cright">
         <div className="flat">
             <span>FLAT 50% OFF</span>
         </div>
         <div  className="hour" ><span>12</span> Hours <span>20</span> Mins</div>

         <div className="explore"><span>Explore more</span></div>
        </div>
        <div className="cleft">
         <img src={m7} alt='catagory'/>
        </div>
     </div>
    </div>
    </div>
    <div>
    <div className="sortshowm">
    <span  className="show" >Showing 1-12 out of 54 Products</span>

    <div className="sortm"><span>Sort by</span></div>
    </div>
    <div className='cats1 cats1m'>
  <div className='cats'>
    {products.map((post,i)=>(
      <div key={i}>
         <MenCatagory post={post}/>
      </div>
    ))}
   </div>
   </div>
    </div>
    <div className="explore"><span>Explore more</span></div>
    </div>
    </>
  )
}
export const WomenCatagories = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return( <CircularProgress/>)
  }
  return (
    <>
    <div className='catagorys1'>
    <div  className='catagorys'>
    <div className='catagory'>
     <div className="catagoryparticles">
        <div className="cright">
         <div className="flat">
             <span>FLAT 50% OFF</span>
         </div>
         <div  className="hour" ><span>12</span> Hours <span>20</span> Mins</div>

         <div className="explore"><span>Explore more</span></div>
        </div>
        <div className="cleft">
         <img src={w5} alt='catagory'/>
        </div>
     </div>
    </div>
    </div>
     <div>
     <div className="sortshowm">
    <span  className="show" >Showing 1-12 out of 54 Products</span>
    <div className="sortm"><span>Sort by</span></div>
    </div>
    <div className='cats1 cats1w'>
   <div className='cats'>
    {products.map((post,i)=>(
      <div key={i}>
         <WomenCatagory post={post}/>
      </div>
    ))}
   </div>
   </div>
     </div>
     <div className="explore"><span>Explore more</span></div>
    </div>
    </>
  )
}
export const KidsCatagories = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return( <CircularProgress/> )
  }
  return (
    <>
    <div className='catagorys1'>
    <div  className='catagorys'>
    <div className='catagory'>
     <div className="catagoryparticles">
        <div className="cright">
         <div className="flat">
             <span>FLAT 50% OFF</span>
         </div>
         <div  className="hour" ><span>12</span> Hours <span>20</span> Mins</div>

         <div className="explore"><span>Explore more</span></div>
        </div>
        <div className="cleft">
         <img src={k4} alt='catagory'/>
        </div>
     </div>
    </div>
    </div>
    <div className="sortshowm sortk">
    <span  className="show" >Showing 1-12 out of 54 Products</span>

    <div className="sortm"><span>Sort by</span></div>
    </div>
    <div className='cats1 cats1k'>
   <div className='cats'>
    {products.map((post,i)=>(
      <div key={i}>
         <KidsCatagory post={post}/>
      </div>
    ))}
   </div>
   </div>
   <div className="explore"><span>Explore more</span></div>
    </div>
    </>
  )
}

