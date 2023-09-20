import { useState, createContext } from "react";
import jsonData from "./Data.json";

// Export jsonData.Glary as a named export

export const Sidebarcontext = createContext({ SetSideBarForm: () => {} });
export const Glarycontext = createContext({ GlaryData: [] });
export const degreesContext = createContext({ degreesData: {} });

const MainContext = ({ children }) => {
  // sidebar context us form
  const [SidebarForm, SetSideBarForm] = useState();
  const GlaryData = jsonData.Glary;
  const degreesData = jsonData.degree;

  return (
    <degreesContext.Provider value={{degreesData}} >
    <Glarycontext.Provider value={{GlaryData}}>
      <Sidebarcontext.Provider value={{ SetSideBarForm }}>
        {children}
      </Sidebarcontext.Provider>
    </Glarycontext.Provider>
    </degreesContext.Provider>
  );
};

export default MainContext;
