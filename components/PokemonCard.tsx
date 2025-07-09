"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function PokemonCard({ name }: { name: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    router.push(`/pokemon/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 rounded shadow hover:shadow-lg capitalize text-center font-semibold border-2 border-[#2c70b7] text-[#2c70b7] bg-yellow-100 hover:bg-[#ffcb00] cursor-pointer transition-all"
    >
      {loading ? (
        <div className="flex justify-center items-center h-6">
          <Image
            src="/assets/pokeball.png"
            alt="Loading Pokéball"
            width={30}
            height={30}
            className="animate-spin"
          />
        </div>
      ) : (
        name
      )}
    </div>
  );
}
