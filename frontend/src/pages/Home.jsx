import React from 'react'
import Hero from '../components/hero/Hero'
import Women from '../components/popular/womenpopular/Women'
import Offer from '../components/offer/Offer'
import NewsLetter from '../components/newsLetter/NewsLetter'
import Kids from '../components/newcollection/Kids'
import './css/Home.css'
const Home = () => {
  return (
    <>
    <div className='homeshop'>
    <Hero/>
    <Women/>
    <Offer/>
    <Kids/>
    <NewsLetter/>
    </div>
    </>
  )
}

export default Home