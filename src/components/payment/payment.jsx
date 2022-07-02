import {
  Button,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Heading,
  HStack,
  Input,
  Divider,
  VStack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
const ch = {
  height: "30px",
  width: "30px",
  backgroudColor: "black",
};
const my = {
  padding: "7%",
  position: "fixed",
  top: 0,
  width: "35%",
  right: 1,
};

export default function Pay() {
  const [s, se] = useState("block");
  const pro = () => {
    var ans = s === "block" ? "none" : "block";
    se(ans);
  };

  return (
    <>
      <Center height="100px" boxShadow="lg">
        <Image boxSize="250px" src="https://www.sephora.com/img/ufe/logo.svg" />
      </Center>

      <Box w="80%" ml="10%">
        <Box border={"5px"} borderColor="red">
          <Box ml="0%" fontSize="35px">
            {" "}
            <Text
              borderBottom="2px"
              p="20px"
              mb="25px"
              w={"70%"}
              borderColor="Black"
            >
              Checkout
            </Text>
          </Box>
          {/* <VStack> */}
          <Flex width={"70%"}>
            <Heading fontSize={"25px"}>Shipping Address</Heading>
            <Button ml="260px" w="200px">
              Edit
            </Button>
          </Flex>
          <Box textAlign="left" border="10px" borderColor="red">
            <Text>Your Address</Text>
            <Text>Your Address</Text>
            <Text>Your Address</Text>
            <Text>Your Address</Text>
          </Box>
        </Box>
        {/* <hr/> */}
        <Box mt="30px">
          <Divider w="70%" borderColor="black" />
        </Box>

        <Flex width={"70%"} mt="25px">
          <Heading fontSize={"25px"}>Delivery & Gift Options</Heading>
          <Button ml="200px" w="200px">
            Edit
          </Button>
        </Flex>
        <Box mt="10px" mb="10px" border={"5px"} borderColor="black">
          <Text fontWeight={"700"}>Free-Standard</Text>
          <Text>
            Delivery by{"Fri"},{"Jul 1"}
          </Text>
        </Box>
        <Divider w="70%" borderColor="black" />
      </Box>
      <Box>
        <Flex width={"70%"} mt="25px" ml="10%">
          <Heading fontSize={"25px"}>Payment Method</Heading>
          <HStack ml="300px">
            <svg viewBox="0 0 11 17">
              <path d="M3 6.5V3.4C3 2.1 4.1 1 5.5 1S8 2.1 8 3.4v3.1c0 .3.2.5.5.5s.5-.2.5-.5V3.4C9 1.5 7.4 0 5.5 0S2 1.5 2 3.4v3.1c0 .3.2.5.5.5s.5-.2.5-.5zM9.8 7H1.2C.6 7 0 7.6 0 8.3v7.4c0 .7.6 1.3 1.2 1.3h8.5c.7 0 1.2-.6 1.2-1.3V8.3C11 7.6 10.4 7 9.8 7zm.2 8.7c0 .1-.1.3-.2.3H1.2c-.1 0-.2-.1-.2-.3V8.3c0-.1.1-.3.2-.3h8.5c.1 0 .2.1.2.3v7.4z"></path>
              <path d="M5.5 10c-.3 0-.5.3-.5.6v2.9c0 .2.2.5.5.5s.5-.3.5-.6v-2.9c0-.2-.2-.5-.5-.5z"></path>
            </svg>

            <Text ml="300px">Scure</Text>
          </HStack>
        </Flex>
      </Box>

      <Box ml="10%" mt="30px">
        <HStack>
          <Radio size={"lg"} colorScheme="blackAlpha"></Radio>
          <Image
            mr="20px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/payPal.svg"
          />
          <Text fontWeight={700}>Pay with Paypal</Text>
        </HStack>
        <Divider w="65%" borderColor="black" h="10px" />
        <HStack mt="20px">
          <Radio size={"lg"} colorScheme="blackAlpha"></Radio>
          <Image
            mr="20px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/klarna.svg"
          />
          <Text fontWeight={700}>
            Pay with 4 interest-free payments of $20.48
          </Text>
        </HStack>
        <Divider w="65%" borderColor="black" h="10px" />

        <HStack mt="20px">
          <Radio size={"lg"} colorScheme="blackAlpha"></Radio>
          <Text fontWeight={700}>Pay with Debit or Credit Card</Text>
          <Image
            mr="20px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/payPal.svg"
          />
          <Image
            mr="2px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/sephora.svg"
          />
          <Image
            mr="2px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/visa.svg"
          />
          <Image
            mr="2px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/masterCard.svg"
          />
          <Image
            mr="2px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/discover.svg"
          />
          <Image
            mr="2px"
            w="50px"
            src="https://www.sephora.com/img/ufe/payments/JCPenney.svg"
          />
        </HStack>
        <Box>
          <Input placeholder="Card Number*" w="25%" mt="20px" />
        </Box>
        <Divider w="65%" borderColor="black" h="10px" />
        <HStack w="50%" mt="25px">
          <Input placeholder="MM*" w="25%" />
          <Input
            placeholder="YY*"
            w="25%"
            // mt='20px'
          />
          <Input placeholder="CVV/CVC*" w="25%" mt="20px" />
        </HStack>
        <HStack w="60%" mt="25px">
          <Input
            placeholder="First Name*"
            w="50%"
            // mt='20px'
          />
          <Input
            placeholder="Last Name*"
            w="50%"
            // mt='20px'
          />
        </HStack>

        <Divider w="65%" borderColor="black" h="10px" />
      </Box>

      <Box ml="10%" mt="20px">
        <HStack>
          <Radio size={"lg"} colorScheme="blackAlpha"></Radio>
          {/* <Image  mr='20px'w='50px' src='https://www.sephora.com/img/ufe/payments/payPal.svg'/><Text fontWeight={700}>Pay with Paypal</Text> */}
          <Text>Use my shippinga Address</Text>
        </HStack>
        <Text ml="3%" fontWeight={700}>
          current add
        </Text>

        <HStack>
          <Radio size={"lg"} colorScheme="blackAlpha"></Radio>
          {/* <Image  mr='20px'w='50px' src='https://www.sephora.com/img/ufe/payments/payPal.svg'/><Text fontWeight={700}>Pay with Paypal</Text> */}
          <Text>Use diffrent Address</Text>
        </HStack>
        <HStack
          as="Button"
          mt="40px"
          border={"2px"}
          borderColor="black"
          w="65%"
          p=".5%"
        >
          <Image
            w="30px"
            src="https://www.sephora.com/img/ufe/payments/giftCard.svg"
          ></Image>
          <Text>Add Grid Card</Text>
          <Box w="80%" textAlign={"end"}>
            <Text fontWeight={700}>{0 === 1 ? "^" : ">"}</Text>
          </Box>
        </HStack>
      </Box>
      <Divider ml="10%" w="65%" borderColor="black" h="10px" />
      <Box ml="10%" mt="2%">
        <HStack>
          <input style={ch} type={"checkbox"}></input>
          <Box>
            <Text fontWeight={700}>
              Yes, save my 75 Beauty Insider points from this purchase.
            </Text>
            <Text>
              @gmail.com is already registered with Sephora. Sign in after
              placing your order to
            </Text>
            <Text>save your points.</Text>
          </Box>
        </HStack>

        <Button
          mt="30px"
          p="2%"
          fontSize={"25px"}
          borderRadius={"25px"}
          w={"250px"}
          colorScheme={"blue"}
          onClick={() => console.log("")}
        >
          Place Order
        </Button>
      </Box>
      <VStack
        backgroundColor={"blackAlpha.800"}
        color="white"
        mt="70px"
        padding="3%"
      >
        <Box>
          {" "}
          <Text>
            © 2022 Sephora USA, Inc. All rights reserved.Terms of Use | Privacy
            Policy{" "}
          </Text>
        </Box>
        <Box>
          <Text>
            1-877-737-4672 | TTY: 1-888-866-9845 | customerservice@sephora.com
          </Text>
        </Box>
      </VStack>

      <div style={my}>
        <Box
          h="fit-content"
          spacing="50px"
          padding="2%"
          paddingTop="2%"
          width="-moz-max-content"
          border="1px"
          borderColor="grey"
          borderRadius="10px"
        >
          <HStack spacing="50px">
            <Text fontSize="15px">Merchandise Subtotal</Text>
            <Text fontSize="15px" fontFamily="sans-serif" fontWeight="700">
              500
            </Text>
          </HStack>
          <HStack spacing="50px">
            <Text fontSize="15px">Shipping & Handling</Text>
            <Text fontSize="15px" fontFamily="sans-serif" fontWeight="700">
              Free
            </Text>
          </HStack>

          <HStack
            borderBottom="2px"
            borderColor="Black"
            paddingBottom="5%"
            spacing="103px"
          >
            <Text fontSize="15px">Estimated Tax</Text>
            <Text fontSize="15px" fontFamily="sans-serif" fontWeight="700">
              $---
            </Text>
          </HStack>
          <HStack mt="3%" spacing="50px">
            <Text fontSize="15px" fontFamily="sans-serif" fontWeight="700">
              Estimated TOtal
            </Text>
            <Text
              fontSize="15px"
              fontFamily="sans-serif"
              fontWeight="700"
              ml="80px"
            >
              RS75
            </Text>
          </HStack>
          <Text fontSize="12px">or 4 payments of $18.75 with Klarna</Text>
          <Divider mt="10px"></Divider>

          <Box textAlign="end" mb="5px">
            <Text fontSize="9px">View featured offers</Text>
          </Box>

          <Input placeholder="Promo or Reward Code" borderRadius="none" />
          <Divider mt={"10px"}></Divider>
          <Box align="center">
            <Button mt="30px" borderRadius={25} w="100%" h="50px">
              Place Order
            </Button>
          </Box>
          <Box
            align="center"
            backgroundColor="gray.200"
            mt="40px"
            h="50px"
            p="15px"
            borderRadius={5}
          >
            <Text onClick={pro} as="Button">
              Item in Order(1)
            </Text>
          </Box>
          <Box display={s}>
            <Heading>Products in card</Heading>
          </Box>
        </Box>
      </div>
    </>
  );
}
