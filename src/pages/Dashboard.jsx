import { useState } from "react"

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Build Project",
    },
  ])

  const [newTask, setNewTask] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <div className="dashboard">
        <div className="column pending">
          <h3>Pending</h3>

          {tasks.map((task) => (
            <div key={task.id}>
              {task.title}
            </div>
          ))}
        </div>

        <div className="column progress">
          <h3>In Progress</h3>
        </div>

        <div className="column completed">
          <h3>Completed</h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard