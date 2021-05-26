//Hook added to bundle the component data with state
import { useState } from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';

//Contains the root app component under which user defined Components are nested
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Go Fishing"
    },
    {
        id: 2,
        text: "Go Shopping"
    },],)

  //Write JS directly inside JSX using {}
  return (
    <div className='container'> {/*Must contain only one root element*/}
    <Header />
    <Tasks tasks= {tasks}/>
    </div>
  );
}

export default App;
