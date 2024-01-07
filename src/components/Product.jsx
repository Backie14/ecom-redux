import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(post));
    toast.success("Added to Cart");
  };
  const removeHandler = () => {
    dispatch(remove(post.id));
    toast.error("Removed from Cart");
  };
  return (
    <div
      className="flex flex-col items-center justify-between hover:scale-110 transition duration-700 ease-in-out
     gap-3 p-4 mt-10 ml-5 rounded-xl border-2 max-h-[570px] hover:shadow-md hover:shadow-gray-500"
    >
      <div className="text-gray-700 font-semibold text-lg mt-1 text-center">
        <p>{post.title.split(" ").slice(0, 9).join(" ") + "..."}</p>
      </div>
      <div>
        <NavLink>
          <img src={post.image} className="" height={120} width={120} />
        </NavLink>
      </div>
      <div>
        <div>
          <p className="text-[12px] font-semibold text-gray-900">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>
        <div className="flex justify-between mt-8 ">
          <p className="font-mono font-semibold text-green-500">
            ${post.price}
          </p>
          {cart.some((p) => p.id == post.id) ? (
            <button
              className="px-3 p-1 border-gray-700 text-[12px] font-bold border-2 transition duration-300 rounded-xl hover:text-white hover:bg-gray-700 text-gray-700"
              onClick={removeHandler}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="px-3 p-1 border-gray-700 text-[12px] font-bold border-2 transition duration-300 rounded-xl hover:text-white hover:bg-gray-700 text-gray-700"
              onClick={addHandler}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
