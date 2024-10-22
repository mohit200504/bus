import React, { useEffect, useState } from "react";
import "./addbus.css";
import Sellernav from "../../sellernav/sellernav";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Addbus(){


    /*
{
  "sellerid":"670e98ccbab6bbd8443ee8c9",
  "selleremail":"mohi@gmail.com",
  "busname":"royal bus",
  "busno":"12444",
  "from":"srikakulam",
  "to":"vadodara",
  "login":"15-10-24",
  "logout":"15-10-24",
  "seatcount":27

}*/


let sellertoken=useSelector((s)=>{
    return s.sellertoken;
});

let sellerid=useSelector((s)=>{
    return s.seller._id;
});

let selleremail=useSelector((s)=>{
    return s.seller.email;
})

//console.log(sellertoken,sellerid)


let [busname,setbusname]=useState();

let [busno,setbusno]=useState();

let [from,setfrom]=useState();

let [to,setto]=useState();

let [login,setlogin]=useState();

let [logout,setlogout]=useState();

let [seatcount,setseatcount]=useState();

let nav=useNavigate();

function addbus(){
    console.log(sellerid,selleremail,busname,busno,from,to,login,logout,seatcount);


    if(sellertoken){
        axios.post("http://localhost:4000/addbus",
            {
                sellerid,selleremail,busname,
                busno,from,to,login,logout,seatcount
            }
    
            ,
            {
                headers:{
                    "x-token":sellertoken
                }
            }
        ).then(async(res)=>{
           await alert(res.data);
            seatcount("");
            setbusname("")
            setbusno("");
            setfrom("");
            setto("");
            setlogin("");
            setlogout("");
    
        }).catch((err)=>{
            console.log(err);
        })
    }
    else{
         return nav("/sellerlogin");
    }
}



    return(

      <>
      <div>
        <Sellernav/>
      </div>
      <div className="addbus">
        <h1>Add Bus</h1>

        <input type="text" value={busname} placeholder="busname" onChange={(e)=>{
            setbusname(e.target.value);
        }}/>
        <input type="text" value={busno}  placeholder="busno" onChange={(e)=>{
            setbusno(e.target.value);
        }}/>
        <input type="text" value={from}  placeholder="from" onChange={(e)=>{
            setfrom(e.target.value);
        }}/>
        <input type="text" value={to}  placeholder="to"  onChange={(e)=>{
            setto(e.target.value);
        }}/>
        <input type="text" value={login}  placeholder="starting date YYYY/MM/DD"  onChange={(e)=>{
            setlogin(e.target.value);
        }}/>
        <input type="text" value={logout}  placeholder="ending  date YYYY/MM/DD"  onChange={(e)=>{
            setlogout(e.target.value);
        }}/>
        <input type="number" value={seatcount}  placeholder="seat count"  onChange={(e)=>{
            setseatcount(e.target.value);
        }}/>

        <button onClick={()=>{
            addbus()
        }}>Add bus</button>


      </div>
      </>
    )
}


export default Addbus;
