
import "./myti.css";

import React, { useState } from "react";
import Nav from "../usernav/nav";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store";
import axios from "axios";

function Myticket (){

    let dispatch=useDispatch();
    let nav=useNavigate()

    let passengername;
    let userid;

    let token=useSelector((s)=>{
        return s.usertoken;
    })

    let user=useSelector((s)=>{
        passengername=s.user.name;
        userid=s.user._id;

        return s.user;
    })

    useEffect(()=>{
        
        if(token){
            axios.get("http://localhost:4000/userdashboard",{headers:{
                   "x-token":token
               }})
               .then((res)=>{
                   dispatch(setUserDetails(res.data))
              });

            }



    },[user,token])
   

    
   
    console.log(user);

    function bus(id){
        console.log(id);
    
        return nav(`/bus/${id}`);
    }

   




    async function deleteticket(m){

        //console.log(m);

        let {busid,seatid,_id}=m;

        console.log(busid,seatid,_id,passengername,userid)
            
        if(token){
            
        let res=await axios.post("http://localhost:4000/deleteticket",{busid,seatid,passengername},{headers:{
            "x-token":token
        }});
       
        
       await alert(res.data);

        await axios.post("http://localhost:4000/deleteticketfromuser",{userid,_id},{headers:{
            "x-token":token
        }});

        
        }

      

        else{
            nav("/userlogin");
        }




        
    }


if(!user){
    return <h1>...loading</h1>
}


    return (
        <>
          <div>
            <Nav/>

          </div>
          <div className="tickets">
             {
                user.mytickets.map((m)=>{
                    return <div className="myticket" >
                        <h5>{m.from} To {m.to} ({m.busname})</h5> 
                       <div>
                       <h5>passenger name : {user.name} ({m._id})  <button className="inmy" onClick={()=>{
                         deleteticket(m)
                       }}>cancell</button></h5>
                      
                        </div>
                        </div>
                })
             }
             
        </div>
        </>
    )
}

export default Myticket;
