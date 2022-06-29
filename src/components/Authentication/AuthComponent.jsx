import React from "react";
import {
    Select ,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Image,
    Button,
    Portal,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Checkbox,
  } from '@chakra-ui/react'

export const AuthComponent=()=>
{
    const modal1 = useDisclosure();
    const modal2 = useDisclosure();
    const [isAuth,setisAuth]=React.useState(false);
    const [formData,setFormData]=React.useState({
        first:"",
        last:"",
        email:"",
        password:"",
        phone:"",
        month:"",
        day:"",
        zipcode:""
    })
    const [signInData,setSignInData]=React.useState({
        signin_email:"",
        signin_password:"",
    })
    const handleChange=(e)=>
    {
        let {name,value}=e.target;

        setFormData({...formData,[name]:value})
    }
    const handleSigninChange=(e)=>
    {
      
        let{name,value}=e.target;
        setSignInData({...signInData,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(formData);
        fetch(`http://localhost:8080/userData`,
        {
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-type":"Application/json"}
        })
        setFormData({
            first:"",
            last:"",
            email:"",
            password:"",
            phone:"",
            month:"",
            day:"",
            zipcode:""})
    }
    const handleSignin=(e)=>
    {   
        e.preventDefault();
        fetch(`http://localhost:8080/userData`)
        .then((res)=>res.json())
        .then((res)=>{
                res?.forEach((element)=>
                {  
                    if(element.email===signin_email && element.password==signin_password)
                    {
                        setisAuth(!isAuth);
                        
                    }
                })
            })
        .catch((error)=>
        {
            console.log(error)
        })
        alertisAuth();       
        setSignInData({
                    signin_email:"",
                    signin_password:""
                    })
    }
    const alertisAuth=()=>
    {
        isAuth?alert("Login Successfull"):alert("Enter Valid Details");
    }
    const {first,last,email,password,phone,month,day,zipcode}=formData;
    const {signin_email,signin_password}=signInData;
    return(
        
        <div style={{width:"100%",height:"50px", border:"1px solid black", display:"flex", flexDirection:"row-reverse",paddingRight:"50px", paddingBottom:"20px"}}>
            <Popover>
            <PopoverTrigger>
                <Button display="flex" gap="10px" backgroundColor="white"> <Image src="https://www.sephora.com/img/ufe/icons/me32.svg" alt="" />Sign In</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent width="400px">
                
                <PopoverHeader>
                    <Box display="flex" flexDirection="row" gap="10px">
                        <Image width="52px" src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4"/>
                        <Box display="flex" flexDirection="column">
                            <h4 style={{fontSize:"20px",fontWeight:"500"}}>Good morning, Beautiful. 🌙</h4>
                            <h6>Sign in for a more personalized experience</h6>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" gap="20px" padding="15px">
                        <Button onClick={modal1.onOpen} width="200px" borderRadius="22px" backgroundColor="black" color="white">Sign In</Button>
                        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose} height="100vh">
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Sign in to Sephora</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody >
                                <FormControl display="flex" flexDirection="column" gap="20px">
                                    <Input name="signin_email" value={signin_email} onChange={(e)=>(handleSigninChange(e))} type="email" placeholder="Email Address*" />
                                    <Input name="signin_password" value={signin_password} onChange={(e)=>(handleSigninChange(e))} type="password" placeholder="Password*"/>
                                    <Checkbox>Keep me signed in</Checkbox>
                                    <Button width="200px" borderRadius="22px" backgroundColor="black" color="white" onClick={(e)=>(handleSignin(e))}>Sign In</Button>
                                </FormControl>
                            </ModalBody>
                            <hr />
                            <ModalFooter display="flex" flexDirection="column" gap="25px" alignItems="left" >
                                <h4 style={{fontSize:"20px",fontWeight:"500"}}>New to Sephora ?</h4>
                                <Button width="200px" borderRadius="22px">Create Account</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button onClick={modal2.onOpen} width="200px" borderRadius="22px">Create Account</Button>
                        <Modal isOpen={modal2.isOpen} onClose={modal2.onClose} height="100vh">
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Create an Account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody >
                                <h1>Beauty INSIDER</h1>
                                <br />
                                <h6>Join the Beauty insider loyalt program. Earn points,redeem rewards, and more</h6>
                                <FormControl display="flex" flexDirection="column" gap="20px">
                                    <Box display="flex" gap="20px">
                                        <Input type="text" name="first" value={first} onChange={(e)=>(handleChange(e))} placeholder="First Name"/ >
                                        <Input type="text" name="last" value={last} onChange={(e)=>(handleChange(e))} placeholder="Last Name"/>
                                    </Box>
                                    <Input name='email' type='email' value={email} onChange={(e)=>(handleChange(e))} placeholder="Email Address" />
                                    <Input name="password" type="password" value={password} onChange={(e)=>(handleChange(e))} placeholder="Password (6 to 12 characters"/>
                                    <Input name="phone" type="number"  value={phone} onChange={(e)=>(handleChange(e))} placeholder="Phone Number (optional)"/>
                                    <h4>Enter your birthdate to receive a free gift every year</h4>
                                    <Box  display="flex" gap="20px">
                                        <Select name="month" value={month} onChange={(e)=>(handleChange(e))}>
                                            <option value="">Month</option>
                                            <option value="jan">January</option>
                                            <option value="feb">February</option>
                                            <option value="mar">March</option>
                                            <option value="apr">April</option>
                                            <option value="may">May</option>
                                            <option value="jun">June</option>
                                            <option value="jul">July</option>
                                            <option value="aug">Aug</option>
                                            <option value="sep">September</option>
                                            <option value="oct">October</option>
                                            <option value="nov">November</option>
                                            <option value="dec">December</option>
                                        </Select>
                                        <Select name="day" value={day} onChange={(e)=>(handleChange(e))}>
                                            <option value="">Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </Select>
                                    </Box>
                                    <Input name="zipcode" value={zipcode} onChange={(e)=>(handleChange(e))} type="number" placeholder="ZIP Code(to hear about store near you)" />
                                    <Checkbox>Keep me signed in</Checkbox>
                                    
                                    <Button  onClick={handleSubmit} width="200px" borderRadius="22px" backgroundColor="black" color="white">Join now</Button>
                                </FormControl>
                            </ModalBody>
                        
                            </ModalContent>
                        </Modal>
                    </Box>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Button colorScheme='blue'>Button</Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
            </Portal>
            </Popover>
        </div>
    )
}

