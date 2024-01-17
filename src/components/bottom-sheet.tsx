"use client";
import { orderState, orderSummary } from "@/app/atom/atom";
import currencyConverter from "@/lib/converter";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";

export default function BottomSheet() {
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, totalQuantity } = useRecoilValue(orderSummary);
  const orderData = useRecoilValue(orderState);
  const isReadyToOrder = totalQuantity > 0 && totalPrice > 0;

  const handleOrder = () => {
    const order = { ...Object.values(orderData), totalPrice, totalQuantity };
    setIsLoading(() => true);

    // try {
    //   fetch("http://localhost:3001/order", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(order),
    //   });
    // } catch (error) {

    // }
    setTimeout(() => {
      setIsLoading(() => false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-0 w-full rounded-t-[20px] border shadow-custom px-[22px] py-[24px] flex-col gap-[18px] min-w-[250px] bg-white">
      <div className="text-end">
        <p>총 수량 : {totalQuantity} 개</p>
        <p>총 가격 : {currencyConverter.format(totalPrice)} 원</p>
      </div>
      <button
        disabled={!isReadyToOrder || isLoading}
        className={twMerge(
          "w-full h-12 text-white  flex justify-center items-center text-[18px] font-normal",
          isReadyToOrder && !isLoading ? "bg-black" : "bg-[#C1C1C1]"
        )}
        onClick={handleOrder}
      >
        {isLoading ? "로딩중..." : "주문하기"}
      </button>
    </div>
  );
}
