import BottomSheet from "@/components/bottom-sheet";
import { LogoSmall } from "@/icons/logo";
import Link from "next/link";
import React from "react";
import ItemList from "./Item-list";

export type Itemtype = {
  name: string;
  event: boolean;
  price: number;
  id: string;
};

export default async function Page() {
  const getItems = await fetch("http://localhost:3001/items");
  const items: Itemtype[] = await getItems.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[18px] bg-white px-6 py-[75px] pb-[164px]">
      <nav className="fixed top-0 h-[57px] bg-black w-full flex items-center px-3">
        <Link href="/">
          <LogoSmall />
        </Link>
      </nav>

      <ItemList items={items} />

      <BottomSheet />
    </main>
  );
}
