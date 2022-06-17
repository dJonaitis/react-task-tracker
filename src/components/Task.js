import { BiX } from "react-icons/bi";

export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.important ? 'important' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
            <h3>{task.text} <BiX onClick={() => onDelete(task.id)} style={{color:'red', cursor:'pointer'}} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task