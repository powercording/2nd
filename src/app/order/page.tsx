import BottomSheet from "@/components/bottom-sheet";
import Item from "@/components/item";
import { LogoSmall } from "@/icons/logo";
import Link from "next/link";
import React from "react";

export type Item = {
  name: string;
  event: boolean;
  price: number;
  id: number;
};

export default async function Page() {
  const getItems = await fetch("http://localhost:3001/items");
  const items: Item[] = await getItems.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[18px] bg-white px-6 py-[75px] pb-[164px]">
      <nav className="fixed top-0 h-[57px] bg-black w-full flex items-center px-3">
        <Link href="/">
          <LogoSmall />
        </Link>
      </nav>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <BottomSheet />
    </main>
  );
}
