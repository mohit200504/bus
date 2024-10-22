

import {configureStore,createSlice} from "@reduxjs/toolkit";




let token=null;

let user=null;

let bus=null;



let userTokenSlice=createSlice({
    name:"usertoken",
    initialState:token,
    reducers:{

        setUserToken:(state,action)=>{

            return action.payload;


            
        }

    }
});

let userdetails=createSlice({
    name:'userdetails',
    initialState:user,
    reducers:{

        setUserDetails:(state,action)=>{
            return action.payload;

        }

    }
})


let busSlice=createSlice({
    name:"bus",
    initialState:bus,
    reducers:{
        setbus:(state,action)=>{

            return action.payload;

        }
    }
});

let sellerToken=null;


let sellerTokenslice=createSlice({
    name:"sellertoken",
    initialState:sellerToken,
    reducers:{

        setSellerToken:(state,action)=>{

            return action.payload;

        }
    }

});

let sellerdata=null;


let sellerslice=createSlice({
    name:"seller",
    initialState:sellerdata,
    reducers:{

        setSeller:(state,action)=>{
            return action.payload;
        }
    }
});

let busin=null;
let businslice=createSlice({
    name:"busin",
    initialState:busin,
    reducers:{
        setbusin:(state,action)=>{
            console.log(action);
             return action.payload;
        }
    }

})



let store=configureStore({
    reducer:{
        usertoken:userTokenSlice.reducer,
        user:userdetails.reducer,
        bus:busSlice.reducer,
        sellertoken:sellerTokenslice.reducer,
        seller:sellerslice.reducer,
        busin:businslice.reducer
    }
});




export default store;

export const {setUserToken} =userTokenSlice.actions;
export const {setUserDetails}=userdetails.actions;
export const {setbus} =busSlice.actions;
export const {setSellerToken} =sellerTokenslice.actions;
export const {setSeller} =sellerslice.actions;
export const {setbusin}=businslice.actions;