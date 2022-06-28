import React from "react";

import ReactStars from "react-rating-stars-component";

export const ProductList=({title})=>
{  
    const [data,setData]=React.useState([]);
    const getData=()=>
    {
        fetch(`http://localhost:8080/${title}`)
        .then((res)=>res.json())
        .then((res)=>
        {
            setData(res)
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }

    React.useEffect(
        ()=>
        {
            getData();
        },[]
    )

    return(
        <>
            {
                data.map((item)=>
                ( 
                   <div>
                    <div style={{display:"flex" ,justifyContent:"space-between",height:"25px",width:"90%"}}>
                        {item.currentSku.isNew?<img width="35px"  src="https://img.icons8.com/material/344/new--v1.png" alt="" />:<img width="35px" height="20px" src="https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png" alt="" />}
                        <img  width="20px" height="5px" src="https://cdn-icons-png.flaticon.com/512/812/812327.png" alt="" />
                    </div>
                    <img src={item.heroImage} alt="" /> 
                    <h5 style={{fontSize:"15px" , fontWeight:"650"}}>{item.brandName}</h5>
                    <h5>{item.displayName}</h5>
                    <p style={{fontSize:"13px",fontWeight:"500" ,color:"grey"}}>{item.moreColors} colours</p>
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <ReactStars  count={5} value={item.rating}  isHalf size={20} activeColor="black" edit={false}/>
                        <p style={{marginTop:"3px",fontSize:"13px"}}>{item.reviews}</p>
                    </div>
                    <h3 style={{fontWeight:"700",fontSize:"18px"}}>{item.currentSku.listPrice}</h3>
                   </div>
                ))
            }
        
        </>
    )
}