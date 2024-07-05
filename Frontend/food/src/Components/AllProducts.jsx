import axios from 'axios'
import React, { useEffect, useState } from 'react'


const AllProducts = () => {
  const [products,setProducts]=useState([])

  const productHandler=async()=>{
try{
  const firmId= localStorage.getItem("firmId")
  if(!firmId){
    console.log("firm id not found")
  }
  const response=await axios.get(`http://localhost:3001/product/${firmId}/products`)
  const savedResponse=await response.data
  setProducts(savedResponse)
  console.log(savedResponse)
}
catch(error){
    alert("invalid response")
    console.log(error)
}
  }
 useEffect(()=>{
productHandler();
console.log("use effect included to show products")
 },[])
             // delete products by productId
 const deleteProductById=async(productId)=>{
  const response=await axios.delete(`http://localhost:3001/product/${productId}`)
  try{
      if(response){
    setProducts(products.filter(product=> product._id !== productId))
    confirm("are you sure to delete product ?")
   console.log("product deleted successfully.",response)
   alert("product deleted successfully")}
    else{
      alert("the product is not deleted")
    }
}
  catch(error){
   console.log(error)
   alert("failed to delete product")
  }
}
  return (
    <section className='bg-purple-600 h-full p-2'>
      <div className='text-white font-bold text-2xl text-center'>
        All Products
      </div>
     {products.length === 0?(
      <p>no products found</p>
     ):(
      <ul className=' gap-2 grid md:grid-cols-2 sm:grid-cols-1  items-center justify-center my-4 mx-4'>
      {products.map((item,index)=>(
         <li className='border border-black bg-white  shadow-lg w-full h-[150px] px-4 py-2 flex gap-6' key={index}>
          <div className=' w-1/3 bg-red-500 shadow-md'>{item.image}</div>
          <div className='h-1/2 text-sm font-bold'>
          <p>{item.productName}</p>
          <p>{item._id}</p>
          <h2> {item.price}</h2>
          <div>{item.category}</div>
          <div>{item.bestSeller}* Rating</div>
          <div className='px-2 py-1 font-bold w-fit border border-purple-700 border-dashed rounded-lg'>{item.description}</div>
          </div>
          <button className='bg-blue-500 text-white px-3 py-1 rounded-xl h-fit my-auto' onClick={()=>deleteProductById(item._id)}>
            DELETE
            </button>
          </li>
      ))}
      </ul>
     )}
      
    </section>
  )
}

export default AllProducts
