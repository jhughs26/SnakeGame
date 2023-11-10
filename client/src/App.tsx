import { useState } from 'react'
import reactLogo from './assets/bigRocket.png'
import snakeLogo from './assets/Snake.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
