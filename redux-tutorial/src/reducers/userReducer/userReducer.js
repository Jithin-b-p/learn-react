const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_REQUESTED":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USER_SUCCEEDED":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILED":
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
