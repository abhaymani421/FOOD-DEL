import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category,setCategory] = useState("All") ;
  return (
    <div>
      <Header/> {/*Header compenent from the components folder mounted on home page*/}
      <ExploreMenu category = {category} setCategory={setCategory}/> {/*mounted another component*/}
      <FoodDisplay category = {category}/> {/*mountig the food display compoenent*/} 
      <AppDownload/>
    </div>
  )
}

export default Home