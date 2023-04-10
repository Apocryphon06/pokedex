import React from 'react'
import Type from '../Type'

function PokemonDetail() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[#363636] text-3xl font-medium tracking-widest bg-[#f2f2f2] p-4 w-full text-center">
        Pokedex
      </p>

      <div className="mt-[50px] text-center">
        <p className="lg:text-4xl text-3xl font-light text-[#363636]">
          Ivysaur &nbsp;{' '}
          <span className="lg:text-4xl text-3xl font-light text-gray-400">
            #0002
          </span>
        </p>
      </div>
      <br />
      {/* Image Card & Details */}
      <div className="flex lg:flex-row flex-col justify-center lg:items-start gap-5">
        <div className="bg-[#f2f2f2] lg:w-[429px] lg:h-[429px] md:h-[561px] md:w-[561px] w-[320px] h-[320px] rounded-md flex items-center justify-center">
          <img src="https://picsum.photos/300" alt="pokemon" />
        </div>
        <div className="lg:w-[429px] md:w-[561px] w-[320px]">
          <p className="text-xl">
            Elit esse pariatur sit eu culpa sunt non et.Exercitation proident
            quis minim commodo non dolore commodo qui proident dolor quis
            cupidatat ut.
          </p>

          <p className="text-xl my-5">Versions: </p>

          <div className="bg-[#2fa7d6] rounded-md p-4 grid grid-cols-2 justify-between items-center gap-y-5">
            {['height', 'category', 'weight', 'abilities', 'gender'].map(
              (item) => (
                <div>
                  <p className="text-white text-lg capitalize">{item}</p>
                  <p className="text-lg">3'03"</p>
                </div>
              ),
            )}
          </div>

          <p className="text-xl my-5 text-[#363636]">Type </p>

          <div className="grid grid-cols-3 gap-2">
            <Type type="Grass" color="bg-grass py-2 px-10" isBig />
            <Type
              type="Poison"
              color="bg-poision py-2 px-10 text-white"
              isBig
            />
          </div>

          <p className="text-xl my-5 text-[#363636]">Weakness </p>

          <div className="grid grid-cols-3 gap-2">
            <Type type="Free" color="bg-fire py-2 px-10 text-white" isBig />
            <Type
              type="Psychic"
              color="bg-psychic py-2 px-10 text-white"
              isBig
            />
            <Type type="Flying" color="bg-flying py-2 px-10 text-white" isBig />
            <Type type="Ice" color="bg-ice py-2 px-10" isBig />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
