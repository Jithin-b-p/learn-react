import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
function CakeView() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCake} </h2>
      <button onClick={() => dispatch(ordered(1))}>Order cake</button>
      <button onClick={() => dispatch(restocked(2))}>Restock cakes</button>
    </div>
  );
}

export default CakeView;
