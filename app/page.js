'use client'

import HeroSection from "./components/Hero/page";
import { useSession } from "next-auth/react";
import Homepage from "./components/Homepage/page";

export default function Home() {
  const { status } = useSession();
  return (
    <main className="mx-auto max-w-5xl">
      {status === "authenticated" ? <Homepage /> : <HeroSection />}
    </main>
  );
}
