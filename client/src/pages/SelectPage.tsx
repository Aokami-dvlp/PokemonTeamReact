import React from 'react'
import PokemonSelect from '../components/PokemonSelect'
import './SelectPage.css'
import { IPokemon } from '../components/PokemonSelect'

interface IProps {
  team:IPokemon[],
  setTeam:React.Dispatch<React.SetStateAction<IPokemon[]>>
}

const SelectPage = (props:IProps) => {
  return (
    <>
    <div className='select-card'>
        <PokemonSelect team={props.team} setTeam={props.setTeam}/>

        
    </div>
    </>
  )
}

export default SelectPage