import {Link} from 'react-router-dom'
import './catagory.css'
export  const MenCatagory = ({post}) => {
  return (
    <>
   {post.catagory=='men'  && <div className='cat'>
       <Link to={`/product/${post._id}`}><img src={post.image} alt='img'/></Link>
       <div className='ca'>
          <span className='ctitle'>{post.title}</span>
          <div  className='cprice'>
          <span >${post.newprice}</span>
          <span className='cold'>${post.oldprice}</span>
          </div>
       </div>
    </div>}
    
    </>
  )
}
export  const WomenCatagory = ({post}) => {
  return (
    <>
   {post.catagory=='women'  && <div className='cat'>
       <Link to={`/product/${post._id}`}><img src={post.image} alt='img'/></Link>
       <div className='ca'>
          <span className='ctitle'>{post.title}</span>
          <div  className='cprice'>
          <span >${post.newprice}</span>
          <span className='cold'>${post.oldprice}</span>
          </div>
       </div>
    </div>}
    
    </>
  )
}
export  const KidsCatagory = ({post}) => {
  return (
    <>
   {post.catagory=='kids'  && <div className='cat'>
       <Link to={`/product/${post._id}`}><img src={post.image} alt='img'/></Link>
       <div className='ca'>
          <span className='ctitle'>{post.title}</span>
          <div  className='cprice'>
          <span >${post.newprice}</span>
          <span className='cold'>${post.oldprice}</span>
          </div>
       </div>
    </div>}
    
    </>
  )
}

