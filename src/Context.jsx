import { useState, useEffect } from "react";
import { createContext } from "react";
import jsonData from "./Data.json";
import {} from "react";
// ech packeg is designated  to a differnet component
export const Sidebarcontext = createContext({ SetSideBarForm: () => {} });
export const Glarycontext = createContext({ GlaryData: {} });
export const LogIncontexst=createContext({Login:{},SetLogin:()=>{}})

const MainContext = ({ children }) => {
  // sidebar contect us form
  // need to fix data is sent in a dilay
  const [SidebarForm, SetSideBarForm] = useState();
  const [sideBarArray, SetsideBarArray] = useState(
    localStorage.getItem("SideBar")
      ? JSON.parse(localStorage.getItem("SideBar"))
      : []
  );
  useEffect(() => {
    SidebarForm && SetsideBarArray([...sideBarArray, SidebarForm]);
    SidebarForm &&
      localStorage.setItem("SideBar", JSON.stringify(sideBarArray));

  }, [SidebarForm]);
  const Users=JSON.parse(localStorage.getItem("Users"))
  const [Login,SetLogin]=useState({})
  
  
  if (Login&&Users) {
    let CerentUserNO_valid=Users.find(element=>element.Username===Login.Username)
    
    if (CerentUserNO_valid&&CerentUserNO_valid.password===Login.password ) {
      let CerentUser=CerentUserNO_valid
      console.log(CerentUser);
      
    }
    
  }

  
  // DB

  return (
    <LogIncontexst.Provider value={{Login,SetLogin}}>
    <Glarycontext.Provider value={jsonData.Glary}>
      <Sidebarcontext.Provider value={{ SetSideBarForm }}>
        {children}
      </Sidebarcontext.Provider>
    </Glarycontext.Provider>
    </LogIncontexst.Provider>
  );
};

export default MainContext;
