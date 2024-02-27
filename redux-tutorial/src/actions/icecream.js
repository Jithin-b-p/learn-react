export const orderIcecream = (quantity) => {
  return {
    type: "ICECREAM_ORDERED",
    payload: quantity,
  };
};

export const restockIcecream = (quantity) => {
  return {
    type: "ICECREAM_RESTOCKED",
    payload: quantity,
  };
};
