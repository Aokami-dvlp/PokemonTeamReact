import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import axios from 'axios'
import { IPokemon } from './PokemonSelect'

interface IProps {
    value:string,
    setPokePic: Dispatch<React.SetStateAction<IPokemon>>,
    pokePic: IPokemon
}

const PokemonImg = (props:IProps) => {

    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s";

    useEffect(() => {
      if(props.value){
      axios
      .get(props.value)
      .then((r) => props.setPokePic({name: r.data.name, 
                                      url:r.data.sprites.front_default}))
      .catch((err) => console.log(err));
      }
    }, [props.value])


  return (
    <>
        <div>
            <img src={props.pokePic.url ? props.pokePic.url : defaultImage} width={'150px'}/>
        </div>
    </>
  )
}

export default PokemonImg