
import "./userRegi.css";

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Uregi(){

    let nav=useNavigate();



    //name,password,email,confirmpassword,address,phone
    let [name,setname]=useState();
    let [password,setpassword]=useState();
    let [email,setemail]=useState();
    let [confirmpassword,setconfirmpassword]=useState();
    let [address,setaddress]=useState();
    let [phone,setphone]=useState();

 async function register(){

   if(name,password,email,confirmpassword,address,phone){

        let res=await axios.post("http://localhost:4000/userRegister",{name,password,email,confirmpassword,address,phone});
        
       await alert(res.data);

       setaddress("");
       setconfirmpassword("")
       setemail("")
       setname("")
       setphone("")
       setpassword("")



   }

   else{
        return alert("enter all details");
   }
  
}


    return (
        <>
        <div>
            <h1>user register</h1>
        </div>

        <div className="userreg">
            <input type="text" placeholder="name" value={name} onChange={(e)=>{
                setname(e.target.value);
            }}/>

           <input type="email" placeholder="email" value={email} onChange={(e)=>{
                setemail(e.target.value);
            }}/>

          <input type="text" placeholder="password" value={password} onChange={(e)=>{
                setpassword(e.target.value);
            }}/>

          <input type="text" placeholder="confirmpassword" value={confirmpassword} onChange={(e)=>{
                setconfirmpassword(e.target.value);
            }}/>

          <input type="text" placeholder="current address" value={address} onChange={(e)=>{
                setaddress(e.target.value);
            }}/>

         <input type="text" placeholder="phone" value={phone} onChange={(e)=>{
                setphone(e.target.value);
            }}/>


        <div className="buttons">
           
            <button onClick={()=>{
                register();
            }}>Register</button>

            <button onClick={()=>{
                nav("/userlogin")
            }}>Login</button>

        </div>



        </div>
        </>
    )
}

export default Uregi;
