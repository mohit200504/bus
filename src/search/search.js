import React, { useEffect, useState } from "react";
import Nav from "../usernav/nav";
import { useNavigate, useParams } from "react-router-dom";
import "./search.css";
import axios from "axios";
import { useSelector } from "react-redux";


function Search(){

    let nav=useNavigate();

    let {from,to,date}=useParams();

    let [size,setsize]=useState();

    let [bus,setbuses]=useState();

    let token=useSelector((s)=>{
        return s.usertoken;

    })

    useEffect(()=>{
        
        axios.get("http://localhost:4000/buses",{headers:{
            "x-token":token
           }}).then((res)=>{
            console.log(res.data.buses);

            setbuses(res.data.buses);
           })
        
    },[token]);



    

    function getbus(id){
        console.log(id);
    
        return nav(`/bus/${id}`);
    }
    

    

    if(!bus){

        return <h1>...Loading</h1>

    }





    return (
        <>
        <div>
            <Nav/>

        </div>

        <div className="searchitems">

          
            {
                bus.map((b)=>{

                    let cal="https://th.bing.com/th/id/OIP.U2KvdKlYsOLjP0b6w8CznwHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7";

                    let imgg="https://th.bing.com/th/id/OIP.5iHl_eszSYdV527GAFUq7wHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7";


                    if(b.from===from && b.to===to && b.login==date){

                        return <div className="sea" onClick={()=>{
                            getbus(b._id)
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
                    }

                   
                    
                })
            }

           


            
             
        </div>
        </>
    )
}


export default Search;
