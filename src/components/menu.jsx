import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import Header from "./header"
import { useParams } from "react-router";
import ResCategory from "./rescategory";
const Menu=()=>{
  let {id}= useParams();
  console.log(id);
  const menuapi= "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId="
    const[resinfo,setresinfo]=useState(null);
    const [resmenu,setresmenu]=useState(null);
    useEffect(()=>{async function fetchmenu(){
        const datamenu= await fetch(menuapi+id);
        const jsonm=  await datamenu.json();
        setresinfo(jsonm?.data?.cards[2]?.card?.card?.info);
        //setresmenu( jsonm?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||jsonm?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards);
        //console.log(jsonm?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        const category= jsonm?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log(category);
        setresmenu(category);
    }
    fetchmenu();
    },[]);
  
     if (resinfo === null || resmenu === null) return <Shimmer/>;
    

  return(
    <>
    <Header />
    <div className="flex flex-col justify-self-center h-screen w-3xl mt-10">
      <h1 className="text-3xl font-bold m-4">{resinfo?.name}</h1>
      <div className="border-1 border-gray-300 rounded-xl min-h-40 mt-3 shadow-[0_0_20px_5px_rgba(107,114,128,0.3)]">
      <p className="mt-4 mx-4 font-bold">{"✪ "+ resinfo?.avgRatingString + " • " + resinfo?.costForTwoMessage}</p>
      <h2 className="mx-4 mt-2 text-[#FF5200] font-bold underline">{resinfo?.cuisines.join(", ")}</h2>
      <p className="mt-2 mx-4 font-semibold">{"Outlet: "+resinfo?.areaName}</p>
      <p className="mt-2 mx-4 font-bold">{resinfo?.sla.slaString?.toLowerCase()}</p>
     </div>
     <div className=" border-t-10 border-gray-200 mt-5"></div>
     <div>
       {
        resmenu?.map((restmenu,index)=>(<ResCategory 
        key = {index} restraumenu={restmenu}/>))
      }
     </div>
     </div>
    </>
      );
 }

export default Menu;
