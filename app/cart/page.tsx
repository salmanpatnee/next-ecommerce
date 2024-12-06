import { CircleX } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="wrapper mb-32">
      <nav className="flex items-center space-x-2 text-gray-400 text-sm lg:py-20 py-10">
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <span>/</span>
        <a href="#" className="hover:text-primary text-gray-600">
          Cart
        </a>
      </nav>
      <section>
        <header className="hidden md:flex lg:flex justify-between items-center shadow-custom-light py-6 px-10 mb-10 rounded text-black text-base">
          <div className="lg:w-4/12 w-full">Product</div>
          <div className="lg:w-4/12 w-full">Price</div>
          <div className="lg:w-4/12 w-full">Quantity</div>
          <div className="lg:w-4/12 w-full">Subtotal</div>
        </header>
        <div className="flex flex-col md:flex-row space-y-5 justify-between items-center shadow-custom-light py-6 px-10 mb-10 text-base text-black">
          <div className="lg:w-4/12 w-full text-black flex items-center gap-5 relative group cursor-pointer">
            <Image
              src="/images/cart-item-1.png"
              alt="cart"
              width={50}
              height={39}
            />
            <span>LCD Monitor</span>
            <CircleX className="absolute -top-3 -left-3  opacity-0 group-hover:opacity-100 group-hover:bg-red-500 group-hover:stroke-white group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 cursor-pointer rounded-full border-2 border-transparent group-hover:border-white" />
          </div>
          <div className="lg:w-4/12 w-full">$650</div>
          <div className="lg:w-4/12 w-full">
            <input
              type="number"
              className="border rounded max-w-16 h-11 pe-2 text-center border-gray-500"
              value={1}
            />
          </div>
          <div className="lg:w-4/12 w-full">$650</div>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 justify-between items-center shadow-custom-light py-6 px-10 mb-6 text-base text-black">
          <div className="lg:w-4/12 w-full text-black flex items-center gap-5 relative group cursor-pointer">
            <Image
              src="/images/cart-item-2.png"
              alt="cart"
              width={50}
              height={39}
            />
            <span>H1 Gamepad</span>
            <CircleX className="absolute -top-3 -left-3  opacity-0 group-hover:opacity-100 group-hover:bg-red-500 group-hover:stroke-white group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 cursor-pointer rounded-full border-2 border-transparent group-hover:border-white" />
          </div>
          <div className="lg:w-4/12 w-full">$650</div>
          <div className="lg:w-4/12 w-full">
            <input
              type="number"
              className="border rounded max-w-16 h-11 pe-2 text-center border-gray-500"
              value={1}
            />
          </div>
          <div className="lg:w-4/12 w-full">$650</div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-between lg:mb-20 mb-10">
          <button className="w-full lg:w-auto border border-black rounded py-4 px-12 hover:bg-black hover:text-white transition-all text-base font-medium">
            Return to Shop
          </button>
          <button className="w-full lg:w-auto border border-black rounded py-4 px-12 hover:bg-black hover:text-white transition-all text-base font-medium">
            Update Cart
          </button>
        </div>
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full">
                <div className="flex flex-col md:flex-row gap-3">
                    <input type="text" className="py-4 px-6 text-base rounded border border-gray-500 lg:w-72 w-full" placeholder="Coupon Code" />
                    <button className="button">Apply Coupon</button>
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:ps-20 mt-10 lg:mt-0">
                <div className="border border-black rounded py-8 px-6">
                    <h4 className="font-medium text-[20px] mb-6">Cart Total</h4>
                    <div className="flex justify-between border-b border-gray-500 pb-4 mb-4">
                        <p className="text-base">Subtotal:</p>
                        <p className="text-base">$1750</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-500 pb-4 mb-4">
                        <p className="text-base">Shipping:</p>
                        <p className="text-base">Free</p>
                    </div>
                    <div className="flex justify-between pb-4 mb-4">
                        <p className="text-base">Total:</p>
                        <p className="text-base">$1750</p>
                    </div>
                    <div className="text-center">
                    <button className="button">Procees to checkout</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
