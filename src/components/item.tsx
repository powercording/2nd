"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { Item } from "@/app/order/page";

type ItemProps = { item: Item } & ComponentPropsWithoutRef<"div">;

export default function Item({ item, ...rest }: ItemProps) {
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
          <Counter />
          <p>{price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
}

// this Counter component seems not to be used other than this file.
// so I didn't create a new file for this.
export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return (
    <div className="flex items-center gap-2 text-[18px]">
      <button
        onClick={() =>
          setCount((count) => {
            if (count === 0) {
              return count;
            }
            return count - 1;
          })
        }
      >
        -
      </button>

      <span className="flex w-7 justify-center">{count}</span>

      <button onClick={increment}>+</button>
    </div>
  );
}
