import React from 'react'
import Likepoke from './likepoke'

function Favpoke({fav}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        
        {fav.map((data, idx ) =>
        <div key={idx}>
            <h3>{data.name}</h3>
            <img src={data?.sprites?.other?.home?.front_default} alt={data.name} />
           
            <Likepoke />
        </div>
        )}     
    </div>
  )
}

export default Favpoke
