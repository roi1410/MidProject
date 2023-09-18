import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

  

  const Layout =()=>{

    return(

        <>
        <Navbar/>
        <Sidebar/>
        <Footer/>
        <Outlet/>

        
        </>
    )
  }

  export default Layout