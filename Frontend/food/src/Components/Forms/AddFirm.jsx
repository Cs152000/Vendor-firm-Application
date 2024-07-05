import React,{ useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddFirm = () => {
  const navigate=useNavigate()
  const [firmName,setFirmName]=useState(" ")
  const [area, setArea] = useState('');
  const [category, setCategory] = useState([]);
  const [region,setRegion]=useState([]);
  const [offer, setOffer] = useState('');
  const [image,setImage]=useState(null)
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState('');

                      //check box
  const handleImageUpload = (e) => {
    e.preventDefault();
    const savedImage=e.target.files[0];
    setImage(savedImage)
  };

  const handleCategory = (e) => {
    e.preventDefault();
    const value=e.target.value
    //checking whether tha value os present in the array previously
if(category.includes(value)){
  setCategory(category.filter((item)=> item!==value))
  console.log(value)
}
  else{
    setCategory([...category,value])
  }};

  const handleRegion = (e) => {
    e.preventDefault();
    const value=e.target.value
  if(region.includes(value)){
    setRegion(region.filter((item)=> item!==value))
  }
  else{
    setRegion([...region,value])
  }};
  
                  //add firm to database through the token(vendor login)
  const handleFirm=async(e)=>{
    e.preventDefault();
    try {
      const  loginToken=localStorage.getItem("token")
      if(!loginToken){
        console.error("user not authenticated")
      } 

      // sending the data from frontend to backend through axios and using headers
      const response = await axios.post('https://react-food-backend-o6lc.onrender.com/firm/add-firm', {
        firmName,area,category,region,offer,image
      },
    {headers:{
      "token":`${loginToken}`
    }}
  );
  const savedResponse=await response.data
  if (savedResponse){
        setFirmName("")
        setArea("")
        setCategory([])
        setRegion([])
        setOffer("")
        setImage(null)
        setMessages('firm added successful!');
        setError(null)
       alert("firm added successfully.")
        setTimeout(()=>{
          navigate("/home")
        },7000)
      }
      const mango=  response.data.firmId;
          const apple=response.data.savedFirmName
       localStorage.setItem("firmId",mango)
       localStorage.setItem("firmName",apple)
console.log("this is saved Response",savedResponse)
console.log(apple)
    } 
    catch (error) {
      setError('only one firm can be added to the vendor');
      alert("vendor can have only one firm")
      console.log(error)
      setTimeout(()=>{
        navigate("/home")
      },2000)
      console.log(error)
  }  
}
  return (
      <div className='m-2 p-2 text-md  w-1/2 border border-rose-400 shadow-2xl align-middle mx-auto'>
    <div className='text-center font-semibold'>Add Firm</div>
    <hr className="h-px my-2 bg-rose-400 border-0"/>
    <div className=' my-2'>
              <label htmlFor="Firm Name" className='block text-base  text-left'>Firm Name</label>
            <input type="text" id="FirmName" className='border p-1 w-full' placeholder='Add Firm Name' onChange={(e)=>{setFirmName(e.target.value)}}
           />
            <label htmlFor="Area" className='block text-base  text-left'>Area</label>
            <input type="text" id="Area" className='border p-1 w-full' placeholder='Enter Location' onChange={(e)=>{setArea(e.target.value)}}
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
            <div>
             <label htmlFor="region" className='block text-base  text-left'>Region:</label>
             <div className='flex gap-2 flex-wrap'>
             <div>
        <label htmlFor="region" >south-indian</label>
        <input
          type="checkbox" value="south-indian" checked={region.includes("south-indian")}
          onChange={handleRegion}
        />
        </div>
        <div>
        <label htmlFor="region">north-indian</label>
        <input
          type="checkbox" value="north-indian" checked={region.includes("north-indian")}
          onChange={handleRegion}
        />
        </div>
        <div>
        <label htmlFor="region">chinese</label>
        <input
          type="checkbox" value="chinese" checked={region.includes("chinese")}
          onChange={handleRegion}
        />
        </div>
        <div>
        <label htmlFor="region">bakery</label>
        <input
          type="checkbox" value="bakery" checked={region.includes("bakery")}
          onChange={handleRegion}
        />
        </div>
  </div>
  </div>
            <label className='block text-base  text-left'>Offer</label>
            <input type="text" id="Offer" className='border p-1  w-full' placeholder='Enter Offer' onChange={(e)=>{setOffer(e.target.value)}}
            />
            <label className='block text-base  text-left'>Firm Image</label>
            <input type="file" id="image" className='border py-2 px-1 w-full' placeholder='SEND IMAGE' onChange={handleImageUpload}
            />
            <div>
            <button type="submit" onClick={handleFirm} className='bg-blue-500 text-white px-3 py-1 rounded my-2'>Submit</button>
            </div> 
        </div>
        {messages && <p style={{ color: 'green' }}>{messages}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  )
}

export default AddFirm
