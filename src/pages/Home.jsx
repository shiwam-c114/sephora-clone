import React from 'react'
import Menu from "../components/HomePage/Menu/Menu"
import Banner from "../components/HomePage/Banner/Banner"
import Hero from "../components/HomePage/Hero/Hero"
import home from "./Home.module.css"
import Footer from '../components/HomePage/Footer/Footer'
import NavBar from '../components/HomePage/Navbar/NavBar'
function Home() {
  return (
    <div>
       <NavBar/>
       <Menu/>
       <div className={home.image_slider}>
          <Banner/>
          <Banner/>
          <Banner/>
       </div>
          <Hero/>
          <Hero/>
       <div>
         <Footer/>
       </div>
       
    </div>
  )
}

export default Home