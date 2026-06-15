import { useState, useEffect } from "react"

function Users() {
    const [error, setError] =useState("")
    const [loading, setLoading] =useState(true)
    const [users, setUsers] = useState([])
   useEffect(() => {

  const getUsers = async () => {

  try {

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

    const data =
      await response.json()

    setUsers(data)

  } catch (error) {

    setError("Failed to load users")

  }

  setLoading(false)
}})

if (error) {
  return <h2>{error}</h2>
}
if (loading) {
  return <h2>Loading...</h2>
}
  return (
    <div>
      Users Page
      {users.map((user) => (
  <div key={user.id}>
    {user.name}
  </div>
))}
    </div>
  )
}

export default Users