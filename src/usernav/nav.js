
import React from "react";
import "./nav.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav(){

    let user=useSelector((s)=>{
        return s.user;
    })



    return (
        <div className="nav">
              <div>
                <h3>{user.name}</h3>
              </div>
              <div id="myticket">
                <Link to="/mytickets"><h3>Mytickets</h3></Link>
                <Link to="/sellerlogin" target="_blank"><h3>Mybus</h3></Link>
              </div>
              
        </div>
    )
}

export default Nav;
