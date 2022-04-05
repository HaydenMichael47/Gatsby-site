import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Search from '../components/Search'
import useState from 'react';


const Pokedex = ({ pageContext: { allPokemon } }) => {
  const [search, setSearch] = useState.useState('')
  const handleSearchChange = event => setSearch(event.target.value)
  const byName = name => pokemon =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
 
  return(
    
    
    <Layout pageTitle="Pokedex">
      <div >
  <div style={{ width: 960, margin: '4rem auto', alignContent: 'left' }}>
    <h1 style={{ fontFamily: "SF Movie Poster", fontSize: "200%", color: "#e8332a" }}>Choose a Pokémon!</h1>

    
    <Search id = "searchBar" value={search}
           onChange={handleSearchChange}/>

    <ul style={{ padding: 0, marginLeft: 'auto', marginRight: 'auto'  }}>
    
      {allPokemon.filter(byName(search)).map(pokemon => (
        
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block',
            //background: "#00000080",
           // padding: 25
            
          }}
        >
         
         <Link style={{textDecoration: "none"}} to={`/pokemon/${pokemon.name}`}>
            <img id = "smallImg" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p style={{ fontFamily: "SF Movie Poster", fontSize: "150%", color: "#e8332a" }}>{pokemon.name}</p>

            </Link>
         
            
        
        </li>
      ))}
    </ul>
  </div>
  </div>
  </Layout>
  )
  
        }
export default Pokedex