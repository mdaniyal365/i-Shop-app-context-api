import React from "react";
import { useState } from "react";
import Axios from 'axios';
import { useEffect } from "react";

import Data from "./pexels"




const ProductPage=({AddItem})=>{
    const data=Data.photos
    // console.log(data)
    
// const url="https://api.myjson.online/v1/records/64ef68c8-228f-4b00-a107-ce54a5bdd09a"
    // const [product, setProduct] = useState([]);

    
  
    // const fetchPhotos = async () => {
    //   const { data } = await Axios.get(url, {})
  
    //   const { photos } = data;
  
    //   const allProduct =photos&&photos.map(photo => ({
    //     ProductName:photo.productName,
    //     ProductPrice:photo.productPrice,
    //     ProductImg:photo.src.medium,
    //     id:photo.id
    //   }));
  
    //   setProduct(allProduct);
    // };
  
    // useEffect(() => {
    //   fetchPhotos();
    // }, []);

    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {data.map((Product) => (
              <a key={Product.id}  className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={Product.src.medium}
                    
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{Product.productName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{`$${Product.productPrice}`}</p>
                <button onClick={()=>AddItem(Product)}className="group relative h-8 w-30 overflow-hidden rounded-2xl bg-green-500 text-sm font-bold text-white">
    Add To Cart
    <div  className="absolute inset-0 scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    )
}

export default ProductPage;