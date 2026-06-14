import { createContext, useState } from "react"

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const addTask = (title) => {
         const newTask = {
               id: Date.now(),
               title,
               status: "pending"
         }
         setTasks([...tasks, newTask])
    }
     const deleteTask = (id) =>  {
      const updatedTasks = tasks.filter((task) => task.id !== id)
      setTasks(updatedTasks)
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


  
  

    return (
    <TaskContext.Provider value={{tasks,setTasks,addTask,deleteTask,editTask}}>
      {children}
    </TaskContext.Provider>
)
}

export default TaskContext

     
