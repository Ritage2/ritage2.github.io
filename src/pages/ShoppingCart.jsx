import React from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

export default function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/destinations" className="text-blue-500 underline">Browse trips</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.slug} className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-16 object-cover rounded" />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.slug)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-bold">Total: ${total}</span>
            <div className="flex gap-4">
              <button
                onClick={() => clearCart()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
