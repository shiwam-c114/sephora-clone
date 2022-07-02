import {
    Button, Box, Center, Image, Flex, Text
    , Heading,
    HStack,
    Input
    ,
    Link
    , Divider,
    VStack,
    Radio, RadioGroup
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function One() {
    let redirect = useNavigate()
    const nextpage = () => {
        console.log("sai")
        redirect('../next')
    }


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
            <Center height='100px' boxShadow='lg' >
                <Image boxSize='250px' src='https://www.sephora.com/img/ufe/logo.svg' />
            </Center>
            <Flex width='80%' ml='10%'>

                <Box width='65%'>
                    <Box ml='2%' fontSize='35px' borderBottom='5px' w='90%' borderColor='black'> <Text borderBottom='2px' borderColor='Black'>Checkout</Text></Box>
                    <Box fontSize='20px' padding='20px'>
                        <Heading fontSize='20px'>
                            <Text>Shipping Address</Text>
                        </Heading>

                    </Box>
                    <Box border='5px'>
                        <HStack>
                            <Input width='40%' ml='5%' mr='3%' placeholder='Firstname*'>

                            </Input>
                            <Input width='40%' ml='5%' mr='3%' placeholder='Lastname*'>

                            </Input>
                        </HStack>
                        <HStack mt='40px'>
                            <Input width='40%'
                                ml='5%' mr='3%' placeholder='Phone*'>

                            </Input>
                            <Input width='40%'
                                ml='5%' mr='3%' placeholder='Email Address*'>

                            </Input>
                        </HStack>

                    </Box>
                    <Center ml='5%' w='85%' mt='5%'> <Input

                        placeholder='Street Address*'
                    />



                    </Center>
                    <Box mt='3%' mb='3%'>
                        <Link m='5%' color='blue' href='#' size='8px'>
                            Add Apt #, Floor, etc.
                        </Link>
                    </Box>
                    <Flex>
                        <Input ml='5%' w='30%' placeholder='ZIP /POSTAL CODE ' />
                        <Box ml='2%' mt='1%' lineHeight='14px'>
                            <Text> Enter ZIP/Postal Code </Text>
                            <Text>to see City and State/Region.</Text>

                        </Box>

                    </Flex>
                    <Button width={'300px'} borderRadius={25} padding="2.5%" m='8%' colorScheme='blue' onClick={() => nextpage()}>Save & Continue</Button>
                </Box>
                <Box h='fit-content' spacing='50px' padding='2%' paddingTop='2%' width='-moz-max-content' border='1px' borderColor='grey' borderRadius='10px'>
                    <HStack spacing='50px'>
                        <Text  fontSize='15px'>Merchandise Subtotal</Text>
                        <Text fontSize='15px'  fontFamily='sans-serif' fontWeight='700'>500</Text>
                    </HStack>
                    <HStack spacing='50px'><Text fontSize='15px'>Shipping & Handling

                    </Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>Free</Text>
                    </HStack>

                    <HStack borderBottom='2px' borderColor='Black' paddingBottom='5%' spacing='103px'><Text fontSize='15px'>Estimated Tax

                    </Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>$---</Text>
                    </HStack>
                    <HStack mt='3%' spacing='50px'>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>Estimated TOtal</Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700' ml='80px'>{total}</Text>

                    </HStack>
                    <Text fontSize='12px'>or 4 payments of $18.75 with Klarna</Text>
                    <Divider mt='10px'></Divider>


                    <Box textAlign='end' mb='5px'>
                        <Text fontSize='9px'>View featured offers</Text>
                    </Box >

                    <Input
                        placeholder="Promo or Reward Code"
                        borderRadius='none'
                    />
                    <Divider mt={'10px'}></Divider>
                    <Box align='center'>
                        <Button mt='30px' borderRadius={25} w='100%' h='50px'>Place Order</Button>
                    </Box>
                    <Box align='center' backgroundColor='gray.200' mt='40px' h='50px' p='15px' borderRadius={5}>
                        <Text>Item in Order(1)</Text>
                    </Box>
                </Box>
            </Flex>
            <Box ml='10%'>
                <Divider mt='10px' mb='30px' colorScheme='red' type='solid' width='50%' />
                <Heading color='grey'>Delivery & Gift Options</Heading>
            </Box>
            <Box ml='10%'>
                <Divider mt='30px' mb='30px' type='solid' width='50%' />
                <Heading color='grey'>Payment Method</Heading>
            </Box>
            <VStack backgroundColor={'black'} color='white' mt='70px' padding='3%'><Box> <Text>© 2022 Sephora USA, Inc. All rights reserved.Terms of Use | Privacy Policy </Text>
            </Box>
                <Box><Text>1-877-737-4672 | TTY: 1-888-866-9845 | customerservice@sephora.com</Text>
                </Box>
            </VStack>

        </>
    )
}


const my = {
    padding: '8%',
    position: 'fixed',
    top: 0,
    width: '40%',
    right: 1,
}



function Two() {


    const [sai, setsai] = useState('none');
    let redirect = useNavigate()
    const page = () => {
        console.log("sai")
        redirect('../pay')
    }


    const Show = () => {
        var shah = sai == 'none' ? 'block' : 'none'
        setsai(shah)
    }
    return (
        <>

            <Center height='100px' boxShadow='lg' >
                <Image boxSize='250px' src='https://www.sephora.com/img/ufe/logo.svg' />
            </Center>

            <Box w='80%' ml='10%'>
                <Box border={'5px'} borderColor='red'><Box ml='0%' fontSize='35px' > <Text borderBottom='2px' p='20px' mb='25px' w={'70%'} borderColor='Black'>Checkout</Text></Box>
                    {/* <VStack> */}
                    <Flex width={'70%'}>
                        <Heading>
                            Shipping Address
                        </Heading>
                        <Button ml='200px' w='200px'>Edit</Button>
                    </Flex>
                    <Box textAlign="left" border='10px' borderColor='red'>
                        <Text>Your Address</Text>
                        <Text>Your Address</Text>
                        <Text>Your Address</Text>
                        <Text>Your Address</Text>
                    </Box>
                </Box>
                {/* <hr/> */}
                <Box mt='30px'>

                    <Divider w='70%' borderColor="black" />

                </Box>

                <Heading m='1%' ml='0'>Delivery & Gift Options</Heading>



                <Box mt='1%' mb='2%' backgroundColor={'blackAlpha.50'} w='70%'>
                    <Text>We’ve updated our shipping calculations to make them more accurate and

                    </Text>
                    <Text> give you a better idea of when your package will arrive. Got it</Text>
                </Box>
                <HStack border={'2px'} w='70%' p='2%'>
                    <Radio size={'lg'} colorScheme='blackAlpha'></Radio>
                    <Box >
                        <Text fontStyle='' fontWeight={600}>FREE - Standard
                        </Text>

                        <Text>Order within 3 hours</Text>
                        <Text> Delivery By Wed, Jun 29 Order within 3 hours</Text>


                    </Box>
                </HStack>
                <Link color={'blue'} fontStyle='Underline'>More delivery Option</Link>
            </Box>
            <Flex border='5px' borderColor='red'>
                <Text as='Button' onClick={() => Show()} ml='10%' mt='2% ' fontWeight={600}>Gift other (Option)
                </Text>
            </Flex>
            <Box ml='10%' display={sai}>
                <HStack>
                    <Radio size={'lg'} colorScheme='blackAlpha'></Radio>
                    <Image w='50px' src='https://www.sephora.com/productimages/sku/s1169937-main-grid.jpg' />
                </HStack>
                <Divider w='70%' borderColor="black" h='10px' />

                <HStack>
                    <Radio size={'lg'} colorScheme='blackAlpha'></Radio>
                    <Box height='50px'>
                        <Text mt='14px'>
                            No Gift Wrap
                        </Text>
                    </Box>
                </HStack>
                <Divider w='70%' borderColor="black" h='5px' />


                <Box mt='20px'>
                    <Text>
                        Gift Message
                    </Text>
                    <Input w='40% ' h='80px' type={'textaria'}

                    />
                </Box>

            </Box>
            <div style={my}>
                <Box h='fit-content' spacing='50px' padding='2%' paddingTop='2%' width='-moz-max-content' border='1px' borderColor='grey' borderRadius='10px'>
                    <HStack spacing='50px'>
                        <Text fontSize='15px'>Merchandise Subtotal</Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>500</Text>
                    </HStack>
                    <HStack spacing='50px'><Text fontSize='15px'>Shipping & Handling

                    </Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>Free</Text>
                    </HStack>

                    <HStack borderBottom='2px' borderColor='Black' paddingBottom='5%' spacing='103px'><Text fontSize='15px'>Estimated Tax

                    </Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>$---</Text>
                    </HStack>
                    <HStack mt='3%' spacing='50px'>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700'>Estimated TOtal</Text>
                        <Text fontSize='15px' fontFamily='sans-serif' fontWeight='700' ml='80px'>RS75</Text>

                    </HStack>
                    <Text fontSize='12px'>or 4 payments of $18.75 with Klarna</Text>
                    <Divider mt='10px'></Divider>


                    <Box textAlign='end' mb='5px'>
                        <Text fontSize='9px'>View featured offers</Text>
                    </Box >

                    <Input
                        placeholder="Promo or Reward Code"
                        borderRadius='none'
                    />
                    <Divider mt={'10px'}></Divider>
                    <Box align='center'>
                        <Button mt='30px' borderRadius={25} w='100%' h='50px'>Place Order</Button>
                    </Box>
                    <Box align='center' backgroundColor='gray.200' mt='40px' h='50px' p='15px' borderRadius={5}>
                        <Text>Item in Order(1)</Text>
                    </Box>
                </Box>

            </div>
            <Box ml='10%' spacing={'10%'} mt='2%' >


                <Button p='2%' fontSize={'25px'} borderRadius={'15px'} w={'250px'} colorScheme={'blue'} onClick={() => page()}>Save & Pay</Button>
                <Divider w='60%' borderColor="black" h='5px' mt='5%' mb='5%' />
                <Heading color={'grey'}>Payment Method</Heading>

            </Box>

            <VStack backgroundColor={'blackAlpha.800'} color='white' mt='70px' padding='3%'><Box> <Text>© 2022 Sephora USA, Inc. All rights reserved.Terms of Use | Privacy Policy </Text>
            </Box>
                <Box><Text>1-877-737-4672 | TTY: 1-888-866-9845 | customerservice@sephora.com</Text>
                </Box>
            </VStack>


        </>


    )
}
export { Two }