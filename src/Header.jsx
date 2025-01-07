import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logoIco from '../public/logo.ico';

function Header() {
  const [count, setCount] = useState(0)

  return (
    <container-div className="">  
      <header-div className="m-0  ">
        <p className="text-5xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#32702c] to-[#00ff62]">UZ</span>
          -Informatica
        </p>
      </header-div>
      
      <Router>
      {/* Navbar di navigazione */}
      <nav className="px-5">
        <ul className="py-5 flex justify-left m-3 space-x-4 rounded-md   bg-gradient-to-tr from-[#32702c] to-[#00ff62]">
        <li>
            <img src={logoIco} className="w-12 ml-3" alt="Vite logo" />
          </li>

          <li className="m-2 pl-5">
            <Link to="/">
              <span className="text-black">Home</span>
            </Link>  {/* Link alla Home */}
          </li>
          
          <li className="my-2">
            <Link to="/about">About</Link>  {/* Link alla pagina About */}
          </li>
          
          <li className="my-2 pr-5">
            <Link to="/contact">Contact</Link>  {/* Link alla pagina Contact */}
          </li>

          

        </ul>
      </nav>

      {/* Definizione delle rotte */}
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        <Route path="/contact" element={<Contact />} />  {/* Contact Page */}
      </Routes>
    </Router>

    </container-div>
  )
}

export default Header
