import React from "react";
import { Link } from "react-router-dom";
import { AuthComponent } from "../Authentication/AuthComponent";

function Navbar() {
  return (
    <>
      <AuthComponent />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          justifyContent: "center",
          backgroundColor:"black",
          color:"white",
          padding:"10px"
        }}
      >
        
        <Link _hover={{textDecoration:"underline"}} to="/new">New</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/makeup">Makeup</Link>
        <Link to="/skincare">Skincare</Link>
        <Link to="/hair">Hair</Link>
        <Link to="/fragrance">Fragrance</Link>
        <Link to="/toolsnbrushes">Tools & Brushes</Link>
        <Link to="/bathnbody"> Bath & Body</Link>
        <Link to="/minisize">Mini Size</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/beauty">Beauty Under $20</Link>
        <Link to="/sales">Sale & Offers</Link>
        
        
        
       
        
        
      </div>
    </>
  );
}

export default Navbar;
