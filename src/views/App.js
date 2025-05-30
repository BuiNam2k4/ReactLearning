import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./Todos/ListTodo";
import MyComponent from "./Example/MyComponent";
import { ToastContainer, toast } from "react-toastify";
import ListUser from "./users/ListUser";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav/Nav";
import Home from "./Example/home";
import DetailUser from "./users/DetailUser";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { Route } from "react-router"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/todo">
              <ListToDo></ListToDo>
            </Route>
            <Route path="/about">
              <MyComponent></MyComponent>
            </Route>
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
          </Switch>
          {/* <ListToDo></ListToDo> */}
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
    </BrowserRouter>
  );
}

export default App;
