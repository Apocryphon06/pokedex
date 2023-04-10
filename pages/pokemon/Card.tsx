import Image from "next/image";
import Link from "next/link";
import React from "react";
import Type from "./Type";

function Card() {
  return (
    <Link href="/pokemon/view">
    <div className="hover:translate-y-[-5px] transition-all cursor-pointer">
      <div className="bg-[#f2f2f2] w-[230px] h-[230px] rounded-md flex items-center justify-center">
        <Image src="https://picsum.photos/150" alt="pokemon" />
      </div>
      <p className="text-sm font-semibold text-gray-500">#0001</p>
      <p className="text-lg capitalize font-medium tracking-wider">Bulbasaur</p>
      <div className="flex items-center gap-1">
        <Type type="Grass" color="bg-grass" />
        <Type type="Posion" color="bg-poision text-white" />
      </div>
    </div>
    </Link>
  );
}

export default Card;
