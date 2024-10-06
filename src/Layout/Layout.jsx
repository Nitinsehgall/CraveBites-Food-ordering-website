import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <>
    <Navbar />
      {props.children}
    <Footer/>
    </>
  )
}

export default Layout
