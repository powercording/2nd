import Logo from "@/icons/logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black gap-10">
      <Logo />
      <button>
        <Link
          href="/order"
          className="w-[172px] h-[88px] bg-white text-black font-normal text-[25px] flex justify-center items-center rounded-[20px]"
        >
          주문하러 가기
        </Link>
      </button>
    </main>
  );
}
