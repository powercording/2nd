"use client";
import { RecoilRoot } from "recoil";

type RootProps = {
  children: React.ReactNode;
};

export default function RecoilProvider({ children }: RootProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
