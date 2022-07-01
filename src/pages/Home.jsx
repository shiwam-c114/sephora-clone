import React, { useEffect, useState } from "react";
import Carousal from "../components/homePage/Carousal";
import IconList from "../components/homePage/IconList";
import MainCarousal from "../components/homePage/MainCarousal";
import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
import banner4 from "../img/banner4.png";

function Home() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [IMG] = useState([
    {
      img: banner1,
      topic: "Complexion picks from HUDA BEAUTY",
      subTopic: "Get a luminous matte finish with full-coverage formulas.",
    },
    {
      img: banner2,
      topic: "New HAUS LABS BY LADY GAGA",
      subTopic: "The future of clean makeup - only at Sephora.",
    },
    {
      img: banner3,
      topic: "Just Arrived",
      subTopic: "The brand-new picks you won't want to miss.",
    },
    {
      img: banner4,
      topic: "Must-Have Minis",
      subTopic: "Discover can't-miss beauty at great values. ",
    },
    {
      img: "https://www.sephora.com/contentimages/homepage/060722/Homepage/RWD/2022-06-09-hp-slide-ppp7-lady-gaga-desktop-mobile-us-ca-rwd-slice.jpeg?imwidth=1096",
      topic: "clean butter",
      subTopic: "excidtere",
    },
  ]);
  function getData() {
    fetch(`http://localhost:8080/makeup`)
      .then((res) => res.json())
      .then((data) => {
        setFirst(data);
      });
    fetch(`http://localhost:8080/hair`)
      .then((res) => res.json())
      .then((data) => {
        setSecond(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MainCarousal ToShow={IMG} />
      <Carousal ToShow={first} />
      <Carousal ToShow={second} />
      <IconList />
      {/* <BasicUsage /> */}
    </div>
  );
}

export default Home;
