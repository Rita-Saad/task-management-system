function Dashboard() {
  return (
    <div className="dashboard">
      <div className="column pending">
        <h3>Pending</h3>
      </div>

      <div className="column progress">
        <h3>In Progress</h3>
      </div>

      <div className="column completed">
        <h3>Completed</h3>
      </div>
    </div>
  )
}

export default Dashboard