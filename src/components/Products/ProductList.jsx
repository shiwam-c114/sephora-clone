import React from "react";
import makeupstyles from "./Styles/Makeup.module.css";

import StarRatings from 'react-star-ratings';
import {Box} from "@chakra-ui/react";
import  ProductListStyle  from "./Styles/ProductList.module.css";

export const ProductList=({title})=>
{  
    const [data,setData]=React.useState([]);
    
    const getData=()=>
    {
        fetch(`http://localhost:8080/${title}`)
        .then((res)=>res.json())
        .then((res)=>
        {
            setData(res);
            
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }
    const handleSort=(e)=>
    {
       let {value} =e.target;
       let newData=[...data];
       if(value==="toprated")
       {
         newData=data.sort((a,b)=>
        {
           
            return parseFloat(b.rating)-parseFloat(a.rating);
        })
            
       }
       else if(value==="lowtohigh")
       {
            newData=data.sort((a,b)=>
            {
                a=+(a.currentSku.listPrice.split(".")[0].slice(1));
                
                b=+(b.currentSku.listPrice.split(".")[0].slice(1));
                return a-b;
            })
            
       }
       else if(value==="hightolow")
       {
            newData=data.sort((a,b)=>
            {
                a=+(a.currentSku.listPrice.split(".")[0].slice(1));
                
                b=+(b.currentSku.listPrice.split(".")[0].slice(1));
                return b-a;
            })
            
       }
       else
       {
        getData();
       }
       setData([...newData]);
       
    }
    React.useEffect(
        ()=>
        {
            getData();
            
        },[]
    )

    return(
        <>  <div className={makeupstyles.sortContainer}>
                <label htmlFor="sortBtn">Sort :</label>
                <select name="sortBtn" onChange={(e)=>(handleSort(e))} className={makeupstyles.sortBtn}>
                    <option value="relavance">Relavance (Default)</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="toprated">Top Rated</option>
                    <option value="lowtohigh">Price Low to High</option>
                    <option value="hightolow">Price High to Low</option>
                    <option value="new">New</option>
                </select>
            </div>
            <Box className={makeupstyles.productsContainer}>
            {
                
                data.map((item)=>
                ( 
                   <div 
                   key={item.productId}
                   style={{cursor: "pointer"}}>
                    <div className={ProductListStyle.badgeHolderParent}>
                        <div className={ProductListStyle.badgeHolder}>
                            {item.currentSku.isNew?
                            <div>
                                <div className={ProductListStyle.badgeStyle}>new</div>
                                <br />
                            </div>
                            :<></>}
                        
                            {item.currentSku.isLimitedEdition?<div>
                                <div className={ProductListStyle.badgeStyle}>limited edition</div>
                                <br />
                            </div>
                            :<></>}
                            {item.currentSku.isOnlineOnly?
                            <div>
                                <div className={ProductListStyle.badgeStyle}>online only</div>
                                <br />
                            </div>
                            :<></>}
                        </div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" >
                            <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
                        </svg>
                    </div>
                    <img src={item.heroImage} alt="" /> 
                    <h5 style={{fontSize:"15px" , fontWeight:"650"}}>{item.brandName}</h5>
                    <h5 style={{fontSize:"18px" , fontWeight:"450"}}>{item.displayName}</h5>
                    <p style={{fontSize:"13px",fontWeight:"500" ,color:"grey"}}>{item.moreColors} colours</p>
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                       
                    <StarRatings
                    rating={parseFloat(item.rating)}
                    starRatedColor="black"
                    numberOfStars={5}
                    name='rating'
                    starDimension="16px"
                    starSpacing="1px"
                    />
                        <p style={{marginTop:"3px",fontSize:"13px"}}>{item.reviews}</p>
                    </div>
                    
                    <h3 style={{fontWeight:"700",fontSize:"18px"}}>{item.currentSku.listPrice}</h3>
                   </div>
                ))
            }
            </Box>
        
        </>
    )
}