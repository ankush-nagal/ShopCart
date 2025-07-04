import React from 'react'
import { useState } from 'react'
import CartModel from './CartModel'
import { FaMoon, FaStore, FaShoppingCart, FaSun } from "react-icons/fa"

const Header = ({
    cart,
    updateQuantity,
    removeFromCart,
    total,
    theme,
    toggleTheme,
}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <header className={`p-3 mb-8 shadow ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            <div className='max-w-7xl mx-auto px-4 flex  justify-between items-center'>
                <h1 className={`text-2xl font-bold flex item-center gap-4
                    ${theme === "dark" ? " text-white" : "bg-gray-100"}
                }`}>
                    <FaStore className='text-blue-600' /> ShopCart
                </h1>
                <div className='flex item-center gap-5'>
                    <button className={`p-2 text-2xl relative ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                        onClick={() => setIsCartOpen(true)}>
                        <FaShoppingCart />
                        {cart.length > 0 && (
                            <span className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2'>
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}

                    </button>
                    <button className='p-2 rounded-full text-black cursor-pointer' onClick={toggleTheme}>
                        {
                            theme === "dark" ? (
                                <FaSun className='text-white text-3xl hover:bg-gray-600 p-1 rounded-full' />) : (
                                <FaMoon className='text-gray-800 text-2xl hover:bg-gray-300 p-1 rounded-full' />
                            )}
                    </button>
                </div>
            </div>
            {/* Cart Modal */}
            {isCartOpen && (
                <CartModel
                    cart={cart}
                    onClose={() => setIsCartOpen(false)}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                    total={total}
                    theme={theme}
                />
            )}

        </header>
    )
}

export default Header
