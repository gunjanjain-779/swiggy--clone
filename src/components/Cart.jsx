import { useSelector } from "react-redux";
import Header from "./header";
import Itemlist from "./itemlist";


const Cart=()=>{
    const cartitem= useSelector((state)=>state.slice1.items)
    return(<>
    <Header cartname={"SECURE CHECKOUT"}/>
    <div className="flex flex-col justify-self-center h-screen w-2xl mt-10 ">
      <Itemlist className="" items={cartitem}/>
      </div>
    
    
    
    </>)
}
export default Cart;