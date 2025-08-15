import { useState } from "react";
import './Form.css'

const Form = () => {
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  const [priority, setPriority] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

    //Formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim() || !priority) {
      alert("Please enter a task and select a priority");
      return;
    }
    setTaskArray([...taskArray, { task: task, priority: priority }]);
    setTask("");
    setPriority("");
  };
    
    //Eliminar tarea

  const handleDelete = (id) => {
    const taskFiltered = taskArray.filter((_, index) => id !== index);
    setTaskArray(taskFiltered);
  };
    

  const PriorityFilter = (value) => {
    setPriorityFilter(value);
  };

  const filteredTasks = priorityFilter
    ? taskArray.filter((item) => item.priority === priorityFilter)
    : taskArray;

  return (
  <div className="container">
          <h1 className="app-title">To DO</h1>
        <p>Do it now or you will see 😀🔪</p>
    
    <select
      className="filter-select"
      onChange={(e) => PriorityFilter(e.target.value)}
      name="priorityFilter"
      value={priorityFilter}
    >
      <option value="">Filter by Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <form className="task-form" onSubmit={handleSubmit}>
      <label className="form-label">Write the task</label>
      <input
        className="form-input"
        onChange={(e) => setTask(e.target.value)}
        placeholder="e.g. Buy groceries"
        value={task}
      />

      <label className="form-label">Priority</label>
      <select
        className="priority-select"
        onChange={(e) => setPriority(e.target.value)}
        name="priority"
        value={priority}
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="submit-btn" type="submit">Add Task</button>
    </form>

    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((item, index) => (
          <div className="task-item" key={index}>
            <div className="task-content">
              <p className={`task-priority priority-${item.priority}`}>
                {item.priority}
              </p>
              <p className="task-text">{item.task}</p>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="empty-message">No tasks yet. Add your first task!</p>
      )}
    </div>
  </div>
);
};

export default Form;
