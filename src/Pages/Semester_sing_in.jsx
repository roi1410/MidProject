import { useNavigate } from "react-router-dom"
import { SingUp_degreeContext } from "../Context"
import { useContext, useEffect } from "react"

export const Semester_sing_in = () => {
  
  const {CerentUser}=useContext(SingUp_degreeContext)
  const nav = useNavigate()
  
useEffect(()=>{
  if (!CerentUser) {
    nav("/LogIn")
     
    }
},[])
  

    return (
    <div>
      
    </div>
  )
    
    
}
