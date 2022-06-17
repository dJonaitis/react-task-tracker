import { useState } from 'react';

export const NewTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [important, setImportant] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Do not leave task empty.");
            return
        }

        onAdd({ text, day, important})
    }

    return (
        <form className="newTask-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add day and time" value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Important?</label>
                <input type="checkbox" checked={important} value={important} onChange={(e)=>setImportant(e.currentTarget.checked)}/>
            </div>

            <input className="btn btn-block" type="submit" value='Save Task'/>
        </form>
    )
}

export default NewTask