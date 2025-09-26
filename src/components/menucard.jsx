import { useState } from "react";

const Menucard=({restmenu})=>{
    const [add,setadd]=useState(0);
   return( <>
   <div className="border-b-2 border-t-3 border-gray-200  h-[205px] flex flex-row-reverse">
    <img className="w-[200px] h-[180px] mt-3 rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restmenu?.card?.info?.imageId}/>
    <button onClick={()=> setadd+1 } className="h-10 w-20 border-2 mt-2 border-[#ebeded] bg-white absolute right-108 text-[#1BA672] font-bold ">{"ADD+"}</button>
    <div>
    <h2 className="font-bold mx-2 mt-3 text-lg">{restmenu?.card?.info?.name}</h2>
    <h2 className="font-semibold text-[16px] ml-2 mt-1.5">{" ₹ "+(restmenu?.card?.info?.price || restmenu?.card?.info?.finalPrice || restmenu?.card?.info?.defaultPrice )/100}</h2>
    <h3 className="font-semibold text-[16px] ml-2 mt-1.5">{("✪ "+restmenu?.card?.info?.ratings?.aggregatedRating?.rating) || " 3.0 "}</h3>
    <p className="mt-2.5 ml-2 h-18 w-[550px] overflow-hidden">{restmenu?.card?.info?.description}</p>
   </div>
    </div>
    </>)

}
export default Menucard;