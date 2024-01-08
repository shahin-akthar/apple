import { FaCartShopping } from "react-icons/fa6";
import './index.css'

const Cart = () => (
    <div className='c-container'>
        <h1 className="cart-heading">
        <FaCartShopping />
        <span>   Your Cart Is Empty!</span>
        </h1>
    </div>
)

export default Cart