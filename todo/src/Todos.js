
import Task from "./Task"

const Todos = ({tasks, handleCompletion}) => {
    
    return (
        <div className = "todos-container">
            {!tasks.length && <p> 👋You have no tasks. Add a task and Be more productive</p>}
            <ul> 
                {tasks.map((task)=>{

                        return  <Task key = {task.id} task = {task} handleCompletion = {handleCompletion}/>
                    })}
            </ul>
        </div>
    );
}

export default Todos;
