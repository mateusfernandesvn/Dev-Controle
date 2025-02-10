import Image from "next/image";
import heroImg from "@/assets/hero.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-medium mb-2">Gerencie sua empresa</h2>
      <h1 className="text-3xl font-bold text-blue-600 mb-8 md:text-4xl">
        Atendimentos, Clientes
      </h1>
      <Image
        src={heroImg}
        alt="Image hero do dev controle"
        width={600}
        className="max-w-sm md:max-w-md"
        priority={true}
      />
    </main>
  );
}
