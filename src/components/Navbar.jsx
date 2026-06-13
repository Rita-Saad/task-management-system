import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>

      <p>Organize your daily tasks easily</p>
      <div>
      <Link to="/">Dashboard</Link>

      <Link to="/about">About</Link>

      <Link to="/profile">Profile</Link>
      </div>

    </nav>
  )
}

export default Navbar