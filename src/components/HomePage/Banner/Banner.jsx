import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import banner1 from "../../../img/banner1.png"
import banner2 from "../../../img/banner2.png"
import banner3 from "../../../img/banner3.png"
import banner4 from "../../../img/banner4.png"

const images = [
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
];
const Banner = () => {
  return (
    <div>
    <SimpleImageSlider
      width={449.5}
      height={500}
      images={images}
      showNavs={true}
    />
  </div>
  )
}

export default Banner