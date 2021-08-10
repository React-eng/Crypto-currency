import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Cart from "./Cart"
import Home from "./Home"
import CoinDetailPage from "./CoinDetailPage"
import {useEffect} from "react";
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";
import Login from "./Login"
import './App.css';
import Sidebar from "./Sidebar";
function App() {
  
  const[ {user }, dispatch] = useStateValue();
  
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('The user Shopping or crypto-currency is >>>', authUser);
      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else{
        dispatch ({
        type: 'SET_USER',
        user: null
      })

      }
    })

  },[])
  return (
    <div className="app"> 
    <Router>      
     
    <Switch>   
         
        <Route path="/cart">
         <Cart />
        </Route> 
        <Route path="/coins/:name">
          <CoinDetailPage/>
        </Route>   
        <Route path="/login">
                
         <Login />
            
        </Route>  
              
        

        <div className="mainapp"> 
         <Route path="/">
         
         <Home />
         
            
        </Route>
        
        </div>
                
        </Switch>
          
      </Router>
      <div className="circle1" />
      <div className="circle2" />
      </div> 
  )
  }
export default App
