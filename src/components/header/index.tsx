import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full flex items-center px-2 py-4 h-20 bg-white shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="capitalize text-black font-bold text-2xl pl-1 hover:tracking-widest ease-in-out duration-200">
            <span className="text-blue-500">Dev </span>
            Controle
          </h1>
        </Link>

        <div className="flex gap-4 items-baseline">
          <Link href="/dashboard">
            <FiUser size={24} color="#000" />
          </Link>

          <button>
            <FiLogOut size={24} color="#000" />
          </button>
        </div>
      </div>
    </header>
  );
}
