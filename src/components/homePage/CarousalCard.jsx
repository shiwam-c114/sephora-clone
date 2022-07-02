import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import React from "react";
// import  ProductListStyle  from "../Products/Styles/ProductList.module.css";

function CarousalCard({ Item }) {
  return (
    <a>
      <Flex
        m={4}
        w="230px"
        _hover={{
          transform: "translateY(-6px)",
        }}
      >
        {/* <div className={ProductListStyle.badgeHolderParent}>
      <div className={ProductListStyle.badgeHolder}>
          {Item.currentSku.isNew?
          <div>
              <div className={ProductListStyle.badgeStyle}>new</div>
              <br />
          </div>
          :<></>}
      
          {Item.currentSku.isLimitedEdition?<div>
              <div className={ProductListStyle.badgeStyle}>limited edition</div>
              <br />
          </div>
          :<></>}
          {Item.currentSku.isOnlineOnly?
          <div>
              <div className={ProductListStyle.badgeStyle}>online only</div>
              <br />
          </div>
          :<></>}
      </div>
  </div> */}

        <Box
          boxShadow={"0 3px 10px 0 rgb(150 150 150 / 45%)"}
          w="230px"
          bg="white"
          rounded="lg"
        >
          <Image
            padding="0 25px"
            fit="cover"
            src={Item.heroImage}
            alt="avatar"
          />

          <Box padding="0 0 15px 15px">
            <chakra.span
              display="block"
              fontSize="sm"
              color="gray.800"
              fontWeight="bold"
            >
              {Item.brandName}
            </chakra.span>
            <chakra.span
              maxW="50%"
              fontSize="10px"
              fontWeight="500"
              color="gray.700"
            >
              {Item.displayName}
            </chakra.span>
          </Box>
        </Box>
      </Flex>
    </a>
  );
}

export default CarousalCard;
