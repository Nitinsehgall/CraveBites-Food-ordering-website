import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div className='h-screen flex items-center justify-center'>

    <ReactLoading type={'spin'} color={'red'}  />
    </div>
);
 
export default Loading;
// import { useState, CSSProperties } from "react";
// import RingLoader from "react-spinners/RingLoader";



// function Loading() {
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");

//   return (
//    <div className="w-full h-screen flex items-center"> 


//       <RingLoader
//         color={'red'}
//         loading={loading}
//         cssOverride={{  display: "block",
//             margin: "0 auto",
//             borderColor: "black",}}
//             size={100}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//             />
    
//             </div>
//   );
// }

// export default Loading;
