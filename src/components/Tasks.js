import React from 'react'
//Hook added to bundle the component data with state
import { useState } from 'react'
const Tasks = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: "Go Fishing"
    }, {
        id: 2,
        text: "Go Shopping"
    },], () => { })

    return (
        <>
        {/* tasks.push() is restricted as state is immutable */}
        {/* setTasks([...tasks,{}]) */}
        {/* Note: These tasks are needed by other components hence Use Context API or Redux to  gather state  */}
            {tasks.map((task) => (
                <h3 key={task.id}>
                    {task.text}
                </h3>))}
        </>
    )
}

export default Tasks
