import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/Fooditem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id = 'food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
            if(category==="All" || category===item.category){ {/*for filtering the food items*/}
              return <FoodItem key={index} id = {item._id} name ={item.name} description={item.description} price={item.price} image={item.image}/> ;{/*after this we create a component to display the food data in the form of card*/} 
            }
             
          })}
        </div>
    </div>
  )
}

export default FoodDisplay