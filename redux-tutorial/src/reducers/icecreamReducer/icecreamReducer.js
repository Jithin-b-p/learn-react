import { produce } from "immer";

const initialState = {
  numOfIcecream: 20,
};

export default function icecreamReducer(state = initialState, action) {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };
    case "ICECREAM_RESTOCKED":
      // return {
      //   ...state,
      //   numOfIcecream: state.numOfIcecream + action.payload,
      // };

      // actually useful for any deep nested states(immer)
      return produce(state, (draft) => {
        draft.numOfIcecream = action.payload;
      });

    default:
      return state;
  }
}
