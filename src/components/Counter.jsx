import {increment, decrement} from '../redux/slices/CounterSlice'
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div>{count}</div>
      <br />
      <button onClick={()=> dispatch(increment())}>Increment ++</button>
      <br />
      <br />
      <br />
      <button onClick={()=> dispatch(decrement())}>Decrement --</button>
    </div>
  );
};

export default Counter;
