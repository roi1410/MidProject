import { useState } from "react";
import { createContext } from "react";

// ech packeg is designated  to a differnet component
export const Sidebarcontext = createContext({SetSideBarForm:()=>{}});



const MainContext = ({ children }) => {
  // sidebar contect us form 
  const [SidebarForm,SetSideBarForm]=useState()
 console.log(SidebarForm);


    
  return (
    <Sidebarcontext.Provider value={{SetSideBarForm}}>
      {children}
    </Sidebarcontext.Provider>
  );
};

export default MainContext;
