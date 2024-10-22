
import React, { useEffect, useState } from "react";
import Nav from "../usernav/nav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setbus } from "../store";
import "./bus.css";



function Bus(){



    let {id}=useParams();

    let nav=useNavigate()
    let dispatch=useDispatch()

    let user= useSelector((s)=>{
       
        return s.user;

    })
    

    let token=useSelector((s)=>{
        return s.usertoken;
    })

    //console.log(token)

    let bus=useSelector((s)=>{
        return s.bus;
    });

   

   
    //let [seatid,setseatid]=useState();
    let [passengername,setpassengername]=useState(user.name);
    let [passengeraddress,setpassengeraddress]=useState(user.address);

    let [passengerphone,setpassengerphone]=useState(user.phone);

    let [from,setfrom]=useState();
    let [to,setto]=useState();
    let [userid,setuserid]=useState(user._id);
   let [busname,setbusname]=useState();
   let [busid,setbusid]=useState(id);
   let [seatno,setseatno]=useState();
    

    useEffect(()=>{
     
       if(token){
        axios.post("http://localhost:4000/busbyid",{id},{headers:{
            "x-token":token
        }})
        .then((res)=>{
            
            setfrom(res.data.bus.from);
            setto(res.data.bus.to);
            setbusname(res.data.bus.busname);

              
           dispatch(setbus(res.data.bus));

        })
       }
       else{
        return nav("/userlogin")

       }


    },[bus]);

   

    function bookticket(seatid){
        console.log(passengername,passengerphone,passengeraddress,busid,seatid);
        console.log(busid,seatid,from,to,userid,busname)
       if(token){
        axios.post("http://localhost:4000/bookseat",{passengername,passengerphone,passengeraddress,busid,seatid},{headers:{
            "x-token":token
        }}).then((res)=>{
            alert(res.data);
        });


        axios.post("http://localhost:4000/addticket",{busid,seatid,from,to,userid,busname,seatno},{headers:{
            "x-token":token
        }});


       }
       else{

          nav("/userlogin")
       }
    }

    let avaseats=0;
    let not=0;

    if(!bus){
        return <h1>...loading</h1>
    }

    
    


    return (
        <>
        <div>
            <Nav/>
        </div>
        <div className="bus">
           <h1>{bus.busname}</h1>

           <div className="seats">
            {
                bus.seat.map((s)=>{
                    if(s.booked){
                        not=not+1;
                        return(
                            <div className="seat-booked">
                                {s.seatno}
                            </div>
                        )
                    }
                    else{
                        avaseats=avaseats+1;
                        return(
                            <div className="seat" onClick={
                              
                              ()=>{
                                setseatno(s.seatno)
                                bookticket(s._id)}
                            }>
                                {s.seatno}
                            </div>
                        )
                    }
                })

            }
           </div>

           <div className="indi">
            <div className="red">
                <h5>booked</h5>

            </div>
            <div className="gray">
                 <h5>not booked</h5>
            </div>
           </div>

           <div className="ticketbook">
             <h4>{bus.busname} ({bus.busno})</h4>
             
             <h3>{bus.from} To {bus.to}</h3>

            <h3>{bus.login} To {bus.logout}</h3>
             
            <div>
            <h4>Booked : {not} </h4>
            <h4>Availeable : {avaseats}</h4>
            </div>

            

           </div>

           

            
        </div>
        
        </>
    )
}

export default Bus;
