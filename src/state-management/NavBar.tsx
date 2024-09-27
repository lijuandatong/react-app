import { useContext } from "react";
import TaskContext from "./context/TaskContext";
import LoginStatus from "./LoginStatus";

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