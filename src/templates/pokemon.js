import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import '../components/PokeStyle.css'


        


const PokeInfo = ({ pageContext: { pokemon } }) => {
  const [hover, setHover] = useState(false)
  

  const PokeTypes = []
  var typeString1 = ""

  for (let i = 0; i<pokemon.types.length;i++)
  {
    PokeTypes.push(pokemon.types[i].type.name)
    typeString1 += pokemon.types[i].type.name + "  "
  }

  

return (
  
  
  <div id = "mainDiv">
    <header id = "PokeHeader">
      <h1>{pokemon.name}</h1>
      
    </header>
      
    
    <div id = "secondDiv">
    <img id = "PokeImg"  onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} src= {pokemon.sprites.front_default} alt={pokemon.name} />
    <h2 id = "weightHeight">Height: {pokemon.height/10} m</h2>
    <h2 id = "weightHeight">Weight: {pokemon.weight/10} kg</h2> 
    
       
    <h2 id = "weightHeight">{typeString1.toString()}</h2>

           
         
            
        
      

    <table>
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>
        <tr>
          <td>HP</td>
          <td class="hp"> {pokemon.stats[0].base_stat}</td>
        </tr>
        <tr>
          <td>Attack</td>
          <td class="attack">{pokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td class="defense">{pokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Attack</td>
          <td class="special-attack">{pokemon.stats[3].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Defense</td>
          <td class="special-defense">{pokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td class="speed">{pokemon.stats[5].base_stat}</td>
        </tr>
      </table>
    
    
    
    <Link to="/pokemon" id = "link" >Return to all Pokémon</Link>
    </div>
    <footer id = "PokeFooter">Made by Hayden Michael using POKEAPI</footer>
  </div>
)
}
export default PokeInfo