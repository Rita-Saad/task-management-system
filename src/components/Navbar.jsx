import { Link } from "react-router-dom"
function Navbar() {
  return (
    
    <nav className="navbar">
      
      

      <div className="logo">
        <h1>Task Manager</h1>
      </div>
      <div className="nav-links">
      <Link to="/">Dashboard</Link>

      <Link to="/about">About</Link>

      <Link to="/profile">Profile</Link>
      </div>
      

      
    </nav>
  )
}

export default Navbar