import { useState , useEffect } from "react"
import TaskCard from "../components/TaskCard"
import useTasks from "../hooks/useTasks"
import useSearch from "../hooks/useSearch"
function Dashboard() {
  const {
  tasks,
  setTasks,
  addTask,
  deleteTask,
  editTask,
  moveTask} = useTasks()

 
  const [newTask, setNewTask] = useState("")
  const {search,setSearch} = useSearch()
  
  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  )
  }, [tasks])

  const handleAddTask = () => {
    if (newTask.trim() === "") 
      return
    addTask(newTask)
    setNewTask("")
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
    <div>
       <div className="controls">

        <input type="text"  placeholder="Enter a task..." value={newTask}onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={handleAddTask}>Add Task</button>
        <input type="text" placeholder="Search task..." value={search} onChange={(e) => setSearch(e.target.value)}/>
       </div>
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

        <div className="column progress"   onDragOver={(e) => e.preventDefault()} 
         onDrop={() => dropTask("progress")}  >
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
