
import { useState } from 'react';
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import SideWindow from './SideWindow';

function Main({commonData, setCommonData}) {
  const [foodItems, setFoodItems] = useState([]);

  return (
    <div className='Main'>
    {/* <Navbar/> */}
    <SearchBar foodItems={foodItems} setFoodItems={setFoodItems}/>
      <Card foodItems={foodItems} setFoodItems={setFoodItems} setCommonData={setCommonData} />
      

    </div>
  )
}

export default Main
