import SelectPage from "./pages/SelectPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTeam from "./pages/ViewTeam"
import { useEffect, useState } from "react"
import { IPokemon } from "./components/PokemonSelect"

function App() {
  const [team, setTeam] = useState<IPokemon[]>([])

  useEffect(() => {
    console.log(team)
  }, [team])

  return (
    <div >
      <SelectPage team={team} setTeam={setTeam}/>
    </div>
  )
}

export default App
