import React from 'react'
import { Img, Box, Flex } from "@chakra-ui/react";

function MainCarousalCard({item}) {
  return (
    <Box w="1000%">
          <Img p="20px" w="50%" src={item.img}></Img>
          <Box > {item.topic} </Box>     
        </Box>
  )
}

export default MainCarousalCard