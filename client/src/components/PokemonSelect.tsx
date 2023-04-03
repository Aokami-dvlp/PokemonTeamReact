import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonImg from './PokemonImg';
import './PokemonSelect.css'



interface IPokemon {
  name:string,
  url: string
}

const PokemonSelect = () => {
 
const [pokemon, setPokemon]= useState<string>('');
const [pokePic, setPokePic] = useState<string>('');

const [json, setJson] = useState<IPokemon[]>([])
 useEffect(() => {
 axios
 .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
 .then((r) => setJson(r.data.results))
 .catch((err) => console.log(err));

}, [])

 function getSelectPokemon():JSX.Element[] {
   return json.map(pokemon => {
     return <option key={pokemon.name} value={pokemon.url} > {pokemon.name.toUpperCase()}</option>;
   })
 }

 return (
   <>
   <div className="pokemon-select">

    <PokemonImg value={pokemon} setPokePic={setPokePic} pokePic={pokePic}/>

    <select onChange={(e) => setPokemon(e.currentTarget.value)}>
        <option value="" disabled selected>SELECT A POKEMON</option>
        {getSelectPokemon()}
    </select>
    
   </div>
   </>
 )


}

export default PokemonSelect




