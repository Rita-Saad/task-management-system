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
const addTask = () => {
  if (newTask.trim() === "") return

  const newTaskObject = {
    id: Date.now(),
    title: newTask
  }

  setTasks([...tasks, newTaskObject])

  setNewTask("")
}
const editTask = (id) => {
  const newTitle = prompt("Enter new task title")
  

  if (!newTitle) return

  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        title: newTitle
      }
    }

    return task
  })

  setTasks(updatedTasks)
}
const deleteTask = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id)
  setTasks(updatedTasks)
}
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
    

<button onClick={addTask}>Add Task</button>

      <div className="dashboard">
        <div className="column pending">
          <h3>Pending</h3>

  {tasks.map((task) => (
  <div key={task.id}>
    {task.title}
<button
  onClick={() => 
    
    editTask(task.id)
  }
>
  Edit
</button>
 
    <button onClick={() => deleteTask(task.id)}>
      ❌
    </button>
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