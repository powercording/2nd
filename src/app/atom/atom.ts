import { atom } from "recoil";

const orderState = atom({
  key: "orderState",
  default: {
    items: [],
    total: 0,
  },
});
