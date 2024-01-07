import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(remove(item.id));
  };
  return (
    <div>
      <div className="flex p-6 max-w-[550px]">
        <div>
          <img src={item.image} alt="" height={140} width={140} />
        </div>
        <div className="flex flex-col justify-between">
          <div className=" my-4 mx-2">
            <h1 className="text-gray-700  font-semibold text-lg mt-1">
              {item.title.split(" ").slice(0, 9).join(" ") + "..."}
            </h1>
            <h1 className="text-[15px] font-semibold text-gray-900">
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </h1>
          </div>
          <div className="flex justify-between mx-6  items-center  font-semibold font-mono">
            <p className="text-green-500">${item.price}</p>
            <div>
              <MdDelete className="text-xl text-red-500" onClick={removeHandler} />
            </div>
          </div>
        </div>
      </div>
          <div className=" h-[2px] w-full bg-gray-700 opacity-50 "></div>    
    </div>
  );
};

export default CartItem;
