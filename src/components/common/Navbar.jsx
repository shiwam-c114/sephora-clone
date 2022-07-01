import React from 'react';
import {Link} from "react-router-dom"
import { AuthComponent } from '../Authentication/AuthComponent';

function Navbar() {
  return (
  <>
    <AuthComponent/>
    <div style={{display:"flex", flexDirection:"row",gap:"20px", justifyContent:"space-evenly"}}>
      <Link to="/">Home</Link>
      <Link to="/makeup">Makeup</Link>
      <Link to="/gifts">Gifts</Link>
      <Link to="/minisize">Mini Size</Link>
      <Link to="/bathnbody"> Bath & Body</Link>
      <Link to="/toolsnbrushes">Tools & Brushes</Link>
      <Link to="/fragrance">Fragrance</Link>
      <Link to="/hair">Hair</Link>
      <Link to="/skincare">Skincare</Link>
    </div>
  </>
  )
}

export default Navbar