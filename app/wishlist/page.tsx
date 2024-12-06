import React from "react";
import cart from "@/data/cart.json";
import CartItem from "../components/CartItem";
import Title from "../components/Title";

const WishlistPage = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 mb-14">
        <h3 className="text-xl mb-5 lg:mb-0">Wishlist (3)</h3>
        <button className="border border-black rounded py-4 px-12 hover:bg-black hover:text-white transition-all text-base font-medium">
          Move All to Bad
        </button>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {cart.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      </section>

      <section className="lg:mb-36 mb-20">
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 mb-14">
          <Title subtitle="Just For You" title="" />
          <button className="border border-black rounded py-4 px-12 hover:bg-black hover:text-white transition-all text-base font-medium">
            Sell All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;
