import React, { useEffect, useState } from "react";
import Sellernav from "../sellernav/sellernav";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setbusin } from "../store";
import "./buss.css";
function Buss() {
  let nav = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  let busid=id;

  let sellertoken = useSelector((s) => s.sellertoken);
  let bus = useSelector((s) => s.busin);

  useEffect(()=>{
   if(sellertoken){
    axios.post("http://localhost:4000/sellerbusbyid",
      {busid},
      {headers:{
        "x-token":sellertoken
      }}
    )
    .then((res)=>{
      dispatch(setbusin(res.data));
    })
   }
   else{
    nav("/sellerlogin")
   }
  },[bus]);


  let [booked,setbooked]=useState(0);

  let [notbooked,setnotbooked]=useState(0);

  

  //console.log(bus)

  

  

  if (!bus) {
    return <h1>...loading</h1>;
    
  }


  let arr="data:image/jpeg;base64,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";

  return (
    <>
      <Sellernav />

      <div>
        <h1>{bus.busname}({bus.busno})</h1>
         
         <div className="dec">
          <h2>{bus.from} ({bus.login})</h2>
          <img src={arr} id="arr"/>
          <h2>{bus.to} ({bus.logout})</h2>
         </div>

        
     
      </div>

     <table>
      <tr>
        <td>seat no</td>
        <td>passenger name</td>
        <td>passenger contact</td>
        <td>passenger address</td>
        <td>passenger id</td>
      </tr>
       {
        
        bus.seat.map((s)=>{
          return <tr>
            <td>{s.seatno}</td>
            <td>{s.passengername}</td>
            <td>{s.passengerphone}</td>
            <td>{s.passengeraddress}</td>
           <td>{s._id}</td>
          </tr>
        })
       }
     </table>
     <div>
     
     
     </div>
    </>
  );
}

export default Buss;
