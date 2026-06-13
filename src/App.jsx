import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Profile from "./pages/Profile"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    
    <div>
      <Navbar />

      
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
