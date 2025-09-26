import { useDispatch } from "react-redux";
import { additem } from "./cartslice";
import { useState } from "react";


const Itemlist=({items})=>{
  const dispatch= useDispatch();
  const handleadditem=(menuitem)=>(dispatch(additem(menuitem)))
  const [count,setcount]=useState();
    return(<>
    <div>
      {
       items.map((menuitem)=>
       (<div  key={menuitem.card.info.id} className="flex justify-between items-center h-[190px] border-b-2 border-b-gray-200">
        <div className="flex-1">
            <h1 className="font-bold text-[18px]">{menuitem?.card?.info?.name}</h1>
            <h2 className="font-semibold text-[16px]">₹ {menuitem?.card?.info?.price ? menuitem?.card?.info?.price/100 : menuitem?.card?.info?.defaultPrice/100 }</h2>
            <h2 className="text-emerald-800 font-bold py-1">★ {menuitem?.card?.info?.ratings?.aggregatedRating?.rating ? menuitem?.card?.info?.ratings?.aggregatedRating?.rating : "4.0" }</h2>
            <p className="text-[12px] text-gray-500 font-bold pt-2">{menuitem?.card?.info?.description}</p>
        </div>
        <div className="flex relative">
           <img className="w-[200px] h-[150px] m-3 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+menuitem?.card?.info?.imageId}/>
           
      <button className="h-10 w-20 border-2 mt-2 shadow-xl border-[#ebeded] bg-white absolute right-20 bottom-1 text-[#1BA672] font-bold " onClick={()=>{handleadditem(menuitem)}}>{"ADD+"}</button>
          
        </div>
      </div>))}
    </div>
    </>)
}
export default Itemlist;