import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import Ulog from './userLog/userLog';
import Uregi from './userRegi/userRegi';
import Udash from './userDash/userDash';
import Search from './search/search';
import Myticket from './myticket/myti';
import Sellereg from './sellerregister/sellereg';
import Sellerlogin from './sellerLogin/sellerlogin';
import SellerDash from './sellerDash/sellerdash';
import Mybus from './mybus/mybus';
import Bus from './busbyid/bus';

import Addbus from './bus/addbus/addbus';

import Buss from './bus/bus';
function App() {
  return (
     
    <center>
        <Router>

             <Routes>

    <Route element={<Ulog/>} path="/userlogin"/>
    <Route element={<Uregi/>} path="/userregister"/>
    <Route element={<Udash/>} path="/userdashboard"/>
    <Route element={<Bus/>} path="/bus/:id"/>
    <Route element={<Myticket/>} path="/mytickets"/>
    <Route element={<Search/>} path="/search/:from/:to/:date"/>
    <Route element={<Sellerlogin/>} path="/sellerlogin"/>
    <Route element={<Sellereg/>} path="/sellerRegister"/>
    <Route element={<SellerDash/>} path="/sellerdashboard"/>
    <Route element={<Mybus/>} path='/mybus'/>
    <Route element={<Buss/>} path='/bussdetails/:id'/>
    <Route element={<Addbus/>} path='/addbus'/>
    
             </Routes>


</Router>
    </center>

     
  );
}

export default App;
