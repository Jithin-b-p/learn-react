export const userRequest = () => {
  return { type: "FETCH_USER_REQUESTED" };
};

export const userSuccess = (data) => {
  return {
    type: "FETCH_USER_SUCCEEDED",
    payload: data,
  };
};

export const userFailed = (error) => {
  return {
    type: "FETCH_USER_FAILED",
    payload: error,
  };
};
