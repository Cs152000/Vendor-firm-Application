import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import upload from "/upload.png";

const AddProducts = () => {
  const navigate=useNavigate()
  const [productName,setProductName]=useState(" ")
  const [price, setPrice] = useState('');
  const [bestSeller,setBestSeller]=useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState('');
  const [image,setImage]=useState(null);
  const [showImage, setShowImage] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  
  console.log(showImage, 'show Image');
  const onInputChange = (e) => {
    console.log(e.target.files)
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };
                      //check box
  const handleCategory = (e) => {
    e.preventDefault();
    const value=e.target.value
  setCategory(value);
  }
                  //add firm to database through the token(vendor login)
  const handleProduct=async(e)=>{
    e.preventDefault();
    try {
      const  loginToken=localStorage.getItem("token")
      const  firmId=localStorage.getItem("firmId")
      if(!loginToken || !firmId){
        console.error("user not authenticated")
        alert("user not authenticated")
      } 
      const formData=new FormData()
      formData.append("productName",productName)
      formData.append("price",price)
      formData.append("bestSeller",bestSeller)
      formData.append("description",description)
      formData.append("image",image)
      formData.append("category",category)


      // sending the data from frontend to backend through axios and using headers
      const response = await axios.post(`http://localhost:3001/product/add-products/${firmId}`,formData
);
      if (response.data) {
        setProductName("")
        setPrice("")
        setCategory([])
        setBestSeller("")
        setDescription("")
        setImage(null)
        console.log(response.data)
        alert("product added successfully")
        setMessage('PRODUCT added successful!');
        setError(null)
        setTimeout(()=>{
          navigate("/home")
        },2000)}
    } 
    catch (error) {
      setError('An error occurred. Please try again later.');
      console.log(error)
      alert("failed to add product")
    }
  }

  return (

    <div className='m-2 p-2 border text-sm bg-blue-200 border-black shadow-2xl w-[80vw] md:mx-48 h-fit'>
     
    <div className='text-center font-semibold text-slate-500'>Add Products</div>
    <hr className="h-px my-2 bg-white border-0"/>
    <div className=' my-2'>
              <label htmlFor="Product Name" className='block text-base  text-left '>Product Name</label>
            <input type="text" id="FirmName" className='border p-1 w-full' placeholder='Add Product Name' onChange={(e)=>{setProductName(e.target.value)}}
           />
            <label htmlFor="Price" className='block text-base  text-left'>Price</label>
            <input type="number" id="Price" className='border p-1 w-full' placeholder='0000' onChange={(e)=>{setPrice(e.target.value)}}
            />
             <div>
             <label htmlFor="category" className='block text-base  text-left'>Category</label>
             <div className='flex gap-2 justify-center my-1'>
              <div className='gap-2'>
              <label htmlFor="veg" >veg</label>
        <input
          type="radio" value='veg'  checked={category === 'veg'} name="category" id="veg"
          onChange={handleCategory}
        />
              </div>
              <div>
              <label htmlFor="non-veg">non-veg</label>
        <input
          type="radio" value="non-veg" checked={category === 'non-veg'} name="category" id="non-veg"
          onChange={handleCategory}
        />
        </div>
              </div>
            </div>
             <label htmlFor="Best Seller" className='block text-base  text-left'>Best Seller</label>
            <input type="text" id="Best Seller" className='border p-1 w-full' placeholder='Best Seller'  onChange={(e)=>{setBestSeller(e.target.value)}}
            />
            <label htmlFor="Description" className='block text-base  text-left'>Description</label>
            <textarea type="text" id="Offer" className='border p-1  w-full' placeholder='Enter Description'   onChange={(e)=>{setDescription(e.target.value)}}
            />
            <p>Upload Image</p>
           <label htmlFor='image' className='block text-base text-left'><img className='w-20 h-16 border border-black p-1 rounded-md' src={image?URL.createObjectURL(image):`${upload}`}/></label>
            <input type="file" id="image" hidden required className='border py-2 px-1 w-full' placeholder='SEND IMAGE'  onChange={onInputChange}
            />
            <div>
            <button onClick={handleProduct}  className='bg-primary text-white px-3 py-1 rounded my-2'>Submit</button>
            </div> 
        </div>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  )
}

export default AddProducts
