import React from 'react'
import { catagories } from '../components/utils'
import {Delete} from '@mui/icons-material'
import './css/ListProduct.css'

const ListProduct = () => {
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
        {catagories.map((ki,i)=>(
          <div className="listhr" key={i}>
            <hr/>
            <div className="liste">
            <div className="imglis">
            <img src={ki.image} alt="img" />
            <span>{ki.title}</span>
            </div>
            <span>${ki.oldprice}</span>
             <span>${ki.newprice}</span>
             <span>{ki.catagory}</span>
             <span className='dellis'><Delete/></span>
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
           <span>{catagories.length}</span>
         </div>
       </div>
      </div>
    </div>
    </div>
    </>  )
}

export default ListProduct