import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DashBoard from '../../Pages/DashBoard'

const AddProducts = () => {
  const navigate=useNavigate()
  const [productName,setProductName]=useState(" ")
  const [price, setPrice] = useState('');
  const [bestSeller,setBestSeller]=useState([]);
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState('');
  const [image,setImage]=useState(null)
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  
                      //check box
  const handleImageUpload = (e) => {
    e.preventDefault();
    const savedImage=e.target.files[0];
    setImage(savedImage)
    
  };
  const handleCategory = (e) => {
    e.preventDefault();
    const value=e.target.value
if(category.includes(value)){
  setCategory(category.filter((item)=> item!==value))
  console.log(item)
}
  else{
    setCategory([...category,value])
  }};
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

      // sending the data from frontend to backend through axios and using headers
      const response = await axios.post(`http://localhost:3001/product/add-products/${firmId}`, {
       productName,price,category,bestSeller,description,image
      }
);
      if (response.data) {
        setProductName("")
        setPrice("")
        setCategory([])
        setBestSeller("")
        setDescription("")
        setImage(null)
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

    <div className='m-2 p-5 border border-rose-400 shadow-2xl align-middle md:mx-48 mx-auto'>
     
    <div className='text-center font-semibold text-secondary'>Add Products</div>
    <hr className="h-px my-2 bg-rose-400 border-0"/>
    <div className=' my-2'>
              <label htmlFor="Product Name" className='block text-base  text-left '>Product Name</label>
            <input type="text" id="FirmName" className='border p-1 w-full' placeholder='Add Product Name' onChange={(e)=>{setProductName(e.target.value)}}
           />
            <label htmlFor="Price" className='block text-base  text-left'>Price</label>
            <input type="text" id="Price" className='border p-1 w-full' placeholder='Enter Price' onChange={(e)=>{setPrice(e.target.value)}}
            />
             <div>
             <label htmlFor="category" className='block text-base  text-left'>Category</label>
             <div className='flex gap-2 justify-center my-1'>
              <div className='gap-2'>
              <label htmlFor="category">veg</label>
        <input
          type="checkbox" value='veg' checked={category.includes("veg")}
          onChange={handleCategory}
        />
              </div>
              <div>
              <label htmlFor="category">non-veg</label>
        <input
          type="checkbox" value="non-veg" checked={category.includes("non-veg")}
          onChange={handleCategory}
        />
        </div>
              </div>
            </div>
             <label htmlFor="Best Seller" className='block text-base  text-left'>Best Seller</label>
            <input type="text" id="Best Seller" className='border p-1 w-full' placeholder='Best Seller'  onChange={(e)=>{setBestSeller(e.target.value)}}
            />
            <label htmlFor="Description" className='block text-base  text-left'>Description</label>
            <input type="text" id="Offer" className='border p-1  w-full' placeholder='Enter Description'   onChange={(e)=>{setDescription(e.target.value)}}
            />
            <label className='block text-base  text-left'>Firm Image</label>
            <input type="file" id="image" className='border py-2 px-1 w-full' placeholder='SEND IMAGE' onChange={handleImageUpload}
            />
            <div>
            <button onClick={handleProduct}  className='bg-secondary text-white px-3 py-1 rounded my-2'>Submit</button>
            </div> 
        </div>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  )
}

export default AddProducts
