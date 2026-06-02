
function TaskCard({ task, editTask, deleteTask }) {
  return (
    <div>
      {task.title}

      <button onClick={() => editTask(task.id)}>
        Edit
      </button>

      <button onClick={() => deleteTask(task.id)}>
        ❌
      </button>
    </div>
  )
}

export default TaskCard