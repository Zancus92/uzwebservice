import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <body className="w-screen flex">
    <div className="">
      <StrictMode>
        <Header />
        {/*<Navbar />*/}
        {/*<App />*/}
      </StrictMode>
    </div>
    
  </body>
  
)
