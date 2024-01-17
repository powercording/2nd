import { atom, selector } from "recoil";

export type Items = {
  [key: string]: { id: string; quantity: number };
};

export const orderState = atom<Items>({
  key: "orderState",
  default: {},
});
