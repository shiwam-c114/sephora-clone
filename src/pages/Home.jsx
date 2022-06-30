import React, { useEffect, useState } from 'react'
import Carousal from '../components/homePage/Carousal'
import IconList from '../components/homePage/IconList'
import MainCarousal from '../components/homePage/MainCarousal'


function Home() {
const [first, setFirst] = useState([])
const [second, setSecond] = useState([])
const [IMG] = useState([{img:"https://www.sephora.com/contentimages/homepage/060722/Homepage/RWD/2022-06-09-hp-slide-ppp7-lady-gaga-desktop-mobile-us-ca-rwd-slice.jpeg?imwidth=1096", topic:"Complexion picks from HUDA BEAUTY", subTopic:"Get a luminous matte finish with full-coverage formulas."},{img:"https://www.sephora.com/contentimages/homepage/060722/Homepage/RWD/2022-06-17-hp-slide-fragrance-category-by-price-rwd-us-slice.jpeg?imwidth=1096", topic:"New HAUS LABS BY LADY GAGA", subTopic:"The future of clean makeup - only at Sephora."},{img:"https://www.sephora.com/contentimages/homepage/070522/Homepage/RWD/2022-06-02-slotting-minis-site-responsive-desktop-mobile-home-page-hero-banner-4-product-us_slice-01.jpeg?imwidth=632%202x", topic:"Just Arrived", subTopic:"The brand-new picks you won't want to miss."},{img:"https://www.sephora.com/contentimages/homepage/060722/Homepage/RWD/2022-06-20-hp-slide-new-arrivals-4-products-rwd-us-slice-UPDATED.jpeg?imwidth=1096", topic:"Must-Have Minis", subTopic:"Discover can't-miss beauty at great values. "},{img:"https://www.sephora.com/contentimages/homepage/060722/Homepage/RWD/2022-6-15-hp-slide-huda-fauxfilter-concealer-essentials-rwd-us-ca-slice.jpeg?imwidth=1096", topic:"clean butter", subTopic:"excidtere"}])
  function getData() {
    fetch(`http://localhost:8080/makeup`).then(res=>res.json()).then(data=>{setFirst(data)})
    fetch(`http://localhost:8080/hair`).then(res=>res.json()).then(data=>{setSecond(data)})
  }
  useEffect(() => {
    getData()

  }, [])
  

  return (
    <div>
      <MainCarousal ToShow={IMG}/>
      <Carousal ToShow={first} />
      <Carousal ToShow={second}/>
      <IconList />
      {/* <BasicUsage /> */}
    </div>
  )
}

export default Home