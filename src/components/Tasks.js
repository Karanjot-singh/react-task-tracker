import Task from "./Task"

const Tasks = ({ tasks, onDelete,onToggle }) => {
    return (
        <>
            {/* tasks.push() is restricted as state is immutable */}
            {/* setTasks([...tasks,{}]) */}
            {/* Note: These tasks are needed by other components hence Use Context API or Redux to  gather state  */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
