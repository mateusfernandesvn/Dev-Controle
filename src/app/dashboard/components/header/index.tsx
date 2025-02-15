import Link from "next/link";
import { Container } from "@/components/container";

export function DashboardHeader() {
  return (
    <Container>
      <header className="bg-gray-900 flex  w-full my-4 p-3 rounded gap-4 items-center">
        <Link
          href="/dashboard"
          className="text-white hover:font-bold duration-200"
        >
          Chamados
        </Link>

        <Link
          href="/dashboard/customer"
          className="text-white hover:font-bold duration-200"
        >
          Clientes
        </Link>
      </header>
    </Container>
  );
}
