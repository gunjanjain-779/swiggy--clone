import { Link } from "react-router";

const Card = ({restdata}) => {
  const data=restdata.info
  const {id}= data;
  return (
  <Link to={`/restaurants/${id}`}>
  <div className='h-80 w-80 mx-5 mb-5 flex flex-col transition-all duration-80 ease-in-out 
    hover:scale-[0.95]'>
    <div className="">
    <img className="h-50 w-75 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ data.cloudinaryImageId}/>
    <h3 className="font-bold text-[18px] pt-3">{data.name}</h3>
    <h4 className="font-semibold">{"★ "+data.avgRatingString +"  " +"• "+data.sla.slaString}</h4>
    <p className="text-[#02060C99] ">{data.cuisines.join(", ")}</p>
    <p className="text-[#02060C99]">{data.areaName}</p>
    </div>
  </div>
  </Link>)
}

export default Card;

