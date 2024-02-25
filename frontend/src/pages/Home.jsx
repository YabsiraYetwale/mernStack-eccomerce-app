import React from 'react'
import Hero from '../components/hero/Hero'
import Women from '../components/popular/womenpopular/Women'
import Offer from '../components/offer/Offer'
import NewsLetter from '../components/newsLetter/NewsLetter'
import NewCollections from '../components/newcollection/NewCollections'
import './css/Home.css'
const Home = () => {
  return (
    <>
    <div className='homeshop'>
    <Hero/>
    <Women/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    </div>
    </>
  )
}

export default Home