import { useState } from "react";
import Itemlist from "./itemlist";

const ResCategory = ({ restraumenu }) => {
  const[showitem,setshowitem]=useState(false)
  const handleClick=()=>{setshowitem(!showitem)}
  return (<>
    <div>
      <div onClick={handleClick} className="flex shadow-xl mb-4 bg-gray-50 justify-between p-5 cursor-pointer border-b-10 border-b-gray-300">
        <span className="font-bold text-[20px]">{restraumenu?.card?.card?.title} ({restraumenu?.card?.card?.itemCards?.length})</span>
        <span>{showitem===false ? "▼":"▲"} </span>
      </div>
      {showitem && <Itemlist items={restraumenu?.card?.card?.itemCards} />}
    </div>


  </>)
}
export default ResCategory;