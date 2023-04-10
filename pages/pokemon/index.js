import React from 'react'
import Card from './Card'
import Button from './Button'
import { nanoid } from 'nanoid'

function Pokemon() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="text-[#363636] text-3xl font-medium tracking-widest bg-[#f2f2f2] p-4 w-full text-center">
        Pokedex
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-[50px] ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
          (item) => (
            <Card key={nanoid()} />
          ),
        )}
      </div>

      <br />
      <Button title="Load more Pokemon" />
      <br />
    </div>
  )
}

export default Pokemon
