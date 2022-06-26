import { Button, Box, Center, Image, Flex,Text
     ,Heading,
    HStack,
    Input
,
Link
,Divider    } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export default function One() {
    let redirect = useNavigate()
    const nextpage = () => {
        console.log("sai")
        redirect('next')
    }
    return (
        <>
            <Center height='100px' boxShadow='lg' >
                <Image boxSize='250px' src='https://www.sephora.com/img/ufe/logo.svg' />
            </Center>
            <Flex width='80%' border='1px' ml='10%'>
                <Box width='65%'>
                    <Box ml='2%' fontSize='35px' borderBottom='5px' > Checkout</Box>
<Box fontSize='20px' padding='20px'>
<Heading fontSize='15px'>
<Text>Shipping Address</Text>
</Heading>

</Box>
<Box border='5px'>
<HStack>
<Input width='40%'       ml='5%' mr='3%'  placeholder='Firstname*'>
    
</Input>
<Input width='40%'    mt='3%' ml='5%' mr='3%' placeholder='Lastname*'>

</Input>
</HStack>
<HStack>
<Input width='40%'   
 mt='3%' ml='5%' mr='3%'  placeholder='Phone*'>
    
</Input>
<Input width='40%'    
 mt='3%' ml='5%' mr='3%'     placeholder='Email Address*'>
    
</Input>
</HStack>

</Box>
 <Center ml='5%' w='85%' mt='5%'> <Input  

    placeholder='Street Address*'
 /> 
 
  
 
 </Center>
 <Link mt='5%' ml='5%' color='blue' href='#'>
   Add Apt #, Floor, etc.
  </Link>

<Flex>
<Input ml='5%' w='30%'  placeholder='ZIP /POSTAL CODE '/>
<Box ml='2%' mt='1%' lineHeight='14px'>Enter ZIP/Postal Code to see City and State/Region.</Box>
</Flex>
<Button borderRadius={25} padding="2.5%" m='8%' colorScheme='blue' onClick={() => nextpage()}>Save & Conitnue</Button>
</Box>
                <Box width='35%'>
             
                </Box>
            </Flex>

            
        </>
    )
}
function Two() {
    let redirect = useNavigate()
    const page = () => {
        console.log("sai")
        redirect('../pay')
    }
    return (
        <Button onClick={() => page()}>Save&Pay</Button>

    )
}
export { Two }