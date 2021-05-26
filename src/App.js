//Hook added to bundle the component data with state
import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from './components/Tasks';

//Contains the root app component under which user defined Components are nested
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go Fishing",
      day: "5th July 2021",
      reminder: true
    },
    {
      id: 2,
      text: "Go Shopping",
      day: "5th July 2021",
      reminder: false
    },])

  //AddTask
  const addTask = (task) => { 
    const id = Math.floor(Math.random()*10000) +1
    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task

  //Usually redux or contextAPI is used to manage the state from within the component, here we create functions in app.js
  const deleteTask = (id) => {
    //To set the onCLick behaviour of FaTimes icon, Works it's way up here to call function, State gets passed down actions get passed up
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder: !task.reminder
      } : task))
    // ... operator copies rest of the object completely aprt from the on explicitly mentioned  
  }

  //Write JS directly inside JSX using {}
  return (
    <div className='container'> {/*Must contain only one root element*/}
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No Tasks Today :D')
      }
    </div>
  );
}

export default App;
