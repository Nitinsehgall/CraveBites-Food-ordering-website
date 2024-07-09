import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>

//   <BrowserRouter>
//     {/* {window.location.pathname !== "/" && <Navbar />} */}

// <Navbar/>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/home" element={<LandingPage />} /> {/* Redirect /home to LandingPage */}
//       <Route path="/my-orders" element={<Myorder />} />
//       <Route path="/aboutus" element={<About />} />
//       <Route path="/menu" element={<Main />} />
//     </Routes>

//     {/* Always render Footer (except home page) */}
//     {window.location.pathname !== "/" && <Footer />}
//     {/* <Footer/> */}
//   </BrowserRouter>
);
