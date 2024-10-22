
import "./userDash.css";

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
import { setUserDetails } from "../store";
import Nav from "../usernav/nav";
import Search from "../search/search";

function Udash(){

    let [buses,setbuses]=useState();

    let [from,setfrom]=useState();
    let [to,setto]=useState();

    let [date,setdate]=useState();



    let dispatch=useDispatch();
   let nav=useNavigate();

    let token=useSelector((s)=>{
        return s.usertoken;
    });

    let user=useSelector((s)=>{
        return s.user;
    })

    useEffect( ()=>{

       if(token){
     axios.get("http://localhost:4000/userdashboard",{headers:{
            "x-token":token
        }})
        .then((res)=>{
            dispatch(setUserDetails(res.data))
       });

       axios.get("http://localhost:4000/buses",{headers:{
        "x-token":token
       }}).then((res)=>{
        //console.log(res.data)
        setbuses(res.data.buses);
       })
       
         
       }
       else{
         return nav("/userlogin")
       }
    },[user]);

    

//console.log(user);

function bus(id){
    console.log(id);

    return nav(`/bus/${id}`);
}


function searchbus(){
    nav(`/search/${from}/${to}/${date}`);
}





if(!buses){
    return <h1>...loading</h1>
}
    if(!user){
        return <h1>...loading</h1>
    }

    let imgg="https://www.svgrepo.com/show/72694/two-opposite-up-and-down-arrows-side-by-side.svg";

    return (
        <center>
            <div>
                <Nav/>
            </div>

            <div>
                <h1>Search your bus here</h1>
            </div>

      <div className="search">

        <input type="text" id="in" placeholder="From" onChange={(e)=>{
            setfrom(e.target.value);
        }}/>
        <img src={imgg} id="im"/>
        <input type="text" id="in"  placeholder="To" onChange={(e)=>{
            setto(e.target.value);
        }}/>

        <input type="date" id="in" onChange={(e)=>{
            setdate(e.target.value);
            console.log(date)
        }}/>
         
        
        <button onClick={()=>{
            searchbus()
        }}>search</button>


      </div>


           
        </center>
    )
}

export default Udash;
