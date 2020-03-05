import React, { useState } from 'react'
import CartContext from './CartContext.js'

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{
            cartList: cart,
            updateCart: setCart
        }}>
            {props.children}
        </CartContext.Provider>

    )
}
export default CartProvider