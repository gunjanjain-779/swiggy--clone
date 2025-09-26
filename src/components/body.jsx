import { resdata } from "../utils/card_data"
import Card from "./rescard"
import Shimmer from "./shimmer"
import { useState,useEffect } from "react"

const Body = () => {
const [listofrestaurants,setlistofrestaurants]= useState(resdata);
const[searchval,setsearchval]=useState("");
const [copyrestaurants,setcopyrestaurants]= useState([]);
  useEffect(()=>{fetchdata()},[]);
   const fetchdata = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const read= await data.json()
    console.log(read?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistofrestaurants(read?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setcopyrestaurants(read?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };

  return (<div className="body">
     {copyrestaurants.length===0 &&
        <Shimmer/>
      }
     <div className="flex">
      <input className="w-lg h-12 border-1 mt-8 ml-10 placeholder:px-4" type="text" placeholder="Search" value={searchval} 
      onChange={(val)=>setsearchval(val.target.value)} />
      <button className="p-0 m-0 pt-8" onClick={()=>
      {let filter= listofrestaurants.filter((rest)=>rest?.info?.name?.toLowerCase()?.includes(searchval.toLowerCase()))
        console.log(filter)
        setcopyrestaurants(filter)
     }}> <img className="w-14 h-12 border-1" src="https://img.freepik.com/premium-vector/vector-search-icon-magnifying-glass_901408-553.jpg"/></button>
    </div>
    <div><h2 className="fon copyrestaurantst-bold text-2xl my-3 mx-10">Top restaurant Picks for You</h2></div>
    <div className="ml-10">
        <button className="bg-[#ebeded] mx-3 mt-4 mb-7 h-10 w-30 rounded-3xl active:bg-amber-500" onClick={()=>{
          const filterdata= listofrestaurants.filter((data)=>data.info.avgRating > 4.0)
          setcopyrestaurants(filterdata)
        }}>Ratings 4.0+</button>
        <button className="bg-[#ebeded] mx-3 my-4 mb-7 h-10 w-30 rounded-3xl active:bg-amber-500" onClick={()=>{
          const filtertime= listofrestaurants.filter((data)=>data.info.sla.deliveryTime < 40 )
          setcopyrestaurants(filtertime)
        }}>Fast Delivery</button>
    </div>
    <div className="flex flex-wrap pl-10">
      {
       copyrestaurants.map((details)=>(
         <Card key={details.info.id} restdata={details}/>
        ))
      }
    </div>
  </div>)
}
export default Body;


