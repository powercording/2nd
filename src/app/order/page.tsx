import { LogoSmall } from "@/icons/logo";
import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white">
      <nav className="fixed top-0 h-[57px] bg-black w-full flex items-center px-3">
        <LogoSmall />
      </nav>
      order
      <div className="fixed bottom-0 w-full rounded-t-[20px] border shadow-md px-[22px] py-[24px] flex-col gap-[18px]">
        <div className="text-end">
          <p>총 수량 : </p>
          <p>총 가격 : </p>
        </div>
        <button className="w-full h-12 text-white bg-[#C1C1C1] flex justify-center items-center text-[18px] font-normal">
          주문하기
        </button>
      </div>
    </main>
  );
}
