import { createContext, useState } from "react";

export const cartDataContext = createContext(null)
export const loginContext = createContext(false)

export const contextApi=() =>{
  const [cartDataState,setCartDataState]=useState(cartDataContext)
}

