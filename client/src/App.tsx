import { useState } from 'react'
import reactLogo from './assets/bigRocket.png'
import snakeLogo from './assets/Snake.png'
import { Gameboard } from './presentation/gameboard'
import './App.css'

function App() {
  const [showgame, setShowgame] = useState(false)

  if (showgame) {
    return(<Gameboard />)
  }

  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Big Rocket Gaming</h1>
      <h2>presents</h2>
      <a>
          <img src={snakeLogo} className="snakeLogo" alt="Snake logo" />
        </a>
      <div className="snakeLogo"> 
        <button onClick={() => setShowgame(true)}>
          Start Game
        </button>
      </div>
    </>
  )
}

export default App
