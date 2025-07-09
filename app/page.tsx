import { getAllPokemons } from "@/lib/pokeapi";
import SearchClient from "@/components/SearchClient";
import Image from "next/image";

export default async function HomePage() {
  const pokemons = await getAllPokemons();

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 flex gap-2"><Image src={"/assets/pokemon.png"} width={90} height={50} alt={"Pokemon"} /> Explorer</h1>

      </div>

      <SearchClient pokemons={pokemons} />
    </main>
  );
}
