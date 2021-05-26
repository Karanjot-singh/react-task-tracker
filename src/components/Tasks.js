

const Tasks = ({tasks}) => {


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
