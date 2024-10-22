
import "./sellereg.css";

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Sellereg(){

    let nav=useNavigate();



    //name,password,email,confirmpassword,
    let [name,setname]=useState();
    let [password,setpassword]=useState();
    let [email,setemail]=useState();
    let [confirmpassword,setconfirmpassword]=useState();
    
    let [travelsname,settravelsname]=useState();


 async function register(){

   if(name,password,email,confirmpassword,travelsname){

        let res=await axios.post("http://localhost:4000/sellerRegisteration",{name,password,email,confirmpassword,travelsname});
        
       await alert(res.data);

       
       setconfirmpassword("")
       setemail("")
       setname("")
       setpassword("")
       settravelsname("")


   }

   else{
        return alert("enter all details");
   }
  
}


    return (
        <>
        <div>
            <h1>Seller register</h1>
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

          <input type="text" placeholder="travel's name" value={travelsname} onChange={(e)=>{
                settravelsname(e.target.value)
            }}/>

         


        <div className="buttons">
           
            <button onClick={()=>{
                register();
            }}>Register</button>

            <button onClick={()=>{
                nav("/sellerlogin")
            }}>Login</button>

        </div>



        </div>
        </>
    )
}

export default Sellereg;
