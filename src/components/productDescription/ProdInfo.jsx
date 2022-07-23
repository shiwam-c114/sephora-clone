import "./ProdInfo.css";
import StarRatings from "react-star-ratings";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import "./ProdInfo.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'



function ProdInfo({ price, brandName, displayName, rating, reviews, heroImage }) {
    const n = useNavigate()
    const [prevData, setprevData] = useState([]);
    const [curData, setCurData] = useState([])
    
    function addToBasket() {
      let prevCart = localStorage.getItem("Scart")
      prevCart = JSON.parse(prevCart)
      console.log(prevCart)
      if(prevCart){
        localStorage.setItem("Scart",JSON.stringify([...prevCart, {price, brandName, displayName, rating, reviews,heroImage}]))
      }
      else{
        localStorage.setItem("Scart",JSON.stringify([{price, brandName, displayName, rating, reviews, heroImage}]))
      }
      n("/one")
    
      }

    const [value, setValue] = React.useState("1");
    return (
        <div className="ProdInfodiv">
            <h1 className="prodTitle"> {brandName} </h1>
            <h2 className="prodDetail">{displayName} </h2>
            <div className="prodDetailFlex">
                <div className="Rating">
                    <StarRatings
                        rating={+rating}
                        starRatedColor="black"
                        numberOfStars={5}
                        name='rating'
                        starDimension="16px"
                        starSpacing="1px"
                    />
                    <p style={{ marginTop: "3px", fontSize: "13px" }}>{reviews}</p>

                    {/* <p className="ratingText">  549 </p> */}
                    {/* <h1> | </h1> */}
                </div>
                {/* <div className ="prodDetailFlex">
                <p className="ratingText">  Ask a question</p>
                <h1> | </h1>
                </div>
                <div className ="prodDetailFlex">
                <Icon as={CheckCircleIcon} w={3} h={3} />
                <p className="ratingText"> 37.8 K </p>
                </div> */}
            </div>




            <h1 className="offerText">
                <b>{price}</b> get it for <b className="offer">{price} </b>with
                Auto-Replenish{" "}
            </h1>
            <img
                className="offerImage"
                src="https://www.sephora.com/contentimages/ppagebanners/072221/2022-02-17-july-cleanplanetpositive-site-desktop-product-page-middle-banner-us-can-handoff.jpg?imwidth=585"
            />
            <h1 className="sizeAv">Size: 1.0 oz / 30 mL</h1>
            <h1 className="sizeAv">Standard size</h1>
            <div className="btn1">
                <Button colorScheme="black" variant="outline">
                    1.0 oz / 30 ml
                </Button>
            </div>
            <div className="ShippingType">
                <div className="ShippingTypeText">
                    <h4 className="ShippingTypeText1"> Get It Shipped</h4>
                    <h4 className="ShippingTypeText2"> Shipping & Returns </h4>
                </div>
                <div className="radioButtonInfo">
                    <RadioGroup onChange={setValue} value={value}>
                        <div className="radioButtonInfo1">
                            <Radio value="1">
                                {" "}
                                <b>Standard Delivery. </b> Enjoy free shipping with code{" "}
                                <b className="offer">FREE</b>
                            </Radio>
                        </div>
                        <br />
                        <div className="radioButtonInfo2">
                            <Radio value="2">
                                {" "}
                                <b> Same-Day Delivery </b>{" "}
                            </Radio>
                        </div>
                    </RadioGroup>

                    <div className = "cartFlex">

                    <div className = "cartNumberBtn">
                        <Menu>
                            <MenuButton as={Button}>
                               Add Items : 1
                            </MenuButton>
                            <MenuList>
                                <MenuItem>2</MenuItem>
                                <MenuItem>3</MenuItem>
                                <MenuItem>4</MenuItem>
                                <MenuItem>5</MenuItem>
                                <MenuItem>6</MenuItem>
                                <MenuItem>7</MenuItem>
                                <MenuItem>8</MenuItem>
                                <MenuItem>9</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className="addToCartBtn">
                        <Button onClick={addToBasket} colorScheme="red" size="md">
                            Add to cart
                        </Button>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default ProdInfo;
