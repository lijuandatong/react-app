import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import TaskContext from "./context/TaskContext";

const TaskList = () => {
    // const { tasks, dispatch } = useTasks();
    // const { user } = useAuthStore();

    const {user, dispatch: dispathAuth} = useContext(AuthContext)
    const {tasks, dispatch: dispatchTasks} = useContext(TaskContext)
  
    return (
      <>
        <p>User: {user}</p>
        <button
          onClick={() =>
            dispatchTasks({
              type: 'ADD',
              task: {
                id: Date.now(),
                title: 'Task ' + Date.now(),
              },
            })
          }
          className="btn btn-primary my-3"
        >
          Add Task
        </button>
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="flex-grow-1">{task.title}</span>
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                    dispatchTasks({ type: 'DELETE', taskId: task.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default TaskList;