import "./App.css"
import Homepage from "./module3/Labs_module3/Homepage"
import Contact from "./module3/Labs_module3/Contact"
import About from "./module3/Labs_module3/About"
import { Route, Link, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App
