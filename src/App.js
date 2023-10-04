import React from 'react';
import { useState } from 'react';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';



import ProductPage from "./comp/ProductPage";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './comp/cart';
import Header from './comp/Header';
function App() {
  const[cardItem,setCardItem]=useState([]);
  

    const AddItem=item=>{
      const IsItemAdded=cardItem.findIndex(function(array){
          return array.id===item.id;
        })
        if(IsItemAdded  !== -1){
          toast("Item already added",{
          type:"error"})
          return
        }
  
        setCardItem([...cardItem,item])
      
    }
    
    const RemoveItem=item=>{
      setCardItem(cardItem.filter(singleItem => singleItem.id !== item.id))
    }
    const BuyNow=()=>{
      
     
      {toast("Purchase Complete", {
        type: "success"
      });}
      setCardItem([])
    }
    console.log(cardItem);
  
     
    return (
  <div>
  
  <Header/>
  <ToastContainer />
    <ProductPage AddItem={AddItem}/>
    <Cart cardItem={cardItem} RemoveItem={RemoveItem} BuyNow={BuyNow}/>
  </div>
    );
}

export default App;
