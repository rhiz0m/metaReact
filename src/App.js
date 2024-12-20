import "./App.css"
import Homepage from "./module3/Labs_module3/Homepage"
import Calculator from "./module3/Labs_module3/calculator"
import LabOnSounds from "./module3/Labs_module3/LabOnSounds"
import { Route, Link, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/labOnSounds" className="nav-item">
          LabOnSounds
        </Link>
        <Link to="/calculator" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/labOnSounds" element={<LabOnSounds />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
      </Routes>
    </div>
  )
}

export default App
