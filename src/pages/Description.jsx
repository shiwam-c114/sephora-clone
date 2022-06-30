import React from 'react'
import ProdImage from '../components/productDescription/ProdImage'
import ProdInfo from '../components/productDescription/ProdInfo'
import ProdHighlights from '../components/productDescription/ProdHighlights'
import ProdAbout from '../components/productDescription/ProdAbout'
import ProdIngredients from '../components/productDescription/ProdIngredients'
import Test from "../components/productDescription/Test"
import "./Description.css"



function Description() {
    return (
        <div>
        <div className = "Test">
           <ProdImage heroImage={'https://www.sephora.com/productimages/sku/s2404655-main-zoom.jpg?imwidth=612'}/>
           <ProdInfo price={`$65`} brandName={`Sephora Favorites`} displayName={'Mini Cream Discovery Set'}/>
        </div>   
        <div>
        <ProdHighlights/>
        </div>
        <div>
        <ProdAbout/>
        </div>
        <div>
        <ProdIngredients/>
        </div>
        <div>
        <Test/>
        </div>
           
        </div>
    )
}

export default Description

