import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {numOfIcecream} </h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecreams</button>
    </div>
  );
}

export default IcecreamView;
