import  { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => {
    console.log(props);
    const [ storeData, setStoreData] = useState()

  return (
    <>
    <Navbar />
      {props.children}
    <Footer/>
    </>
  )
}

export default Layout
