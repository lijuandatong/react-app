import { useContext } from "react";
import TaskContext from "./task/TaskContext";
import LoginStatus from "./auth/LoginStatus";

const NavBar = () => {
    const { tasks } = useContext(TaskContext);
    //const counter = 5 //useCounterStore(s => s.counter);
  
    console.log('Render NavBar');
  
    return (
      <nav className="navbar d-flex justify-content-between">
        <span className="badge text-bg-secondary">
          {tasks.length}
        </span>
        <LoginStatus />
      </nav>
    );
  };
  
  export default NavBar;