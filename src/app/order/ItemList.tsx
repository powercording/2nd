"use client";

import React from "react";
import { Itemtype } from "./page";
import Item from "@/components/item";
import { useRecoilState } from "recoil";
import { orderState } from "../atom/atom";

export default function ItemList({ items }: { items: Itemtype[] }) {
  const [orderData, setOrderData] = useRecoilState(orderState);

  return items?.map((item) => (
    <Item
      key={item.id}
      item={item}
      isSelected={orderData.hasOwnProperty(item.id)}
      quantity={orderData[item.id]?.quantity || 0}
      setOrder={setOrderData}
    />
  ));
}
//this component is located in app/order rather than @/components folder
//because this component is rendering other components than itself so I considered it as a part of page
