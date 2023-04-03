import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonImg from './PokemonImg';
import './PokemonSelect.css'
import { Toast, ToastContainer } from 'react-bootstrap';

export interface IPokemon {
  name:string,
  url:string
}

interface IProps {
    team:IPokemon[],
    setTeam:React.Dispatch<React.SetStateAction<IPokemon[]>>
  }

const PokemonSelect = (props:IProps) => {
 
const [pokemon, setPokemon]= useState<string>('');
const [pokePic, setPokePic] = useState<IPokemon>({name:'', url:''});

const [show, setShow] = useState(false);

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

 const addPokemon = () => {
    if(pokemon !== '') {
        props.setTeam([...props.team, {name: pokePic.name.toUpperCase(), url: pokePic.url}])
        setShow(true)
    }
 }

 return (
   <>
   <div className="pokemon-select">

    <PokemonImg value={pokemon} setPokePic={setPokePic} pokePic={pokePic}/>

    <select onChange={(e) => setPokemon(e.currentTarget.value)}>
        <option value="" disabled selected>SELECT A POKEMON</option>
        {getSelectPokemon()}
    </select>

    <button className='mt-2' onClick={addPokemon}>Aggiungi alla squadra</button>

    <ToastContainer className="p-3" position={"top-end"}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s"
              className="rounded me-2"
              style={{width: '20px', height: '20px'}}
            />
            <strong className="me-auto">Pokemon Team Generator</strong>
          </Toast.Header>
          <Toast.Body>{pokePic.name.toUpperCase()} AGGIUNTO AL TEAM</Toast.Body>
        </Toast>
    </ToastContainer>
   </div>
   </>
 )


}

export default PokemonSelect




