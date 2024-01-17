import { atom, selector } from "recoil";

export type Items = {
  [key: string]: { id: string; quantity: number; price: number };
};

export const orderState = atom<Items>({
  key: "orderState",
  default: {},
});

export const orderSummary = selector({
  key: "orderSummary",
  get: ({ get }) => {
    const order = get(orderState);

    const summary = Object.values(order).reduce(
      (acc, { quantity, price }) => ({
        totalQuantity: acc.totalQuantity + quantity,
        totalPrice: acc.totalPrice + quantity * price,
      }),
      { totalPrice: 0, totalQuantity: 0 }
    );

    return summary;
  },
});
