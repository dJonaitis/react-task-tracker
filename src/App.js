import './App.css';
import { useState } from 'react';

import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import NewTask from './components/NewTask.js'



function App() {

  const [showTaskAdd, setShowTaskAdd] = useState(false);

  const [tasks, setTasks] = useState(
    [
        {
            id : 1,
            text : 'Learn React',
            day : 'June 17th at 14:00',
            important: true,
        },
        {
            id : 2,
            text : 'Start Grade 12',
            day : 'September 1st at 8:30',
            important: false,
        },
        {
            id : 3,
            text : 'Concert with love',
            day : 'June 22nd at 20:00',
            important: false,
        },
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleImportant = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, important: !task.important} : task))
  }

  const newTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    //note to self, be careful. Theoretically, could result with identical IDs 0.01% chance.
    
    const createdTask = { id, ...task };
    setTasks([...tasks, createdTask]);
  }
 


  return (
    <div className="App">
      <div className="container">
        <Header onAdd={()=> setShowTaskAdd(!showTaskAdd)} showTaskAdd={showTaskAdd} className="header" title="Task Tracker"/>
        {showTaskAdd && <NewTask onAdd={newTask}/>}
        {tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleImportant}/>
          : 'You do not seem to be doing much, consider adding some tasks.'
        }
      </div>
    </div>
  );
}

export default App;
