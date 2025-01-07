import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
    <div className="m-0 w-full">
      <StrictMode>
        <Header />
        {/*<Navbar />*/}
        {/*<App />*/}
      </StrictMode>
    </div>
  
)
