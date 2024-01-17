"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { Itemtype } from "@/app/order/page";
import { SetterOrUpdater } from "recoil";
import { Items } from "@/app/atom/atom";

type ItemProps = {
  item: Itemtype;
  isSelected: boolean;
  quantity: number;
  setOrder: SetterOrUpdater<Items>;
} & ComponentPropsWithoutRef<"div">;

export default function Item({
  item,
  isSelected,
  quantity,
  setOrder,
  ...rest
}: ItemProps) {
  const { name, event, price, id } = item;

  return (
    <div
      className="w-full h-20 flex items-center px-3 py-[9px] border border-opacity-30 rounded-[15px] gap-2 whitespace-nowrap min-w-[250px]"
      {...rest}
    >
      {/* 원래 Image 컴포넌트를 사용해야 하지만 비어있으므로 */}
      <div
        id="img"
        className="h-[62px] w-[62px] bg-[#D9D9D9] text-xs font-light"
      >
        img
      </div>
      {/* name and price */}
      <div id="item-info" className="flex flex-col justify-between grow">
        <div className="text-[18px] flex items-center gap-2">
          {name}
          {event ? (
            <span className="bg-[#F75A2F] text-white w-[54px] h-6 inline-flex rounded-[10px] text-xs justify-center items-center">
              이벤트
            </span>
          ) : null}
        </div>
        <div className="flex items-center justify-between w-full">
          <Counter
            count={quantity}
            increment={() => {
              if (quantity === 999) {
                return alert("999 이상으로는 설정할 수 없습니다.");
              }

              setOrder((order) => {
                const newOrder = { ...order };
                newOrder[id] = {
                  id,
                  quantity: quantity + 1,
                };
                return newOrder;
              });
            }}
            decrement={() => {
              if (quantity === 0) {
                return alert("0 이하로는 설정할 수 없습니다.");
              }

              setOrder((order) => {
                const newOrder = { ...order };
                newOrder[id] = {
                  id,
                  quantity: quantity - 1,
                };
                return newOrder;
              });
            }}
          />
          <p>{price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
}

// this Counter component seems not to be used other than this file.
// so I didn't create a new file for this.
type Counter = {
  increment: () => void;
  decrement: () => void;
  count: number;
};

export function Counter({ increment, decrement, count }: Counter) {
  return (
    <div className="flex items-center gap-2 text-[18px]">
      <button onClick={decrement}>-</button>

      <span className="flex w-7 justify-center">{count}</span>

      <button onClick={increment}>+</button>
    </div>
  );
}
