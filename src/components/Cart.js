import { useDispatch, useSelector } from "react-redux"
import ListOfItems from "./ListOfItems"
import { clearCart } from "../utils/cartSlice"

const Cart=()=>{
    const dispatch=useDispatch()
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
    const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div className="text-center m-10 p-10 ">
        <h1 className="text-2xl font-bold">cart</h1>
         <div>
            <button onClick={handleClearCart} className="m-2 p-2 bg-black text-white rounded-lg">clear cart</button>
            {
                cartItems.length === 0 && <h1>add items to cart</h1>
            }
            <ListOfItems items={cartItems}/>
         </div>
        </div>
    )
}
export default Cart