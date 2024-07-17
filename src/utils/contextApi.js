import { createContext, useState } from "react";

export const cartDataContext = createContext(null)
export const loginContext = createContext(false)
import React from 'react'

export const contextApi=() =>{
  const [cartDataState,setCartDataState]=useState(cartDataContext)
}

