import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cartDataContext } from '../context/context';

const Layout = (props) => {
    console.log(props);
    const [ contextData, setContextData] = useState([])

    const Parent = useContext(cartDataContext)

    console.log(Parent, 'ABCD')
  return (
    <>
    <Navbar/>
      {props.children}
    <Footer/>
    </>
  )
}

export default Layout
