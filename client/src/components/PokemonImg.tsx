import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import axios from 'axios'

interface IProps {
    value:string,
    setPokePic: Dispatch<React.SetStateAction<string>>,
    pokePic: string
}


const PokemonImg = (props:IProps) => {

    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s";

    useEffect(() => {
      axios
      .get(props.value)
      .then((r) => props.setPokePic(r.data.sprites.front_default))
      .catch((err) => console.log(err));
    
    }, [props.value])


  return (
    <>
        <div>
            <img src={props.pokePic ? props.pokePic : defaultImage} width={'150px'}/>
        </div>
    </>
  )
}

export default PokemonImg