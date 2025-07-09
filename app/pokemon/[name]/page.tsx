import { getPokemonDetails } from "@/lib/pokeapi";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PokemonDetail } from "@/types/pokemon";

export default async function PokemonDetailPage({ params }: { params: { name: string } }) {
  const { name } = params;
  try {
    const pokemon: PokemonDetail = await getPokemonDetails(name);

    return (
      <main className="max-w-2xl mx-auto px-6 py-8 bg-yellow-100 shadow-md  border-3 border-[#2c70b7] rounded-md mt-6">

        <h1 className="text-4xl font-bold capitalize text-center text-pokemon mb-6 ">{pokemon.name}</h1>

        <div className="flex justify-center mb-6">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-purple-600">Types</h2>
            <ul className="list-disc ml-6 uppercase">
              {pokemon.types.map(({ type }) => (
                <li key={type.name}>{type.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-green-600">Abilities</h2>
            <ul className="list-disc ml-6 uppercase">
              {pokemon.abilities.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h2 className="text-lg font-semibold mb-2 text-red-600">Stats</h2>
            <ul className="list-disc ml-6 uppercase">
              {pokemon.stats.map(({ stat, base_stat }) => (
                <li key={stat.name}>
                  {stat.name}: <span className="font-medium">{base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error loading Pokémon detail:", error);
    notFound();
  }
}
