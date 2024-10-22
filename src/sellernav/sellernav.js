import React from "react";
import "./sellernav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




function Sellernav(){

    let seller=useSelector((s)=>{
        return s.seller;

    });



    return(
        <div className="sellernav">
           <h3 >{seller.name}</h3>

          <div className="navs">
            <Link to="/mybus"> <h3 id="h">my bus</h3></Link>
         
         <Link to="/addbus"> <h3>add bus</h3></Link>
          </div>
        </div>
    )
}


export default Sellernav;