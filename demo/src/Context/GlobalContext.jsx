import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isim, setIsim] = useState();
  const [isLogin , setLogin]=useState(false)
  const[password, setPassword]=useState()
  
  return (
    <GlobalContext.Provider value={{ isim: "Şükran Karakaya",setPassword, password:123 , setIsim,isLogin, setLogin }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
