

import React, { useEffect, useState } from "react";
import Sellernav from "../sellernav/sellernav";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setbus } from "../store";
import "./mybus.css";


function Mybus(){

    let nav=useNavigate();


    let bus=useSelector((s)=>{
        return s.bus;
        
    })



    let dispatch=useDispatch();
    let sellerid=useSelector((s)=>{

        return s.seller._id;

    });

    console.log(sellerid)


    let sellertoken=useSelector((s)=>{
        return s.sellertoken;
    });

    useEffect(()=>{

       if(sellertoken){
        axios.post("http://localhost:4000/getbusbyid",{sellerid},{headers:{
            "x-token":sellertoken
        }})
        .then(async(res)=>{
            
            dispatch(setbus(res.data));
        })
       }

       else{
          navigator("/sellerlogin")
       }

        


    },[bus,sellertoken,sellerid]);




    function getbus(id){


        return nav(`/bussdetails/${id}`);

    }


    if(!bus){
              return <h1>...loading</h1>
    }





    let cal="https://th.bing.com/th/id/OIP.U2KvdKlYsOLjP0b6w8CznwHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7";

    let imgg="https://th.bing.com/th/id/OIP.5iHl_eszSYdV527GAFUq7wHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7";



    return (
        <>
        <Sellernav/>
        <div className="buss">

            {
                bus.map((b)=>{
                    return (
                        <div className="sea" onClick={()=>{
                            getbus(b._id);
                        }}>
    
                            <h3>{b.busname}({b.busno})</h3>
    
                            <div className="row">
                                <h4>{b.from}</h4>
                                <img src={imgg} id="imgins"/>
                                <h4>{b.to}</h4>
    
                                
                            </div>
    
                            <div className="cal">
                                    <img src={cal} id="cal"/>
                                    <h3>{b.login}</h3>
                                    <h3>-</h3>
                                    <h3>{b.logout}</h3>
                            </div>
    
    
    
                            </div>
                    )
                })
            }
           
        </div>
        </>
    )
}

export default Mybus;
