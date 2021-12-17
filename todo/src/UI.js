import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Todos from "./Todos";
import './UI.css'

const UI = () => {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [emotion, setEmotion] = useState("")
    const createTask = (e) => {
        const task = {
            id: Date.now(),
            description:  input,
            completed: false
        }
        e.preventDefault()
        getMoji()
        setTasks([...tasks, task])
    
    }
    const getMoji = () =>{
        if (tasks.length <= 3){
            setEmotion("😎")
            return emotion
        }
        else if (tasks.length > 3 && tasks.length <= 7){
            setEmotion("😳")
            return emotion
        }
        else if ( tasks.length > 7)
        {
            setEmotion("😨")
            return emotion
        }
        
    }
    const handleCompletion = (task) => {
        task.completed = true
        getMoji()
        setTimeout(() => setTasks(tasks.filter((obj) => obj.id !== task.id)),410 )
        

        
    }
    return (
        
    <>  
        
        <div className="container">
            <header>
            <h1> Todo Application </h1> 
            </header>
            <form onSubmit={createTask}>
                <input onChange = {(e)=>{
                    setInput(e.target.value)
                }
                } 
                className = "form-input" 
                type = "text" 
                value = {input} 
                placeholder = "Enter Task" 
                required
                />
                <button>Add <FontAwesomeIcon icon={faPlus}/></button> 
            </form>
            {tasks.length > 0 && <span className = "stats">{emotion}Active: <span className = "value">{tasks.length}</span> </span>}
            
        </div>
        <Todos tasks = {tasks} handleCompletion = {handleCompletion}/>
    </>
      
    );
}

export default UI;
