import { useState } from "react";
import {createContext } from "react";


export const userContext = createContext({});
export default function userProvider({children}){
    const [isLogin,setIsLogin] = useState(false)
    return (
        <userContext.Provider value={{isLogin,setIsLogin}}>{children}</userContext.Provider>
    )
};