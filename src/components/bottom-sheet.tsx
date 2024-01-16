import React from "react";

export default function BottomSheet() {
  return (
    <div className="fixed bottom-0 w-full rounded-t-[20px] border shadow-md px-[22px] py-[24px] flex-col gap-[18px] min-w-[250px] bg-white">
      <div className="text-end">
        <p>총 수량 : </p>
        <p>총 가격 : </p>
      </div>
      <button className="w-full h-12 text-white bg-[#C1C1C1] flex justify-center items-center text-[18px] font-normal">
        주문하기
      </button>
    </div>
  );
}
