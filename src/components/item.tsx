"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Itemtype } from "@/app/order/page";
import { SetterOrUpdater } from "recoil";
import { Items } from "@/app/atom/atom";
import INFO_TEXT from "@/constant/info-text";

type ItemProps = {
  item: Itemtype;
  isSelected: boolean;
  quantity: number;
  totalQuantity: number;
  setOrder: SetterOrUpdater<Items>;
} & ComponentPropsWithoutRef<"div">;

export default function Item({
  item,
  isSelected,
  quantity,
  setOrder,
  totalQuantity,
  ...rest
}: ItemProps) {
  const { name, event, price, id } = item;

  return (
    <div
      className={twMerge(
        "w-full h-20 flex items-center px-3 py-[9px] border border-opacity-30 rounded-[15px] gap-2 whitespace-nowrap min-w-[250px]",
        isSelected ? "bg-[#F75A2F1A]" : "bg-white"
      )}
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
            key={id}
            count={quantity}
            increment={() => {
              if (totalQuantity === 999) {
                return alert(INFO_TEXT.MAX_LIMIT);
              }

              setOrder((order) => {
                const newOrder = { ...order };
                newOrder[id] = {
                  id,
                  quantity: quantity + 1,
                  price,
                };
                return newOrder;
              });
            }}
            decrement={() => {
              if (quantity === 0) {
                return alert(INFO_TEXT.MIN_LIMIT);
              }

              if (quantity === 1) {
                setOrder((order) => {
                  const newOrder = { ...order };
                  delete newOrder[id];
                  return newOrder;
                });
                return;
              }

              setOrder((order) => {
                const newOrder = { ...order };
                newOrder[id] = {
                  id,
                  quantity: quantity - 1,
                  price,
                };
                return newOrder;
              });
            }}
            onInputChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;

              // value less than 0 or empty string
              if (value === "" || Number(value) <= 0) {
                return setOrder((order) => {
                  const newOrder = { ...order };
                  delete newOrder[id];
                  return newOrder;
                });
              }

              // total quantity over 999
              if (totalQuantity + Number(value) - quantity > 999) {
                return alert(INFO_TEXT.MAX_LIMIT);
              }

              // set value
              setOrder((order) => {
                const newOrder = { ...order };
                newOrder[id] = {
                  id,
                  quantity: Number(value),
                  price,
                };
                return newOrder;
              });
            }}
          />
          <p>{price * quantity === 0 ? price : price * quantity}원</p>
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
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  count: number;
};

export function Counter({
  increment,
  decrement,
  onInputChange,
  count,
}: Counter) {
  return (
    <div className="flex items-center gap-2 text-[18px]">
      <button onClick={decrement}>-</button>

      <input
        className="w-10 text-center bg-transparent"
        type="number"
        value={(count + "").startsWith("0") ? count : count}
        onChange={onInputChange}
      />

      <button onClick={increment}>+</button>
    </div>
  );
}
