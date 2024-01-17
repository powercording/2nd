"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckIcon from "@/icons/check";

export default function CompletePage() {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.replace("/");
  //   }, 3000);
  // }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white">
      <CheckIcon />
      <p className="text-lg">주문이 완료되었습니다.</p>
    </main>
  );
}
