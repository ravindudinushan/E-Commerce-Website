import React from 'react'
import Hero from '../component/Hero'
import Features from '../component/Features'
import NewArrivals from '../component/NewArrivals'
import PopularProduct from '../component/PopularProduct'
import Banner from '../component/Banner'
import About from '../component/About'
import Blog from '../component/Blog'
import NewsLatter from '../component/NewsLatter'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProduct />
      <Banner />
      <About />
      <Blog />
      <NewsLatter />
      <Footer />
    </>
  )
}

export default Home
