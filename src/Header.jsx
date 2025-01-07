import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logoIco from '../public/logo.ico';

function Header() {
  const [count, setCount] = useState(0)

  return (
    <container-div className="max-w-sm lg:max-w-screen-lg m-0">
      
      <Router>
      {/* Navbar di navigazione */}
      <nav className="w-full">
        <ul className="w-full py-4 flex space-x-4 bg-gradient-to-tr from-[#32702c] to-[#00ff62]">
          {/*<li>
              <img src={logoIco} className="w-12 ml-3" alt="Vite logo" />
          </li>*/}

          <li className="">
              <p className="sm:text-xl lg:text-5xl font-extrabold ml-3  my-auto">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#11240f] to-[#058837]">UZ</span>
                -Informatica
              </p>
          </li>
          <div className="flex my-auto ml-auto">
            <li className="m-3">
                <Link to="/">
                  <span className="text-black hover:text-white font-extrabold text-[22px]">Home</span>
                </Link>  {/* Link alla Home */}
            </li>

            <li className="m-3">
                <Link to="/about">
                <span className="text-black hover:text-white font-extrabold text-[22px]">About</span>
                </Link>  {/* Link alla pagina About */}
            </li>

            <li className="m-3">
                <Link to="/contact">
                <span className="text-black hover:text-white font-extrabold text-[22px]">Contact</span>
                </Link>  {/* Link alla pagina Contact */}
            </li>
          </div>

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
