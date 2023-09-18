import { createContext } from "react";

export const test_contexts = createContext("");
const MainContext = ({ children }) => {


    
  return (
    <test_contexts.Provider value="context works">
      {children}
    </test_contexts.Provider>
  );
};

export default MainContext;
