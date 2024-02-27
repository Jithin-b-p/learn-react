const initialstate = {
  numOfCake: 10,
};

export default function cakeReducer(state = initialstate, action) {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    case "CAKE_RESTOCKED":
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };
    default:
      return state;
  }
}
