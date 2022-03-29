import React from 'react';
import { Link } from 'gatsby';
import '../components/PokeStyle.css'


         
         


export default ({ pageContext: { pokemon } }) => (
  
  
  <div id = "mainDiv">
    <header id = "PokeHeader">
      <h1>{pokemon.name}</h1>
    </header>
      
   
    
    
    <img id = "PokeImg" src={pokemon.sprites.front_default} alt={pokemon.name} />
    
    <table>
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>
        <tr>
          <td>HP:</td>
          <td class="hp"> {pokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
          <td>Attack:</td>
          <td class="attack">{pokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
          <td>Defense:</td>
          <td class="defense">{pokemon.stats[3].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Attack:</td>
          <td class="special-attack">{pokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Defense:</td>
          <td class="special-defense">{pokemon.stats[5].base_stat}</td>
        </tr>
        <tr>
          <td>Speed:</td>
          <td class="speed"></td>
        </tr>
      </table>
    
    
    
    <Link to="/pokemon" id = "link" >Back to all Pokémon</Link>
  </div>
);