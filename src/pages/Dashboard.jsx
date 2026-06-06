import { useState , useEffect } from "react"
import TaskCard from "../components/TaskCard"



function Dashboard() {




  const [tasks, setTasks] = useState(() => {
  const savedTasks =
    localStorage.getItem("tasks")

  return savedTasks
    ? JSON.parse(savedTasks)
    : []
})
 
  const [newTask, setNewTask] = useState("")
  const [search, setSearch] = useState("")
  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  )
}, [tasks])

const addTask = () => {
  if (newTask.trim() === "") return

  const newTaskObject = {
    id: Date.now(),
    title: newTask,
    status: "pending"
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
const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
)
const pendingTasks = filteredTasks.filter(
  (task) => task.status === "pending"
)

const progressTasks = filteredTasks.filter(
  (task) => task.status === "progress"
)

const completedTasks = filteredTasks.filter(
  (task) => task.status === "completed"
)

const moveTask = (id) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {

      if (task.status === "pending") {
        return {
          ...task,
          status: "progress"
        }
      }

      if (task.status === "progress") {
        return {
          ...task,
          status: "completed"
        }
      }

      if (task.status === "completed") {
        return {
          ...task,
          status: "pending"
        }
      }
    }

    return task
  })

  setTasks(updatedTasks)
}
const [draggedTaskId, setDraggedTaskId] = useState(null)
const handleDrag = (id) => {
  setDraggedTaskId(id)
}

const dropTask = (newStatus) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === draggedTaskId) {
      return {
        ...task,
        status: newStatus
      }
    }

    return task
  })

  setTasks(updatedTasks)
}
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

    

<button onClick={addTask}>Add Task</button>
<input
  type="text"
  placeholder="Search task..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <div className="dashboard">
        <div className="column pending"   onDragOver={(e) => e.preventDefault()}
  onDrop={() => dropTask("pending")}>
 
          <h3>Pending</h3>

 {pendingTasks.map((task) => (
  <TaskCard
    key={task.id}
    task={task}
    editTask={editTask}
    deleteTask={deleteTask}
    moveTask={moveTask}
    handleDrag={handleDrag}
  />
))}
  
  
        </div>

        <div className="column progress"   onDragOver={(e) => e.preventDefault()}  onDrop={() => dropTask("progress")}  >
          <h3>In Progress</h3>
          {progressTasks.map((task) => (
  <TaskCard
    key={task.id}
    task={task}
    editTask={editTask}
    deleteTask={deleteTask}
    moveTask={moveTask}
    handleDrag={handleDrag}
  />
))}
        </div>

        <div className="column completed"   onDragOver={(e) => e.preventDefault()}
  onDrop={() => dropTask("completed")} >
          <h3>Completed</h3>

{completedTasks.map((task) => (
  <TaskCard
    key={task.id}
    task={task}
    editTask={editTask}
    deleteTask={deleteTask}
    moveTask={moveTask}
    handleDrag={handleDrag}
  />
))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard