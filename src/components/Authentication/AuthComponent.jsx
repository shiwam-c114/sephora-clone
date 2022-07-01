import React from "react";
import {
  Select,
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
} from "@chakra-ui/react";

export const AuthComponent = () => {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const [isAuth, setisAuth] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const [formData, setFormData] = React.useState({
    first: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    month: "",
    day: "",
    zipcode: "",
  });
  const [signInData, setSignInData] = React.useState({
    signin_email: "",
    signin_password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSigninChange = (e) => {
    let { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8080/userData`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "Application/json" },
    });
    setFormData({
      first: "",
      last: "",
      email: "",
      password: "",
      phone: "",
      month: "",
      day: "",
      zipcode: "",
    });
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("isauth in singing", isAuth);
    await fetch(`http://localhost:8080/userData`)
      .then((res) => res.json())
      .then((res) => {
        let temp = false;
        res?.forEach((element) => {
          if (
            element.email === signin_email &&
            element.password === signin_password
          ) {
            setisAuth(true);
            temp = true;
            console.log("SEtting auth true", isAuth);
            setUserName(element.first);
          }
        });
        if (!temp) {
          setisAuth(temp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("after fetch");

    setSignInData({
      signin_email: "",
      signin_password: "",
    });
  };

  React.useEffect(() => {
    if (isAuth != null) {
      alertisAuth();
    }
  }, [isAuth]);

  const alertisAuth = () => {
    isAuth ? alert(`Welcome ${userName}`) : alert("Enter Valid Details");
  };
  const { first, last, email, password, phone, month, day, zipcode } = formData;
  const { signin_email, signin_password } = signInData;
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Image
        width="120px"
        marginLeft="35px"
        src="https://www.sephora.com/img/ufe/logo.svg"
      />
      <Input
        width="430px"
        height="40px"
        borderRadius="18px"
        type="text"
        placeholder="Search"
      />
      <Box
        display="flex"
        flexDirection="row"
        gap="10px"
        padding="10px"
        alignItems="center"
      >
        <Image
          height="30px"
          src="https://www.sephora.com/img/ufe/icons/stores.svg"
        />
        <Box display="flex" flexDirection="column">
          <h2
            style={{ fontSize: "15px", fontWeight: "400", cursor: "pointer" }}
          >
            Stores & Services
          </h2>
          <h3 style={{ fontSize: "14px", fontWeight: "400", color: "grey" }}>
            Choose Your Store
          </h3>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="20px"
        gap="10px"
      >
        <Image src="https://www.sephora.com/img/ufe/icons/community.svg" />
        <h2 style={{ fontSize: "15px", fontWeight: "400", cursor: "pointer" }}>
          Community
        </h2>
      </Box>

      <Popover>
        <PopoverTrigger>
          <Button
            display="flex"
            gap="10px"
            backgroundColor="white"
            fontSize="15px"
            fontWeight="400"
            cursor="pointer"
            _hover={{ bg: "white", textDecoration: "underline" }}
          >
            <Image
              src="https://www.sephora.com/img/ufe/icons/me32.svg"
              alt=""
            />
            {isAuth ? "Log Out" : "Sign In"}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width="400px">
            <PopoverHeader>
              <Box display="flex" flexDirection="row" gap="10px">
                <Image
                  width="52px"
                  src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4"
                />
                <Box display="flex" flexDirection="column">
                  <h4 style={{ fontSize: "20px", fontWeight: "500" }}>
                    Good morning, Beautiful. 🌙
                  </h4>
                  <h6>Sign in for a more personalized experience</h6>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap="20px" padding="15px">
                <Button
                  onClick={modal1.onOpen}
                  width="200px"
                  borderRadius="22px"
                  backgroundColor="black"
                  color="white"
                >
                  Sign In
                </Button>
                <Modal
                  isOpen={modal1.isOpen}
                  onClose={modal1.onClose}
                  height="100vh"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Sign in to Sephora</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                      >
                        <Input
                          name="signin_email"
                          value={signin_email}
                          onChange={(e) => handleSigninChange(e)}
                          type="email"
                          placeholder="Email Address*"
                        />
                        <Input
                          name="signin_password"
                          value={signin_password}
                          onChange={(e) => handleSigninChange(e)}
                          type="password"
                          placeholder="Password*"
                        />
                        <Checkbox>Keep me signed in</Checkbox>
                        <Button
                          width="200px"
                          borderRadius="22px"
                          backgroundColor="black"
                          color="white"
                          onClick={(e) => handleSignin(e)}
                        >
                          Sign In
                        </Button>
                      </FormControl>
                    </ModalBody>
                    <hr />
                    <ModalFooter
                      display="flex"
                      flexDirection="column"
                      gap="25px"
                      alignItems="left"
                    >
                      <h4 style={{ fontSize: "20px", fontWeight: "500" }}>
                        New to Sephora ?
                      </h4>
                      <Button width="200px" borderRadius="22px">
                        Create Account
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Button
                  onClick={modal2.onOpen}
                  width="200px"
                  borderRadius="22px"
                >
                  Create Account
                </Button>
                <Modal
                  isOpen={modal2.isOpen}
                  onClose={modal2.onClose}
                  height="100vh"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader textAlign="center">
                      Create an Account
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Image
                        width="200px"
                        src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
                      />
                      <br />
                      <h6
                        style={{
                          fontSize: "18",
                          fontWeight: "500",
                          marginBottom: "8px",
                        }}
                      >
                        Join the Beauty insider loyalt program. Earn
                        points,redeem rewards, and more
                      </h6>
                      <FormControl
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                      >
                        <Box display="flex" gap="20px">
                          <Input
                            type="text"
                            name="first"
                            value={first}
                            onChange={(e) => handleChange(e)}
                            placeholder="First Name"
                          />
                          <Input
                            type="text"
                            name="last"
                            value={last}
                            onChange={(e) => handleChange(e)}
                            placeholder="Last Name"
                          />
                        </Box>
                        <Input
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => handleChange(e)}
                          placeholder="Email Address"
                        />
                        <Input
                          name="password"
                          type="password"
                          value={password}
                          onChange={(e) => handleChange(e)}
                          placeholder="Password (6 to 12 characters"
                        />
                        <Input
                          name="phone"
                          type="number"
                          value={phone}
                          onChange={(e) => handleChange(e)}
                          placeholder="Phone Number (optional)"
                        />
                        <h4
                          style={{
                            fontSize: "18",
                            fontWeight: "600",
                            marginBottom: "8px",
                          }}
                        >
                          Enter your birthdate to receive a free gift every year
                        </h4>
                        <Box display="flex" gap="20px">
                          <Select
                            name="month"
                            value={month}
                            onChange={(e) => handleChange(e)}
                          >
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
                          <Select
                            name="day"
                            value={day}
                            onChange={(e) => handleChange(e)}
                          >
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
                        <Input
                          name="zipcode"
                          value={zipcode}
                          onChange={(e) => handleChange(e)}
                          type="number"
                          placeholder="ZIP Code(to hear about store near you)"
                        />
                        <Checkbox>Keep me signed in</Checkbox>

                        <Button
                          onClick={handleSubmit}
                          width="200px"
                          borderRadius="22px"
                          backgroundColor="black"
                          color="white"
                        >
                          Join now
                        </Button>
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody height="400px" overflow="scroll">
              <Box
                display="flex"
                flexDirection="row"
                gap="20px"
                justifyContent="space-between"
                padding="10px"
              >
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Beauty Insider Summary
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    View activity, savings, benefits
                  </h4>
                </Box>
                <Image
                  width="60px"
                  src="https://www.sephora.com/img/ufe/bi/logo-bi-stacked.svg"
                />
              </Box>
              <hr />
              <Box padding="10px">
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Rewards Bazaar
                </h2>
                <h4
                  style={{ fontSize: "14px", fontWeight: "500", color: "grey" }}
                >
                  Redeem items, samples, more
                </h4>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/subscription.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Buy It Again
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Reorder from in-store and online purchases
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/track.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Orders
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    View & track online or pickup orders
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Auto-Replinish
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    View and manage your subscriptions
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/heart.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Loves
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    View saved products
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/account.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Account Settings
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Payment, contact info,addresses,password
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Sephora Credit Card Progra,
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Apply now
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/flash.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Flash
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Unlimited 1-2 Day Shipping Subscription
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/reservations.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Reservations
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Manage your services, classes, events
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/traits.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Beauty Traits & Color iQ
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Compete your beauty traits for personalized recommendation
                  </h4>
                </Box>
              </Box>
              <hr />
              <Box display="flex" flexDirection="row" gap="20px" padding="10px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://www.sephora.com/img/ufe/icons/recommendations.svg"
                />
                <Box>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Beauty Advisor Recommendations
                  </h2>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Recommendations from your store visits
                  </h4>
                </Box>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Box
        display="flex"
        flexDirection="row"
        gap="20px"
        padding="10px"
        marginLeft="40px"
      >
        <svg width="24" height="24" fill="none" class="css-13o7eu2">
          <path
            d="m21.87 21.733.837.224-.224-.837-1.158-4.327A10.466 10.466 0 0 0 22.479 12c0-5.798-4.696-10.5-10.49-10.5C6.196 1.5 1.5 6.202 1.5 12c0 5.799 4.696 10.5 10.49 10.5 2.195 0 4.233-.676 5.918-1.83l3.962 1.063z"
            stroke="currentColor"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          data-at="love_icon_large"
          aria-hidden="true"
          class="css-psp8z9 e65zztl0"
          data-comp="Icon StyledComponent "
        >
          <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
        </svg>
        <svg
          width="24"
          height="24"
          class="css-9uy14h"
          data-at="basket_icon_large"
          aria-label="Go To Basket"
        >
          <path d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path>
        </svg>
      </Box>
    </div>
  );
};
