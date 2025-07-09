"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: { name: string }[];
};

const PER_PAGE = 20;

export default function SearchClient({ pokemons }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const currentData = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <>
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Search Pokémon..."
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {currentData.map(p => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-3 py-1  hover:bg-[#ffcb00] border-2 border-[#2c70b7] text-[#2c70b7] bg-yellow-100 disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${i + 1 === page
                ? " bg-[#ffcb00] border-2 border-[#2c70b7] text-[#2c70b7] "
                : "bg-yellow-100 border-2 border-[#2c70b7] text-[#2c70b7] hover:bg-[#ffcb00]"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-3 py-1  hover:bg-[#ffcb00] border-2 border-[#2c70b7] text-[#2c70b7] bg-yellow-100 disabled:opacity-50"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
