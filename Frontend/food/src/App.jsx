import Login from "./Components/Forms/Login"
import Register from "./Components/Forms/Register"
import Sidebar from './Components/Sidebar'
import LandingPage from "./Pages/LandingPage"
import Navbar from "./Components/Navbar"
import { Routes,Route } from "react-router-dom"
import DashBoard from "./Pages/DashBoard"
import AddFirm from "./Components/Forms/AddFirm"
import AddProducts from "./Components/Forms/AddProducts"
import AllProducts from "./Components/AllProducts"
import NotFound from "./Components/Forms/NotFound"
import UserDetails from "./Components/Forms/UserDetails"

function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={ <LandingPage/>}/>
      <Route path="/home" element={ <DashBoard/>}/>
      <Route path="/home/dashboard" element={ <DashBoard/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path="/home/add-firm" element={ <AddFirm/>}/>
      <Route path="/home/add-products" element={ <AddProducts/>}/>
      <Route path="/home/all-products" element={ <AllProducts/>}/>
      <Route path="/home/user-details" element={ <UserDetails/>}/>
      <Route path="/*" element={ <NotFound/>}/>
    </Routes>
      </div>
         </>
  )
}

export default App
