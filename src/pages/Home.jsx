import React from 'react'
import Menu from "../components/HomePage/Menu/Menu"
import Banner from "../components/HomePage/Banner/Banner"
import Hero from "../components/HomePage/Hero/Hero"
import "./Home.css"
function Home() {
  return (
    <div>
       <Menu/>
       <div className='image_slider'>
          <Banner/>
          <Banner/>
          <Banner/>
       </div>
          <Hero/>
          <Hero/>
       <div>
           
       </div>
       
    </div>
  )
}

export default Home