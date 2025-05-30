import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./Todos/ListTodo";
import MyComponent from "./Example/MyComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple ToDo app with React.js Kurisu</p>

        <ListToDo></ListToDo>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={1900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Bounce}
      />
    </div>
  );
}

export default App;
