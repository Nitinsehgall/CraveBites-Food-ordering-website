import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = () => (
    <div className='h-screen flex items-center justify-center'>
    <ReactLoading type={'spin'} color={'red'}  />
    </div>
);
 
export default Loading;