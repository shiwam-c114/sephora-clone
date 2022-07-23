import React, { useEffect } from "react";
import { Img, Box, Flex } from "@chakra-ui/react";
import CarousalCss from "./CarousalCss.module.css";

function MainCarousal({ ToShow }) {
  function movePrev(e) {
    let k = e.target;
    while (k.parentNode.className !== "CarousalCss_carousalHolder__S7--v") {
      k = k.parentNode;
    }
    k.parentNode.scrollLeft -= 400;
  }
  function moveNext(e) {
    let k = e.target;
    // console.log(k)
    while (k.parentNode.className !== "CarousalCss_carousalHolder__S7--v") {
      // console.log(k.parentNode.className , "--clas")
      k = k.parentNode;
    }
    k.parentNode.scrollLeft += 400;
  }
  useEffect(() => {
    setTimeout(() => {
      let a = document.querySelectorAll(".CarousalCss_carousalHolder__S7--v");
      a.forEach((node) => {
        node.scrollLeft += 30;
      });
    }, 2000);
  }, []);

  return (
    <div className={CarousalCss.carousalHolder}>
      <button onClick={movePrev} className={CarousalCss.prevBtn}>
        <svg viewBox="0 0 24 40" className="1)-">
          <g fill-rule="nonzero" fill="none" className="1)-">
            <path
              className="1)-"
              d="M4.547 4.354c-.644.503-.731 1.399-.195 2.003L16.502 20 4.352 33.643c-.537.604-.45 1.497.195 2.002.644.503 1.602.422 2.14-.182L19.646 20.91c.237-.263.354-.587.354-.91 0-.323-.117-.648-.354-.913L6.687 4.536c-.3-.33-.724-.516-1.168-.512a1.58 1.58 0 0 0-.972.33Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </button>

      {ToShow.map((item) => (
        <>
          <Img p="5px" w="50%" borderRadius="10px" src={item.img}></Img>
        </>
      ))}

      <button onClick={moveNext} className={CarousalCss.nextBtn}>
        <svg viewBox="0 0 24 40">
          <g fill-rule="nonzero" fill="none">
            <path
              d="M4.547 4.354c-.644.503-.731 1.399-.195 2.003L16.502 20 4.352 33.643c-.537.604-.45 1.497.195 2.002.644.503 1.602.422 2.14-.182L19.646 20.91c.237-.263.354-.587.354-.91 0-.323-.117-.648-.354-.913L6.687 4.536c-.3-.33-.724-.516-1.168-.512a1.58 1.58 0 0 0-.972.33Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default MainCarousal;
