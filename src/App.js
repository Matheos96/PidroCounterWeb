import React, { useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModeButton from './components/ModeButton';
import ResetButton from './components/ResetButton';
import Team from './components/Team'
import { GameProvider } from './components/GameContext'

const App = () => {

  const weRef = useRef()
  const theyRef = useRef()

  return (
    <GameProvider>
      <div className="appWrapper">

        <h1>Pidro Counter</h1>

        <div className="teamsContainer">
          <Team ref={weRef} name='Vi' />
          <Team ref={theyRef} name='De' />
        </div>
        
        <ModeButton />

        <ResetButton weTeam={weRef} theyTeam={theyRef} />
      </div>
    </GameProvider>
  )
}

export default App;
