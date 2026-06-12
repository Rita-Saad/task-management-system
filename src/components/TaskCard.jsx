function TaskCard({ task, editTask, deleteTask ,
  moveTask ,  handleDrag }) {


  return (
     <div draggable="true"  onDragStart={() => handleDrag(task.id)}>
      {task.title}

      <button onClick={() => editTask(task.id)}>
        Edit
      </button>

      <button onClick={() => deleteTask(task.id)}>
        ❌
      </button>
      <button onClick={() => moveTask(task.id)}> Move</button>
      </div>

  )
}

export default TaskCard