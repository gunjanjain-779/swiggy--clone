import { useSelector } from "react-redux";
import { Link } from "react-router";


const Header = (props) => {
  console.log(props.cartname);
   const cartitems= useSelector((state)=>state.slice1.items);
   return (<div className="flex justify-between shadow-xl h-22">
    <div className="flex">
      <Link to= "/"> <img  className="w-15 h-14 rounded-2xl my-4 mx-18 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s" /> </Link>
    </div>
    <h1 className="pt-8 font-bold absolute left-43">{props.cartname}</h1>
    <div >
      <ul className="flex my-4 p-4 mr-18">
        <li className="px-5 font-bold text-base hover:text-amber-600">Offers</li>
        <li className="px-5 font-bold text-base hover:text-amber-600">Dine-in</li>
        <li className="px-5 font-bold text-base hover:text-amber-600">About us</li>
        <li className="px-5 font-bold text-base hover:text-amber-600">Help</li>
        <li className="px-5 font-bold text-base hover:text-amber-600"><Link to= "/cart">Cart-({cartitems.length})</Link></li>
      </ul>
    </div>
  </div>)
}

export default Header;
