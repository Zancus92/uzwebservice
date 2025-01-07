import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logoIco from '/logo.ico'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9dff9d] to-[#3131ff]">
          Testo di prova
      </p>
      
      <div>
          <img src={logoIco} className="logo" alt="Vite logo" />
      </div>*
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>

    
  )
}

export default App
