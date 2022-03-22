import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const Pokedex = ({ pageContext: { allPokemon } }) => {
  return(
    <Layout pageTitle="Pokedex">
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Pokémon!</h1>
    <ul style={{ padding: 0 }}>
      {allPokemon.map(pokemon => (
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
         
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        
        </li>
      ))}
    </ul>
  </div>
  </Layout>
  )
  
        }
export default Pokedex