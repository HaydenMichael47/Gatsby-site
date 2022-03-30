import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const Pokedex = ({ pageContext: { allPokemon } }) => {

 
  return(
    
    <Layout pageTitle="Pokedex">
  <div style={{ width: 960, margin: '4rem auto', alignContent: 'left' }}>
    <h1 style={{ fontFamily: "SF Movie Poster", fontSize: "200%", color: "#e8332a" }}>Choose a Pokémon!</h1>
    <ul style={{ padding: 0, marginLeft: 'auto', marginRight: 'auto'  }}>
    
      {allPokemon.map(pokemon => (
        
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
            
          }}
        >
         
         <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p style={{ fontFamily: "SF Movie Poster", fontSize: "150%", color: "#e8332a" }}>{pokemon.name}</p>

            </Link>
         
            
        
        </li>
      ))}
    </ul>
  </div>
  </Layout>
  )
  
        }
export default Pokedex