
import axios from "axios";
import "./userLog.css";

import {useDispatch, useSelector} from "react-redux"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../store.js";

function Ulog(){

    let nav=useNavigate();
    let dispatch=useDispatch();


let info=useSelector((s)=>{
    return s.usertoken;
})

console.log(info);
   
    let [password,setpassword]=useState();
    let [email,setemail]=useState();
   

   async function login(){

    if(email,password){

        let res=await axios.post("http://localhost:4000/userlogin",{email,password});

        await dispatch(setUserToken(res.data.token));

        setemail("");
        setpassword("");
    }

    

    }

if(info){
    return nav("/userdashboard");
}


    return (
        <>
        <div>
            <h1>user Login</h1>
        </div>

        <div className="userlog">

      
          

           <input type="email" placeholder="email" value={email} onChange={(e)=>{
                setemail(e.target.value);
            }}/>

          <input type="text" placeholder="password" value={password} onChange={(e)=>{
                setpassword(e.target.value);
            }}/>

         


        <div className="buttonss">
            <button onClick={()=>{
                login()
            }}>Login</button>
            <button onClick={()=>{
                nav("/userregister")
            }}>Register</button>

        </div>



        </div>
        </>
    )
}

export default Ulog;
