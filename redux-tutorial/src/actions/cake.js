export const orderCake = (quantity) => {
  return { type: "CAKE_ORDERED", payload: quantity };
};

export const restockCake = (quantity) => {
  return {
    type: "CAKE_RESTOCKED",
    payload: quantity,
  };
};
