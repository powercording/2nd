"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckIcon from "@/icons/check";
import { orderState } from "../atom/atom";
import { useSetRecoilState } from "recoil";

export default function CompletePage() {
  const router = useRouter();
  const setOrderState = useSetRecoilState(orderState);

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.replace("/");
    }, 3000);

    return () => {
      clearTimeout(redirect);
      setOrderState(() => ({}));
    };
  }, [router, setOrderState]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white">
      <CheckIcon />
      <p className="text-lg">주문이 완료되었습니다.</p>
    </main>
  );
}
