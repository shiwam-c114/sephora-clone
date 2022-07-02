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
  Link,
  Divider,
  VStack,
  Radio,
  RadioGroup,
  Spacer,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Basket() {
  const n = useNavigate();
  const Nextpage = () => {
    console.log("sai");
    n("/bas");
  };

  const [cart, setCart] = useState([])
  async function getData() {
    let Scart = localStorage.getItem("Scart")
    Scart = await JSON.parse(Scart)
    setCart(Scart)
    console.log(Scart)
    

  }

  useEffect(() => {
    getData()

  }, [])
  
  useEffect(() => {
    Total()
  }, [cart])
  
  
const [total, setTotal] = useState(0)
  function Total() {
    let sum = 0
    cart.forEach(element => {
      sum+= +element.price.replace("$", "")
      console.log(element.price.replace("$", ""));
    });
    console.log(sum);
    setTotal(sum)
  }


  return (
    <>
      <Box mt="100px" ml="10%">
        <Heading>My Basket</Heading>
        <Flex>
          <Box w="65%">
            <Box border={"4px"} w="95%" borderColor={"gray.100"}>
              <Text fontWeight={600} backgroundColor={"gray.100"}>
                Get it shipped({cart.length})
              </Text>
              <HStack>
                <Image
                  w="55px"
                  src="data:image/png;base64,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"
                />
                <Box>
                  <Text fontSize={"13px"}>
                    Enjoy free shipping with code FREESHIP.
                  </Text>
                  <Text fontSize={"13px"}>
                    Free Returns, see details/exclusions.*
                  </Text>
                </Box>
              </HStack>
              <Flex w={"100%"}>
                <Box
                  w="44%"
                  border={"2px"}
                  borderColor={"gray.100"}
                  m="2%"
                  p="1%"
                >
                  <Text>
                    {" "}
                    Get 2 free shipping with code{" "}
                    <Text fontWeight={400}>FREESHIP</Text>
                  </Text>
                  <Text fontWeight={200}>SELECT YOUR SAMPLE(S)</Text>
                </Box>
                <Box
                  border={"2px"}
                  w="44%"
                  m="2%"
                  p="1%"
                  borderColor={"blackAlpha.100"}
                >
                  <Text>
                    <Link>Sign in</Link>
                    to see your Beauty Insider points
                  </Text>
                  <Text>& redeem your rewards</Text>
                </Box>
              </Flex>
              <Box p="2%">
                {
                  cart.map(item=>

                  

                <HStack  
                  m="2%"
                  backgroundColor={"blackAlpha.50"}
                  borderRadius={"10px"}
                >
                  <Image src={item.heroImage} />
                  <Box mt="2%">
                    <Flex>
                      {" "}
                      <Text fontWeight={500}>{item.brandName}</Text>
                      <Spacer></Spacer>
                      <Text ml={"30px"}>{item.price}</Text>
                    </Flex>{" "}
                    <Text fontSize={"15px"}>
                      {item.displayName}
                    </Text>
                    <Text fontSize={"10px"}>
                      SIZE 0.019 oz/ 0.55 mL•ITEM 1177567
                    </Text>
                  </Box>
                </HStack>
                  )
                }

                <HStack ml={"18%"}>
                  <Select size={"sm"} placeholder="1" w={"10%"}>
                    <option value="option1">1</option>
                    <option value="option2"> 2</option>
                    <option value="option3"> 3</option>
                    <option value="option3"> 5</option>
                    <option value="option3"> 6</option>
                    <option value="option3"> 7</option>
                    <option value="option3"> 8</option>
                    <option value="option3"> 9</option>
                    <option value="option3"> 10</option>
                  </Select>

                  <Text as="Button" color="blue" mr="10px">
                    Move to loves{" "}
                  </Text>
                  <Text as="Button" color="blue" ml="10px">
                    Remove{" "}
                  </Text>
                  <Spacer></Spacer>
                  <Button onClick={Total} borderRadius={"5px"}>Change Method</Button>
                </HStack>
              </Box>

              <Box p="2%">
                {/* <HStack m='2%' backgroundColor={'blackAlpha.50'} borderRadius={'10px'}>
    <Image src="https://www.sephora.com/productimages/sku/s1177567-main-zoom.jpg?imwidth=97"/>
    <Box mt='2%'>
       <Flex> <Text fontWeight={500}>kvd beuty</Text>
       <Spacer></Spacer>
       <Text ml='350px'>$23</Text>
       </Flex>        <Text fontSize={'15px'}>Tattoo Liner Vegan Waterproof Liquid Eyeliner
</Text>
<Text fontSize={'10px'}>SIZE 0.019 oz/ 0.55 mL•ITEM 1177567</Text>
    </Box>
     
   
  
</HStack>
< HStack  ml={'18%'}>
<Select  size={'sm'}  placeholder="1" w={'10%'}>
  <option value='option1'>1</option>
  <option value='option2'> 2</option>
  <option value='option3'> 3</option>
  <option value='option3'> 5</option>
  <option value='option3'> 6</option>
  <option value='option3'> 7</option>
  <option value='option3'> 8</option>
  <option value='option3'> 9</option>
  <option value='option3'> 10</option>
</Select>

<Text as="Button" color='blue'mr='10px'>Move to loves </Text>
<Text  as="Button" color='blue'ml='10px'>Remove </Text>
<Spacer></Spacer>
<Button borderRadius={'5px'}>Change Method</Button>
    </HStack>
    
    */}
              </Box>
            </Box>
            <Box border="4px" w="95%" borderColor={"blackAlpha.400"}>
              <Heading
                p="0px"
                backgroundColor={"blackAlpha.400"}
                fontSize="20px "
              >
                Add these For under $15
              </Heading>
              <Box
                mb="10px"
                borderBottom={"2px"}
                borderColor={"blackAlpha.200"}
              >
                <HStack>
                  <Image src="https://www.sephora.com/productimages/sku/s2414555-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97" />

                  <Box pl="4%">
                    <HStack>
                      {" "}
                      <Text fontWeight={600} fontSize={"15px"}>
                        SEPHORA COLLECTION
                      </Text>
                    </HStack>

                    <Text fontSize={"15px"}>Silicon Scalp Massager</Text>
                    <Text fontSize={"10px"}>ITEM 2414555</Text>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <Box>
                      <Text mr="30px" fontWeight={500}>
                        $12
                      </Text>
                    </Box>
                    <Box mr="50px" mt="25px">
                      <Button variant={"outline"}>Add</Button>
                    </Box>
                  </Box>
                </HStack>
              </Box>

              <Box
                mb="10px"
                borderBottom={"2px"}
                borderColor={"blackAlpha.200"}
              >
                <HStack>
                  <Image src="https://www.sephora.com/productimages/sku/s2414555-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97" />

                  <Box pl={"4%"}>
                    <HStack>
                      {" "}
                      <Text fontWeight={600} fontSize={"15px"}>
                        SEPHORA COLLECTION
                      </Text>
                    </HStack>

                    <Text fontSize={"15px"}>Silicon Scalp Massager</Text>
                    <Text fontSize={"10px"}>ITEM 2414555</Text>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <Box>
                      <Text mr="30px" fontWeight={500}>
                        $12
                      </Text>
                    </Box>
                    <Box mr="50px" mt="25px">
                      <Button variant={"outline"}>Add</Button>
                    </Box>
                  </Box>
                </HStack>
              </Box>
              <Box
                mb="10px"
                borderBottom={"2px"}
                borderColor={"blackAlpha.200"}
              >
                <HStack>
                  <Image src="https://www.sephora.com/productimages/sku/s2414555-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=97" />

                  <Box pl={"4%"}>
                    <HStack>
                      {" "}
                      <Text fontWeight={600} fontSize={"15px"}>
                        SEPHORA COLLECTION
                      </Text>
                    </HStack>

                    <Text fontSize={"15px"}>Silicon Scalp Massager</Text>
                    <Text fontSize={"10px"}>ITEM 2414555</Text>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <Box>
                      <Text mr="30px" fontWeight={500}>
                        $12
                      </Text>
                    </Box>
                    <Box mr="50px" mt="25px">
                      <Button variant={"outline"}>Add</Button>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box mt="40px">
              <Heading fontSize="25px">Recommended for You</Heading>

              <HStack>
                <VStack>
                  <Image
                    h="100px"
                    src="https://www.sephora.com/productimages/sku/s1118033-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=135"
                  />

                  <Text>SEPHORA COLLECTION</Text>
                  <Text mt="0">Retractable Waterproof Eyeliner</Text>
                  <Text mt="0">$13.00</Text>

                  <Button
                    variant="outline"
                    borderRadius="15px"
                    borderColor="black"
                  >
                    Add
                  </Button>
                </VStack>

                <VStack>
                  <Image
                    h="100px"
                    src="https://www.sephora.com/productimages/sku/s2210607-main-zoom.jpg?imwidth=612"
                  />

                  <Text>The Ordinary</Text>
                  <Text mt="0">
                    AHA 30% + BHA 2% Exfoliating Peeling Solution
                  </Text>
                  <Text mt="0">$13.00</Text>

                  <Button
                    variant="outline"
                    borderRadius="15px"
                    borderColor="black"
                  >
                    Add
                  </Button>
                </VStack>

                <VStack>
                  <Image
                    h="100px"
                    src="https://www.sephora.com/productimages/sku/s1807791-main-zoom.jpg?imwidth=135"
                  />

                  <Text>NARS</Text>
                  <Text mt="0">Mini valvet Matte Lipstick</Text>
                  <Text mt="0">$13.00</Text>

                  <Button
                    variant="outline"
                    borderRadius="15px"
                    borderColor="black"
                  >
                    Add
                  </Button>
                </VStack>
              </HStack>
            </Box>
            <Box mt="50px">
              <Box>
                <Text fontWeight={400} fontSize={"40px"}>
                  Your loves{" "}
                </Text>
              </Box>
              <Box w="100%" textAlign={"center"} mt="50px">
                <Text fontWeight={700} mb="20px">
                  Your Loves list is waiting for you!
                </Text>

                <Text>
                  Sign in and discover a new way to collect your favorite beauty
                  products and
                </Text>
                <Text>organize all your online and in-store purchases.</Text>
                <Button mt="20px">Sign up</Button>
              </Box>
            </Box>
          </Box>
          <Box w="25%" ml="2%">
            <Box
              border={"2px"}
              p="7%"
              w="100%"
              h="-moz-max-content"
              borderColor={"blackAlpha.100"}
            >
              <HStack>
                <Text>Merchandise Subtotal</Text>

                <Spacer></Spacer>
                <Text fontWeight={700}>${total}</Text>
              </HStack>
              <HStack mt="10px">
                <Text>Shipping & Handling</Text>

                <Spacer></Spacer>
                <Text fontWeight={700}>TBD</Text>
              </HStack>
              <HStack mt="10px">
                <Text>Estemated Tax & Other Fees</Text>

                <Spacer></Spacer>
                <Text fontWeight={700}>TBD</Text>
              </HStack>

              <HStack mt={"10px"}>
                <Text fontWeight={700}>Estemated Total</Text>

                <Spacer></Spacer>
                <Text fontWeight={700}>${total}</Text>
              </HStack>

              <Text fontSize="10px">or 4 payments of $6.00 with Klarna</Text>
              <Text>or afterpay</Text>
              <Text fontSize={"10px"}>
                Shipping & taxes calculated during checkout
              </Text>
              <Center mt="30px" alignItems={"center"}>
                <Button
                  w="225px"
                  borderRadius={"25px"}
                  h="40px"
                  colorScheme={"red"}
                  onClick={Nextpage}
                >
                  Checkout& Shipped Item
                </Button>
              </Center>
              <Center mt="30px">
                <Button
                  w="225px"
                  borderRadius={"25px"}
                  h="40px"
                  borderColor={"red"}
                  border={"2px"}
                  colorScheme={"red"}
                  onClick={Nextpage}
                >
                  <Text>Pay with</Text>{" "}
                  <Image
                    w="100px"
                    src="https://www.sephora.com/img/ufe/logo-paypal.svg"
                  />
                </Button>
              </Center>
            </Box>
            <Box border={"1px"} borderColor="blackAlpha.100" mt="20px" p="3%">
              <Box textAlign={"end"}>
                <Text fontSize={"10px"}>View featured Offer</Text>
                <Input
                  m="2%"
                  w="90%"
                  placeholder={"Promo & rewards code"}
                ></Input>
              </Box>
            </Box>
            <Box border={"1px"} borderColor="blackAlpha.100" mt="20px" p="3%">
              <Heading fontSize="25px">Need assistance?</Heading>
              <Text>1-877-SEPHORA (1-877-737-4672)</Text>
              <Text>TTY: 1-888-866-9845</Text>
              <Text>Free return shipping or return in store</Text>
              <Text>We accpted</Text>
              <HStack>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/sephora.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/payPal.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/visa.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/masterCard.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/discover.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/americanExpress.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/JCPenney.svg"
                ></Image>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Center> footer here</Center>
    </>
  );
}
