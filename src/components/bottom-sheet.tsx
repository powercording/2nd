"use client";
import { orderSummary } from "@/app/atom/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";

export default function BottomSheet() {
  const { totalPrice, totalQuantity } = useRecoilValue(orderSummary);
  const isReadyToOrder = totalQuantity > 0 && totalPrice > 0;

  const handleOrder = () => {
    
  }

  return (
    <div className="fixed bottom-0 w-full rounded-t-[20px] border shadow-md px-[22px] py-[24px] flex-col gap-[18px] min-w-[250px] bg-white">
      <div className="text-end">
        <p>총 수량 : {totalQuantity}</p>
        <p>총 가격 : {totalPrice}</p>
      </div>
      <button
        disabled={!isReadyToOrder}
        className={twMerge(
          "w-full h-12 text-white  flex justify-center items-center text-[18px] font-normal",
          isReadyToOrder ? "bg-black" : "bg-[#C1C1C1]"
        )}
        onClick={handleOrder}
      >
        주문하기
      </button>
    </div>
  );
}
