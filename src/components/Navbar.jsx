import navbar from "/navbar.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="bg-black text-white font-mono font-semibold max-h-fit ">
      <div className="flex justify-around items-center">
        <div className="">
          <NavLink to="/">
            <img src={navbar} alt="" height={200} width={200} />
          </NavLink>
        </div>
        <div className="flex gap-6  ">
          <NavLink to="/">Home</NavLink>
          <NavLink
            className="flex justify-center items-center gap-1 relative"
            to="/cart"
          >
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-1 -right-2 bg-sky-500 h-5 w-5 rounded-full flex justify-center items-center text-black animate-bounce">
              {cart.length > 0 && cart.length}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
