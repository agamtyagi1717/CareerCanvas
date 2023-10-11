"use client";

import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="mb-20 bg-black text-white border-b-orange-400 border-b-4">
      <div className="flex justify-between my-0 mx-auto p-2.5 max-w-5xl py-5 items-center">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">
            Career<span className="text-orange-400">Canvas</span>
          </h1>
        </Link>
        {status === "authenticated" ? (
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <h1 className="text-orange-400 font-bold">{session?.user?.name}</h1>
            <Image className=" rounded-full hidden md:block" src={session?.user?.image} width={30} height={30} alt='user'/>
            <button onClick={() => signOut()}>SIGN OUT</button>
          </div>
        ) : (
          <button onClick={() => signIn("google")}>SIGN IN</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
