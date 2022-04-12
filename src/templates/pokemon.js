import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import '../components/PokeStyle.css'
import Pie from '../components/Pie';
import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'
import * as d3 from "d3";


const PokeInfo = ({ pageContext: { pokemon } }) => {
  const [hover, setHover] = useState(false)
  

  const PokeTypes = []
  var typeString1 = "Type: "

  for (let i = 0; i<pokemon.types.length;i++)
  {
    PokeTypes.push(pokemon.types[i].type.name)
    typeString1 += pokemon.types[i].type.name + "  "
  }

  const dispatch = useDispatch()
  const pieDataValues = d3.range(6).map((item, index) => ({
    label: '' + pokemon.stats[index].stat.name + ': ' + pokemon.stats[index].base_stat ,
    value: pokemon.stats[index].base_stat
  }));
  const pieDataUpdateActionFunction = pieDataUpdateAction

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

           
         
    <>
      
      <Pie
        data= {pieDataValues}
        width={400}
        height={400}
        innerRadius={100}
        outerRadius={200}
        cornerRadius={15}
      />
    </>
        
    
    
    
    
    </div>
    <Link to="/pokemon" id = "link" >Return to all Pokémon</Link>
    <footer id = "PokeFooter">Made by Hayden Michael using POKEAPI</footer>
  </div>
)
}
export default PokeInfo