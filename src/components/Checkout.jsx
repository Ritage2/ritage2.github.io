import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../components/Navbar"; 

export default function Checkout() {
  const { cartItems, clearCart } = useCart() || { cartItems: [] };
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar /> 
        <div className="text-center mt-20 text-2xl font-bold">
          Your cart is empty.
        </div>
      </>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/ThankYouPayment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      
      <div className="flex-1 flex items-center justify-center px-4 mt-10">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Cart Summary */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">
              Cart Summary
            </h2>
            {cartItems.map((item, i) => (
              <div key={i} className="py-4 border-b border-gray-200 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">${item.price}</span>
                </div>

                {/* Reservation Details */}
                {item.details && (
                  <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-sm text-gray-700 space-y-2">
                    {item.details.name && (
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-600">Name:</span>
                        <span>{item.details.name}</span>
                      </p>
                    )}
                    {item.details.email && (
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-600">Email:</span>
                        <span>{item.details.email}</span>
                      </p>
                    )}
                    {item.details.people && (
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-600">People:</span>
                        <span>{item.details.people}</span>
                      </p>
                    )}
                    {item.details.date && (
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-600">Date:</span>
                        <span>{item.details.date}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between mt-6 text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full mt-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Payment Form */}
          <form
            onSubmit={handlePayment}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              Payment Method
            </h2>

            {/* Payment Options */}
            <div className="flex gap-6 mb-4">
              <label
                className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition ${
                  paymentMethod === "visa"
                    ? "border-sky-500 bg-sky-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  checked={paymentMethod === "visa"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <FaCreditCard className="text-xl text-sky-500" />
                <span className="font-semibold">Visa / MasterCard</span>
              </label>

              <label
                className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition ${
                  paymentMethod === "cash"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <FaMoneyBillWave className="text-xl text-green-500" />
                <span className="font-semibold">Cash on Arrival</span>
              </label>
            </div>

            {/* Card Details */}
            {paymentMethod === "visa" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-400"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-400"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="w-1/2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-400"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    required
                    className="w-1/2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              className={`w-full py-4 rounded-2xl font-bold text-white transition ${
                paymentMethod === "visa"
                  ? "bg-sky-600 hover:bg-sky-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Pay ${total}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
