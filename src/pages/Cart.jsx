// import CartSlice from "../redux/slices/CartSlice"; This is not the way to use your slice over here.
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="flex justify-around  mt-8">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} itemIndex={index} item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-between max-h-[200px]">
            <div className="text-xl font-semibold font-mono">
              <p>Your cart</p>
              <p>Summary</p>
            </div>
            <div className="text-[15px] font-semibold">
              <p>
                Total Items : <span>{cart.length}</span>
              </p>
              <p>Total Amount : ${totalAmount}</p>
              <button
                className="font-semibold  my-4 font-mono text-xl py-2 border-2 border-white hover:border-sky-500 
              rounded-lg px-8 bg-sky-500 text-white hover:text-sky-500 hover:bg-white"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          <h1 className="font-semibold text-sky-500 text-2xl">Add Goodies</h1>
          <NavLink
            to="/"
            className=" my-4 font-mono text-xl py-2 border-2 border-white hover:border-sky-500 
            rounded-lg px-8 bg-sky-500 text-white hover:text-sky-500 hover:bg-white"
          >
            Home
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
