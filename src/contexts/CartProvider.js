import React, { useState } from 'react'
import CartContext from './CartContext.js'
const CartProvider = (props) => {
    const [cart, setCart] = useState(0);
    return (
        <CartContext.Provider value={{
            cartNumber: cart,
            updateCart: setCart
        }}>
            {props.children}
        </CartContext.Provider>

    )
}
export default CartProvider