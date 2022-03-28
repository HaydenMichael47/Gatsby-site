import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { pokemon } }) => (
  <div style={{ width: '10%', margin: '4rem auto' }}>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>Stats</h2>
    <h3>HP      {pokemon.stats[0].base_stat}</h3>
    <h3>Attack      {pokemon.stats[1].base_stat}</h3>
    <h3>Defense      {pokemon.stats[2].base_stat}</h3>
    <h3>SP. Atk      {pokemon.stats[3].base_stat}</h3>
    <h3>SP. Def      {pokemon.stats[4].base_stat}</h3>
    <h3>Speed      {pokemon.stats[5].base_stat}</h3>
    
    <Link to="/pokemon">Back to all Pokémon</Link>
  </div>
);