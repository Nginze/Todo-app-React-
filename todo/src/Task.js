import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './UI.css'
const Task = ({task, handleCompletion}) => {
    const [fall, setfall] = useState("")
    const onComplete = () => {
        setfall("fall")
        handleCompletion(task)
        console.log(task)
    }
   
    return (
        
        <div className={`task-container ${fall}`}>
            <p>{task.description}</p>
            <button onClick={ onComplete}>  <FontAwesomeIcon icon={faCheck}/> </button>
        </div>
    );
}

export default Task;
 