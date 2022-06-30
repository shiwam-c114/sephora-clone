import React from 'react'
import hero1 from "../../../img/hero1.png"
import hero2 from "../../../img/hero2.png"
import hero3 from "../../../img/hero3.png"
import "./Hero.css"
const Hero = () => 
{

  return (
    <div>
         <div className='hero_images'>
            <div>
                <img src={hero1} alt="" />
            </div>
            <div>
                <img src={hero2} alt="" />
            </div>
            <div>
                <img src={hero3} alt="" />
            </div>
           
              
         </div> 
    </div>
  )
}

export default Hero