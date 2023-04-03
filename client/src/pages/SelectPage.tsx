import React, { useEffect, useState } from 'react'
import PokemonSelect from '../components/PokemonSelect'
import './SelectPage.css'
import { IPokemon } from '../components/PokemonSelect'
import { Toast, ToastContainer } from 'react-bootstrap'

interface IProps {
  team:IPokemon[],
  setTeam:React.Dispatch<React.SetStateAction<IPokemon[]>>
}

const SelectPage = (props:IProps) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if(props.team.length === 6) {
      setShow(true)
    }
  
  }, [props.team])
  
  

  return (
    <>
    <div className='select-card'>
        <PokemonSelect team={props.team} setTeam={props.setTeam}/>

      <ToastContainer className="p-3" position={"top-center"}>
        <Toast onClose={() => setShow(false)} show={show} bg={'danger'} delay={3000} autohide>
          <Toast.Header>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s"
              className="rounded me-2"
              style={{width: '20px', height: '20px'}}
            />
            <strong className="me-auto">Pokemon Team Generator</strong>
          </Toast.Header>
          <Toast.Body className='text-white fw-bold'>SQUADRA AL COMPLETO!</Toast.Body>
        </Toast>
    </ToastContainer>
    </div>
    </>
  )
}

export default SelectPage