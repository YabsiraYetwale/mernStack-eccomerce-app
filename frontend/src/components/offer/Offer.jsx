import w2 from '../../assets/m11.png'
import './Offer.css'
const Offer = () => {
  return (
    <>
    <div  className='offers'>
    <div className='offer'>
     <div className="offerparticles">
        <div className="hright">
         <div className="exclusive">
             <span>Exclusive </span>
             <span>Offers For You</span>
         </div>
         <span  className="best" >ONLY ON BEST SELLERS PRODUCTS</span>

         <div className="check"><span>Check now</span></div>
        </div>
        <div className="hleft">
         <img src={w2} alt='offer'/>
        </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default Offer