"use client";

import Link from "next/link";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { data, status } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }
  return (
    <header className="w-full flex items-center px-2 py-4 h-20 bg-white shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="capitalize text-black font-bold text-2xl pl-1 hover:tracking-widest ease-in-out duration-200">
            <span className="text-blue-500">SOS </span>
            Tech
          </h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex gap-4 items-center">
            <div>
              <img
                src={data?.user?.image as string}
                alt="Foto do usuário"
                className="w-8 h-8 rounded-full"
              />
            </div>

            <Link href="/dashboard">
              <FiUser size={24} color="#000" />
            </Link>

            <button onClick={handleLogout}>
              <FiLogOut size={24} color="#000" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
