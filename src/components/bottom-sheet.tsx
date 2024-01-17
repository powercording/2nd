"use client";
import { orderState, orderSummary } from "@/app/atom/atom";
import INFO_TEXT from "@/constant/info-text";
import currencyConverter from "@/lib/converter";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

export default function BottomSheet() {
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, totalQuantity } = useRecoilValue(orderSummary);
  const orderData = useRecoilValue(orderState);
  const isReadyToOrder = totalQuantity > 0 && totalPrice > 0;
  const router = useRouter();

  const handleOrder = async () => {
    if (
      totalPrice === 0 ||
      totalQuantity === 0 ||
      isLoading ||
      !isReadyToOrder
    ) {
      return alert(INFO_TEXT.INVALID_ORDER);
    }

    const order = {
      list: [...Object.values(orderData)],
      totalPrice,
      totalQuantity,
    };
    setIsLoading(() => true);

    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        return router.replace("/complete");
      }
    } catch (error) {
      router.replace("/error");
    }

    return router.replace("/error");
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
