"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-lg">
      <p>주문에 실패하였습니다</p>
      <p>다시 시도해주세요</p>
    </main>
  );
}
