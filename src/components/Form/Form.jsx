import { useState } from "react";

const Form = () => {

    const [task, setTask] = useState('')
    const [priority, setPriority] = useState('')
    const [taskArray, setTaskArray] = useState([])
    console.log(priority);//good
    
    

    const handleSubmit = (e) => {
        console.log('Formulario enviado');
        e.preventDefault();
            if (!task.trim() || !priority) {
            alert("Please enter a task and select a priority");
            return;
            }
        setTaskArray([...taskArray, { task: task, priority: priority }]); // agrega la tarea y su prioridad al array
        setTask(''); 
        // setPriority(''); 
    }

    const handleDelete = (id) => {
        const taskFiltered = taskArray.filter((task, index) => id !== index)
        setTaskArray(taskFiltered)
    }


    return (
        <>

        <form onSubmit={(e) => handleSubmit(e)}> 
            <label>Write the task</label>
                <input
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="e.g. Buy groceries"
                    value={task}
                />
                <label>Priority</label>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    name="priority"
                    value={priority}
                >
                    <option value="">Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                
            <button type="submit">Add</button>
        </form>

       {taskArray.length> 0 && taskArray.map((item, index) => 
       (
        <div key={index}>
            <p>{item.priority}</p>
            <p>{item.task}</p>
            <button onClick={ () => handleDelete(index)}>Delete</button>
        </div>
    ))}
        </>
    )
 }

 export default Form;