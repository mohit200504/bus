
import axios from "axios";
import "./sellerlogin.css";

import {useDispatch, useSelector} from "react-redux"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { setSellerToken } from "../store";
function Sellerlogin(){

    let nav=useNavigate();
    let dispatch=useDispatch();

let sellertoken=useSelector((s)=>{
    return s.sellertoken;

})


   
    let [password,setpassword]=useState();
    let [email,setemail]=useState();
   

   async function login(){

    if(email,password){

        let res=await axios.post("http://localhost:4000/sellerLogin",{email,password});

        dispatch(setSellerToken(res.data.token));

        setemail("");
        setpassword("");
    }

    

    }

    if(sellertoken){
        return nav("/sellerdashboard");
    }




    return (
        <>
        <div>
            <h1>Seller Login</h1>
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
                nav("/sellerRegister")
            }}>Register</button>

        </div>



        </div>
        </>
    )
}

export default Sellerlogin;
