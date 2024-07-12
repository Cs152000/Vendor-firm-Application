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
  const response=await axios.get(https://react-food-backend-o6lc.onrender.com/product/${firmId}/products`)
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
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if(confirmDelete){
    try{
      const response=await axios.delete(`https://react-food-backend-o6lc.onrender.com/product/${productId}`)
      if(response){
    setProducts(products.filter(product=> product._id !== productId))
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
  }
  
  return (
    <section className='bg-purple-600 h-fit p-2 w-[80vw]'>
      <div className='text-white font-bold text-xl text-center'>
        All Products
      </div>
     {products.length === 0?(
      <p className='h-screen'>no products found</p>
     ):(
      <ul className=' gap-2 grid grid-cols-1  items-center justify-center my-4 mx-4'>
      {products.map((item,index)=>(
         <li className='border border-black bg-yellow-50 shadow-lg w-full h-[110px] px-4 py-2 flex gap-6' key={index}>
          <div className=' w-[30vw] flex align-center my-auto shadow-md h-full'><img className='w-full h-full border border-black p-1 rounded-md'  src={"http://localhost:3001/images/"+item.image} /></div>
          <div className='h-1/2 text-sm font-bold w-[40vw]'>
          <p>{item.productName}</p>
          <div>{item.category}</div>
          <div>{item.bestSeller}* Rating</div>
          <div className='px-2 py-1 font-bold w-fit border border-purple-700 border-dashed rounded-lg'>{item.description}</div>
          </div>
          <div className='w-[20vw] flex justify-center align-center flex-col'>
          <button className='bg-blue-500 text-white px-3 py-1  rounded-xl h-fit my-auto' onClick={()=>deleteProductById(item._id)}>
            DELETE
            </button>
            <h2 className='font-bold mx-auto'> <span className='text-red-400'>₹</span> {item.price}</h2>
          </div>
          
          </li>
      ))}
      </ul>
     )}
      
    </section>
  )
}

export default AllProducts
